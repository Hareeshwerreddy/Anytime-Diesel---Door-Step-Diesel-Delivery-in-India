import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenerativeAI } from '@google/generative-ai';
import OpenAI from 'openai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from multiple potential locations
const envPaths = [
  path.join(__dirname, '.env'),
  path.join(__dirname, '..', '.env'),
  path.join(process.cwd(), '.env'),
  path.join(process.cwd(), 'backend', '.env')
];

for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath, override: true });
    console.log(`[INFO] Loaded environment configuration from: ${envPath}`);
  }
}

// Clean and validate keys (strip accidental quotes/whitespace)
function getCleanKey(val) {
  if (!val) return '';
  const trimmed = val.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Load Company Knowledge Base
let companyKnowledge = {};
const possibleKnowledgePaths = [
  path.join(__dirname, 'data', 'companyKnowledge.json'),
  path.join(__dirname, '..', 'frontend', 'src', 'data', 'companyKnowledge.json'),
  path.join(process.cwd(), 'frontend', 'src', 'data', 'companyKnowledge.json'),
  path.join(__dirname, 'companyKnowledge.json')
];

for (const p of possibleKnowledgePaths) {
  if (fs.existsSync(p)) {
    try {
      companyKnowledge = JSON.parse(fs.readFileSync(p, 'utf-8'));
      console.log(`[INFO] Loaded company knowledge base from: ${p}`);
      break;
    } catch (e) {
      console.error(`[WARN] Failed to parse knowledge from ${p}:`, e.message);
    }
  }
}

// System Prompt for LLM Grounding
function buildSystemPrompt() {
  const company = companyKnowledge.company || {};
  const faqs = companyKnowledge.faqList || [];
  const services = companyKnowledge.serviceAreas || [];
  const products = companyKnowledge.productLines || [];

  return `
You are the official AI Assistant for ${company.name || 'Anytime Diesel'}.
Your task is to provide polite, highly accurate, and helpful answers to visitors about doorstep diesel delivery, fuel storage solutions, pricing, and company services.

=== VERIFIED COMPANY KNOWLEDGE BASE ===
Company Name: ${company.name || 'Anytime Diesel'} (${company.shortName || 'ATD'})
Tagline: ${company.tagline || 'Doorstep Diesel Delivery Anytime, Anywhere!'}
Founder & CEO: ${company.founderAndCEO || 'Rahul Reddy Kovvuri'}
Experience: ${company.experience || '40+ years in the oil and energy sector'}
Scale: ${company.scale || '1,000+ clients pan-India, crores of litres delivered annually, 14 lakh litres in 1 month record'}
Oil Marketing Partners: ${(company.oilPartners || []).join(', ')}
24/7 Hotline: ${company.phone || '+91 94944 55555'}
Official Email: ${company.email || 'info@anytimediesel.com'}
Website: ${company.website || 'https://www.anytimediesel.com'}
Corporate Address: ${company.address || 'Madhapur, Hyderabad, Telangana'}
Operating Hours: ${company.operatingHours || '24 Hours a Day, 7 Days a Week (24×7)'}

Active Service Areas:
${services.map((s) => `• ${s}`).join('\n')}

Products & Infrastructure:
${products.map((p) => `• ${p.name}: ${p.description}`).join('\n')}

Frequently Asked Questions & Verified Answers:
${faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}

=== STRICT INSTRUCTIONS & GUARDRAILS ===
1. Answer using ONLY the facts present in the verified knowledge base above.
2. If the user asks a question whose answer is NOT present in the company knowledge, DO NOT invent information. Politely state that you do not have that specific detail and invite them to contact our 24/7 hotline at ${company.phone || '+91 94944 55555'} or email ${company.email || 'info@anytimediesel.com'}.
3. Maintain a professional, welcoming, and concise tone.
4. Format key highlights using clean Markdown (bold text, bullet points).
`;
}

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const geminiKey = getCleanKey(process.env.GEMINI_API_KEY);
  const openaiKey = getCleanKey(process.env.OPENAI_API_KEY);

  res.json({
    status: 'online',
    service: 'Anytime Diesel AI Backend',
    llmProviders: {
      gemini: geminiKey ? `configured (${geminiKey.substring(0, 6)}...${geminiKey.substring(geminiKey.length - 4)})` : 'missing_key',
      openai: openaiKey ? `configured (${openaiKey.substring(0, 6)}...${openaiKey.substring(openaiKey.length - 4)})` : 'missing_key'
    },
    knowledgeLoaded: Boolean(companyKnowledge.company)
  });
});

