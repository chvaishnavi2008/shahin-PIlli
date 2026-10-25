import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Globe, Cpu, Users, Award, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/shahinData';
import { RevealOnScroll } from './RevealOnScroll';

type ConvergencePillar = 'technology' | 'strategy' | 'values';

export const Profile: React.FC = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  const [activePillar, setActivePillar] = useState<ConvergencePillar>('technology');

  const pillarsContent = {
    technology: {
      title: 'Digital Systems & Enterprise Software',
      subtitle: 'Pilli Group Co., Ltd. & Digital Asset Ecosystems',
      description:
        'Focusing on resilient digital application architectures, distributed systems, and enterprise modernization that solve tangible operational bottlenecks rather than chasing transient speculative trends.',
      points: [
        'Founder & CEO of Pilli Group Co., Ltd., driving scalable software solutions',
        'Architecture of digital currency initiatives (Usereum) and fintech colloquium advisory',
        'Modernizing legacy business processes through secure cloud and data pipelines',
      ],
      icon: Cpu,
    },
    strategy: {
      title: 'Cross-Border Networks & Pan-Asian Assemblies',
      subtitle: 'Asian Networkers Convention & Expo (ANCE) & World of Professionals',
      description:
        'Convening international business delegations and structuring compliant distribution frameworks that connect South Asian talent with Southeast Asian enterprise opportunities.',
      points: [
        'Conceptualized ANCE, convening multi-thousand delegate congresses in Manila and regional capitals',
        'Founded World of Professionals to cultivate cross-border executive alignment and SME development',
        'Navigating complex multi-jurisdictional compliance and market-entry regulations across Asia',
      ],
      icon: Globe,
    },
    values: {
      title: 'Ethical Governance & Character in Leadership',
      subtitle: 'Community Stewardship & Values-Based Keynotes',
      description:
        'Championing personal integrity and moral stewardship as non-negotiable operational requirements for enterprise sustainability—emphasized in public addresses such as "Are You a Promise Keeper?"',
      points: [
        'Keynote addresses on organizational resilience and holding word during adversity',
        'Youth mentorship and faith-based community leadership in Bangalore',
        'Instilling ethical guardrails within corporate governance and distributed teams',
      ],
      icon: Award,
    },
  };

  const currentPillarData = pillarsContent[activePillar];
  const PillarIcon = currentPillarData.icon;

  return (
    <section id="profile" className="py-24 md:py-32 bg-[#090a10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Scroll Reveal */}
        <RevealOnScroll direction="up" delayMs={50}>
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono-tabular">
              <span>Executive Biography</span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span>Documented Public Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f0] font-serif-title leading-tight">
              Strategic architect at the intersection of business, technology & human values.
            </h2>
            <p className="text-[#a4a199] text-base leading-relaxed">
              All profile information is substantiated through documented corporate records, international convention archives, and his verified LinkedIn profile.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2-Column Editorial Spread with Staggered Scroll Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Biography & Authentic Verified Identity Card */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" delayMs={150}>
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-[#f0ece3] font-normal leading-relaxed font-serif">
                {PERSONAL_INFO.extendedBio[0]}
              </p>

              <p>
                {PERSONAL_INFO.extendedBio[1]}
              </p>

              {/* Collapsible / expandable view */}
              <div className={`space-y-6 transition-all duration-300 ${showFullBio ? 'block' : 'hidden sm:block'}`}>
                <p>
                  {PERSONAL_INFO.extendedBio[2]}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowFullBio(!showFullBio)}
                className="sm:hidden text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{showFullBio ? 'Show Less' : 'Read Full Narrative'}</span>
                {showFullBio ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Official LinkedIn Credential Card with Authentic Portrait */}
            <div className="pt-2">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0e0f17] border border-blue-500/25 hover:border-blue-500/45 transition-colors shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    {/* Authentic portrait thumbnail */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-500/40 shrink-0 bg-[#141622] shadow-xl shadow-blue-500/15">
                      <img
                        src="/src/assets/images/shahin_pilli_avatar.png"
                        alt="Shahin Pilli - Official LinkedIn Profile Photo"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 font-mono-tabular">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Official LinkedIn Profile Photo</span>
                      </div>
                      <p className="text-white font-bold text-base tracking-tight">
                        Shahin Noble Pilli
                      </p>
                      <p className="text-xs text-[#a4a199]">
                        Founder & CEO, Pilli Group · ANCE & World of Professionals
                      </p>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-all shrink-0 shadow-lg shadow-blue-600/25 active:scale-95"
                  >
                    <span>View LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: INTERACTIVE CONVERGENCE MATRIX ("The Human Side of Innovation") */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="up" delayMs={250}>
            <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-400 font-mono-tabular flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>The Convergence Triad</span>
              </span>
              <span className="text-[11px] text-blue-400 font-mono-tabular">Click pillar to inspect</span>
            </div>

            {/* Interactive Pillar Selector Tabs */}
            <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-white/[0.03] border border-white/[0.08] rounded-xl">
              <button
                type="button"
                onClick={() => setActivePillar('technology')}
                className={`py-2 px-2 text-xs font-medium rounded-lg transition-all text-center truncate cursor-pointer ${
                  activePillar === 'technology'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-[#9d9a92] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Technology
              </button>
              <button
                type="button"
                onClick={() => setActivePillar('strategy')}
                className={`py-2 px-2 text-xs font-medium rounded-lg transition-all text-center truncate cursor-pointer ${
                  activePillar === 'strategy'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-[#9d9a92] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Strategy
              </button>
              <button
                type="button"
                onClick={() => setActivePillar('values')}
                className={`py-2 px-2 text-xs font-medium rounded-lg transition-all text-center truncate cursor-pointer ${
                  activePillar === 'values'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-[#9d9a92] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                Values
              </button>
            </div>

            {/* Active Convergence Detail Card */}
            <div className="p-7 rounded-2xl bg-[#0e0f17] border border-white/[0.1] shadow-xl space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <PillarIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white font-serif-title">
                    {currentPillarData.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-mono-tabular">
                    {currentPillarData.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#b8b5ad] leading-relaxed">
                {currentPillarData.description}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block font-mono-tabular">
                  Key Operational Directives
                </span>
                <ul className="space-y-2">
                  {currentPillarData.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#cbc7be] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Pillars Quick List */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-[#8f8c84] space-y-1.5">
              <div className="flex items-center gap-2 text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Documented Leadership Scope</span>
              </div>
              <p className="leading-relaxed">
                Pilli Group Co., Ltd. (The Org corporate listing) · Asian Networkers Convention & Expo (ANCE Manila TV Broadcast) · World of Professionals · Usereum.
              </p>
            </div>
            </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
