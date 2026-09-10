import React, { useState } from 'react';
import { Smartphone, Truck, ShieldCheck, TreePine, Database, Cpu, ArrowRight } from 'lucide-react';

export default function MultiShowcase() {
  const [activeTab, setActiveTab] = useState('how-it-works');

  const tabs = [
    { id: 'how-it-works', label: 'How It Works', icon: Truck },
    { id: 'fuel-cube', label: 'ATD Smart Fuel Cube', icon: Database },
    { id: 'sustainability', label: 'Fuel For Trees', icon: TreePine },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50/70 dark:bg-[#070B14] border-t border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FCD30A]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EE3427]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#EE3427] dark:text-[#FCD30A] text-xs uppercase font-extrabold tracking-widest block mb-2">
            Seamless Energy Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            How Anytime Diesel Powers Your Business
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base sm:text-lg">
            From single-click app ordering to on-site IoT automated storage and carbon offset initiatives, we make fuel management hassle-free.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 shadow-sm backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#FCD30A] text-black shadow-md scale-105'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: How It Works */}
        {activeTab === 'how-it-works' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-[#EE3427] dark:hover:border-[#FCD30A] shadow-lg dark:shadow-none transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] mb-6 text-xl font-black">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Place Your Order</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Open the Anytime Diesel Mobile App, web portal, or call our 24/7 hotline. Specify your required quantity, delivery location, and scheduled time slot.
              </p>
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#EE3427] dark:text-[#FCD30A]" />
                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">Instant App or Phone Order</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-[#EE3427] dark:hover:border-[#FCD30A] shadow-lg dark:shadow-none transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] mb-6 text-xl font-black">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Smart Bowser Dispatch</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Our GPS-tracked, PESO-compliant refuelers are routed directly to your premises. Track driver ETA and real-time live map telemetry.
              </p>
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#EE3427] dark:text-[#FCD30A]" />
                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">Live GPS Bowser Tracking</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-[#EE3427] dark:hover:border-[#FCD30A] shadow-lg dark:shadow-none transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] mb-6 text-xl font-black">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Safe & Metered Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Our trained crew dispenses pure diesel through precision flow meters directly into your generators or equipment with digital receipts generated on the spot.
              </p>
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#EE3427] dark:text-[#FCD30A]" />
                <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">Calibrated Digital Invoicing</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: ATD Smart Fuel Cube */}
        {activeTab === 'fuel-cube' && (
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-xl dark:shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 text-[#EE3427] dark:text-[#FCD30A] text-xs font-bold uppercase">
                  <Cpu className="w-3.5 h-3.5" /> Next-Gen Fuel Infrastructure
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  ATD Smart Fuel Cube & Storage Tanks
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transform your site with on-premise, fully automated, PESO-compliant diesel storage cubes. Equipped with ultrasonic telemetry, anti-theft RFID dispensers, and automatic auto-refill triggers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#EE3427] dark:bg-[#FCD30A] mt-2"></div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">Auto-Refill Alert</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Triggers delivery when fuel drops below 20%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#EE3427] dark:bg-[#FCD30A] mt-2"></div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">Zero Spillage Shield</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Double-walled bunded steel design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#EE3427] dark:bg-[#FCD30A] mt-2"></div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">RFID Authorization</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Restricts dispensing to verified personnel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#EE3427] dark:bg-[#FCD30A] mt-2"></div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">Live Dashboard</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Real-time level monitoring via mobile app</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FCD30A] hover:bg-[#F59E0B] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>Request Fuel Cube Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="relative rounded-2xl overflow-hidden bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 p-4 shadow-xl">
                  <img
                    src="/assets/img/cubeImages/cube-2.png"
                    alt="ATD Fuel Storage Cube"
                    className="w-full max-h-80 object-contain hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl p-3 border border-gray-200 dark:border-white/10 text-center shadow-sm">
                    <span className="text-xs font-semibold text-gray-900 dark:text-[#FCD30A]">Capacities Available: 500L to 10,000L Modular Units</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Fuel For Trees */}
        {activeTab === 'sustainability' && (
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-xl dark:shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase">
                  <TreePine className="w-3.5 h-3.5" /> Green Energy Initiative
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  Fuel For Trees: Greening Every Litre
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We believe in sustainable energy transition. For every 1,000 litres of diesel delivered, Anytime Diesel plants a geo-tagged native tree sapling on behalf of your company, helping offset industrial carbon footprints.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20">
                    <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 block">50,000+</span>
                    <span className="text-xs text-gray-600 dark:text-gray-300 mt-1 block">Trees Planted to Date</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20">
                    <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 block">100%</span>
                    <span className="text-xs text-gray-600 dark:text-gray-300 mt-1 block">Verified Geo-Tagged Trees</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-black/40 border border-emerald-200 dark:border-emerald-500/20 p-4 relative shadow-xl">
                  <img
                    src="/assets/img/about/3s.png"
                    alt="Fuel For Trees Sustainability"
                    className="w-full max-h-80 object-contain"
                  />
                  <div className="mt-3 text-center">
                    <span className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">Join the Sustainable Fuel Movement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
