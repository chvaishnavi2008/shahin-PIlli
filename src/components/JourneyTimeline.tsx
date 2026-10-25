import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight, Sparkles, Building2, Globe, Cpu, Award } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/shahinData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { JourneyMilestone } from '../types';

interface MilestoneNodeProps {
  milestone: JourneyMilestone;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Individual timeline milestone node featuring custom hook-based scroll reveal
 * with staggered delays and graceful prefers-reduced-motion handling.
 */
const MilestoneNode: React.FC<MilestoneNodeProps> = ({
  milestone,
  index,
  isActive,
  onClick,
}) => {
  const { ref, style } = useScrollReveal<HTMLButtonElement>({
    delayMs: 100 + index * 80,
    direction: 'up',
    distance: 22,
  });

  return (
    <button
      ref={ref}
      style={style}
      type="button"
      onClick={onClick}
      className={`p-4 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400 ${
        isActive
          ? 'bg-[#10121d] border-blue-500/80 shadow-xl shadow-blue-950/40 ring-1 ring-blue-500/50 scale-[1.02]'
          : 'bg-[#0d0e15] border-white/[0.07] hover:border-white/[0.25] hover:bg-[#12131c] hover:scale-[1.01]'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs font-mono-tabular font-semibold ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
          0{index + 1}
        </span>
        <span
          className={`w-2 h-2 rounded-full transition-colors ${
            isActive ? 'bg-blue-400 shadow-sm shadow-blue-400' : 'bg-white/20'
          }`}
        />
      </div>

      <p
        className={`text-xs font-bold truncate transition-colors ${
          isActive ? 'text-white' : 'text-[#a4a199] group-hover:text-white'
        }`}
      >
        {milestone.organization}
      </p>
      <p className="text-[11px] text-[#78756d] truncate mt-0.5">
        {milestone.category}
      </p>
    </button>
  );
};

export const JourneyTimeline: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeMilestone = JOURNEY_MILESTONES[activeStageIndex];

  // Ref-based scroll reveal hooks for each major JourneyTimeline section
  const headerReveal = useScrollReveal<HTMLDivElement>({
    delayMs: 50,
    direction: 'up',
    distance: 28,
  });

  const railReveal = useScrollReveal<HTMLDivElement>({
    delayMs: 120,
    direction: 'up',
    distance: 24,
  });

  const stageReveal = useScrollReveal<HTMLDivElement>({
    delayMs: 220,
    direction: 'up',
    distance: 30,
  });

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % JOURNEY_MILESTONES.length);
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) => (prev - 1 + JOURNEY_MILESTONES.length) % JOURNEY_MILESTONES.length);
  };

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'pilli-group-leadership':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'ance-platforms':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'world-of-professionals':
        return <Award className="w-5 h-5 text-blue-400" />;
      case 'emerging-tech-usereum':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 md:py-32 bg-[#08090d] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/[0.035] blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with useScrollReveal */}
        <div ref={headerReveal.ref} style={headerReveal.style}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono-tabular">
                <span>Signature Trajectory</span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span>Documented Leadership Chapters</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f0] font-serif-title leading-tight">
                An architectural journey across enterprise & technology.
              </h2>
              <p className="text-[#a4a199] text-base leading-relaxed">
                Explore the documented milestones shaping Shahin Pilli's executive career—from enterprise technology foundations to pan-Asian convention platforms.
              </p>
            </div>

            {/* Stepper Controls */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-xs font-mono-tabular text-[#8f8c84] px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                <span className="text-white font-semibold">0{activeStageIndex + 1}</span>
                <span className="text-white/30 mx-1">/</span>
                <span>0{JOURNEY_MILESTONES.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.09] hover:border-blue-500/40 transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Previous milestone chapter"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.09] hover:border-blue-500/40 transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Next milestone chapter"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SIGNATURE INTERACTIVE NODE TRACK (Horizontal Node Rail with useScrollReveal) */}
        <div ref={railReveal.ref} style={railReveal.style} className="mb-12 relative">
          {/* Continuous trajectory baseline rail */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1.5px] bg-white/[0.1] -translate-y-1/2 z-0" />
          
          {/* Active progress fill with smooth physics */}
          <div
            className="hidden md:block absolute top-1/2 left-0 h-[2px] bg-blue-500 -translate-y-1/2 z-0 transition-all duration-500 ease-out"
            style={{
              width: `${(activeStageIndex / (JOURNEY_MILESTONES.length - 1)) * 100}%`,
            }}
          />

          {/* Node buttons row - each timeline milestone fades and slides into view via useScrollReveal */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 relative z-10">
            {JOURNEY_MILESTONES.map((milestone, idx) => (
              <MilestoneNode
                key={milestone.id}
                milestone={milestone}
                index={idx}
                isActive={activeStageIndex === idx}
                onClick={() => setActiveStageIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* ACTIVE STAGE EDITORIAL BRIEFING CANVAS WITH useScrollReveal */}
        <div ref={stageReveal.ref} style={stageReveal.style}>
          <div
            key={activeMilestone.id}
            className="anim-stage-card rounded-3xl bg-[#0d0e16] border border-white/[0.1] shadow-2xl p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
              {/* Left Column: Organization & Scope Summary */}
              <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-8 lg:pb-0 lg:pr-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20">
                      {getStageIcon(activeMilestone.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono-tabular uppercase tracking-wider text-blue-400 block">
                        Chapter 0{activeStageIndex + 1} · {activeMilestone.category}
                      </span>
                      <span className="text-xs text-[#8f8c84] font-mono-tabular">
                        {activeMilestone.period}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-title leading-snug pt-2">
                    {activeMilestone.role}
                  </h3>

                  <p className="text-base font-semibold text-blue-300">
                    {activeMilestone.organization}
                  </p>
                </div>

                {/* Public Record Attestation */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Public Record Substantiated</span>
                  </div>
                  <p className="text-xs text-[#9d9a92] leading-relaxed">
                    Verified through corporate registrations (The Org), documented television broadcast records, or his official LinkedIn profile.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={activeMilestone.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600/10 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <span>{activeMilestone.linkText || 'Verify on LinkedIn'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Narrative & Documented Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono-tabular">
                    Executive Briefing & Strategic Scope
                  </span>
                  <p className="text-base sm:text-lg text-[#dedbd4] leading-relaxed">
                    {activeMilestone.summary}
                  </p>
                </div>

                {/* Documented Highlights Checklist */}
                <div className="space-y-3 pt-3 border-t border-white/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block font-mono-tabular">
                    Documented Outcomes & Operating Scope
                  </span>
                  <ul className="space-y-3">
                    {activeMilestone.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-sm text-[#cbc7be] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Chapter Navigation Quick Links */}
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8f8c84]">
                  <span>Navigate trajectory:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous Chapter</span>
                    </button>
                    <span className="text-white/20">·</span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Next Chapter</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
