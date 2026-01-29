'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-cream-100 to-sand-300">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-terracotta-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-sage-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-40 lg:py-48">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="space-y-8">
              <p className="font-sans text-sm lg:text-base font-medium tracking-widest uppercase text-terracotta-500">
                Israel Based
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-charcoal-900 leading-[1.1]">
                Moshe Berkowitz
                <br />
                <span className="italic font-normal">Photography</span>
              </h1>
            </div>

            <p className="font-sans text-lg lg:text-xl text-charcoal-700 leading-relaxed max-w-xl mt-12">
              Weddings • Portraits • Events
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-16">
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center px-8 py-4 bg-charcoal-900 text-cream-50 font-sans font-medium text-base rounded-full hover:bg-terracotta-500 transition-all duration-300 transform hover:scale-105 hover:shadow-medium"
              >
                View Portfolio
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-charcoal-900 text-charcoal-900 font-sans font-medium text-base rounded-full hover:bg-charcoal-900 hover:text-cream-50 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Image - Placeholder for now */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-medium">
              {/* Placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-sand-300 to-terracotta-400" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <svg
                    className="w-20 h-20 mx-auto text-cream-50 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="font-serif text-2xl text-cream-50 opacity-80">
                    Your Image Here
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative frame accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-terracotta-500 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage-500/30 rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-charcoal-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
