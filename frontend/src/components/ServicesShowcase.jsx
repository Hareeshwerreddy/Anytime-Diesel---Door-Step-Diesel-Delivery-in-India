import React, { useState } from 'react';
import { companyData } from '../data/companyData';
import { Building2, Hospital, HardHat, Factory, Truck, Tractor, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesShowcase() {
  const [selectedService, setSelectedService] = useState(companyData.services[0].id);

  const iconMap = {
    commercial: Building2,
    hospitals: Hospital,
    construction: HardHat,
    industrial: Factory,
    logistics: Truck,
    agriculture: Tractor
  };

  const current = companyData.services.find((s) => s.id === selectedService) || companyData.services[0];
  const CurrentIcon = iconMap[current.id] || Building2;

  return (
    <section id="services" className="py-24 bg-[#070B14] dark:bg-[#070B14] light:bg-gray-50 border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-atd-yellow text-xs uppercase font-extrabold tracking-widest block mb-2">
            Tailored Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-gray-900 tracking-tight">
            Redefining Diesel Delivery: <br />
            <span className="text-gradient-gold">Cleaner, Safer, Smarter.</span>
          </h2>
          <p className="text-gray-400 light:text-gray-600 mt-4 text-base">
            Engineered to serve high-demand commercial, industrial, healthcare, and infrastructure applications.
          </p>
        </div>

        {/* Services Layout: Left Nav List + Right Detailed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Tabs (Left) */}
          <div className="lg:col-span-5 space-y-3">
            {companyData.services.map((svc) => {
              const Icon = iconMap[svc.id] || Building2;
              const isSelected = selectedService === svc.id;

              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white/10 dark:bg-white/10 light:bg-white border-atd-yellow shadow-lg shadow-atd-yellow/10 scale-[1.02]'
                      : 'bg-white/5 dark:bg-white/5 light:bg-gray-100 border-white/5 light:border-gray-200 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-atd-yellow text-black'
                          : 'bg-black/40 text-gray-400 group-hover:text-atd-yellow'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase font-bold text-atd-yellow tracking-wider block">
                        {svc.category}
                      </span>
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? 'text-white light:text-black' : 'text-gray-300 light:text-gray-700'
                        }`}
                      >
                        {svc.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-atd-yellow translate-x-1' : 'text-gray-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Preview Card (Right) */}
          <div className="lg:col-span-7 bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 light:border-gray-200 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-atd-yellow/10 border border-atd-yellow/30 flex items-center justify-center text-atd-yellow mb-6">
              <CurrentIcon className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase font-extrabold text-atd-yellow tracking-widest block mb-2">
              {current.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-gray-900 mb-4">
              {current.title}
            </h3>
            <p className="text-gray-300 light:text-gray-600 leading-relaxed text-base mb-8">
              {current.description}
            </p>

            <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Key Operational Benefits:
              </h4>
              {current.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-atd-yellow shrink-0" />
                  <span className="text-sm text-gray-200 light:text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-atd-yellow hover:bg-atd-amber text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                Schedule Fuel Supply
              </a>
              <a
                href="tel:+919494455555"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-white/10"
              >
                Speak to Fuel Specialist
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
