import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Clock, ShieldCheck, Video, MapPin, Eye, ArrowUpRight } from 'lucide-react';
import { VIDEO_STORIES } from '../data/shahinData';
import { VideoStory } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

interface VideoStoriesProps {
  onSelectVideo: (video: VideoStory) => void;
}

export const VideoStories: React.FC<VideoStoriesProps> = ({ onSelectVideo }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const filmstripRef = useRef<HTMLDivElement>(null);

  const activeVideo = VIDEO_STORIES[activeStoryIndex];

  const handleSelectStory = (idx: number) => {
    setActiveStoryIndex(idx);
    if (filmstripRef.current) {
      const items = filmstripRef.current.querySelectorAll('.filmstrip-item');
      if (items[idx]) {
        (items[idx] as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  const handleNext = () => {
    const nextIdx = (activeStoryIndex + 1) % VIDEO_STORIES.length;
    handleSelectStory(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeStoryIndex - 1 + VIDEO_STORIES.length) % VIDEO_STORIES.length;
    handleSelectStory(prevIdx);
  };

  const scrollFilmstrip = (direction: 'left' | 'right') => {
    if (filmstripRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      filmstripRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="videos" className="py-24 md:py-32 bg-[#06070a] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background illumination */}
      <div
        className="absolute top-1/3 right-1/4 w-[650px] h-[450px] bg-blue-600/[0.03] blur-[160px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with Reveal */}
        <RevealOnScroll direction="up" delayMs={50}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 font-mono-tabular">
                <Video className="w-4 h-4 text-blue-400" />
                <span>Documented Oratory & Broadcasts</span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span>Executive Archive</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f0] font-serif-title leading-tight">
                Cinematic video stories & documented sessions.
              </h2>
              <p className="text-[#a4a199] text-base leading-relaxed">
                Archived keynote addresses, national television broadcasts, and community discourses across Asian platforms. Strictly verified public sessions.
              </p>
            </div>

            {/* Carousel Stepper Controls */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-xs font-mono-tabular text-[#8f8c84] px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08]">
                <span className="text-white font-semibold">0{activeStoryIndex + 1}</span>
                <span className="text-white/30 mx-1">/</span>
                <span>0{VIDEO_STORIES.length}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.09] hover:border-blue-500/40 transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Previous keynote video"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/[0.09] hover:border-blue-500/40 transition-all active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Next keynote video"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* FEATURED CINEMA SPOTLIGHT (Main Active Stage with anim-stage-card key transition) */}
        <RevealOnScroll direction="up" delayMs={150}>
          <div
            key={activeVideo.id}
            className="anim-stage-card rounded-3xl overflow-hidden bg-[#0c0d15] border border-white/[0.1] shadow-2xl relative mb-10 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
              {/* Visual Media Canvas (Left/Top) */}
              <div className="lg:col-span-7 relative overflow-hidden bg-black flex items-center justify-center min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d15] via-black/40 to-transparent opacity-85" />

                {/* Badges on Media */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-xs font-mono-tabular text-white border border-white/10 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{activeVideo.duration}</span>
                  </span>

                  <span className="px-3 py-1 rounded-md bg-blue-950/90 backdrop-blur-md text-xs font-mono-tabular text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Verified Session</span>
                  </span>
                </div>

                {/* Giant Play Trigger with hover and active physics */}
                <button
                  type="button"
                  onClick={() => onSelectVideo(activeVideo)}
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 group-hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer focus-visible:ring-4 focus-visible:ring-blue-400"
                  aria-label={`Open video modal for ${activeVideo.title}`}
                >
                  <Play className="w-8 h-8 ml-1 fill-white" />
                </button>
              </div>

              {/* Editorial Information Panel (Right/Bottom) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-[#0c0d15]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-mono-tabular">
                    <span>{activeVideo.topic}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-[#a4a199] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {activeVideo.venue}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-title leading-snug">
                    {activeVideo.title}
                  </h3>

                  <p className="text-sm text-[#b8b5ad] leading-relaxed">
                    {activeVideo.description}
                  </p>

                  {/* Key Discussion Points List */}
                  <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 block font-mono-tabular">
                      Core Insights & Takeaways
                    </span>
                    <ul className="space-y-2">
                      {activeVideo.keyTakeaways.slice(0, 2).map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-[#cbc7be] flex items-start gap-2">
                          <span className="text-blue-400 font-mono-tabular">0{pIdx + 1}.</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectVideo(activeVideo)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-all shadow-md shadow-blue-600/25 active:scale-95 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Briefing & Play</span>
                  </button>

                  <a
                    href={activeVideo.externalUrl || 'https://www.linkedin.com/in/shahinpilli/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8f8c84] hover:text-blue-400 transition-colors inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <span>LinkedIn Archive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* HORIZONTAL FILMSTRIP GALLERY TRACK WITH SMOOTH SLIDING */}
        <RevealOnScroll direction="up" delayMs={200}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono-tabular">
                Select Session from Filmstrip
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-blue-400 font-mono-tabular">Click card to switch spotlight</span>
                <div className="hidden sm:flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => scrollFilmstrip('left')}
                    className="p-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Scroll filmstrip left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollFilmstrip('right')}
                    className="p-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Scroll filmstrip right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={filmstripRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth touch-pan-x"
              style={{ scrollbarWidth: 'none' }}
            >
              {VIDEO_STORIES.map((story, idx) => {
                const isSelected = activeStoryIndex === idx;
                return (
                  <div
                    key={story.id}
                    onClick={() => handleSelectStory(idx)}
                    className={`filmstrip-item min-w-[280px] sm:min-w-[320px] max-w-[340px] rounded-2xl bg-[#0f1019] border transition-all duration-300 p-4 snap-start shrink-0 cursor-pointer group flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-500 ring-2 ring-blue-500/40 bg-[#121422] shadow-xl scale-[1.01]'
                        : 'border-white/[0.08] hover:border-white/[0.25] hover:bg-[#11121d] hover:scale-[1.01]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black/60">
                        <img
                          src={story.thumbnail}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono-tabular text-white">
                          {story.duration}
                        </div>
                      </div>

                      <div>
                        <span className="text-[11px] font-mono-tabular text-blue-400 block">
                          {story.topic}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2 mt-1">
                          {story.title}
                        </h4>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#8f8c84]">
                      <span className="font-mono-tabular">{story.year}</span>
                      <span className={`text-[11px] font-medium ${isSelected ? 'text-blue-400 font-semibold' : 'text-slate-400 group-hover:text-white'}`}>
                        {isSelected ? '● Currently Active' : 'Select Session'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
