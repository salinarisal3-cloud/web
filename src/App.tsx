import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ImageLightbox } from './components/ImageLightbox';
import { CASE_STUDIES, CaseStudy, PROFILE_DATA } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [lightbox, setLightbox] = useState<{ url: string; title: string } | null>(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);

  // Scrollspy to update active navigation tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'services', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFeaturedCaseStudy = () => {
    const featured = CASE_STUDIES.find((c) => c.id === 'origami') || CASE_STUDIES[0];
    setSelectedCaseStudy(featured);
  };

  const handlePreviewImage = (imageUrl: string, title: string) => {
    setLightbox({ url: imageUrl, title });
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#350d1c] font-sans selection:bg-[#ffd9e1] selection:text-[#3a071b] flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('work')}
          onContactClick={() => scrollToSection('contact')}
          onOpenFeaturedCaseStudy={handleOpenFeaturedCaseStudy}
        />

        {/* Selected Work & Portfolio Showcase */}
        <ProjectsShowcase
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
          onPreviewImage={handlePreviewImage}
        />

        {/* Services & Expertise */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* About Salina */}
        <AboutSection
          onPreviewPortrait={() => handlePreviewImage(PROFILE_DATA.images.portrait, 'Salina Risal - Creative Portrait')}
        />

        {/* Experience & Career Journey */}
        <ExperienceSection />

        {/* Contact Form & Direct Connection */}
        <ContactSection
          initialService={selectedServiceForContact}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onNavigateStudy={(study) => setSelectedCaseStudy(study)}
        onPreviewImage={handlePreviewImage}
      />

      {/* Full-Screen Image Lightbox Preview */}
      <ImageLightbox
        imageUrl={lightbox?.url || null}
        title={lightbox?.title || ''}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
