import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, RotateCcw, Copy, Check, ThumbsUp, ThumbsDown } from 'lucide-react';
import { findAnswer } from './chatKnowledge';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 Welcome to **Anytime Diesel**. How can I assist you today with doorstep diesel delivery, fuel cubes, or pricing?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [feedback, setFeedback] = useState({});
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "How do I order fuel?",
    "What are your diesel prices?",
    "Is delivery PESO compliant?",
    "What is the ATD Fuel Cube?",
    "Which cities do you serve?",
    "How to become a franchise partner?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleNewChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Hello! 👋 Welcome to **Anytime Diesel**. How can I assist you today with doorstep diesel delivery, fuel cubes, or pricing?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleCopy = (text, id) => {
    const cleanText = text.replace(/\*\*(.*?)\*\*/g, '$1');
    navigator.clipboard.writeText(cleanText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (id, type) => {
    setFeedback((prev) => ({ ...prev, [id]: type }));
  };

  const handleSend = async (textToSend = input) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    let botReplyText = null;

    // 1. Try Cloud LLM Backend
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          botReplyText = data.reply;
        }
      }
    } catch (err) {
      // Offline or network error fallback
    }

    // 2. Fallback to Local Verified Knowledge Base Engine
    if (!botReplyText) {
      botReplyText = findAnswer(text);
    }

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 400);
  };

  const renderFormattedText = (txt) => {
    if (!txt) return null;
    const parts = txt.split('\n');
    return parts.map((line, idx) => {
      const boldFormatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <p
          key={idx}
          className="mb-1.5 last:mb-0"
          dangerouslySetInnerHTML={{ __html: boldFormatted }}
        />
      );
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-24 sm:right-6 z-50">
      {/* Floating Action Button (FAB) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Anytime Diesel Chat Assistant"
          className="relative group p-4 rounded-full bg-[#FCD30A] hover:bg-[#F59E0B] text-black shadow-2xl shadow-yellow-500/30 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border-2 border-white/20"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EE3427] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#EE3427]"></span>
          </span>
          <MessageSquare className="w-6 h-6 fill-black" />
        </button>
      )}

      {/* Expandable Chat Window - Fully Responsive for Mobile & Desktop */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:relative w-full sm:w-[420px] h-[100dvh] sm:h-[550px] max-h-none sm:max-h-[82vh] bg-white dark:bg-[#0B0F19] border-0 sm:border border-gray-300 dark:border-white/15 rounded-none sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn backdrop-blur-2xl transition-colors duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-[#111827] dark:to-[#0B0F19] p-4 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#FCD30A] flex items-center justify-center text-black font-black text-base shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0B0F19]"></span>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  Anytime Diesel AI <Sparkles className="w-4 h-4 text-[#EE3427] dark:text-[#FCD30A]" />
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">24/7 Grounded Fuel Intelligence</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* New Chat Button */}
              <button
                onClick={handleNewChat}
                title="Start New Chat"
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#EE3427] dark:hover:text-[#FCD30A] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <a
                href="tel:+919494455555"
                title="Call 24/7 Hotline"
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#EE3427] dark:hover:text-[#FCD30A] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm bg-gray-50/50 dark:bg-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-[#EE3427]/10 dark:bg-[#FCD30A]/20 border border-[#EE3427]/30 dark:border-[#FCD30A]/40 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[82%] rounded-2xl p-3.5 shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#EE3427] text-white font-medium rounded-br-none'
                      : 'bg-white dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10 rounded-bl-none'
                  }`}
                >
                  <div className="leading-relaxed text-[13.5px]">{renderFormattedText(msg.text)}</div>
                  
                  {/* Footer & Action Utilities for Bot Messages */}
                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-black/5 dark:border-white/5 text-[10px]">
                    {msg.sender === 'bot' ? (
                      <div className="flex items-center gap-2">
                        {/* Copy Button */}
                        <button
                          onClick={() => handleCopy(msg.text, msg.id)}
                          className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors"
                          title="Copy text"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-emerald-500 font-medium">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>

                        <span className="text-gray-300 dark:text-gray-700">|</span>

                        {/* Thumbs Up */}
                        <button
                          onClick={() => handleFeedback(msg.id, 'up')}
                          className={`p-1 rounded hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors ${
                            feedback[msg.id] === 'up' ? 'text-[#EE3427] dark:text-[#FCD30A]' : 'text-gray-400'
                          }`}
                          title="Helpful"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                        </button>

                        {/* Thumbs Down */}
                        <button
                          onClick={() => handleFeedback(msg.id, 'down')}
                          className={`p-1 rounded hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors ${
                            feedback[msg.id] === 'down' ? 'text-[#EE3427] dark:text-[#FCD30A]' : 'text-gray-400'
                          }`}
                          title="Not helpful"
                        >
                          <ThumbsDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <span></span>
                    )}

                    <span className={`${msg.sender === 'user' ? 'text-white/75 ml-auto' : 'text-gray-400'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/20 flex items-center justify-center text-gray-800 dark:text-white shrink-0 mt-1 font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-8 h-8 rounded-full bg-[#EE3427]/10 dark:bg-[#FCD30A]/20 border border-[#EE3427]/30 dark:border-[#FCD30A]/40 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-2xl rounded-bl-none p-3.5 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#EE3427] dark:bg-[#FCD30A] animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-[#EE3427] dark:bg-[#FCD30A] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#EE3427] dark:bg-[#FCD30A] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompt Pills */}
          <div className="px-3 py-2 bg-gray-100 dark:bg-black/40 border-t border-gray-200 dark:border-white/5 overflow-x-auto scrollbar-none flex gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="shrink-0 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 hover:bg-[#FCD30A] hover:text-black text-gray-700 dark:text-gray-300 text-xs font-semibold border border-gray-200 dark:border-white/10 transition-colors shadow-sm"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3.5 bg-white dark:bg-[#111827] border-t border-gray-200 dark:border-white/10 pb-safe">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask anything about Anytime Diesel..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#EE3427] dark:focus:border-[#FCD30A] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="p-2.5 rounded-full bg-[#FCD30A] hover:bg-[#F59E0B] disabled:opacity-40 disabled:hover:bg-[#FCD30A] text-black font-bold transition-all shrink-0 shadow-sm"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}