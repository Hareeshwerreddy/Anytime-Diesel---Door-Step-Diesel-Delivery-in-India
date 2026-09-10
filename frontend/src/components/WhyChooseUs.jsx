import React from 'react';
import { companyData } from '../data/companyData';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#04000B] relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FCD30A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 text-[#EE3427] dark:text-[#FCD30A] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> 7 Value Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Your Trusted Fuel Management Partner
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg">
            Built from the ground up to solve fuel pilferage, quality compromise, transit dead mileage, and uncalibrated dispensing.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`bg-gray-50/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group hover:border-[#EE3427] dark:hover:border-[#FCD30A] shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1 ${
                index === 6 ? 'md:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:justify-between' : ''
              }`}
            >
              {/* Top Accent Icon & Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 flex items-center justify-center p-3 group-hover:border-[#EE3427] dark:group-hover:border-[#FCD30A] transition-colors shadow-sm">
                  <img
                    src={pillar.lightImg}
                    alt={pillar.title}
                    className="w-10 h-10 object-contain filter group-hover:scale-105 transition-transform"
                  />
                </div>
                <span className="text-xs font-black text-gray-400 dark:text-gray-500 group-hover:text-[#EE3427] dark:group-hover:text-[#FCD30A] transition-colors">
                  0{pillar.id}
                </span>
              </div>

              {/* Title & Description */}
              <div className={index === 6 ? 'lg:max-w-2xl' : ''}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-[#EE3427] dark:group-hover:text-[#FCD30A] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </div>

              {index === 6 && (
                <div className="mt-6 lg:mt-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FCD30A] hover:bg-[#F59E0B] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Explore B2B Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
