import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Profile', href: '#profile' },
  { label: 'Journey', href: '#journey' },
  { label: 'Keynotes', href: '#videos' },
  { label: 'Perspectives', href: '#perspectives' },
  { label: 'Connections', href: '#connections' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Section intersection detection
      const sections = ['profile', 'journey', 'videos', 'perspectives', 'connections', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06070a]/94 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/60 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Subtle reading progress hairline indicator */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              onClick={(e) => scrollToAnchor(e, '#')}
              className="text-lg md:text-xl font-bold tracking-tight text-[#f5f5f0] hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
              aria-label="Shahin Pilli Home"
            >
              <span>SHAHIN PILLI</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
            </a>

            {/* Zone 2: 4-5 clean single-line text navigation links */}
            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#c4c1b9]"
              aria-label="Main Navigation"
            >
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToAnchor(e, item.href)}
                    className={`transition-colors whitespace-nowrap shrink-0 relative py-1 group ${
                      isActive ? 'text-white' : 'hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-blue-500 transition-all duration-200 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => scrollToAnchor(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-150 shadow-md shadow-blue-600/20 active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>

              {/* Mobile hamburger trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#c4c1b9] hover:text-white hover:bg-white/[0.05] transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-16 right-0 left-0 bottom-0 bg-[#0c0d14] border-t border-white/[0.08] p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6 pt-4">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium font-mono-tabular block">
                Executive Portfolio Navigation
              </span>
              <div className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToAnchor(e, item.href)}
                    className="text-2xl font-serif-title font-normal text-[#f4f2eb] hover:text-blue-400 transition-colors py-1 border-b border-white/[0.05]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08] space-y-4">
              <a
                href="#contact"
                onClick={(e) => scrollToAnchor(e, '#contact')}
                className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/shahinpilli/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 rounded-xl text-xs font-medium flex items-center justify-center gap-2 border border-white/[0.08] transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Verified LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
