import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
  onOpenFeaturedCaseStudy: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onContactClick,
  onOpenFeaturedCaseStudy,
}) => {
  return (
    <section id="hero" className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-16 lg:pb-24 overflow-hidden">
      {/* Ambient Rose Glow Accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-[#f4a6b8]/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/3 -left-40 w-80 h-80 bg-[#fdaabf]/25 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-96 h-96 bg-[#ffe1e7]/40 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
          {/* Location & Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#fff0f2] text-[#80515d] text-xs font-semibold uppercase tracking-wider shadow-[0_2px_12px_rgba(217,139,160,0.12)] border border-[#ffd9e2]/50">
            <span className="text-[#8a4b5c] font-bold">✦</span>
            <span>Graphic Designer &amp; Digital Marketer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a4b5c]/40"></span>
            <span>Kathmandu, Nepal</span>
          </div>

          {/* Monogram & Hero Headline */}
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ffd9e1] text-[#3a071b] font-serif text-lg font-bold italic shadow-sm ring-2 ring-[#ffe1e7]">
                SR✦
              </span>
              <span className="text-xs uppercase tracking-widest text-[#80515d] font-semibold">
                Portfolio &amp; Creative Archive
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[68px] leading-[1.08] font-bold text-[#350d1c] tracking-tight mt-1">
              Salina Risal
            </h1>

            <p className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-[#8a4b5c] italic font-normal -mt-1 sm:-mt-2">
              Graphic Designer &amp; Digital Marketer
            </p>
          </div>

          {/* Narrative Tagline */}
          <p className="text-base sm:text-lg text-[#524346] max-w-xl leading-relaxed font-normal">
            I create bespoke visuals, brand narratives, and digital campaigns that make modern businesses feel seen, remembered, and admired.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <button
              onClick={onExploreWork}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#8a4b5c] text-white text-xs font-semibold uppercase tracking-wider shadow-[0_12px_32px_-4px_rgba(217,139,160,0.45)] hover:bg-[#733949] transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={onContactClick}
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#fff0f2] text-[#350d1c] text-xs font-semibold uppercase tracking-wider shadow-[0_4px_16px_rgba(217,139,160,0.12)] hover:bg-[#ffe1e7] transition-all cursor-pointer border border-[#ffd9e2]/60"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#8a4b5c]" />
            </button>
          </div>

          {/* Quick Proof Metrics Bar */}
          <div className="w-full max-w-xl mt-3 pt-2 grid grid-cols-3 gap-4 bg-[#fff0f2]/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-[0_4px_24px_rgba(217,139,160,0.08)] border border-[#ffd9e2]/50">
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#350d1c]">3+ Yrs</span>
              <span className="text-xs uppercase tracking-wider text-[#80515d] font-medium mt-0.5">Designing Brands</span>
            </div>
            <div className="flex flex-col border-l border-[#ffd9e2] pl-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#350d1c]">50+</span>
              <span className="text-xs uppercase tracking-wider text-[#80515d] font-medium mt-0.5">Campaign Assets</span>
            </div>
            <div className="flex flex-col border-l border-[#ffd9e2] pl-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8a4b5c]">240%</span>
              <span className="text-xs uppercase tracking-wider text-[#80515d] font-medium mt-0.5">Peak Growth Boost</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tactile Visual Collage */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex items-center justify-center">
          <div className="relative w-full max-w-md h-[430px] sm:h-[480px] flex items-center justify-center">
            {/* Back Card (Tilted Left) */}
            <div className="absolute w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden bg-white shadow-[0_16px_36px_rgba(217,139,160,0.22)] -rotate-6 -translate-x-10 sm:-translate-x-12 -translate-y-5 transform hover:rotate-0 transition-transform duration-500 border border-[#ffd9e2]/60 cursor-pointer">
              <img
                src={PROFILE_DATA.images.heroBackCard}
                alt="Minimalist soft pink editorial magazine and cosmetics packaging mockup"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-[#80515d] text-[11px] font-semibold uppercase tracking-wider shadow-sm">
                Brand Identity ✦
              </div>
            </div>

            {/* Front Card (Tilted Right) */}
            <div
              onClick={onOpenFeaturedCaseStudy}
              className="absolute w-64 sm:w-72 h-88 sm:h-96 rounded-2xl overflow-hidden bg-white shadow-[0_24px_48px_rgba(217,139,160,0.28)] rotate-4 translate-x-6 sm:translate-x-8 translate-y-4 transform hover:rotate-0 hover:scale-[1.02] transition-all duration-500 border border-[#ffd9e2] cursor-pointer group"
            >
              <img
                src={PROFILE_DATA.images.heroFrontCard}
                alt="Origami For Good 2025 Nepal social media campaign preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-sm shadow-md border border-[#ffd9e2]/50">
                <span className="text-[11px] font-bold text-[#8a4b5c] uppercase tracking-wider">
                  Featured Campaign
                </span>
                <p className="font-serif text-lg font-semibold text-[#350d1c] truncate">
                  Origami For Good 2025
                </p>
              </div>
            </div>

            {/* Decorative Floating Sparkle Pill */}
            <div className="absolute -top-3 right-0 sm:right-2 px-4 py-2 rounded-full bg-[#ffd9e1] text-[#3a071b] shadow-[0_6px_20px_rgba(217,139,160,0.25)] flex items-center gap-2 text-xs font-semibold animate-pulse border border-[#ffd9e2]">
              <Sparkles className="w-3.5 h-3.5 text-[#8a4b5c]" />
              <span>Crafted with Poise</span>
            </div>

            {/* Floating Studio Badge */}
            <div className="absolute -bottom-3 -left-1 sm:-left-3 px-4 py-2 rounded-full bg-white text-[#350d1c] shadow-[0_8px_24px_rgba(217,139,160,0.18)] flex items-center gap-2 border border-[#ffd9e2]/80">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8a4b5c] animate-ping"></span>
              <span className="text-xs font-semibold">Kathmandu Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
