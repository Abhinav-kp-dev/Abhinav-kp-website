// Curated content for the showcase sections shared by the home post-footer
// (compact career timeline + featured-work grid) and the Experience page
// (full "Work Experience" timeline + "Projects" bands). Kept separate from the
// canonical career/projects lists so this hand-tuned copy can evolve without
// touching the long-form data used elsewhere.
//
// In a bullet, wrap a stat in {curly braces} to render it as a highlighted chip,
// e.g. "Trained ML models on {20K+ samples} via Bash pipelines".
//
// featuredWork fields: the home grid reads {summary, tags, cta, thumb}; the
// Experience bands additionally read {blurb, badge, actions} for the wider,
// more detail-forward layout.


import mineguardThumb from '../assets/mineguard.png';
import cashCopilotThumb from '../assets/cash-copilot.jpeg';
import solvunoThumb from '../assets/solvuno.jpeg';
import medosThumb from '../assets/medos.jpeg';
import sihLogo from '../assets/sih-logo.png';
import { companyLogos } from './companyLogos';


// Experience — "My career so far" timeline.
export const careerTimeline = [
  {
    id: 'intel',
    company: 'White Matrix',
    logo: companyLogos.WhiteMatrix,
    subtitle: 'Junior Software Engineering Intern',
    bullets: ['Building the interoperability backbone for EV charging networks, enabling secure cross-operator authentication, session management, and financial settlement'],

    period: 'May 2026 – Present',
    current: true,
  },
  {
    id: 'sih-2025',
    company: 'SIH 2025 FINALIST',
    logo: sihLogo,
    subtitle: 'Smart India Hackathon',
    bullets: ["Grand Finalist of Smart India Hackathon (SIH) 2025, one of India's flagship national innovation competition, selected for building a high-impact technology solution."],
    period: '2025',
    current: false,
  },
];

// Featured work — selected projects list.
export const featuredWork = [
  {
    id: 'mineguard',
    title: 'Mineguard',
    kind: 'SOFTWARE',
    summary: 'An AI-powered geospatial intelligence platform that detects illegal mining.',
    blurb:
      'MineGuard.ai is an AI-powered geospatial intelligence platform that detects illegal mining using multi-source satellite data. By combining optical imagery, SAR radar, DEM analysis, and temporal vegetation change detection, it accurately identifies illegal excavations, estimates mined volume, and generates forensic-grade evidence. The platform provides 3D terrain visualization, historical change analysis, automated reports, and real-time alerts, enabling authorities to monitor mining activities efficiently and take faster, data-driven enforcement actions.',
    tags: ['Sentinel-1 VV/VH Radar', 'Copernicus GLO30 DEM', 'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Google Earth Engine (GEE)', 'Geemap', 'NumPy'],
    period: '2025',
    badge: 'DEMO',
    thumb: mineguardThumb,
    hasPlay: true,
    cta: { label: 'Watch', href: 'https://www.youtube.com/watch?v=uIbf53idzEU' },
    actions: [
      { label: 'Watch', href: 'https://www.youtube.com/watch?v=uIbf53idzEU', primary: true },
      { label: 'Details', href: 'https://github.com/Abhinav-kp-dev/Mineguard' },
    ],
  },
  {
    id: 'arc4',
    title: 'Gemma Cashflow Copilot',
    kind: 'SOFTWARE',
    summary: 'An AI-powered financial advisory dashboard designed specifically for SMEs.',
    blurb:
      "Gemma Cashflow Copilot is an AI-powered financial advisory dashboard designed specifically for Small and Medium Enterprises (SMEs). Built with modern web technologies and supercharged by Google's Gemma model, this tool acts as a 24/7 virtual CFO, providing real-time cash flow forecasting, risk analysis, and actionable business recommendations.",
    tags: ['Node.js', 'Express', 'MySQL', 'Gemini 3.5 Flash'],
    period: '2026 July',
    badge: 'SOFTWARE',
    thumb: cashCopilotThumb,
    hasPlay: false,
    cta: { label: 'Details', href: 'https://github.com/Abhinav-kp-dev/Gemma-flowpilot' },
    actions: [
      { label: 'Details', href: 'https://github.com/Abhinav-kp-dev/Gemma-flowpilot', primary: true }
    ],
  },
  {
    id: 'ubc',
    title: 'Solvuno',
    kind: 'FULL-STACK WEB',
    summary: 'An AI-powered civic reporting platform.',
    blurb:
      'Solvuno is an AI-powered civic reporting platform designed to bridge the gap between residents and municipal governments. By leveraging generative AI, real-time geolocation, and gamification, Solvuno transforms urban infrastructure monitoring from a slow, bureaucratic process into a highly engaging, community-driven movement.',
    tags: ['Next.js', 'PostgreSQL', 'Python'],
    period: '2026 june -july',
    badge: 'LIVE',
    thumb: solvunoThumb,
    hasPlay: false,
    cta: { label: 'View code', href: 'https://github.com/Abhinav-kp-dev/solvuno' },
    actions: [
      { label: 'View code', href: 'https://github.com/Abhinav-kp-dev/solvuno', primary: true }
    ],
  },
  {
    id: 'kirbeats',
    title: 'MedOS',
    kind: 'FULL-STACK WEB',
    summary: 'A full-stack pharmacy management platform.',
    blurb:
      'MedOS is a full-stack pharmacy management platform built for daily pharmacy operations such as inventory control, billing, patient management, supplier tracking, analytics, admin operations and automated stock alert emails',
    tags: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    period: 'Jul 2025 Sept- Dec',
    badge: 'LIVE',
    thumb: medosThumb,
    hasPlay: false,
    cta: { label: 'View code', href: 'https://github.com/Abhinav-kp-dev/MedOS' },
    actions: [
      { label: 'View code', href: 'https://github.com/Abhinav-kp-dev/MedOS', primary: true }
    ],
  },
];
