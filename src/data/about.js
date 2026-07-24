// About page content.
//
// The About page is a single "narrative scroll" you read top to bottom:
//   hero intro → my story + at-a-glance stats → the four disciplines → CTA.
// Every piece of copy lives here so the page can be re-worded or re-ordered
// without touching the component. The visual style mirrors the home
// post-footer (cyan accent, dark cards, tool chips).

import profilePhoto from '../assets/abhinav-kp.png';
import eda from '../assets/eda.png';
import dev from '../assets/dev.png';
import sound from '../assets/sound.png';

import { companyLogos } from './companyLogos';

export const aboutPage = {
  // ---- Hero intro panel -------------------------------------------------
  eyebrow: 'About',
  photo: profilePhoto,
  // Heading renders as `lead` + accent word (cyan) + `tail`, e.g.
  // "Engineering the sounds of tomorrow" (mirrors the home About panel).
  title: { lead: 'Building the ', accent: 'intelligence', tail: ' behind tomorrow' },
  intro:
    'I build software solutions that solve real-world problems — from computer vision and geospatial intelligence to full-stack web applications. Engineer by profession, builder by passion.',
  // Status pills under the intro. `dot: true` adds a glowing LED.
  chips: [
    { label: 'Kerala, India', dot: true },
    { label: 'Open to work' },
  ],

  // ---- My story (narrative beside the stat card) ------------------------
  story: {
    eyebrow: 'My Story',
    paragraphs: [
      'Most of what I build starts the same way: find a problem that\'s been ignored, and don\'t stop until there\'s something working that fixes it. I care about the whole journey — understanding the problem, building the fix, and watching someone actually use it.',
      'I\'m a 3rd-year CSE student at Christ College of Engineering, and over time I\'ve built several projects across very different problem spaces — Solvuno, a civic reporting platform that lets people flag and track infrastructure issues in their area; a full-fledged pharmacy management system with role-based access, real-time inventory and billing, POS with GST and multi-payment support, patient records, and automated low-stock alerts; and next project is a Gemma SME Cashflow Copilot, built for small business owners in tier-2 markets who run on thin cash buffers and manual bookkeeping — often without knowing their real-time cash position or which overdue invoice to chase first. It gives them an AI-assisted view of their cash flow, so decisions about collections, spending, and runway can be made in seconds instead of hours. Each one starts from a real gap and ends with something a user can actually rely on.',
      'The project I\'m proudest of is MineGuard — an AI-based system for detecting illegal mining using Sentinel-1 SAR, Sentinel-2 optical imagery, and DEM differencing. It took me to the Smart India Hackathon 2025 Grand Final at IIM Delhi, where I finished as a Grand Finalist, and the underlying detection method has since been published as a patent. Right now I\'m also a Junior Software Developer Intern at White Matrix, applying that same instinct to everyday engineering work.',
      'The pattern across everything I build: nobody assigned it. I saw a gap, and building the fix was more interesting than waiting for someone else to.',
    ],
  },

  // ---- "At a glance" stat card + the places I've worked -----------------
  glance: {
    heading: 'At a glance',
    stats: [
      { value: '2+', label: 'Years building' },
      { value: '10+', label: 'Hackathons' },
      { value: '4', label: 'Disciplines' },
      { value: '1', label: 'Internships' },
    ],
    workedWithHeading: 'Worked with',
    logos: [
      { src: companyLogos.WhiteMatrix, alt: 'White Matrix' },
    ],
    cta: { label: 'Learn more', to: '/experience' },
  },

  // ---- What I do (one row per discipline, with tool chips) --------------
  disciplines: {
    eyebrow: 'What I Do',
    heading: 'Where intelligence meets engineering.',
    items: [
      {
        title: 'AI & Machine Learning',
        description:
          'Building intelligent models, leveraging data for predictive analytics, and deploying scalable AI solutions.',
        logo: sound,
        tools: ['Python', 'Google Gemini', 'NumPy'],
      },
      {
        title: 'Product Development',
        description:
          'Guiding software products from ideation to launch, focusing on user-centric design and agile delivery.',
        logo: eda,
        tools: ['React', 'Next.js', 'Node.js'],
      },
      {
        title: 'Software Engineering',
        description:
          'End-to-end full-stack tools that ship: clean architecture, real users in mind.',
        logo: dev,
        tools: ['React', 'Python', 'C#'],
      },
    ],
  },

  // ---- Closing call to action -------------------------------------------
  cta: {
    title: "Let's build something.",
    body: "Got a project at the edge of hardware and sound? I'm listening.",
    label: 'Get in touch',
    to: '/contact',
  },
};
