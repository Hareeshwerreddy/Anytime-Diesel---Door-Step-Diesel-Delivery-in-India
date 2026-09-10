import knowledgeData from '../../data/companyKnowledge.json';

export const companyKnowledgeBase = knowledgeData.faqList;
export const companyInfo = knowledgeData.company;

/**
 * Fast client-side fuzzy Q&A matching engine
 * Matches user query against keywords and structured knowledge base
 */
export function findAnswer(query) {
  const clean = query.toLowerCase().trim();
  if (!clean) return null;

  let bestMatch = null;
  let highestScore = 0;

  for (const item of companyKnowledgeBase) {
    let score = 0;
    for (const kw of item.keywords) {
      if (clean.includes(kw.toLowerCase())) {
        score += kw.length;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // If a confident match is found, return the verified answer
  if (bestMatch && highestScore >= 3) {
    return bestMatch.answer;
  }

  // Graceful fallback directing to official company channels
  return `Thank you for asking! For custom bulk fuel quotes, urgent emergency dispatch, or specific technical inquiries, please connect directly with our 24/7 hotline at **${companyInfo.phone}** or email **${companyInfo.email}**.`;
}
