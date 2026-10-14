import React from 'react';
import { LayoutGrid, FileText, Palette, TrendingUp } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'social-media':
        return <LayoutGrid className="w-6 h-6" />;
      case 'posters-banners':
        return <FileText className="w-6 h-6" />;
      case 'brand-visuals':
        return <Palette className="w-6 h-6" />;
      case 'marketing-planning':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Palette className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
      <div className="flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-2">
          <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
            Expertise &amp; Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#350d1c] tracking-tight">
            Designed with Strategy, Built with Grace
          </h2>
          <p className="text-sm sm:text-base text-[#524346] leading-relaxed mt-1">
            Elevating creative ventures from initial moodboards to fully functioning cross-platform digital campaigns.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-white shadow-[0_8px_30px_rgba(217,139,160,0.08)] hover:shadow-[0_16px_36px_rgba(217,139,160,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-6 border border-[#ffd9e2]/60 group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${service.bgColorClass} ${service.textColorClass} flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm`}
                >
                  {getIcon(service.id)}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#350d1c]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#524346] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ffe8ed] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#8a4b5c]">
                  {service.tags}
                </span>
                {onSelectService && (
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-bold text-[#8a4b5c] hover:text-[#733949] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    Inquire →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
