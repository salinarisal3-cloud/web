import React from 'react';
import { GraduationCap, Sparkles, MapPin, Globe } from 'lucide-react';
import { PROFILE_DATA, CORE_SKILLS } from '../data/portfolioData';

interface AboutSectionProps {
  onPreviewPortrait?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onPreviewPortrait }) => {
  return (
    <section id="about" className="w-full bg-[#fff0f2]/50 py-20 sm:py-28 border-y border-[#ffe1e7]/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Frame & Floating Sticker */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(217,139,160,0.22)] p-2.5 border border-[#ffd9e2]">
                <div className="w-full h-full rounded-2xl overflow-hidden relative group cursor-pointer" onClick={onPreviewPortrait}>
                  <img
                    src={PROFILE_DATA.images.portrait}
                    alt="Salina Risal portrait"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Floating Pill Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 px-5 py-2.5 rounded-full bg-white text-[#350d1c] text-xs sm:text-sm font-semibold shadow-[0_10px_30px_rgba(217,139,160,0.25)] flex items-center gap-2 border border-[#ffd9e2]">
                <span>Open for Collaborations</span>
                <span className="text-[#8a4b5c] text-base">🌸</span>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#ffd9e1] flex items-center justify-center text-[#3a071b] shadow-md border border-[#ffe1e7]">
                <Sparkles className="w-5 h-5 text-[#8a4b5c]" />
              </div>
            </div>
          </div>

          {/* Right: Story, Background & Skills */}
          <div className="lg:col-span-7 flex flex-col gap-6 mt-4 lg:mt-0">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
                Meet Salina
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#350d1c] tracking-tight">
                Designing with heart, building with code.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#524346] leading-relaxed">
              I am a fast-learning creative residing in Kathmandu who thrives at the intersection of aesthetic design and purposeful technology. Currently pursuing my BSc (Hons) in Information Technology at Lord Buddha Education Foundation, I bring a unique dual lens to creative work: structured computational discipline coupled with an instinct for visual emotional connection.
            </p>

            <p className="text-sm sm:text-base text-[#524346] leading-relaxed">
              Whether redesigning national NGO communication collateral or building campaign identities from scratch, my mission is to deliver work that feels intuitive, clean, and genuinely memorable.
            </p>

            {/* Education Badge Card */}
            <div className="p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(217,139,160,0.08)] flex items-start gap-4 border border-[#ffd9e2]/70">
              <div className="p-3 rounded-2xl bg-[#ffd9e1] text-[#3a071b] mt-0.5">
                <GraduationCap className="w-6 h-6 text-[#8a4b5c]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#8a4b5c] uppercase tracking-wider">
                  Education
                </span>
                <h4 className="font-serif text-lg font-bold text-[#350d1c]">
                  {PROFILE_DATA.education.degree}
                </h4>
                <p className="text-xs sm:text-sm text-[#524346] mt-0.5">
                  {PROFILE_DATA.education.institution} • ({PROFILE_DATA.education.years})
                </p>
              </div>
            </div>

            {/* Skills Pill Badges */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#80515d] uppercase tracking-wider">
                Core Tools &amp; Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {CORE_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full bg-[#ffe8ed] text-xs font-semibold text-[#524346] border border-[#ffd9e2]/50 hover:bg-[#f4a6b8] hover:text-[#733949] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/80 border border-[#ffd9e2]/50">
                <div className="flex items-center gap-1.5 text-xs text-[#80515d] font-semibold uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-[#8a4b5c]" />
                  <span>Languages</span>
                </div>
                <p className="font-serif text-base sm:text-lg font-bold text-[#350d1c] mt-1">
                  {PROFILE_DATA.languages}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 border border-[#ffd9e2]/50">
                <div className="flex items-center gap-1.5 text-xs text-[#80515d] font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#8a4b5c]" />
                  <span>Base Location</span>
                </div>
                <p className="font-serif text-base sm:text-lg font-bold text-[#350d1c] mt-1">
                  {PROFILE_DATA.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
