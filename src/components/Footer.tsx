import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/shahinData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] py-12 text-[#8f8c84] text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Verification */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-center md:text-left">
            <span className="font-bold text-white tracking-wider">SHAHIN PILLI</span>
            <span className="text-white/20">·</span>
            <span>Executive Portfolio</span>
            <span className="text-white/20">·</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Public Profile</span>
            </a>
          </div>

          {/* Site Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-[#a4a199]" aria-label="Footer Navigation">
            <a href="#profile" onClick={(e) => scrollToAnchor(e, 'profile')} className="hover:text-white transition-colors">Profile</a>
            <a href="#journey" onClick={(e) => scrollToAnchor(e, 'journey')} className="hover:text-white transition-colors">Journey</a>
            <a href="#videos" onClick={(e) => scrollToAnchor(e, 'videos')} className="hover:text-white transition-colors">Keynotes</a>
            <a href="#perspectives" onClick={(e) => scrollToAnchor(e, 'perspectives')} className="hover:text-white transition-colors">Perspectives</a>
            <a href="#connections" onClick={(e) => scrollToAnchor(e, 'connections')} className="hover:text-white transition-colors">Connections</a>
            <a href="#contact" onClick={(e) => scrollToAnchor(e, 'contact')} className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Back to top action */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quiet Subtext */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#716e67]">
          <p>© {new Date().getFullYear()} Shahin Noble Pilli. All documented initiatives sourced from public records.</p>
          <p>Engineered for high-fidelity executive presentation and accessibility standards.</p>
        </div>
      </div>
    </footer>
  );
};
