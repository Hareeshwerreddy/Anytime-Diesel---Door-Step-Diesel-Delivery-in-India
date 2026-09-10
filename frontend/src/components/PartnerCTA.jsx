import React from 'react';
import { Handshake, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

export default function PartnerCTA() {
  return (
    <section id="partner" className="py-20 bg-[#070B14] dark:bg-[#070B14] light:bg-gray-50 relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#111827] via-[#0B0F19] to-black border border-white/10 p-8 sm:p-14 shadow-2xl">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-atd-yellow/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-atd-yellow/10 border border-atd-yellow/30 text-atd-yellow text-xs font-bold uppercase tracking-wider">
                <Handshake className="w-3.5 h-3.5" /> Franchise & Strategic Alliances
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Partner With Anytime Diesel
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Looking to collaborate, start a high-growth automated diesel franchise, or integrate doorstep refueling directly into your enterprise ERP? Let’s build India's premier sustainable energy supply chain together.
              </p>

              <div className="flex flex-wrap gap-6 pt-2 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-atd-yellow" /> High ROI Franchise Model
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-atd-yellow" /> Turnkey PESO Bowser Fleet Support
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto lg:w-full text-center px-8 py-4 rounded-full bg-atd-yellow hover:bg-atd-amber text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-atd-yellow/20 hover:scale-105"
              >
                Become a Franchisee
              </a>
              <a
                href="tel:+919494455555"
                className="w-full sm:w-auto lg:w-full text-center px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-white/10"
              >
                Corporate Tie-Ups
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
