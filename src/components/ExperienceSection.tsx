import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Timeline Header Intro */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#350d1c] tracking-tight">
            Experience &amp; Leadership
          </h2>
          <p className="text-sm sm:text-base text-[#524346] leading-relaxed mt-1">
            Hands-on involvement leading visual communication for youth organizations, digital agencies, and student initiatives across Kathmandu.
          </p>

          <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2]/80 flex flex-col gap-2">
            <span className="text-xs font-bold text-[#8a4b5c] uppercase tracking-wider">
              Design Philosophy
            </span>
            <p className="font-serif text-base sm:text-lg text-[#350d1c] italic leading-relaxed">
              “Design is not just ornament; it is the bridge of empathy between an organization’s vision and its audience.”
            </p>
          </div>
        </div>

        {/* Vertical Timeline Entries */}
        <div className="lg:col-span-8 relative pl-6 sm:pl-10 space-y-8">
          {/* Timeline vertical rail */}
          <div className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-0.5 bg-[#ffb1c3]"></div>

          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-6">
              {/* Timeline indicator node */}
              <div
                className={`absolute -left-[21px] sm:-left-[23px] top-2 w-5 h-5 rounded-full ${exp.dotColorClass} ring-4 ring-[#ffe1e7] shadow-sm`}
              ></div>

              {/* Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-[0_8px_24px_rgba(217,139,160,0.08)] hover:shadow-[0_14px_32px_rgba(217,139,160,0.18)] transition-all duration-300 flex flex-col gap-2.5 border border-[#ffd9e2]/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#350d1c]">
                    {exp.role}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase ${
                      exp.isCurrent
                        ? 'bg-[#ffd9e1] text-[#3a071b]'
                        : 'bg-[#ffe8ed] text-[#80515d]'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#8a4b5c]">
                  {exp.organization}
                </p>

                <p className="text-sm text-[#524346] leading-relaxed mt-1">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
