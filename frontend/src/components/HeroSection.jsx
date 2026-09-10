import React from 'react';
import { companyData } from '../data/companyData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-blue-100/25 dark:from-black dark:via-[#070707] dark:to-black transition-colors duration-300">
      
      {/* Background Flow Curves Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="hidden dark:block absolute inset-0 opacity-40 mix-blend-screen bg-cover bg-center" style={{ backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%)` }}></div>
        <div className="dark:hidden absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/40 via-cyan-50/30 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="dark:hidden absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-100/60 to-transparent rounded-full blur-2xl -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 3D Truck & Mascot & App Store Pill */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start justify-center">
            
            {/* 3D Visual Asset (Truck + Mascot + Phone) */}
            <div className="w-full max-w-xl relative flex justify-center lg:justify-start">
              <img
                src="/assets/img/thumb/4sss.png"
                alt="Anytime Diesel 3D Delivery Mascot & Bowser Truck"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* App Store Download Badges Pill Box */}
            <div className="mt-4 sm:mt-6 bg-white/95 dark:bg-[#121620]/90 border border-gray-200 dark:border-white/10 rounded-2xl p-3 shadow-xl shadow-black/5 dark:shadow-black/40 backdrop-blur-md inline-flex flex-col sm:flex-row items-center gap-3">
              
              {/* App Store Button */}
              <a
                href={companyData.appLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white dark:bg-black/60 hover:bg-gray-50 dark:hover:bg-black border border-gray-200 dark:border-white/5 flex items-center gap-3 transition-all duration-200 shadow-sm hover:scale-[1.02] group"
              >
                <img
                  src="/assets/img/icon/AppStore.png"
                  alt="Apple App Store"
                  className="w-7 h-7 object-contain"
                />
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white">
                  Download on App Store
                </span>
              </a>

              {/* Play Store Button */}
              <a
                href={companyData.appLinks.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white dark:bg-black/60 hover:bg-gray-50 dark:hover:bg-black border border-gray-200 dark:border-white/5 flex items-center gap-3 transition-all duration-200 shadow-sm hover:scale-[1.02] group"
              >
                <img
                  src="/assets/img/icon/PlayStore.png"
                  alt="Google Play Store"
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white">
                  Download on Play Store
                </span>
              </a>

            </div>

          </div>

          {/* Right Column: Hero Typography & Subtitle */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 pt-4 lg:pt-0">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.08] text-black dark:text-white uppercase">
              DOORSTEP DIESEL<br />
              DELIVERY{' '}
              <span className="bg-[#FCD30A] text-black px-4 py-0.5 rounded-xl inline-block align-middle font-black shadow-sm">
                ANYTIME
              </span>{' '}
              ,<br />
              <span className="bg-[#EE3427] text-white px-4.5 py-1 rounded-xl inline-block mt-2 font-black tracking-wide shadow-md">
                ANYWHERE!
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              Avoid long fuel station lines—get high-quality diesel delivered to your location anytime. Pure, measured, and transparent 24×7 diesel delivery for businesses and homes, at fuel-station prices.
            </p>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-[#EE3427] hover:bg-[#DC2626] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-500/25 hover:scale-105"
              >
                Order Fuel Now
              </a>
              <a
                href="tel:+919494455555"
                className="px-6 py-3.5 rounded-full bg-white dark:bg-white/10 hover:bg-gray-50 dark:hover:bg-white/15 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold text-sm tracking-wide transition-all shadow-sm"
              >
                📞 +91 94944 55555
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
