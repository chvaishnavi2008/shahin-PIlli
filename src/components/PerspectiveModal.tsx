import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PerspectiveArticle } from '../types';

interface PerspectiveModalProps {
  article: PerspectiveArticle | null;
  onClose: () => void;
}

export const PerspectiveModal: React.FC<PerspectiveModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [article]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0d0e15] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#090a10]">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
            <span>{article.category}</span>
            <span className="text-white/20">·</span>
            <span className="text-[#a4a199]">{article.readingTime}</span>
            <span className="text-white/20">·</span>
            <span className="text-[#a4a199]">{article.publishedDate}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#a4a199] hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Editorial Essay Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Article Lead Image */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-white/[0.08]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e15] via-transparent to-black/20" />
          </div>

          <div className="space-y-3">
            <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-bold text-white font-serif-title leading-tight">
              {article.title}
            </h2>
            <p className="text-sm text-[#b8b5ad] italic font-serif-title">
              {article.subtitle}
            </p>
          </div>

          {/* Abstract callout without thick border */}
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5">
              Executive Abstract
            </p>
            <p className="text-sm text-[#eae6de] leading-relaxed">
              {article.abstract}
            </p>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#cbc7be] leading-relaxed">
            {article.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Strategic Takeaways Box */}
          <div className="p-6 rounded-xl bg-[#12131d] border border-blue-500/20 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Core Strategic Directives
            </h4>
            <div className="space-y-2">
              {article.strategicTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#eae6de]">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Disclosure & Author Context */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#8f8c84]">
            <p>Authored as strategic analysis. No unverified personal claims or fabricated quotes.</p>
            <a
              href="https://www.linkedin.com/in/shahinpilli/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
