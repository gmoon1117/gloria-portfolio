// ─────────────────────────────────────────────────────────────────────────
// ALL SITE COPY LIVES IN THIS ONE FILE.
// Edit text here — you should never need to touch files in src/layouts,
// src/components, or src/pages to update words on the site.
//
// Anything wrapped like [THIS] is a placeholder — replace it with your
// real content. Paragraphs marked "PLACEHOLDER —" are draft copy meant to
// show the shape/length of what goes there; rewrite freely.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Gloria',
  firstName: 'Gloria',
  lastName: 'Moon',
  fullName: 'Gloria Moon',
  role: 'Product Designer',
  email: 'YOUR_EMAIL@example.com', // shown in the footer — swap for the address you want public
  linkedinUrl: '#', // replace '#' with your real LinkedIn URL to activate the footer link
  // Shown in the browser tab and link previews
  tagline: 'Gloria Moon — Product Designer',
  description:
    'Product design portfolio of Gloria Moon, a product designer in New York focused on research-driven, detail-oriented digital products.',
};

export const nav = [
  { label: 'Work', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Fun', href: '/fun' },
  { label: 'Resume', href: '/resume.pdf', external: true },
];

// ── HOME ────────────────────────────────────────────────────────────────

export const home = {
  // Your name is the big headline on the page (see src/pages/index.astro) —
  // this single line sits underneath it.
  introLine:
    'Currently designing digital products and thoughtful experiences at Deloitte Digital in New York.',
};

// ── CASE STUDIES ────────────────────────────────────────────────────────
// Each object below renders at /work/[slug] using the single case-study
// template (src/pages/work/[slug].astro). Add, remove, or reorder entries
// in `caseStudies` and the home page + nav update automatically.

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string; // one-line summary shown on cards + top of page
  projectType: string; // e.g. "Client Project"
  myRoleLabel: string; // e.g. "Mobile App Design"
  timeline: string; // e.g. "2026"
  cardLabel: string; // short label for the home page card (e.g. "Mobile App")
  heroPlaceholderLabel: string;
  context: string;
  myRole: string;
  process: {
    research: string;
    iterations: string;
  };
  decisions: Array<{ title: string; why: string }>;
  outcome: string;
  next: string;
  beforeAfter?: { beforeLabel: string; afterLabel: string } | null;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mobile-banking-app',
    title: 'Redesigning a regional bank’s mobile banking app',
    summary:
      'PLACEHOLDER — A one-line summary of the problem and what you shipped, e.g. "Simplifying everyday banking for a regional bank’s 200k+ app users."',
    projectType: 'Client Project',
    myRoleLabel: 'Mobile App Design',
    timeline: '2026',
    cardLabel: 'Mobile App Design',
    heroPlaceholderLabel: 'Hero image — primary app screen or flow, 1600×1000',
    context:
      'PLACEHOLDER — What was the business or user problem? Why did this project exist? E.g.: a regional bank’s consumer app had low engagement with [specific feature], and users were dropping off during [specific flow]. Replace with 2–4 sentences of real context (no client names/logos needed — keep it anonymized as you planned).',
    myRole:
      'PLACEHOLDER — Your actual role and scope. E.g.: "I was the [sole / lead] product designer on this engagement, owning [research, UI design, prototyping, etc.] end-to-end over a team of [X], partnering with [PM / engineers / client stakeholders]."',
    process: {
      research:
        'PLACEHOLDER — What research did you do and what did you learn? E.g.: stakeholder interviews, competitive audits, usability testing on the existing app, analytics review. Call out 2–3 concrete findings that shaped your direction.',
      iterations:
        'PLACEHOLDER — How did the design evolve? Describe early concepts/wireframes, what didn’t work and why, and how feedback (from users, stakeholders, or testing) pushed the design forward. This is a great place for 2–3 in-progress screenshots.',
    },
    decisions: [
      {
        title: 'PLACEHOLDER — Name a specific design decision',
        why: 'PLACEHOLDER — Why you made that call, and what alternative you considered and rejected.',
      },
      {
        title: 'PLACEHOLDER — A second key decision',
        why: 'PLACEHOLDER — The reasoning, ideally tied back to a research finding above.',
      },
    ],
    outcome:
      'PLACEHOLDER — What shipped, and what changed as a result. If you have metrics (adoption, satisfaction, task completion, business impact), put real numbers here — don’t estimate ones you don’t have.',
    next:
      'PLACEHOLDER — What you’d explore or improve with more time/data. Shows reflection and seniority — 2–3 sentences is plenty.',
    beforeAfter: { beforeLabel: 'Before — original flow', afterLabel: 'After — redesigned flow' },
  },
  {
    slug: 'internal-advisory-platform',
    title: 'An internal advisory platform for Deloitte Digital',
    summary:
      'PLACEHOLDER — One-line summary, e.g. "Giving advisory teams a single tool to track client engagements, from pitch to delivery."',
    projectType: 'Internal Tool',
    myRoleLabel: 'Product Design',
    timeline: '2026',
    cardLabel: 'Internal Platform',
    heroPlaceholderLabel: 'Hero image — dashboard or key screen, 1600×1000',
    context:
      'PLACEHOLDER — What internal problem were advisory teams facing before this tool existed? What were they using instead (spreadsheets, email, disconnected tools)? Keep it anonymized/internal-safe.',
    myRole:
      'PLACEHOLDER — Your role: did you design this solo, or alongside other designers/PMs/engineers at Deloitte? What parts did you own (discovery, IA, UI, design system, rollout)?',
    process: {
      research:
        'PLACEHOLDER — How did you learn what advisory teams actually needed? Internal interviews, shadowing, workflow mapping? What were the biggest pain points you uncovered?',
      iterations:
        'PLACEHOLDER — How the design evolved — early concepts, internal feedback rounds, what got cut and why.',
    },
    decisions: [
      {
        title: 'PLACEHOLDER — A specific design decision',
        why: 'PLACEHOLDER — Why, and what tradeoff it addressed (e.g. flexibility vs. simplicity for a busy advisory team).',
      },
      {
        title: 'PLACEHOLDER — A second key decision',
        why: 'PLACEHOLDER — The reasoning behind it.',
      },
    ],
    outcome:
      'PLACEHOLDER — Adoption across teams, time saved, qualitative feedback from advisors — whatever you can share without naming the client-facing details.',
    next:
      'PLACEHOLDER — What’s next for the tool, or what you’d change knowing what you know now.',
    beforeAfter: null,
  },
  {
    slug: 'third-case-study',
    title: '[Third case study title — TBD]',
    summary:
      'PLACEHOLDER — Decide whether this is the enterprise planning tool or the health website, then fill in a one-line summary.',
    projectType: 'Project Type',
    myRoleLabel: 'Your Role',
    timeline: '2026',
    cardLabel: 'Case Study 3',
    heroPlaceholderLabel: 'Hero image, 1600×1000',
    context: 'PLACEHOLDER — Context & problem.',
    myRole: 'PLACEHOLDER — My role.',
    process: {
      research: 'PLACEHOLDER — Research.',
      iterations: 'PLACEHOLDER — Iterations.',
    },
    decisions: [
      { title: 'PLACEHOLDER — Decision one', why: 'PLACEHOLDER — Why.' },
    ],
    outcome: 'PLACEHOLDER — Outcome.',
    next: 'PLACEHOLDER — What’s next.',
    beforeAfter: null,
  },
];

