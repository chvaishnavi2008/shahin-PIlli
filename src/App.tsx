import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { JourneyTimeline } from './components/JourneyTimeline';
import { VideoStories } from './components/VideoStories';
import { Perspectives } from './components/Perspectives';
import { Connections } from './components/Connections';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PerspectiveModal } from './components/PerspectiveModal';
import { VIDEO_STORIES } from './data/shahinData';
import { VideoStory, PerspectiveArticle } from './types';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoStory | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<PerspectiveArticle | null>(null);

  const handleWatchIntro = () => {
    // Open the featured keynote address
    setSelectedVideo(VIDEO_STORIES[0]);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-[#f4f2eb] flex flex-col font-sans selection:bg-blue-600/35 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero onWatchIntro={handleWatchIntro} />

        {/* Section 2: Professional Profile */}
        <Profile />

        {/* Section 3: Professional Journey */}
        <JourneyTimeline />

        {/* Section 4: Video Stories */}
        <VideoStories onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* Section 5: Perspectives */}
        <Perspectives onSelectArticle={(article) => setSelectedArticle(article)} />

        {/* Section 6: Professional Connections */}
        <Connections />

        {/* Section 7: Contact & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <PerspectiveModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
