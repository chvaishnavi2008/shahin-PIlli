import React, { useState, useEffect } from 'react';
import { X, Play, Clock, MapPin, ShieldCheck, ArrowUpRight, Share2, Check, Video, FileText, Sparkles } from 'lucide-react';
import { VideoStory } from '../types';

interface VideoModalProps {
  video: VideoStory | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (video) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [video]);

  if (!video) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasVerifiedEmbed = Boolean(video.youtubeId && video.youtubeId.trim().length > 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/92 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0e0f17] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.08] bg-[#090a10]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              {video.topic}
            </span>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-1.5 text-xs text-[#a4a199]">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Documented Keynote Archive</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-1.5 rounded-lg text-[#a4a199] hover:text-white hover:bg-white/[0.08] transition-colors text-xs flex items-center gap-1"
              aria-label="Share session"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#a4a199] hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player or Tasteful "Video Coming Soon" Placeholder */}
        <div className="relative bg-black aspect-video w-full flex items-center justify-center overflow-hidden">
          {hasVerifiedEmbed ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#07080d]">
              {/* Abstract Backdrop Image */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.25] blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f17] via-black/60 to-black/80" />

              {/* Tasteful Executive Placeholder Content */}
              <div className="relative z-10 max-w-lg space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400 shadow-xl shadow-blue-500/10">
                  <Video className="w-8 h-8" />
                </div>

                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Video Recording Coming Soon</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-serif-title">
                    Archived Session Brief
                  </h4>
                  <p className="text-xs sm:text-sm text-[#b8b5ad] leading-relaxed">
                    Official video footage for this keynote is pending verification. Only verified recordings featuring Shahin Pilli are hosted on this platform.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/shahinpilli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-lg shadow-blue-600/20"
                  >
                    <span>Inquire via LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Developer Replacement Instruction Note */}
                <p className="text-[11px] text-white/30 font-mono-tabular pt-2">
                  Replace ready: Set <code className="text-blue-300">youtubeId</code> in <code className="text-slate-400">src/data/shahinData.ts</code>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Video Session Content & Executive Briefing (Scrollable) */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5 bg-[#0e0f17]">
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#a4a199] mb-1.5 font-mono-tabular">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>{video.duration || 'Session Archive'}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{video.venue}</span>
              </span>
              <span>·</span>
              <span>{video.year}</span>
            </div>
            <h3 id="video-modal-title" className="text-xl sm:text-2xl font-bold text-white font-serif-title">
              {video.title}
            </h3>
          </div>

          <p className="text-sm text-[#cbc7be] leading-relaxed">
            {video.description}
          </p>

          {/* Key Strategic Discussion Points */}
          <div className="space-y-2 pt-2 border-t border-white/[0.08]">
            <p className="text-xs uppercase tracking-wider font-semibold text-white/60 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Key Executive Discussion Points</span>
            </p>
            <ul className="space-y-1.5">
              {video.keyTakeaways.map((point, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-[#a4a199] flex items-start gap-2">
                  <span className="text-blue-400 font-mono-tabular">0{idx + 1}.</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08]">
            <a
              href={video.externalUrl || 'https://www.linkedin.com/in/shahinpilli/'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Connect on LinkedIn to Discuss</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-xs font-medium text-white rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
