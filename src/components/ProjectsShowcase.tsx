import React, { useState } from 'react';
import { ArrowRight, Eye, Star } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface ProjectsShowcaseProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onPreviewImage: (imageUrl: string, title: string) => void;
}

type FilterCategory = 'all' | 'social' | 'posters' | 'branding' | 'campaigns';

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  onSelectCaseStudy,
  onPreviewImage,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterTabs: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'social', label: 'Social Media' },
    { id: 'posters', label: 'Posters & Banners' },
    { id: 'branding', label: 'Branding' },
    { id: 'campaigns', label: 'Campaigns' },
  ];

  const featuredProject = CASE_STUDIES.find((item) => item.id === 'origami') || CASE_STUDIES[0];
  const gridProjects = CASE_STUDIES.filter((item) => item.id !== 'origami');

  const filteredProjects = gridProjects.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="work" className="w-full bg-[#fff0f2]/60 pt-16 sm:pt-20 pb-20 sm:pb-28 border-y border-[#ffe1e7]/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col gap-10 sm:gap-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
              Portfolio Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#350d1c] tracking-tight">
              Curated Projects &amp; Visual Stories
            </h2>
            <p className="text-sm sm:text-base text-[#524346] leading-relaxed">
              A deliberate collection of social campaigns, visual identities, and promotional materials crafted with editorial warmth and strategic conversion intent.
            </p>
          </div>

          {/* Filter Pill Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#ffe8ed] shadow-inner border border-[#ffd9e2]/60 self-start md:self-end">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#8a4b5c] text-white shadow-sm'
                    : 'text-[#524346] hover:text-[#350d1c] hover:bg-white/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Banner (Visible on 'all' or 'campaigns') */}
        {(activeFilter === 'all' || activeFilter === 'campaigns') && (
          <div className="w-full rounded-2xl bg-white overflow-hidden shadow-[0_16px_40px_rgba(217,139,160,0.14)] grid grid-cols-1 lg:grid-cols-12 transition-all hover:shadow-[0_24px_50px_rgba(217,139,160,0.22)] border border-[#ffd9e2]">
            {/* Showcase Artwork */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden group">
              <img
                src={featuredProject.imageUrl}
                alt="Origami For Good 2025 Nepal Youth awareness campaign"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                onClick={() => onSelectCaseStudy(featuredProject)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4e2231]/60 via-transparent to-transparent lg:hidden pointer-events-none"></div>

              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-bold text-[#8a4b5c] shadow flex items-center gap-1.5 border border-[#ffd9e2]/70">
                <Star className="w-3.5 h-3.5 fill-[#8a4b5c] text-[#8a4b5c]" />
                <span>National Highlight 2025</span>
              </div>

              <button
                onClick={() => onPreviewImage(featuredProject.imageUrl, featuredProject.title)}
                className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur text-[#350d1c] shadow hover:bg-white transition-colors"
                title="Zoom Artwork"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Case Study Meta & Summary */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 bg-white">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ffd9e1] text-xs font-semibold text-[#3a071b]">
                    Campaigns &amp; Visual Direction
                  </span>
                  <span className="text-xs text-[#80515d] font-semibold">2025</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#350d1c] mt-1">
                  Origami For Good — National Awareness Campaign
                </h3>

                <p className="text-sm sm:text-base text-[#524346] leading-relaxed">
                  Comprehensive social media revamp and promotional collateral driving a 240% engagement surge across Kathmandu youth communities, uniting humanitarian purpose with delicate visual aesthetics.
                </p>

                {/* Metadata List */}
                <div className="mt-3 pt-3 border-t border-[#ffd9e2]/50 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-1 border-b border-[#ffe8ed]">
                    <span className="text-[#80515d]">Role</span>
                    <span className="text-[#350d1c] font-semibold">Lead Visual Designer &amp; Strategist</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#ffe8ed]">
                    <span className="text-[#80515d]">Tools</span>
                    <span className="text-[#350d1c] font-semibold">Canva Pro, Adobe Illustrator, Meta Suite</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#80515d]">Impact</span>
                    <span className="text-[#8a4b5c] font-bold">+240% Reach • 45k+ Impressions</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectCaseStudy(featuredProject)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#f4a6b8] text-[#733949] font-bold text-xs uppercase tracking-wider hover:bg-[#8a4b5c] hover:text-white transition-all duration-300 shadow-[0_6px_20px_rgba(217,139,160,0.25)] cursor-pointer"
                >
                  <span>Explore Detailed Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Masonry Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-[0_8px_30px_rgba(217,139,160,0.08)] hover:shadow-[0_18px_40px_rgba(217,139,160,0.22)] hover:-translate-y-1 transition-all duration-300 border border-[#ffd9e2]/60"
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 overflow-hidden bg-[#fff0f2]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-[#8a4b5c]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-xs">
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="px-4 py-2 rounded-full bg-white text-[#8a4b5c] text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-[#ffe1e7] transition-colors cursor-pointer"
                  >
                    Quick View
                  </button>
                  <button
                    onClick={() => onPreviewImage(project.imageUrl, project.title)}
                    className="p-2 rounded-full bg-white text-[#350d1c] shadow-lg hover:bg-[#ffe1e7] transition-colors cursor-pointer"
                    title="Zoom Image"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Meta & Actions */}
              <div className="p-5 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffe8ed] text-[#80515d] text-[11px] font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[#80515d] text-[11px] font-semibold">{project.year}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#350d1c] leading-snug">
                    {project.title}
                  </h4>
                  <p className="text-xs text-[#524346] mt-1.5 line-clamp-2 leading-relaxed">
                    {project.snippet}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#ffe8ed] flex items-center justify-between">
                  <span className="text-[11px] text-[#8a4b5c] font-semibold">{project.impact.split('•')[0]}</span>
                  <button
                    onClick={() => onSelectCaseStudy(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8a4b5c] hover:text-[#733949] cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
