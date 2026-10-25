export interface NavItem {
  label: string;
  href: string;
}

export interface JourneyMilestone {
  id: string;
  category: 'Global Platforms' | 'Digital Ecosystems' | 'Advisory & Growth' | 'Public Keynotes';
  period: string;
  role: string;
  organization: string;
  summary: string;
  highlights: string[];
  isVerified: boolean;
  linkText?: string;
  linkUrl?: string;
}

export interface VideoStory {
  id: string;
  title: string;
  topic: string;
  duration?: string;
  venue: string;
  year: string;
  thumbnail: string;
  /**
   * If a verified YouTube video ID is known (e.g. "dQw4w..."), specify it here.
   * If undefined or empty, a tasteful "Video Coming Soon" placeholder is rendered,
   * completely avoiding unrelated or dummy third-party videos.
   */
  youtubeId?: string;
  isVerifiedVideo: boolean;
  description: string;
  keyTakeaways: string[];
  externalUrl?: string;
}

export interface PerspectiveArticle {
  id: string;
  title: string;
  subtitle: string;
  category: 'Technology' | 'Healthcare & Life Sciences' | 'Business Strategy' | 'Innovation';
  readingTime: string;
  publishedDate: string;
  image: string;
  abstract: string;
  content: string[];
  strategicTakeaways: string[];
}

export interface ProfessionalEntity {
  id: string;
  name: string;
  role: string;
  sector: string;
  description: string;
  verifiedUrl: string;
  badgeLabel: string;
  scope: string;
}
