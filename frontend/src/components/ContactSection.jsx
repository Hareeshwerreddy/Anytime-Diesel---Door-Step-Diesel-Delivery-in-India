import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fuelQty: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#04000B] relative overflow-hidden transition-colors duration-300">
      {/* Background Accent */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FCD30A]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EE3427] dark:text-[#FCD30A] text-xs uppercase font-extrabold tracking-widest block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Order Fuel or Schedule a Consultation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base">
            Our fuel operations team is available 24/7. Fill out the request form below or connect via our hotline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 bg-gray-50/90 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl flex flex-col justify-between shadow-lg dark:shadow-none">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Headquarters & Dispatch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Rapid deployment hub servicing Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Maharashtra, and North corridors.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                <a
                  href="tel:+919494455555"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-black/30 border border-gray-200 dark:border-white/5 hover:border-[#EE3427] dark:hover:border-[#FCD30A]/40 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] shrink-0 group-hover:bg-[#EE3427] dark:group-hover:bg-[#FCD30A] group-hover:text-white dark:group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">24/7 Hotline</span>
                    <span className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#EE3427] dark:group-hover:text-[#FCD30A] transition-colors">
                      {companyData.phone}
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@anytimediesel.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-black/30 border border-gray-200 dark:border-white/5 hover:border-[#EE3427] dark:hover:border-[#FCD30A]/40 transition-colors group shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] shrink-0 group-hover:bg-[#EE3427] dark:group-hover:bg-[#FCD30A] group-hover:text-white dark:group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">Official Email</span>
                    <span className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#EE3427] dark:group-hover:text-[#FCD30A] transition-colors">
                      {companyData.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-black/30 border border-gray-200 dark:border-white/5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#EE3427]/10 dark:bg-[#FCD30A]/10 border border-[#EE3427]/30 dark:border-[#FCD30A]/30 flex items-center justify-center text-[#EE3427] dark:text-[#FCD30A] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">Corporate Office</span>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1 leading-relaxed">
                      {companyData.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Clock className="w-4 h-4" /> 24×7 Operations Active
              </span>
              <span className="flex items-center gap-1.5 text-[#EE3427] dark:text-[#FCD30A] font-semibold">
                <ShieldCheck className="w-4 h-4" /> PESO Licensed
              </span>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-gray-50/90 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-lg dark:shadow-none">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Request Received Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <span className="font-bold text-gray-900 dark:text-white">{formData.name}</span>. Our fuel dispatch manager is reviewing your requirements and will contact you within 15 minutes at <span className="font-bold text-[#EE3427] dark:text-[#FCD30A]">{formData.phone}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', fuelQty: '', message: '' });
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 text-xs font-semibold uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Quick Fuel Requirement Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-[#EE3427] dark:focus:border-[#FCD30A] transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-[#EE3427] dark:focus:border-[#FCD30A] transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-[#EE3427] dark:focus:border-[#FCD30A] transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1.5">
                      Company / Site Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Infra Pvt Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-[#EE3427] dark:focus:border-[#FCD30A] transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1.5">
                    Estimated Diesel Quantity (Litres)
                  </label>
                  <select
                    value={formData.fuelQty}
                    onChange={(e) => setFormData({ ...formData, fuelQty: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-[#EE3427] dark:focus:border-[#FCD30A] transition-colors shadow-sm"
                  >
                    <option value="" className="bg-white dark:bg-[#0B0F19]">Select Quantity Range</option>
                    <option value="100 - 500 Litres" className="bg-white dark:bg-[#0B0F19]">100 - 500 Litres (Small DG Sets / Retail)</option>
                    <option value="500 - 2,000 Litres" className="bg-white dark:bg-[#0B0F19]">500 - 2,000 Litres (Commercial / IT Park)</option>
                    <option value="2,000 - 10,000 Litres" className="bg-white dark:bg-[#0B0F19]">2,000 - 10,000 Litres (Construction / Industrial)</option>
                    <option value="10,000+ Litres" className="bg-white dark:bg-[#0B0F19]">10,000+ Litres (Bulk Storage / Fleet Depot)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1.5">
                    Delivery Location & Specific Requirements
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Enter delivery address, preferred time window, DG set type, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:border-[#EE3427] dark:focus:border-[#FCD30A] transition-colors resize-none shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-[#EE3427] hover:bg-[#DC2626] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-500/20 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Fuel Requisition</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
