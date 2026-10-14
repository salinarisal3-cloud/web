import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fff8f8]/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(217,139,160,0.12)] border-b border-[#ffe1e7]/80'
          : 'bg-[#fff8f8]/80 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick('hero', e)}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <img
              src={PROFILE_DATA.images.wordmarkLogo}
              alt="Salina Risal Wordmark Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-serif text-2xl font-semibold text-[#350d1c] tracking-tight group-hover:text-[#8a4b5c] transition-colors">
              Salina Risal
            </span>
          </a>
        </div>

        {/* Center Pill Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-[#fff0f2] shadow-[0_4px_20px_-2px_rgba(217,139,160,0.08)] border border-[#ffd9e2]/50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(link.id, e)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#f4a6b8] text-[#733949] shadow-sm'
                    : 'text-[#524346] hover:bg-[#ffe1e7] hover:text-[#350d1c]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Profile */}
        <div className="flex items-center gap-3">
          {/* Availability Badge */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff0f2] text-[#524346] text-xs font-medium shadow-[0_2px_10px_rgba(217,139,160,0.08)] border border-[#ffd9e2]/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8a4b5c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8a4b5c]"></span>
            </span>
            <span>Available for freelance • Kathmandu</span>
          </div>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick('contact', e)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#f4a6b8] text-[#733949] hover:bg-[#8a4b5c] hover:text-white font-semibold text-xs uppercase tracking-wider shadow-[0_8px_24px_-4px_rgba(217,139,160,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get in Touch
          </a>

          {/* Profile Avatar */}
          <div className="pl-1">
            <img
              src={PROFILE_DATA.images.avatar}
              alt="Salina Risal Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#ffd9e1] shadow-[0_2px_8px_rgba(217,139,160,0.2)]"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#350d1c] hover:bg-[#ffe8ed] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f8] border-b border-[#ffe1e7] shadow-xl px-6 py-5 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fff0f2] text-[#524346] text-xs font-medium w-fit mb-2">
            <span className="w-2 h-2 rounded-full bg-[#8a4b5c] animate-pulse"></span>
            <span>Available for freelance • Kathmandu</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(link.id, e)}
              className={`px-4 py-2.5 rounded-xl font-medium text-sm flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-[#f4a6b8] text-[#733949] font-semibold'
                  : 'text-[#350d1c] hover:bg-[#ffe8ed]'
              }`}
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-4 h-4 opacity-40" />
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick('contact', e)}
            className="mt-2 w-full py-3 rounded-full bg-[#8a4b5c] text-white text-center font-semibold text-sm shadow-md hover:bg-[#733949] transition-colors"
          >
            Start a Conversation ✦
          </a>
        </div>
      )}
    </header>
  );
};
