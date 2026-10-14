import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#fff0f2] shadow-[0_-1px_12px_rgba(217,139,160,0.08)] pt-16 pb-12 border-t border-[#ffe1e7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Logo Brand Summary */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="font-serif text-2xl font-bold text-[#350d1c]">
              Designed with <span className="text-[#8a4b5c]">🌸</span> by Salina Risal
            </p>
            <p className="text-xs sm:text-sm text-[#524346]">
              Editorial Graphic Design &amp; Digital Marketing Portfolio
            </p>
          </div>

          {/* Timezone pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe8ed] shadow-[0_2px_12px_rgba(217,139,160,0.08)] border border-[#ffd9e2]/60 text-xs">
            <span className="text-[#80515d]">✦ Kathmandu, Nepal</span>
            <span className="text-[#524346] font-semibold">UTC+5:45</span>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs font-semibold">
              <a
                href={PROFILE_DATA.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#524346] hover:text-[#8a4b5c] transition-colors"
              >
                Instagram
              </a>
              <span className="text-[#e7acba]">•</span>
              <a
                href={PROFILE_DATA.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#524346] hover:text-[#8a4b5c] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-[#e7acba]">•</span>
              <a
                href={PROFILE_DATA.social.behance.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#524346] hover:text-[#8a4b5c] transition-colors"
              >
                Behance
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white text-[#350d1c] shadow-sm hover:bg-[#ffe1e7] transition-colors cursor-pointer border border-[#ffd9e2]"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#ffd9e2]/60 text-center">
          <p className="text-xs text-[#80515d]">
            © 2025 Salina Risal. Crafted with poise, creative flair, and quiet luxury.
          </p>
        </div>
      </div>
    </footer>
  );
};
