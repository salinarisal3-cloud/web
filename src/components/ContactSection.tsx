import React, { useState } from 'react';
import { Copy, Check, Clock, Send, Sparkles, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialService ? 'social-media' : 'social-media',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'social-media',
        message: '',
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="w-full bg-[#fff0f2]/70 py-20 sm:py-28 border-t border-[#ffe1e7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Contact Context Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#8a4b5c] tracking-widest uppercase">
                Start a Conversation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#350d1c] tracking-tight">
                Let’s Create Something Beautiful Together.
              </h2>
              <p className="text-base text-[#524346] leading-relaxed mt-1">
                Have an upcoming branding project, need eye-catching social templates, or want to discuss full-scale marketing visuals? Drop a line anytime.
              </p>
            </div>

            {/* Interactive Direct Mail Box */}
            <div className="p-6 rounded-2xl bg-white shadow-[0_8px_30px_rgba(217,139,160,0.1)] flex flex-col gap-3.5 border border-[#ffd9e2]">
              <span className="text-xs font-bold text-[#80515d] uppercase tracking-wider">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3 bg-[#fff0f2] p-3.5 rounded-xl border border-[#ffd9e2]/60">
                <span className="text-[#350d1c] select-all font-mono text-sm sm:text-base font-medium truncate">
                  {PROFILE_DATA.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    copied
                      ? 'bg-[#8a4b5c] text-white shadow-sm'
                      : 'bg-[#ffe1e7] text-[#703346] hover:bg-[#8a4b5c] hover:text-white'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#80515d]">
                <Clock className="w-3.5 h-3.5 text-[#8a4b5c]" />
                <span>Typically replies within 24 hours • GMT+5:45</span>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#80515d] uppercase tracking-wider">
                Connect Online
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PROFILE_DATA.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-[#350d1c] text-xs font-semibold shadow-sm hover:bg-[#8a4b5c] hover:text-white transition-all flex items-center gap-2 border border-[#ffd9e2]"
                >
                  <span>Instagram</span>
                  <span className="text-[11px] opacity-75">{PROFILE_DATA.social.instagram.handle}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={PROFILE_DATA.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-[#350d1c] text-xs font-semibold shadow-sm hover:bg-[#8a4b5c] hover:text-white transition-all flex items-center gap-2 border border-[#ffd9e2]"
                >
                  <span>LinkedIn</span>
                  <span className="text-[11px] opacity-75">{PROFILE_DATA.social.linkedin.handle}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={PROFILE_DATA.social.behance.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-[#350d1c] text-xs font-semibold shadow-sm hover:bg-[#8a4b5c] hover:text-white transition-all flex items-center gap-2 border border-[#ffd9e2]"
                >
                  <span>Behance</span>
                  <span className="text-[11px] opacity-75">{PROFILE_DATA.social.behance.handle}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white shadow-[0_16px_40px_rgba(217,139,160,0.15)] flex flex-col gap-5 border border-[#ffd9e2]"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#ffe8ed]">
                <h3 className="font-serif text-2xl font-bold text-[#350d1c]">
                  Send a Message
                </h3>
                <Sparkles className="w-5 h-5 text-[#8a4b5c]" />
              </div>

              {/* Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="full-name" className="text-xs font-bold text-[#350d1c] uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alisha Shrestha"
                  className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] placeholder:text-[#847376]/70 text-sm focus:bg-white focus:ring-2 focus:ring-[#f4a6b8] focus:border-transparent transition-all outline-none border border-[#ffd9e2]/50"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email-address" className="text-xs font-bold text-[#350d1c] uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email-address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] placeholder:text-[#847376]/70 text-sm focus:bg-white focus:ring-2 focus:ring-[#f4a6b8] focus:border-transparent transition-all outline-none border border-[#ffd9e2]/50"
                />
              </div>

              {/* Project Type Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="project-type" className="text-xs font-bold text-[#350d1c] uppercase tracking-wider">
                  What can I design for you?
                </label>
                <select
                  id="project-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] text-sm focus:bg-white focus:ring-2 focus:ring-[#f4a6b8] focus:border-transparent transition-all outline-none border border-[#ffd9e2]/50 cursor-pointer"
                >
                  <option value="social-media">Social Media Design &amp; Feed Kit</option>
                  <option value="branding">Brand Identity &amp; Visual Guide</option>
                  <option value="posters">Event Posters &amp; Banner Collateral</option>
                  <option value="campaign">Full Digital Marketing Campaign</option>
                  <option value="other">Other Creative Collaboration</option>
                </select>
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message-text" className="text-xs font-bold text-[#350d1c] uppercase tracking-wider">
                  Project Details &amp; Timeline
                </label>
                <textarea
                  id="message-text"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me a bit about your brand, goals, and desired timeframe..."
                  className="w-full px-4 py-3 rounded-xl bg-[#fff0f2] text-[#350d1c] placeholder:text-[#847376]/70 text-sm focus:bg-white focus:ring-2 focus:ring-[#f4a6b8] focus:border-transparent transition-all outline-none resize-none border border-[#ffd9e2]/50"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-full bg-[#8a4b5c] text-white font-bold text-xs uppercase tracking-wider shadow-[0_12px_28px_rgba(217,139,160,0.35)] hover:bg-[#733949] transition-all flex items-center justify-center gap-2 mt-1 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending Message 🌸...</span>
                ) : (
                  <>
                    <span>Send Message ✦</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Notification */}
              {isSubmitted && (
                <div className="p-4 rounded-xl bg-[#ffe1e7] text-[#703346] text-center text-xs sm:text-sm font-semibold border border-[#ffd9e2] animate-in fade-in">
                  🌸 Thank you! Your message has been received. Salina will reach back soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
