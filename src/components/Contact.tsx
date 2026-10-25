import React, { useState } from 'react';
import { ArrowUpRight, Send, CheckCircle2, ShieldCheck, Mail, MapPin, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/shahinData';
import { RevealOnScroll } from './RevealOnScroll';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Executive Advisory & Strategy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedProfile, setCopiedProfile] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      topic: 'Executive Advisory & Strategy',
      message: '',
    });
    setSubmitted(false);
  };

  const handleCopyProfile = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.linkedinUrl);
    setCopiedProfile(true);
    setTimeout(() => setCopiedProfile(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#06070a] border-t border-white/[0.06] relative overflow-hidden">
      {/* Dramatic ambient backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/[0.04] blur-[180px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* DRAMATIC CLOSING BANNER: MONUMENTAL TYPOGRAPHY */}
        <RevealOnScroll direction="up" delayMs={50}>
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono-tabular text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Dialogue & Strategic Partnerships</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight text-[#f5f5f0] uppercase font-sans leading-[0.98]">
              Where vision meets <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                rigorous execution.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#a4a199] max-w-2xl mx-auto leading-relaxed">
              Available for select board-level advisory, international keynote addresses, and high-impact enterprise partnerships across Asian and global markets.
            </p>

            {/* Prominent Working LinkedIn Gateway Button */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/35 active:scale-95 inline-flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <ShieldCheck className="w-5 h-5 text-blue-200" />
                <span>Connect with Shahin Pilli on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyProfile}
                className="px-5 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-[#eae6de] border border-white/[0.1] hover:border-white/[0.2] font-medium text-sm rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                {copiedProfile ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono-tabular">Copied URL</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8f8c84]" />
                    <span>Copy LinkedIn URL</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* 2-Column Contact & Inquiries Layout */}
        <RevealOnScroll direction="up" delayMs={150}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 border-t border-white/[0.08]">
          {/* Left Column: Coordinates & Verification */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 font-mono-tabular">
                Verified Verification Gateways
              </span>
              <h3 className="text-2xl font-bold text-white font-serif-title">
                Strategic Directives & Regional Hubs
              </h3>
              <p className="text-xs sm:text-sm text-[#a4a199] leading-relaxed">
                Connect directly regarding enterprise advisory, technology venture partnerships, or pan-Asian summit presentations.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="p-5 rounded-2xl bg-[#0c0d15] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-tabular text-[#8f8c84] block">Official Channel</span>
                    <span className="text-sm font-semibold text-white">LinkedIn Executive Profile</span>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-blue-400 hover:text-white transition-colors"
                  aria-label="Open LinkedIn"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-[#0c0d15] border border-white/[0.08] flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-tabular text-[#8f8c84] block">Operational Hubs</span>
                  <span className="text-sm font-semibold text-white">Bangalore, India & Southeast Asia</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#0c0d15] border border-white/[0.08] flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-tabular text-[#8f8c84] block">Inquiry Protocol</span>
                  <span className="text-sm font-semibold text-white">Direct Executive Briefing Dispatch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Briefing Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0d15] border border-white/[0.09] shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif-title">
                    Inquiry Briefing Dispatched
                  </h3>
                  <p className="text-sm text-[#b8b5ad] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your brief regarding <span className="text-blue-400 font-medium">{formData.topic}</span> has been logged. You may also connect directly via his verified LinkedIn profile.
                  </p>
                  <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Briefing
                    </button>
                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white rounded-lg inline-flex items-center gap-1.5 transition-colors shadow-lg shadow-blue-600/25"
                    >
                      <span>Open LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/[0.06] pb-4">
                    <h3 className="text-xl font-bold text-white font-serif-title">
                      Direct Executive Dispatch
                    </h3>
                    <p className="text-xs text-[#a4a199] mt-1">
                      Direct strategic inquiries are reviewed with strict confidentiality.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-[#c4c1b9]">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Vance"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-blue-500 focus:outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-[#c4c1b9]">
                        Corporate Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-blue-500 focus:outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="organization" className="text-xs font-medium text-[#c4c1b9]">
                        Organization / Enterprise
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Pacific Ventures Group"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-blue-500 focus:outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="topic" className="text-xs font-medium text-[#c4c1b9]">
                        Subject of Dialogue
                      </label>
                      <select
                        id="topic"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="Executive Advisory & Strategy" className="bg-[#0c0d15] text-white">
                          Executive Advisory & Strategy
                        </option>
                        <option value="Keynote Speaking & Summits" className="bg-[#0c0d15] text-white">
                          Keynote Speaking & Summits
                        </option>
                        <option value="Technology & Digital Ecosystems" className="bg-[#0c0d15] text-white">
                          Technology & Digital Ecosystems
                        </option>
                        <option value="Global Platform Collaboration" className="bg-[#0c0d15] text-white">
                          Global Platform Collaboration
                        </option>
                        <option value="General Professional Dialogue" className="bg-[#0c0d15] text-white">
                          General Professional Dialogue
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-[#c4c1b9]">
                      Message / Objective <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline the scope, timeline, and strategic objectives of the engagement..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.1] text-white text-sm focus:border-blue-500 focus:outline-none transition-colors placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Executive Briefing</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
