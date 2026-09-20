<div align="center">

# 🎓 SAIT Website Redesign

### Student Association for Information Technology — CUSAT

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-sait--website--main.vercel.app-black?style=for-the-badge&logo=vercel)](https://sait-website-main.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.x-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

<br/>

> A modern, fully animated website for SAIT — the CS/IT student community at CUSAT (Cochin University of Science and Technology). Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

<br/>

**[🌐 Visit Live Site →](https://sait-website-main.vercel.app)**

</div>

---

## ✨ Features

- 🌑 **Dark-first design** — elegant dark UI with amber accent (`#F59E0B`)
- 🎞️ **Smooth animations** — Framer Motion page transitions & scroll reveals throughout
- 📱 **Fully responsive** — optimized for mobile, tablet, and desktop
- ⚡ **Static generation** — all 12 routes prerendered for blazing fast load times
- 🔍 **Search & filters** — alumni directory, announcements, events with real-time filtering
- 🗂️ **Activity Logger** — track your SAIT journey and contributions
- 🏆 **Achievements & Placements** — showcase student success stories
- 🎤 **Events** — browse, filter and register for upcoming SAIT events
- 📰 **Archive** — digital magazine archive with feature layouts
- 👥 **People** — executive committee & club member profiles

---

## 🗺️ Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, highlights, stats |
| `/about` | About SAIT — history, mission, clubs |
| `/people` | Executive committee & member profiles |
| `/events` | Upcoming & past events with registration |
| `/achievements` | Student & club achievements |
| `/alumni` | Alumni directory with search & filter |
| `/placements` | Placement records & stats |
| `/announcements` | Notices, deadlines & updates |
| `/archive` | SAIT magazine archive |
| `/journey` | Timeline of SAIT's history |
| `/activity-logger` | Log & track your SAIT activities |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.3.4 | React framework, routing, SSG |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 13.x | Animations & transitions |
| [Lucide React](https://lucide.dev/) | 1.x | Icon library |
| [Vercel](https://vercel.com/) | — | Hosting & deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm `>= 9.x`

### Installation

```bash
# Clone the repository
git clone https://github.com/Abhishekprakash591/sait-website-redesign.git
cd sait-website-redesign

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
sait-website-redesign/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── alumni/
│   ├── announcements/
│   ├── events/
│   ├── achievements/
│   ├── placements/
│   ├── people/
│   ├── archive/
│   ├── journey/
│   └── activity-logger/
├── components/             # Reusable UI components
│   ├── layout/             # Navbar, Footer, PageWrapper
│   ├── shared/             # SectionHeading, FadeInView, etc.
│   ├── home/               # Hero, stats, highlights
│   ├── alumni/             # Alumni cards, spotlight
│   ├── events/             # Event cards, registration modal
│   └── ...                 # Other feature components
├── data/                   # Static data (alumni, events, etc.)
├── lib/                    # Utility functions
└── public/                 # Static assets
```

---

## 🌐 Deployment

This project is deployed on **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Abhishekprakash591/sait-website-redesign)

**Live URL:** https://sait-website-main.vercel.app

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by the SAIT community at CUSAT

[![GitHub](https://img.shields.io/badge/GitHub-Abhishekprakash591-181717?style=flat-square&logo=github)](https://github.com/Abhishekprakash591)

</div>
