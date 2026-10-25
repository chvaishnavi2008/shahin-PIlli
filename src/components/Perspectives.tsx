import React from 'react';
import { ArrowUpRight, BookOpen, Quote, Sparkles } from 'lucide-react';
import { PERSPECTIVE_ARTICLES } from '../data/shahinData';
import { PerspectiveArticle } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

interface PerspectivesProps {
  onSelectArticle: (article: PerspectiveArticle) => void;
}

export const Perspectives: React.FC<PerspectivesProps> = ({ onSelectArticle }) => {
  const leadArticle = PERSPECTIVE_ARTICLES[0];
  const secondaryArticles = PERSPECTIVE_ARTICLES.slice(1);

  return (
    <section id="perspectives" className="py-24 md:py-32 bg-[#08090d] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Masthead with Reveal */}
        <RevealOnScroll direction="up" delayMs={50}>
          <div className="border-b border-white/[0.08] pb-10 mb-14 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tabular uppercase tracking-widest text-blue-400">
              <span>Executive Discourse & Strategic Essays</span>
              <span className="text-[#8f8c84]">Curated Monograph Series</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f5f5f0] font-serif-title max-w-4xl leading-[1.08]">
              Perspectives on technology, healthcare convergence & enterprise strategy.
            </h2>

            <p className="text-[#a4a199] text-base max-w-2xl leading-relaxed">
              Thought leadership examining system architectures, healthcare informatics, cross-border distribution models, and principled venture governance.
            </p>
          </div>
        </RevealOnScroll>

        {/* ASYMMETRIC COVER STORY (Digital Magazine Lead Spread) with Reveal */}
        <RevealOnScroll direction="up" delayMs={150}>
          <div className="rounded-3xl bg-[#0c0d15] border border-white/[0.1] shadow-2xl p-8 sm:p-12 mb-14 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left: Headline & Pull-Quote Editorial */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono-tabular text-blue-400">
                  <span>Featured Cover Essay</span>
                  <span className="text-white/20">·</span>
                  <span>{leadArticle.category}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-[#8f8c84]">{leadArticle.readingTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif-title leading-tight">
                  {leadArticle.title}
                </h3>

                <p className="text-base text-[#b8b5ad] leading-relaxed">
                  {leadArticle.abstract}
                </p>

                {/* Editorial Pull Quote */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border-l-2 border-blue-500/80 space-y-2">
                  <Quote className="w-5 h-5 text-blue-400" />
                  <p className="text-sm font-serif italic text-[#eae6de] leading-relaxed">
                    "Innovators who succeed in healthcare will be those who treat privacy, clinician cognitive bandwidth, and interoperability not as regulatory checklists, but as foundational clinical features."
                  </p>
                </div>

                {/* Strategic Takeaways Pills/Points */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/50 block font-mono-tabular">
                    Key Strategic Directives
                  </span>
                  <ul className="space-y-1.5">
                    {leadArticle.strategicTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="text-xs text-[#a4a199] flex items-start gap-2">
                        <span className="text-blue-400 font-mono-tabular">0{tIdx + 1}.</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => onSelectArticle(leadArticle)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl inline-flex items-center gap-2 transition-all shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Complete Monograph</span>
                  </button>
                </div>
              </div>

              {/* Right: Editorial Visual Artwork Canvas */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#12131d] shadow-xl">
                  <img
                    src={leadArticle.image}
                    alt={leadArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Strict Clarification: Illustrative Editorial Artwork */}
                <div className="pt-3 text-[11px] text-[#7d7a72] font-mono-tabular flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span>Conceptual Graphic: Illustrative digital artwork for executive discourse</span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* SECONDARY BROADSHEET EDITORIAL COLUMNS (3 Columns) with Staggered Reveal */}
        <RevealOnScroll direction="up" delayMs={200}>
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono-tabular">
                Complementary Strategic Briefings
              </span>
              <span className="text-xs text-blue-400 font-mono-tabular">Select article to examine</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {secondaryArticles.map((article, idx) => (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="p-7 rounded-2xl bg-[#0c0d15] border border-white/[0.08] interactive-card flex flex-col justify-between group cursor-pointer shadow-xl focus-visible:ring-2 focus-visible:ring-blue-400"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectArticle(article);
                    }
                  }}
                >
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-[#141520] border border-white/[0.08]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>

                    {/* Clean unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs text-blue-400 font-mono-tabular">
                      <span>{article.category}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-[#8f8c84]">{article.readingTime}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors font-serif-title leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-xs text-[#a4a199] line-clamp-3 leading-relaxed">
                      {article.abstract}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-blue-400 font-medium inline-flex items-center gap-1 group-hover:underline">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Analysis</span>
                    </span>

                    <ArrowUpRight className="w-4 h-4 text-[#8f8c84] group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
