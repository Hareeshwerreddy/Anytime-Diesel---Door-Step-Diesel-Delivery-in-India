import React, { useState } from 'react';
import { companyData } from '../data/companyData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? companyData.testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === companyData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const item = companyData.testimonials[current];

  return (
    <section className="py-24 bg-[#04000B] dark:bg-[#04000B] light:bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Rating Highlight */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 light:border-gray-200">
          <div>
            <span className="text-atd-yellow text-xs uppercase font-extrabold tracking-widest block mb-2">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
              Trusted by 5000+ Enterprises Across India
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4 bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/10 light:border-gray-200 rounded-2xl px-6 py-3.5 backdrop-blur-md">
            <span className="text-3xl font-black text-white light:text-gray-900">
              {companyData.rating.score}
            </span>
            <div>
              <div className="flex items-center gap-1 text-atd-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-atd-yellow text-atd-yellow" />
                ))}
              </div>
              <span className="text-[11px] text-gray-400 font-medium block mt-0.5">
                {companyData.rating.clientCount}
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyData.testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/10 light:border-gray-200 rounded-3xl p-8 backdrop-blur-xl relative flex flex-col justify-between group hover:border-atd-yellow/50 transition-all duration-300 hover:-translate-y-1 ${
                idx === 0 ? 'md:border-atd-yellow/30' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-atd-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-atd-yellow text-atd-yellow" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-atd-yellow/20" />
                </div>

                <p className="text-gray-300 light:text-gray-700 text-sm sm:text-base leading-relaxed italic mb-8">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 border-t border-white/10 light:border-gray-200">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-atd-yellow/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white light:text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400 light:text-gray-500">
                    {t.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
