import React from 'react';
import { companyData } from '../data/companyData';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 dark:bg-[#020006] text-gray-700 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-white/10 pt-16 pb-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-300 dark:border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block">
              <img
                src="/assets/img/ATD-logo.png"
                alt="Anytime Diesel"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Anytime Diesel is India’s leading automated doorstep diesel delivery company offering safe, metered, and PESO-compliant fuel supply for businesses, backup generators, industries, and commercial fleets.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white dark:bg-white/5 hover:bg-[#FCD30A] hover:text-black border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white transition-colors shadow-sm"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-white dark:bg-white/5 hover:bg-[#FCD30A] hover:text-black border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white transition-colors shadow-sm"
              >
                <i className="fa-brands fa-x-twitter text-xs"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white dark:bg-white/5 hover:bg-[#FCD30A] hover:text-black border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white transition-colors shadow-sm"
              >
                <i className="fa-brands fa-linkedin-in text-xs"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white dark:bg-white/5 hover:bg-[#FCD30A] hover:text-black border border-gray-300 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white transition-colors shadow-sm"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Service Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Active Service Hubs
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
              {companyData.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EE3427] dark:bg-[#FCD30A]"></span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
              {companyData.navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#privacy" className="hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Certifications & Theme Toggle Option */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Theme & Compliance
            </h4>
            
            {/* Footer Theme Toggle Switch */}
            <div className="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                  Appearance Mode
                </span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-black/60 hover:bg-gray-300 dark:hover:bg-black border border-gray-300 dark:border-white/10 text-xs font-bold text-gray-800 dark:text-gray-200 transition-all shadow-inner"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-[#FCD30A]" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-gray-800" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <img src="/assets/img/brand/PESO-IMG.png" alt="PESO" className="h-6 w-auto object-contain" />
                <span className="text-[11px] text-gray-700 dark:text-gray-300 font-medium">PESO Approved Bowsers</span>
              </div>
              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <img src="/assets/img/brand/ISO-IMG.png" alt="ISO" className="h-6 w-auto object-contain" />
                <span className="text-[11px] text-gray-700 dark:text-gray-300 font-medium">ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Anytime Diesel. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-[#EE3427] dark:hover:text-[#FCD30A] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