// ── OTHER WORK ──────────────────────────────────────────────────────────
// Short cards for brief projects that don't warrant a full case study.
// Add/remove objects freely — the "Other work" section on the home page
// renders whatever is in this array.

export type OtherWorkItem = {
  title: string;
  description: string;
  tag?: string;
};

export const otherWork: OtherWorkItem[] = [
  {
    title: 'PLACEHOLDER — Project name',
    description:
      'PLACEHOLDER — One or two sentences on what it was and what you did.',
    tag: 'Workshop / Hackathon / Side project',
  },
  {
    title: 'PLACEHOLDER — Project name',
    description:
      'PLACEHOLDER — One or two sentences on what it was and what you did.',
    tag: 'Workshop / Hackathon / Side project',
  },
  {
    title: 'PLACEHOLDER — Project name',
    description:
      'PLACEHOLDER — One or two sentences on what it was and what you did.',
    tag: 'Workshop / Hackathon / Side project',
  },
];

// ── ABOUT ───────────────────────────────────────────────────────────────

export const about = {
  bio: [
    'I’m Gloria, a product designer currently working as an Analyst at Deloitte Digital (Customer Strategy & Applied Design) in New York, where I design digital products and experiences for enterprise clients.',
    'I studied Information Systems at Carnegie Mellon, majoring in Human-Computer Interaction with a minor in Media Design, and served as President of CMU’s UX Association during my time there.',
    'PLACEHOLDER — Add a paragraph that’s more personal: how you got into design, what kind of problems you like working on, or what you’re looking for next (you mentioned moving from consulting into a product design role at a tech company — feel free to say that directly here).',
  ],
  photoPlaceholderLabel: 'Your photo — square, at least 800×800',
  resumeFileName: 'resume.pdf',
};

// ── FOR FUN ─────────────────────────────────────────────────────────────
// A visual grid of hobbies / creative projects. Replace these placeholder
// entries with your real list — title + short description + an image once
// you have one. Add or remove entries freely; the grid reflows automatically.

export type FunItem = {
  title: string;
  description: string;
};

export const forFun: FunItem[] = [
  { title: 'PLACEHOLDER — Hobby or project 1', description: 'Short description.' },
  { title: 'PLACEHOLDER — Hobby or project 2', description: 'Short description.' },
  { title: 'PLACEHOLDER — Hobby or project 3', description: 'Short description.' },
  { title: 'PLACEHOLDER — Hobby or project 4', description: 'Short description.' },
  { title: 'PLACEHOLDER — Hobby or project 5', description: 'Short description.' },
  { title: 'PLACEHOLDER — Hobby or project 6', description: 'Short description.' },
];
