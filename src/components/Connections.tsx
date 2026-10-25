import React from 'react';
import { ShieldCheck, Globe, Building2, Cpu, ExternalLink } from 'lucide-react';
import { PROFESSIONAL_CONNECTIONS } from '../data/shahinData';
import { RevealOnScroll } from './RevealOnScroll';

export const Connections: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'pilli-group-hub':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'linkedin-profile':
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'ance-congress':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'world-professionals':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="connections" className="py-24 md:py-32 bg-[#0a0b10] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Reveal */}
        <RevealOnScroll direction="up" delayMs={50}>
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono-tabular">
              <span>Verified Affiliations</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span>Corporate & Initiative Hubs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f0] font-serif-title">
              Professional connections & verified entities.
            </h2>
            <p className="text-[#a4a199] text-base leading-relaxed">
              Direct gateways to verified organizations, founding conventions, and public communication channels.
            </p>
          </div>
        </RevealOnScroll>

        {/* Connections Grid with Reveal */}
        <RevealOnScroll direction="up" delayMs={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROFESSIONAL_CONNECTIONS.map((entity) => (
              <div
                key={entity.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#0e0f17] border border-white/[0.08] interactive-card flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20">
                      {getIcon(entity.id)}
                    </div>
                    
                    <span className="text-xs text-blue-400 font-mono-tabular">
                      {entity.scope}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {entity.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {entity.role} · {entity.sector}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#a4a199] leading-relaxed">
                    {entity.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-[#8f8c84] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Public verification recorded</span>
                  </span>

                  <a
                    href={entity.verifiedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-white/[0.04] hover:bg-blue-600 hover:text-white text-xs font-semibold text-white/90 transition-all duration-150 inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <span>Connect</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
