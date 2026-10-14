import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import { CaseStudy, CASE_STUDIES } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onNavigateStudy: (study: CaseStudy) => void;
  onPreviewImage: (imageUrl: string, title: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onNavigateStudy,
  onPreviewImage,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!caseStudy) return;
      const currentIndex = CASE_STUDIES.findIndex((c) => c.id === caseStudy.id);
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
        onNavigateStudy(CASE_STUDIES[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length;
        onNavigateStudy(CASE_STUDIES[prevIndex]);
      }
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose, onNavigateStudy]);

  if (!caseStudy) return null;

  const currentIndex = CASE_STUDIES.findIndex((c) => c.id === caseStudy.id);
  const prevStudy = CASE_STUDIES[(currentIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#4e2231]/65 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-[0_24px_60px_rgba(217,139,160,0.35)] overflow-y-auto flex flex-col p-6 sm:p-8 lg:p-10 border border-[#ffd9e2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation & Close Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#ffe8ed] mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateStudy(prevStudy)}
              className="p-2 rounded-full bg-[#fff0f2] text-[#524346] hover:bg-[#ffe1e7] hover:text-[#350d1c] transition-colors cursor-pointer"
              title={`Previous: ${prevStudy.title}`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-[#80515d]">
              {currentIndex + 1} of {CASE_STUDIES.length}
            </span>
            <button
              onClick={() => onNavigateStudy(nextStudy)}
              className="p-2 rounded-full bg-[#fff0f2] text-[#524346] hover:bg-[#ffe1e7] hover:text-[#350d1c] transition-colors cursor-pointer"
              title={`Next: ${nextStudy.title}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#fff0f2] text-[#524346] flex items-center justify-center hover:bg-[#f4a6b8] hover:text-[#733949] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Dynamic Content Container */}
        <div className="flex flex-col gap-6">
          {/* Header metadata */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#ffd9e1] text-[#3a071b] text-xs font-bold uppercase tracking-wider">
                {caseStudy.categoryLabel}
              </span>
              <span className="text-xs text-[#80515d] font-semibold">✦ {caseStudy.year}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#350d1c]">
              {caseStudy.title}
            </h2>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-[#8a4b5c] mt-1">
              <span>
                <strong className="text-[#350d1c]">Role:</strong> {caseStudy.role}
              </span>
              <span>•</span>
              <span>
                <strong className="text-[#350d1c]">Tools:</strong> {caseStudy.tools}
              </span>
            </div>
          </div>

          {/* Visual Showcase Box */}
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#fff0f2] shadow-sm border border-[#ffd9e2] group">
            <img
              src={caseStudy.imageUrl}
              alt={caseStudy.title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 cursor-pointer"
              onClick={() => onPreviewImage(caseStudy.imageUrl, caseStudy.title)}
            />
            <button
              onClick={() => onPreviewImage(caseStudy.imageUrl, caseStudy.title)}
              className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-[#8a4b5c] shadow-md hover:bg-white transition-colors"
            >
              Zoom Artwork ✦
            </button>
          </div>

          {/* Overview Statement */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#fff8f8] border border-[#ffd9e2]/60">
            <span className="text-xs font-bold text-[#8a4b5c] uppercase tracking-wider">
              Project Overview
            </span>
            <p className="text-sm sm:text-base text-[#524346] leading-relaxed mt-1">
              {caseStudy.overview}
            </p>
          </div>

          {/* The Challenge & The Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2]/60 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#8a4b5c] uppercase tracking-wider flex items-center gap-1.5">
                <span>The Challenge</span>
              </span>
              <p className="text-sm text-[#524346] leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fff0f2] border border-[#ffd9e2]/60 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#8a4b5c] uppercase tracking-wider flex items-center gap-1.5">
                <span>The Strategic Solution</span>
              </span>
              <p className="text-sm text-[#524346] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Documented Impact & Results */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#ffe1e7]/70 border border-[#ffd9e2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-[#f4a6b8] text-[#733949]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#703346] uppercase tracking-wider">
                  Documented Impact &amp; Results
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#350d1c] mt-0.5">
                  {caseStudy.metrics}
                </p>
              </div>
            </div>
          </div>

          {/* Key Deliverables list if available */}
          {caseStudy.deliverables && (
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-[#80515d] uppercase tracking-wider">
                Key Deliverables Produced
              </span>
              <div className="flex flex-wrap gap-2">
                {caseStudy.deliverables.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ffe8ed] text-xs font-semibold text-[#524346]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8a4b5c]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#ffe8ed]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigateStudy(prevStudy)}
                className="px-4 py-2 rounded-full bg-[#fff0f2] text-xs font-semibold text-[#524346] hover:bg-[#ffe1e7] transition-colors"
              >
                ← {prevStudy.title.split('—')[0]}
              </button>
              <button
                onClick={() => onNavigateStudy(nextStudy)}
                className="px-4 py-2 rounded-full bg-[#fff0f2] text-xs font-semibold text-[#524346] hover:bg-[#ffe1e7] transition-colors"
              >
                {nextStudy.title.split('—')[0]} →
              </button>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#8a4b5c] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#733949] transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
