import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ShieldCheck, Compass, Play, Copy, Check, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/shahinData';

interface HeroProps {
  onWatchIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchIntro }) => {
  const [copied, setCopied] = useState(false);

  // React ref-based orchestration targets
  const kickerRef = useRef<HTMLDivElement>(null);
  const roleKickerRef = useRef<HTMLSpanElement>(null);
  const shahinRef = useRef<HTMLSpanElement>(null);
  const pilliRef = useRef<HTMLSpanElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const allElements = [
      kickerRef.current,
      roleKickerRef.current,
      shahinRef.current,
      pilliRef.current,
      portraitRef.current,
      subtitleRef.current,
      bioRef.current,
      actionsRef.current,
      stripRef.current,
    ].filter(Boolean) as HTMLElement[];

    // If reduced-motion is requested, ensure immediate visibility
    if (prefersReducedMotion) {
      allElements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    // Initialize elements to concealed state before orchestrated timeline fires
    allElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.willChange = 'transform, opacity';
    });

    // Check Web Animations API support
    const supportsWaapi =
      allElements.length > 0 && typeof allElements[0].animate === 'function';

    if (!supportsWaapi) {
      allElements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    const activeAnimations: Animation[] = [];
    const activeTimeouts: NodeJS.Timeout[] = [];

    // Precise orchestration sequence: hero-name, portrait, subtitle, bio, action buttons, and strip
    const choreography = [
      {
        target: kickerRef.current,
        delay: 50,
        duration: 650,
        keyframes: [
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
      {
        target: roleKickerRef.current,
        delay: 90,
        duration: 650,
        keyframes: [
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
      {
        target: shahinRef.current,
        delay: 140,
        duration: 800,
        keyframes: [
          { opacity: 0, transform: 'translateY(100%)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
      {
        target: pilliRef.current,
        delay: 270,
        duration: 800,
        keyframes: [
          { opacity: 0, transform: 'translateY(100%)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
      {
        target: portraitRef.current,
        delay: 380,
        duration: 950,
        keyframes: [
          { opacity: 0, transform: 'scale(0.88) translateY(18px)' },
          { opacity: 1, transform: 'scale(1) translateY(0)' },
        ],
      },
      {
        target: subtitleRef.current,
        delay: 490,
        duration: 750,
        keyframes: [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
      {
        target: bioRef.current,
        delay: 620,
        duration: 750,
        keyframes: [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
      {
        target: actionsRef.current,
        delay: 750,
        duration: 750,
        keyframes: [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
      {
        target: stripRef.current,
        delay: 890,
        duration: 800,
        keyframes: [
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
      },
    ];

    choreography.forEach(({ target, delay, duration, keyframes }) => {
      if (!target) return;

      const timer = setTimeout(() => {
        try {
          const anim = target.animate(keyframes, {
            duration,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'forwards',
          });
          activeAnimations.push(anim);
          anim.onfinish = () => {
            target.style.opacity = '1';
            target.style.transform = 'none';
          };
        } catch {
          target.style.opacity = '1';
          target.style.transform = 'none';
        }
      }, delay);

      activeTimeouts.push(timer);
    });

    // Safety fallback: ensure all elements become visible if any unexpected interruption occurs
    const safetyTimer = setTimeout(() => {
      allElements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }, 2200);

    return () => {
      clearTimeout(safetyTimer);
      activeTimeouts.forEach((t) => clearTimeout(t));
      activeAnimations.forEach((a) => {
        try {
          a.cancel();
        } catch {
          // ignore
        }
      });
    };
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.linkedinUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#06070a]">
      {/* Cinematic atmospheric depth lighting - dynamic slowly moving ambient blue light */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[520px] bg-blue-600/[0.08] blur-[140px] pointer-events-none rounded-full hero-ambient-orb-1"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[480px] h-[480px] bg-sky-500/[0.06] blur-[150px] pointer-events-none rounded-full hero-ambient-orb-2"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Main Architectural Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Editorial Sub-Header / Kicker Bar */}
        <div
          ref={kickerRef}
          className="pt-2 pb-6 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-xs text-[#a4a199]"
        >
          <div className="flex items-center gap-2 font-mono-tabular tracking-wider uppercase text-blue-400">
            <span>Executive Portfolio</span>
            <span className="text-white/20" aria-hidden="true">·</span>
            <span>Technology & Strategy Convergence</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-tabular">
            <span className="flex items-center gap-1.5 text-[#8f8c84]">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Bangalore & Southeast Asia</span>
            </span>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Public Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Central Asymmetric Editorial Composition */}
        <div className="my-auto py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Monumental Name & Philosophical Headline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span
                ref={roleKickerRef}
                className="text-xs font-semibold tracking-widest uppercase text-blue-400 block font-mono-tabular"
              >
                Founder & Chief Executive Officer
              </span>

              {/* Central Visual Focus: Monumental Sculptural Typography with Staggered Word Reveal */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] font-bold tracking-tighter text-[#f5f5f0] leading-[0.92] uppercase">
                <span className="block overflow-hidden pb-1">
                  <span ref={shahinRef} className="hero-name-shahin">
                    SHAHIN
                  </span>
                </span>
                <span className="block overflow-hidden pt-1">
                  <span
                    ref={pilliRef}
                    className="hero-name-pilli text-transparent bg-clip-text bg-gradient-to-r from-white via-[#eae6de] to-blue-200"
                  >
                    PILLI
                  </span>
                </span>
              </h1>
            </div>

            {/* Design Concept: "The Human Side of Innovation" */}
            <div className="space-y-4 max-w-2xl pt-2">
              <p
                ref={subtitleRef}
                className="text-xl sm:text-2xl md:text-3xl font-serif italic text-blue-300/90 leading-tight"
              >
                "The Human Side of Innovation"
              </p>
              
              <p
                ref={bioRef}
                className="text-base sm:text-lg text-[#b8b5ad] leading-relaxed font-normal"
              >
                Connecting enterprise strategy, emerging software ecosystems, and values-driven leadership. Founder & CEO of <strong className="text-white font-medium">Pilli Group</strong>, conceptualizer of the <strong className="text-white font-medium">Asian Networkers Convention & Expo (ANCE)</strong>, and founder of <strong className="text-white font-medium">World of Professionals</strong>.
              </p>
            </div>

            {/* Primary Executive Actions */}
            <div ref={actionsRef} className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#journey"
                onClick={(e) => scrollToSection(e, 'journey')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-xl shadow-blue-600/30 active:scale-[0.98] inline-flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Signature Trajectory</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-white/[0.04] hover:bg-white/[0.09] text-[#f5f5f0] border border-white/[0.12] hover:border-blue-500/40 font-medium text-sm rounded-xl transition-all duration-200 inline-flex items-center gap-2 active:scale-[0.98] group focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <ShieldCheck className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Verify on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#8f8c84] group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {onWatchIntro && (
                <button
                  type="button"
                  onClick={onWatchIntro}
                  className="px-4 py-3.5 text-xs font-semibold text-[#a4a199] hover:text-white transition-colors inline-flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
                  <span>Keynote Recordings</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Architectural Portrait Framing */}
          <div ref={portraitRef} className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Backing Ambient Illumination */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/25 via-sky-500/15 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none" />

              {/* Architectural Container with Layered Glass Edge */}
              <div className="relative rounded-3xl overflow-hidden border border-white/[0.14] bg-[#0c0d14]/90 backdrop-blur-xl shadow-2xl shadow-black/90 p-7 sm:p-8 flex flex-col justify-between">
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                {/* Top Card Bar: Verification Stamp */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-400" />
                    <span className="text-xs font-mono-tabular tracking-wider uppercase text-[#c4c1b9]">
                      Authentic Profile Portrait
                    </span>
                  </div>

                  <span className="text-[11px] font-mono-tabular text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Documented Record
                  </span>
                </div>

                {/* Centerpiece: Clean Circular Portrait with Luminous Rim */}
                <div className="relative z-10 py-8 flex flex-col items-center justify-center">
                  <div className="relative group/photo">
                    {/* Concentric subtle rings */}
                    <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-pulse pointer-events-none" />
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-500/30 to-sky-400/20 blur-sm pointer-events-none" />

                    {/* Circular Portrait with Transparent Mask */}
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-white/30 shadow-2xl bg-[#12141f] flex items-center justify-center">
                      <img
                        src="/assets/images/shahin_pilli_avatar.png"
                        alt="Shahin Pilli - Official LinkedIn Profile Portrait"
                        className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-700 ease-out"
                        loading="eager"
                      />
                    </div>

                    {/* Verified Anchor Badge */}
                    <div className="absolute bottom-1 right-2 p-2 rounded-full bg-blue-600 text-white border-2 border-[#0c0d14] shadow-xl">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Card Summary Lockup */}
                <div className="relative z-10 pt-4 border-t border-white/[0.08] space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                        <span>Shahin Noble Pilli</span>
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      </h2>
                      <p className="text-xs text-[#a4a199] mt-0.5">
                        Founder & CEO, Pilli Group Co., Ltd.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-xs text-[#8f8c84] hover:text-white transition-colors"
                      title="Copy profile URL"
                      aria-label="Copy LinkedIn URL"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#7d7a72] leading-relaxed pt-1">
                    Public record verification: Founder, ANCE & World of Professionals · Technology Advisor · Bangalore & Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Architectural Strip in Full-Width Row Below Split */}
        <div ref={stripRef} className="pt-8 border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono-tabular">
              Core Strategic Initiatives
            </span>
            <span className="text-xs text-blue-400 font-mono-tabular flex items-center gap-1">
              <span>Scroll to inspect</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="#journey"
              onClick={(e) => scrollToSection(e, 'journey')}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] interactive-card group block focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-blue-400">01. Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-sm font-semibold text-white mt-2 group-hover:text-blue-300 transition-colors">
                Cross-Border Networks
              </h3>
              <p className="text-xs text-[#9d9a92] mt-1.5 leading-relaxed">
                Structuring scalable distribution frameworks and regional market expansion across South & Southeast Asia.
              </p>
            </a>

            <a
              href="#perspectives"
              onClick={(e) => scrollToSection(e, 'perspectives')}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] interactive-card group block focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-blue-400">02. Technology</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-sm font-semibold text-white mt-2 group-hover:text-blue-300 transition-colors">
                Digital Systems
              </h3>
              <p className="text-xs text-[#9d9a92] mt-1.5 leading-relaxed">
                Decentralized platforms, digital asset ecosystems (Usereum), and enterprise software modernization.
              </p>
            </a>

            <a
              href="#connections"
              onClick={(e) => scrollToSection(e, 'connections')}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] interactive-card group block focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-blue-400">03. Platforms</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-sm font-semibold text-white mt-2 group-hover:text-blue-300 transition-colors">
                Pan-Asian Conventions
              </h3>
              <p className="text-xs text-[#9d9a92] mt-1.5 leading-relaxed">
                Convening thousands of business leaders, corporate delegates, and innovators at ANCE and World of Professionals.
              </p>
            </a>

            <a
              href="#videos"
              onClick={(e) => scrollToSection(e, 'videos')}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] interactive-card group block focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-blue-400">04. Leadership</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-sm font-semibold text-white mt-2 group-hover:text-blue-300 transition-colors">
                Values & Character
              </h3>
              <p className="text-xs text-[#9d9a92] mt-1.5 leading-relaxed">
                Delivering addresses on values-based leadership, organizational resilience, and personal integrity.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
