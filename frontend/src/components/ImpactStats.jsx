import React from 'react';
import { companyData } from '../data/companyData';
import { Award, Fuel, Users, Clock } from 'lucide-react';

export default function ImpactStats() {
  const icons = [Fuel, Users, Award, Clock];

  return (
    <section className="py-20 bg-[#04000B] dark:bg-[#04000B] light:bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-atd-yellow text-xs uppercase font-extrabold tracking-widest block mb-2">
            Our Journey in Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
            Every Litre Delivered Tells a Story of Trust & Performance
          </h2>
          <p className="text-gray-400 light:text-gray-600 mt-4 text-base">
            Powering critical infrastructure, emergency hospitals, and industrial giants across India with zero downtime.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="bg-white/5 dark:bg-white/5 light:bg-gray-50 border border-white/10 light:border-gray-200 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden text-center group hover:border-atd-yellow/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-atd-yellow/10 border border-atd-yellow/30 mx-auto flex items-center justify-center text-atd-yellow mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white light:text-gray-900 mb-2 group-hover:text-atd-yellow transition-colors tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-200 light:text-gray-800 uppercase tracking-wide">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-400 light:text-gray-500 mt-1.5">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
