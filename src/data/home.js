// All home-page content: the hero, the post-footer intro, the "What I Do"
// cards, and the tech-stack carousel.

import eda from '../assets/eda.png';
import dev from '../assets/dev.png';
import sound from '../assets/sound.png';
import postgresql from '../assets/TechLogos/Postgresql.png';
import css from '../assets/TechLogos/css.png';
import html from '../assets/TechLogos/html.png';
import java from '../assets/TechLogos/java.png';
import js from '../assets/TechLogos/js.png';
import python from '../assets/TechLogos/python.png';
import react from '../assets/TechLogos/react.png';
import tailwind from '../assets/TechLogos/tailwind.png';

import fastapi from '../assets/TechLogos/fastapi.svg';
import django from '../assets/TechLogos/django.svg';
import nodejs from '../assets/TechLogos/nodejs.svg';
import express from '../assets/TechLogos/express.svg';
import rest from '../assets/TechLogos/rest.svg';
import mongodb from '../assets/TechLogos/mongodb.svg';
import mysql from '../assets/TechLogos/mysql.svg';
import sqlite from '../assets/TechLogos/sqlite.svg';
import tensorflow from '../assets/TechLogos/tensorflow.svg';
import pytorch from '../assets/TechLogos/pytorch.svg';
import huggingface from '../assets/TechLogos/huggingface.svg';

// Hero (CentreBlock). `titles` rotate in the typing animation; `name.nick` is
// the highlighted nickname shown in quotes. The component renders `prefix + title`,
// so the article (a/an) lives inside each title to read correctly before
// vowel-initial words ("an Audio…", "an Embedded…").
export const hero = {
  eyebrow: "Hello, I'm",
  name: { first: 'Abhinav', nick: '', last: 'KP' },
  prefix: 'I am',
  location: 'based in Kerala, India',
  titles: [
    ' a Software Engineer',
  ],
};

// Label on the "View more" button under the home highlights.
export const featuredCta = 'View more';

// "View full experience" button below the selected-projects list — bridges the
// home highlights to the full Experience page (timeline + project bands).
export const projectsCta = { label: 'View full experience', to: '/experience' };

// Post-footer intro band (AboutHomePage).
export const aboutIntro = {
  title: 'Building the intelligence behind tomorrow',
  body: 'I build software solutions that solve real-world problems — from computer vision and geospatial intelligence to full-stack web applications. Engineer by profession, builder by passion.',
  ctaLabel: 'Learn more',
  ctaTo: '/about',
};

// "What I Do" numbered capability index on the home page.
export const whatIDo = {
  heading: 'What I Do',
  subtitle: 'Where intelligence meets engineering.',
  cards: [
    { title: 'AI & Machine Learning', description: 'Building intelligent models, leveraging data for predictive analytics, and deploying scalable AI solutions.', logo: sound },
    { title: 'Product Development', description: 'Guiding software products from ideation to launch, focusing on user-centric design and agile delivery.', logo: eda },
    { title: 'Software Engineering', description: 'End-to-end full-stack tools that ship.', logo: dev },
  ],
};

// Tech stack, grouped by discipline (mirrors the "What I Do" areas).
// To add a tool: import its logo at the top of this file, then drop a
// { name, logo, where } object into the right group's `items` array.
// `where` is the text shown in the hover tooltip (where the skill was used).
export const techStack = {
  heading: 'Tech Stack',
  groups: [
    {
      title: 'Artificial Intelligence',
      tagline: 'ML & Data Science',
      items: [
        { name: 'Python', logo: python, where: 'AI models and scripts' },
        { name: 'TensorFlow', logo: tensorflow, where: 'Deep learning' },
        { name: 'PyTorch', logo: pytorch, where: 'Model training' },
        { name: 'Hugging Face', logo: huggingface, where: 'NLP & LLMs' },
      ],
    },
    {
      title: 'Software & Web',
      tagline: 'Full-stack apps',
      items: [
        { name: 'React', logo: react, where: 'ICBC web apps; this portfolio' },
        { name: 'JavaScript', logo: js, where: 'Front-end across web projects' },
        { name: 'HTML', logo: html, where: 'Web UI and portfolio markup' },
        { name: 'CSS', logo: css, where: 'Responsive layouts and styling' },
        { name: 'Tailwind', logo: tailwind, where: 'Styling for this site' },
        { name: 'Java', logo: java, where: 'OOP coursework and projects' },
      ],
    },
    {
      title: 'Automation & Backend',
      tagline: 'RPA · enterprise',
      items: [
        { name: 'FastAPI', logo: fastapi, where: 'Backend APIs' },
        { name: 'Django', logo: django, where: 'Web development' },
        { name: 'Node.js', logo: nodejs, where: 'Server-side logic' },
        { name: 'Express.js', logo: express, where: 'Web framework' },
        { name: 'REST APIs', logo: rest, where: 'API design' },
      ],
    },
    {
      title: 'Databases',
      tagline: 'Data storage & queries',
      items: [
        { name: 'PostgreSQL', logo: postgresql, where: 'Relational database' },
        { name: 'MongoDB', logo: mongodb, where: 'NoSQL document database' },
        { name: 'MySQL', logo: mysql, where: 'Relational database management' },
        { name: 'SQLite', logo: sqlite, where: 'Lightweight local database' },
      ],
    },
  ],
};

// Game-HUD banners that split the home post-footer into three "levels", in the
// natural first-visit reading order (who I am → what I've done → reach out).
// `level`/`total` drive the LEVEL 0N label, the N / TOTAL counter, and how far
// the segmented meter fills. Rendered by SectionDivider.jsx, laid out in
// PostFooterHome.jsx.
export const sectionDividers = {
  about: { level: 1, total: 3, eyebrow: 'Who I Am', title: 'About' },
  experience: { level: 2, total: 3, eyebrow: 'The Work', title: 'Experience' },
  contact: { level: 3, total: 3, eyebrow: "Let's Connect", title: 'Contact' },
};

// Closing contact band that opens the 03 section — a centered call to reach out,
// sitting above the "Keep exploring" navigation cards.
export const contactBand = {
  heading: 'Reach out, or keep exploring',
  body: 'Open to internships & new-grad roles. Drop me a line.',
  ctaLabel: 'Get in touch',
  ctaTo: '/contact',
};

// The last band on the home page, sending visitors to the three main
// destinations (who I am → what I've done → reach out). Rendered as compact
// navigation cards beneath the contact band.
export const keepExploring = {
  eyebrow: 'Keep exploring',
  heading: 'Where to next?',
  cards: [
    {
      icon: 'about',
      title: 'About',
      description: 'Who I am, what I build, and the disciplines I work across.',
      ctaLabel: 'Read more',
      to: '/about',
    },
    {
      icon: 'experience',
      title: 'Experience',
      description: 'My career timeline at White Matrix and the projects.',
      ctaLabel: 'See the work',
      to: '/experience',
    },
  ],
};
