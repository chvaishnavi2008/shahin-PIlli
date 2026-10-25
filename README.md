# Shahin Pilli — Executive Digital Experience & Personal Brand Website

A bespoke, cinematic executive website for **Shahin Pilli** (Shahin Noble Pilli) built using verified public information, documented international initiatives, and his official LinkedIn profile (`https://www.linkedin.com/in/shahinpilli/`).

Designed in accordance with the modern high-standard frontend constitution:
- **Atmospheric Palette**: Deep charcoal and obsidian backgrounds (`#08090d`, `#0a0b10`), warm ivory typography (`#f5f5f0`, `#eae6de`), and restrained electric-blue accents (`#3b82f6`, `#2563eb`).
- **Zero-Pill Discipline**: Metadata displayed as unboxed editorial text with clean typographic separators (`·` and `/`).
- **Oversized Editorial Typography**: Pairing architectural display sans (`Plus Jakarta Sans`) with luxury editorial serif titles (`Playfair Display`) and tabular numerals (`JetBrains Mono`).
- **Ethical Asset Integrity**: No AI-generated portraits presented as actual photographs of Shahin Pilli; replaced with abstract conceptual executive technology architecture.
- **Verified Public Information Only**: Zero fabricated statistics, invented testimonials, or ungrounded credentials.

---

## 🏛️ Website Architecture & Sections

1. **Executive Hero (`src/components/Hero.tsx`)**  
   - Split-screen editorial layout introducing Shahin Pilli with the central theme: *Connecting technology, business strategy & global enterprise innovation*.
   - Architectural abstract technology visualization with measured scrim.
   - Full-width 4-pillar foundation row (Strategy, Infrastructure, Platforms, Oratory) with functional smooth anchor navigation.

2. **Professional Profile (`src/components/Profile.tsx`)**  
   - Concise biography strictly derived from verified public sources.
   - Direct verification card linking to `https://www.linkedin.com/in/shahinpilli/`.
   - Core competency breakdown: Global Convention Platforms, Digital Tech Ecosystems, Cross-Border Advisory, Values-Driven Thought Leadership.

3. **Professional Journey (`src/components/JourneyTimeline.tsx`)**  
   - Interactive editorial chronology with topic filtering (Global Platforms, Digital Ecosystems, Advisory & Growth, Public Keynotes).
   - Documented initiatives including the **Asian Networkers Convention & Expo (ANCE)**, **World of Professionals**, **Usereum & Blockchain Initiatives**, and community addresses.

4. **Video Stories (`src/components/VideoStories.tsx` & `VideoModal.tsx`)**  
   - Interactive horizontal carousel with previous/next scroll controls, duration tags, and verified markers.
   - Accessible session brief modal featuring a tasteful **"Video Recording Coming Soon"** placeholder for archived addresses, avoiding unrelated or random third-party videos.
   - Simple configuration: To embed an officially verified YouTube video, set `youtubeId: "YOUR_YOUTUBE_ID"` in `src/data/shahinData.ts`.

5. **Perspectives (`src/components/Perspectives.tsx` & `PerspectiveModal.tsx`)**  
   - Strategic essays on healthcare technology convergence, cross-border distribution in emerging Asia, enterprise digital transformation, and governance in innovation.
   - Reader modal for deep immersion with core strategic directives.

6. **Professional Connections (`src/components/Connections.tsx`)**  
   - Verified gateways to LinkedIn, ANCE, World of Professionals, and tech initiatives.

7. **Contact & Executive Inquiries (`src/components/Contact.tsx`)**  
   - Dialogue inquiry form with subject routing, field validation, confirmation state, and direct LinkedIn connection links.

8. **Top Bar Contract & Navigation (`src/components/Navbar.tsx`)**  
   - Conforms strictly to the 1-row, 3-zone contract:
     `[Wordmark] — [5 Single-Line Text Links] — [1 Primary Action Button]`
   - Full keyboard accessibility, active scroll-spy highlight, and mobile overlay drawer.

---

## 💻 Tech Stack

- **Framework**: React 19 (TypeScript)
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4 with custom dark mode variables
- **Icons**: Lucide React
- **Animations**: CSS transitions & smooth scroll behavior

---

## 🎬 How to Embed Verified YouTube Videos

In `src/data/shahinData.ts`, find `VIDEO_STORIES` and set `youtubeId`:

```typescript
export const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'video-ance-leadership',
    title: 'The Architecture of Cross-Border Enterprise Networks',
    // Replace undefined with your verified YouTube ID:
    youtubeId: 'YOUR_YOUTUBE_ID_HERE', 
    isVerifiedVideo: true,
    ...
  }
];
```

When `youtubeId` is `undefined`, the application renders the elegant executive placeholder, ensuring zero unrelated videos ever appear.

---

## 🚀 Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI (Quickest)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from repository root
vercel
```

### Option 2: GitHub Integration via Vercel Dashboard
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import the GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your site will be live on an HTTPS custom subdomain within 60 seconds.

---

## 🛡️ Asset Management & Verified Imagery

All media assets are stored in `/src/assets/images/`:
- Abstract Architecture Visual: `abstract_executive_architecture_*.jpg`
- Keynote stage: `video_keynote_stage_*.jpg`
- Healthcare tech: `perspectives_healthcare_tech_*.jpg`
- Strategy boardroom: `perspectives_business_strategy_*.jpg`
- Summit & convention: `network_global_summit_*.jpg`

*Note on portrait photography*: In compliance with ethical executive branding standards, AI-generated portraits are not presented as photographs of Shahin Pilli. An authentic high-resolution photograph can be placed in `src/assets/images/` and referenced in `Hero.tsx` when provided.
