import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/assets/img/ATD-logo.png"
            alt="Anytime Diesel - Fuel Up. Grow On."
            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Center: Nav Items */}
        <nav className="hidden lg:flex items-center space-x-8 text-[16px] font-semibold">
          <a
            href="/"
            className="text-[#EE3427] font-bold transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-800 dark:text-gray-200 hover:text-[#EE3427] transition-colors"
          >
            For Businesses
          </a>
          <a
            href="#partner"
            className="text-gray-800 dark:text-gray-200 hover:text-[#EE3427] transition-colors"
          >
            Partner With Us
          </a>

          {/* Company Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setCompanyDropdown(!companyDropdown)}
              onMouseEnter={() => setCompanyDropdown(true)}
              className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-[#EE3427] transition-colors font-semibold"
            >
              <span>Company</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {companyDropdown && (
              <div
                onMouseLeave={() => setCompanyDropdown(false)}
                className="absolute top-full left-0 mt-2 w-52 rounded-2xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 shadow-2xl py-2.5 z-50 text-sm font-medium"
              >
                <a
                  href="#about"
                  className="block px-4 py-2.5 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#EE3427]"
                >
                  About Us
                </a>
                <a
                  href="#how-it-works"
                  className="block px-4 py-2.5 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#EE3427]"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  className="block px-4 py-2.5 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#EE3427]"
                >
                  Client Reviews
                </a>
              </div>
            )}
          </div>

          <a
            href="#cube"
            className="text-gray-800 dark:text-gray-200 hover:text-[#EE3427] transition-colors"
          >
            Cube
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-3.5">
          {/* Contact Us Button */}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 text-sm font-bold tracking-wide transition-all duration-200"
          >
            Contact Us
          </a>

          {/* Green Fuel For Trees Button */}
          <a
            href="#sustainability"
            className="px-5 py-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-md shadow-emerald-500/20"
          >
            Fuel For Trees
          </a>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center space-x-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-[#EE3427] text-white text-xs font-bold uppercase tracking-wider"
          >
            Order Fuel
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Open mobile navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Out Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#04000B]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 px-6 py-6 space-y-4 text-base font-semibold animate-fadeIn">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#EE3427] py-1"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-800 dark:text-gray-200 py-1"
          >
            For Businesses
          </a>
          <a
            href="#partner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-800 dark:text-gray-200 py-1"
          >
            Partner With Us
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-800 dark:text-gray-200 py-1"
          >
            About Anytime Diesel
          </a>
          <a
            href="#cube"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-800 dark:text-gray-200 py-1"
          >
            ATD Fuel Cube
          </a>
          <a
            href="#sustainability"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#10B981] py-1"
          >
            Fuel For Trees NGO
          </a>
          <div className="pt-4 border-t border-gray-200 dark:border-white/10 space-y-3">
            <a
              href="tel:+919494455555"
              className="block text-center py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white font-bold"
            >
              📞 Call +91 94944 55555
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 rounded-xl bg-[#EE3427] text-white font-bold"
            >
              Request Doorstep Delivery
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