// Candidate Gemini model names
const GEMINI_MODELS = ['gemini-3.1-flash-lite', 'gemini-3.7-flash', 'gemini-flash-latest'];

// Format history to guarantee Gemini role sequence (must start with 'user' and alternate)
function sanitizeGeminiHistory(rawHistory) {
  if (!Array.isArray(rawHistory)) return [];

  const formatted = [];
  for (const item of rawHistory) {
    if (!item.text || !item.text.trim()) continue;
    const role = item.sender === 'user' ? 'user' : 'model';

    // Drop initial bot greetings until the first user message
    if (formatted.length === 0 && role === 'model') {
      continue;
    }

    // Prevent consecutive messages with the same role
    if (formatted.length > 0 && formatted[formatted.length - 1].role === role) {
      continue;
    }

    formatted.push({
      role: role,
      parts: [{ text: item.text }]
    });
  }

  // Ensure last item before current query was a model response, or trim trailing user message
  if (formatted.length > 0 && formatted[formatted.length - 1].role === 'user') {
    formatted.pop();
  }

  return formatted.slice(-6);
}

// Format history for OpenAI
function sanitizeOpenAIHistory(rawHistory) {
  if (!Array.isArray(rawHistory)) return [];

  const formatted = [];
  for (const item of rawHistory) {
    if (!item.text || !item.text.trim()) continue;
    const role = item.sender === 'user' ? 'user' : 'assistant';
    formatted.push({ role, content: item.text });
  }

  return formatted.slice(-6);
}

// Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, history = [] } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required.' });
  }

  const systemInstruction = buildSystemPrompt();
  const geminiKey = getCleanKey(process.env.GEMINI_API_KEY);
  const openaiKey = getCleanKey(process.env.OPENAI_API_KEY);

  // 1. Try Google Gemini
  if (geminiKey) {
    const genAI = new GoogleGenerativeAI(geminiKey);
    const geminiHistory = sanitizeGeminiHistory(history);

    for (const modelName of GEMINI_MODELS) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: systemInstruction
        });

        let reply = null;

        if (geminiHistory.length > 0) {
          try {
            const chat = model.startChat({ history: geminiHistory });
            const result = await chat.sendMessage(message);
            reply = result.response.text();
          } catch (chatErr) {
            console.warn(`[WARN] startChat error with ${modelName}, trying generateContent:`, chatErr.message);
          }
        }

        // Direct single-turn fallback with full context if chat fails or history is empty
        if (!reply) {
          const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: message }] }]
          });
          reply = result.response.text();
        }

        if (reply) {
          return res.json({ reply, provider: 'gemini', model: modelName });
        }
      } catch (geminiError) {
        console.warn(`[WARN] Gemini model ${modelName} failed:`, geminiError.message);
      }
    }
  }

  // 2. Try OpenAI if Gemini fails or is not available
  if (openaiKey) {
    try {
      const openai = new OpenAI({ apiKey: openaiKey });
      const openAiHistory = sanitizeOpenAIHistory(history);

      const messages = [
        { role: 'system', content: systemInstruction },
        ...openAiHistory,
        { role: 'user', content: message }
      ];

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.2
      });

      const reply = completion.choices[0]?.message?.content;
      if (reply) {
        return res.json({ reply, provider: 'openai' });
      }
    } catch (openaiError) {
      console.warn('[WARN] OpenAI API failed:', openaiError.message);
    }
  }

  // 3. Fallback: If no LLM keys are configured or calls fail, instruct client to use local fallback
  return res.status(200).json({
    reply: null,
    useLocalFallback: true,
    message: 'No active LLM API response received. Falling back to local verified knowledge engine.'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[READY] Anytime Diesel Chat Backend running on port ${PORT}`);
});
