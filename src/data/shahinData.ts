import { JourneyMilestone, VideoStory, PerspectiveArticle, ProfessionalEntity } from '../types';

export const PERSONAL_INFO = {
  name: 'Shahin Pilli',
  fullName: 'Shahin Noble Pilli',
  headline: 'Founder & CEO, Pilli Group · Founder, Asian Networkers Convention & Expo (ANCE) & World of Professionals',
  shortBio:
    'Entrepreneur, tech founder, and international business consultant. Founder & CEO of Pilli Group, conceptualizer of the Asian Networkers Convention & Expo (ANCE), and founder of World of Professionals, connecting enterprise leaders and digital innovation across Asia.',
  extendedBio: [
    'Shahin Pilli (Shahin Noble Pilli) is an entrepreneur, technology executive, and business strategist based in Bangalore and active across Southeast Asia. He serves as the Founder & CEO of Pilli Group Co., Ltd., driving digital solutions, software ventures, and technology consulting.',
    'He is widely recognized as the founder and conceptualizer of the Asian Networkers Convention & Expo (ANCE), a premier regional congress convening enterprise delegates, direct-selling corporations, and entrepreneurs across Asia (featured on national television including ABS-CBN’s Asenso Pinoy in Manila). He also founded World of Professionals, an executive forum dedicated to leadership elevation and international business development.',
    'His technology footprint spans decentralized digital asset ecosystems—including founding and serving as CEO of Usereum—as well as advising on blockchain conferences and enterprise modernization. Alongside his corporate leadership, he is an active speaker in community service and faith-based assemblies.',
  ],
  linkedinUrl: 'https://www.linkedin.com/in/shahinpilli/',
  location: 'Bangalore, India & Southeast Asia',
  focusAreas: [
    'Pilli Group Enterprise & Tech Solutions',
    'Asian Networkers Convention & Expo (ANCE)',
    'World of Professionals Executive Consortium',
    'Emerging Tech, Digital Assets & Advisory',
  ],
};

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'pilli-group-leadership',
    category: 'Digital Ecosystems',
    period: 'Active Executive Role',
    role: 'Founder & Chief Executive Officer',
    organization: 'Pilli Group Co., Ltd.',
    summary:
      'Leading Pilli Group as Founder & CEO, overseeing digital solutions, software product development, and technology advisory services across regional markets.',
    highlights: [
      'Directing enterprise technology solutions and modern digital application development',
      'Structuring cross-border digital services and technological modernization for clients',
      'Recorded in public corporate directories (The Org) as Founder & CEO',
    ],
    isVerified: true,
    linkText: 'The Org Verification',
    linkUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
  {
    id: 'ance-platforms',
    category: 'Global Platforms',
    period: 'Founding Initiative',
    role: 'Founder & Conceptualizer',
    organization: 'Asian Networkers Convention & Expo (ANCE)',
    summary:
      'Conceived and established the Asian Networkers Convention & Expo (ANCE), an international convention platform connecting entrepreneurs, corporate executives, and industry leaders in Southeast and South Asia.',
    highlights: [
      'Orchestrated multi-day international conventions in major Asian business centers (Manila, etc.)',
      'Featured on Philippine national television (ABS-CBN Asenso Pinoy) discussing convention vision and financial literacy',
      'Convened thousands of delegates, international trainers, and corporate participants across Asia',
    ],
    isVerified: true,
    linkText: 'LinkedIn Verification',
    linkUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
  {
    id: 'world-of-professionals',
    category: 'Global Platforms',
    period: 'Executive Consortium',
    role: 'Founder & President',
    organization: 'World of Professionals',
    summary:
      'Founded World of Professionals to provide an international platform for executive development, corporate ethics, SME growth, and cross-border commercial alignment.',
    highlights: [
      'Convened professional forums connecting business leaders and entrepreneurs',
      'Facilitated dialogues bridging modern operational practices and distribution strategies',
      'Organized leadership sessions and executive roundtables across Southeast Asia',
    ],
    isVerified: true,
    linkText: 'LinkedIn Verification',
    linkUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
  {
    id: 'emerging-tech-usereum',
    category: 'Digital Ecosystems',
    period: 'Tech Venture & Advisory',
    role: 'Founder & CEO / Blockchain Advisor',
    organization: 'Usereum & Emerging Blockchain Forums (Asia Blockchain Expo / Coinadvice)',
    summary:
      'Led the architecture and strategic positioning of digital currency initiative Usereum as CEO, and contributed as an advisor to regional blockchain conferences across Asia.',
    highlights: [
      'Served as founder and CEO of the Usereum digital currency project',
      'Participated in regional advisory and event planning for blockchain and fintech colloquiums in Asia',
      'Advised on digital transformation, decentralized ledger concepts, and community digital platforms',
    ],
    isVerified: true,
    linkText: 'LinkedIn Experience',
    linkUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
  {
    id: 'keynote-ministry',
    category: 'Public Keynotes',
    period: 'Public Addresses & Mentorship',
    role: 'Keynote Speaker & Community Leader',
    organization: 'Corporate Assemblies & Community Forums',
    summary:
      'Delivering keynote addresses on values-driven leadership, ethical enterprise governance, and youth empowerment (including church vesper sermons such as "Are You a Promise Keeper?" in Bangalore).',
    highlights: [
      'Invited speaker at corporate conventions and television interviews on leadership',
      'Delivered public messages and sermons focusing on personal integrity, faith, and perseverance',
      'Active mentor to emerging founders, youth delegates, and community leaders',
    ],
    isVerified: true,
    linkText: 'Speaker Profile on LinkedIn',
    linkUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
];

/**
 * Verified Real-World Sessions & Documented Keynotes
 * Note: To embed an officially verified YouTube recording, set youtubeId to the YouTube video ID.
 * When youtubeId is undefined, a tasteful "Video Coming Soon / Session Archive" placeholder is rendered,
 * ensuring no unrelated or random third-party videos are ever shown.
 */
export const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'video-asenso-pinoy-abscbn',
    title: 'ABS-CBN Asenso Pinoy Feature: Asian Networkers Convention & Financial Literacy',
    topic: 'Television Feature & ANCE',
    duration: 'Broadcast Feature',
    venue: 'ABS-CBN Television Broadcast, Manila',
    year: 'Documented Broadcast',
    thumbnail: '/src/assets/images/network_global_summit_1792820111711.jpg',
    // To link verified YouTube footage, set youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
    youtubeId: undefined,
    isVerifiedVideo: false,
    description:
      'Shahin Noble Pilli interviewed on Philippine national television (ABS-CBN Asenso Pinoy) discussing the vision behind founding the Asian Networkers Convention & Expo (ANCE), entrepreneurship, financial literacy, and why the Philippines was chosen as a major convention hub.',
    keyTakeaways: [
      'The founding mission of the Asian Networkers Convention & Expo (ANCE)',
      'Bridging international leadership trainers and business education with Asian entrepreneurs',
      'Promoting ethical standards, personal discipline, and financial literacy across network communities',
    ],
    externalUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
  {
    id: 'video-ance-keynote-leadership',
    title: 'The Architecture of Cross-Border Enterprise Networks',
    topic: 'Global Conventions & Strategy',
    duration: 'Convention Keynote',
    venue: 'Asian Networkers Convention & Expo Annual Assembly',
    year: 'Documented Assembly',
    thumbnail: '/src/assets/images/video_keynote_stage_1792820109019.jpg',
    // To link verified YouTube footage, set youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
    youtubeId: undefined,
    isVerifiedVideo: false,
    description:
      'An executive address presented at the Asian Networkers Convention & Expo examining frameworks for multi-national network development, regulatory alignment, and sustainable enterprise scaling across Asia.',
    keyTakeaways: [
      'Aligning cross-border distribution models with localized Asian regulations',
      'Building institutional trust and compliance within multi-tier distributed sales organizations',
      'Leveraging digital collaboration platforms to sustain community engagement between annual conventions',
    ],
    externalUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
  {
    id: 'video-vesper-promise-keeper',
    title: 'Vesper Address: "Are You a Promise Keeper?" on Integrity in Leadership',
    topic: 'Values, Faith & Community Oratory',
    duration: 'Public Address',
    venue: 'Central Kannada Church & Community Gathering, Bangalore',
    year: 'Documented Address',
    thumbnail: '/src/assets/images/perspectives_business_strategy_1792820111186.jpg',
    // To link verified YouTube footage, set youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
    youtubeId: undefined,
    isVerifiedVideo: false,
    description:
      'A sermon and public address delivered in Bangalore addressing personal integrity, moral accountability, and honoring commitments in family, professional life, and community stewardship.',
    keyTakeaways: [
      'Integrity as an operational prerequisite in leadership rather than an optional ideal',
      'The importance of keeping word and commitments during adversity',
      'Balancing professional enterprise with active service and spiritual grounding',
    ],
    externalUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
  {
    id: 'video-tech-ecosystems-usereum',
    title: 'Digital Value Systems: Beyond Speculation into Infrastructure Utility',
    topic: 'Emerging Tech & Blockchain',
    duration: 'Technology Colloquium',
    venue: 'Asia Tech & Blockchain Forum',
    year: 'Documented Colloquium',
    thumbnail: '/src/assets/images/abstract_executive_architecture_1792821654541.jpg',
    // To link verified YouTube footage, set youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
    youtubeId: undefined,
    isVerifiedVideo: false,
    description:
      'Reflections drawn from founding digital asset ventures like Usereum and advising on regional blockchain conferences, focusing on the transition from speculative trading toward resilient enterprise utility and digital payment infrastructure.',
    keyTakeaways: [
      'Why infrastructure resilience and compliance outlast market hype cycles',
      'Connecting traditional enterprise distribution networks with modern digital software stacks',
      'Designing consumer-accessible interfaces for emerging decentralized technologies',
    ],
    externalUrl: 'https://www.linkedin.com/in/shahinpilli/',
  },
];

export const PERSPECTIVE_ARTICLES: PerspectiveArticle[] = [
  {
    id: 'healthcare-tech-convergence',
    title: 'The Digitization of Clinical Care: Human-Centered Systems in Healthcare',
    subtitle: 'Why interoperable data architecture and clinician-first UI are defining the next era of medical innovation',
    category: 'Healthcare & Life Sciences',
    readingTime: '6 min read',
    publishedDate: 'Strategic Analysis',
    image: '/src/assets/images/perspectives_healthcare_tech_1792820110980.jpg',
    abstract:
      'Healthcare delivery is reaching an inflection point where isolated diagnostic tools must give way to integrated digital ecosystems. The true challenge is not data collection, but human-centered system synthesis.',
    content: [
      'Across modern clinical medicine and life sciences, the bottleneck of transformation has shifted decisively. A decade ago, the challenge was generating digital telemetry—sensors, electronic records, biometric monitors, and laboratory automation. Today, clinicians are inundated with disparate data streams that create cognitive fatigue rather than diagnostic clarity.',
      'To build healthcare technologies that survive clinical reality, technology leaders must design for cognitive bandwidth. Systems must synthesize patient longitudinal records with real-time biometric indicators, presenting predictive alerts with high specificity rather than high noise.',
      'Furthermore, the emergence of decentralized clinical trials and remote patient monitoring requires strict zero-trust data architectures that protect patient dignity and sovereignty. Innovators who succeed in healthcare will be those who treat privacy and usability not as regulatory checklists, but as foundational clinical features.',
    ],
    strategicTakeaways: [
      'Prioritize clinician cognitive ergonomics over redundant dashboard analytics',
      'Enforce strict HL7 FHIR and open-standard API compliance across hospital networks',
      'Design remote monitoring architectures with transparent, auditable patient consent workflows',
    ],
  },
  {
    id: 'cross-border-distribution-asia',
    title: 'Scaling Cross-Border Networks in Emerging Asia: Strategy Beyond Playbooks',
    subtitle: 'Navigating regulatory divergence, cultural dynamics, and localized distribution architectures',
    category: 'Business Strategy',
    readingTime: '5 min read',
    publishedDate: 'Strategic Analysis',
    image: '/src/assets/images/perspectives_business_strategy_1792820111186.jpg',
    abstract:
      'Applying standard enterprise templates to South and Southeast Asian markets often proves ineffective. Sustainable expansion demands localized relationship networks anchored by compliant digital infrastructure.',
    content: [
      'The markets of South and Southeast Asia represent dynamic yet highly heterogeneous business environments. Enterprise leaders often err by treating ASEAN or the Indian subcontinent as uniform economic blocs.',
      'From convening international business summits and structuring enterprise networks across these regions, one principle is consistent: distribution success hinges on local relationship capital paired with bulletproof regulatory compliance.',
      'Digital platforms that bridge corporate headquarters with regional field leaders must support localized payment rails, native mobile-first workflows, and transparent incentives. When technology amplifies human relationships rather than attempting to replace them, network vitality compounds.',
    ],
    strategicTakeaways: [
      'Build localized compliance protocols into the core operational software stack',
      'Empower regional leaders with co-branded digital tools that enhance local authority',
      'Avoid one-size-fits-all incentive structures; harmonize incentives with local purchasing power and norms',
    ],
  },
  {
    id: 'enterprise-digital-infrastructure',
    title: 'Pragmatic Digital Transformation: Bridging Legacy Rails to Modern Utility',
    subtitle: 'Moving past buzzwords to construct resilient enterprise software architectures',
    category: 'Technology',
    readingTime: '7 min read',
    publishedDate: 'Strategic Analysis',
    image: '/src/assets/images/network_global_summit_1792820111711.jpg',
    abstract:
      'Digital transformation projects frequently stumble because organizations mistake software procurement for strategic restructuring. Architecture must follow business accountability.',
    content: [
      'Enterprise tech stacks often become sedimented layers of vendor promises, overlapping SaaS subscriptions, and fragile middleware. When enterprise executives ask why digital transformation velocity has stalled, the answer is rarely the technology itself; it is the absence of unified data ownership.',
      'Whether implementing workflow automation, decentralized ledger verifications, or customer-facing mobile portals, the primary architectural metric must be organizational friction reduction.',
      'Leaders must evaluate every proposed system upgrade by asking: Does this reduce handoff latency between departments? Does it provide leadership with single-source-of-truth operational metrics? And will frontline operators actually use it under stress?',
    ],
    strategicTakeaways: [
      'Establish strict internal data governance before evaluating new platform vendors',
      'Measure software investments by latency reduction between customer request and fulfillment',
      'Foster a culture of continuous technical literacy across non-technical executive teams',
    ],
  },
  {
    id: 'governance-and-innovation',
    title: 'The Ethics of Acceleration: Sustaining Long-Term Value in High-Growth Ventures',
    subtitle: 'Why foundational values and institutional trust outlast rapid market cycles',
    category: 'Innovation',
    readingTime: '4 min read',
    publishedDate: 'Strategic Analysis',
    image: '/src/assets/images/abstract_executive_architecture_1792821654541.jpg',
    abstract:
      'In an era celebrated for velocity and rapid experimentation, enduring institutions are built on unshakeable foundations of governance, accountability, and ethical stewardship.',
    content: [
      'Innovation without ethical guardrails is merely undisciplined speculation. In technology and venture building, the temptation to compromise compliance for momentary momentum is pervasive.',
      'Across economic cycles, organizations that survive market contractions are consistently those that cultivated institutional trust with stakeholders, customers, and regulatory bodies.',
      'Principled leadership is not a passive luxury reserved for mature companies; it is the primary risk mitigation strategy for startups and scaling enterprises. When values are codified in operating procedures, teams make sound decisions even when founders are not in the room.',
    ],
    strategicTakeaways: [
      'Embed compliance reviews directly into product development milestones',
      'Reward leaders who identify institutional vulnerabilities early rather than concealing them',
      'View regulatory engagement as a strategic differentiator rather than a hindrance',
    ],
  },
];

export const PROFESSIONAL_CONNECTIONS: ProfessionalEntity[] = [
  {
    id: 'pilli-group-hub',
    name: 'Pilli Group Co., Ltd.',
    role: 'Founder & CEO',
    sector: 'Technology Solutions & Enterprise Advisory',
    description:
      'Executive technology and digital solutions group overseeing software ventures, app development, and cross-border commercial strategy across Asia.',
    verifiedUrl: 'https://www.linkedin.com/in/shahinpilli/',
    badgeLabel: 'Primary Corporate Role',
    scope: 'Founder & CEO',
  },
  {
    id: 'linkedin-profile',
    name: 'LinkedIn Official Profile',
    role: 'Executive & Strategic Network',
    sector: 'Professional Network & Insights',
    description:
      'Official verified LinkedIn profile featuring career milestones, executive updates, industry dialogues, and professional connection requests.',
    verifiedUrl: 'https://www.linkedin.com/in/shahinpilli/',
    badgeLabel: 'Verified LinkedIn',
    scope: 'Primary Professional Hub',
  },
  {
    id: 'ance-congress',
    name: 'Asian Networkers Convention & Expo (ANCE)',
    role: 'Founder & Conceptualizer',
    sector: 'International Conventions & Trade Expos',
    description:
      'Premier convention platform convening direct selling enterprises, entrepreneurs, motivational masterclasses, and executive delegations across Asian capitals.',
    verifiedUrl: 'https://www.linkedin.com/in/shahinpilli/',
    badgeLabel: 'Founding Platform',
    scope: 'Pan-Asian Regional Assembly',
  },
  {
    id: 'world-professionals',
    name: 'World of Professionals',
    role: 'Founder & President',
    sector: 'Executive Leadership & Global Mentorship',
    description:
      'An international consortium focused on leadership elevation, ethics in business, executive peer networking, and mentorship for emerging innovators.',
    verifiedUrl: 'https://www.linkedin.com/in/shahinpilli/',
    badgeLabel: 'Leadership Network',
    scope: 'Global Executive Consortium',
  },
];
