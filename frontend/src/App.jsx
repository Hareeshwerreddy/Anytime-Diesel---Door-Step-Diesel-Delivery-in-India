import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MultiShowcase from './components/MultiShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import ActionGallery from './components/ActionGallery';
import ImpactStats from './components/ImpactStats';
import ServicesShowcase from './components/ServicesShowcase';
import Testimonials from './components/Testimonials';
import PartnerCTA from './components/PartnerCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ChatWidget from './components/Chatbot/ChatWidget';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#04000B] text-gray-900 dark:text-gray-100 font-sans selection:bg-[#FCD30A] selection:text-black transition-colors duration-300">
        {/* Navigation Header */}
        <Navbar />

        <main>
          {/* Hero Section with 3D Mascot & App Store Badges */}
          <HeroSection />

          {/* Multi-Section Interactive Showcase (How it Works, Fuel Cube, Fuel for Trees) */}
          <MultiShowcase />

          {/* 7 Core Pillars (Why Choose Us) */}
          <WhyChooseUs />

          {/* Action Media Gallery */}
          <ActionGallery />

          {/* Impact Stats & Milestone Numbers */}
          <ImpactStats />

          {/* Tailored Industry Solutions (Cleaner, Safer, Smarter) */}
          <ServicesShowcase />

          {/* Testimonials & 4.8 Rating */}
          <Testimonials />

          {/* Partner With Us CTA */}
          <PartnerCTA />

          {/* Contact Info & Fuel Requisition Form */}
          <ContactSection />
        </main>

        {/* Comprehensive Footer with Theme Switcher */}
        <Footer />

        {/* Floating Theme Capsule Toggle (Bottom-Right) */}
        <ThemeToggle />

        {/* 24/7 Company Q&A Chatbot Widget */}
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}
