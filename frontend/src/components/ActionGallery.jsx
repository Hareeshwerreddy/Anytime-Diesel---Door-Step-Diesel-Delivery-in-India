import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react';

export default function ActionGallery() {
  const slides = [
    {
      id: 1,
      title: "Automated Bowser Fleet",
      category: "Field Operations",
      img: "/assets/img/cubeImages/cube-1.png",
      description: "PESO-approved refuelers engineered with high-precision digital flow meters and spark-arrestor safety."
    },
    {
      id: 2,
      title: "ATD IoT Fuel Pods",
      category: "On-Site Storage",
      img: "/assets/img/cubeImages/pod-7.png",
      description: "Smart bunded fuel cubes installed at construction, mining, and industrial facility yards."
    },
    {
      id: 3,
      title: "Direct DG Set Refueling",
      category: "Power Backup",
      img: "/assets/img/cubeImages/cube-3.png",
      description: "Hassle-free direct delivery for rooftop and basement multi-kVA generator systems."
    },
    {
      id: 4,
      title: "Telematics & IoT Monitoring",
      category: "Smart Telemetry",
      img: "/assets/img/cubeImages/iot-img-2.png",
      description: "Live fuel volume sensors transmitting real-time level analytics directly to client dashboards."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-[#070B14] dark:bg-[#070B14] light:bg-gray-50 border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-atd-yellow text-xs uppercase font-extrabold tracking-widest block mb-2">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-gray-900 tracking-tight">
              See Anytime Diesel in Action
            </h2>
            <p className="text-gray-400 light:text-gray-600 mt-2 text-sm sm:text-base">
              Reliable, automated energy logistics working round the clock across India.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="p-3 rounded-full bg-white/5 hover:bg-atd-yellow hover:text-black text-white border border-white/10 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="p-3 rounded-full bg-white/5 hover:bg-atd-yellow hover:text-black text-white border border-white/10 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`bg-white/5 dark:bg-white/5 light:bg-white border rounded-3xl p-5 backdrop-blur-xl cursor-pointer transition-all duration-300 group ${
                currentIndex === idx
                  ? 'border-atd-yellow shadow-xl shadow-atd-yellow/10 scale-[1.02]'
                  : 'border-white/10 light:border-gray-200 hover:border-white/20'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden bg-black/40 h-48 mb-4 border border-white/5 flex items-center justify-center">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] uppercase font-bold text-atd-yellow border border-white/10">
                  {slide.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-white light:text-gray-900 group-hover:text-atd-yellow transition-colors">
                {slide.title}
              </h3>
              <p className="text-xs text-gray-400 light:text-gray-600 mt-2 leading-relaxed">
                {slide.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
