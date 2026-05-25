// src/data/locations.js
// Single source of truth for all location slugs, labels, program links, and retreat links.
// Slugs are used in URLs. Labels are used for display. No spaces in slugs — ever.

// ─────────────────────────────────────────────
// LOCATIONS ARRAY  (drives all nav loops)
// ─────────────────────────────────────────────
export const LOCATIONS = [
  { slug: "mysuru",       label: "Mysuru" },
  { slug: "bali",         label: "Bali" },
  { slug: "rishikesh",    label: "Rishikesh" },
  { slug: "chiang-mai",   label: "Chiang Mai" },
  { slug: "dharamshala",  label: "Dharamshala" },
];

// Quick lookup helpers
export const slugToLabel = Object.fromEntries(
  LOCATIONS.map(({ slug, label }) => [slug, label])
);
export const labelToSlug = Object.fromEntries(
  LOCATIONS.map(({ slug, label }) => [label, slug])
);

// ─────────────────────────────────────────────
// PROGRAM LINKS  (keyed by slug)
// ─────────────────────────────────────────────
export const PROGRAM_LINKS = {
  mysuru: {
    multiStyle:     [],
    kundalini:      [],
    shortCourses:   [],
    specialization: [],
  },

  bali: {
    multiStyle: [
      { path: "50hr",  label: "6 Days 50 Hours Multi-Style Yoga Course" },
      { path: "100hr", label: "10 Days 100 Hours Multi-Style YTTC" },
      { path: "200hr", label: "20 Days 200 Hours Multi-Style YTTC" },
      { path: "300hr", label: "26 Days 300 Hours Multi-Style YTTC" },
      { path: "500hr", label: "56 Days 500 Hours Multi-Style YTTC" },
    ],
    kundalini: [
      { path: "kundalini50hr",  label: "6 Days 50 Hours Kundalini Yoga Course" },
      { path: "kundalini100hr", label: "10 Days 100 Hours Kundalini YTTC" },
      { path: "kundalini200hr", label: "20 Days 200 Hours Kundalini YTTC" },
      { path: "kundalini300hr", label: "26 Days 300 Hours Kundalini YTTC" },
      { path: "kundalini500hr", label: "56 Days 500 Hours Kundalini YTTC" },
    ],
    shortCourses: [
      { path: "yinyoga",      label: "Yin Yoga TTC" },
      { path: "prenatalyoga", label: "Prenatal Yoga TTC" },
      { path: "aerialyoga",   label: "Aerial Yoga TTC" },
      { path: "acroyoga",     label: "Acro Yoga TTC" },
    ],
    specialization: [
      { path: "soundhealing", label: "Sound Healing Course" },
    ],
  },

  rishikesh: {
    multiStyle: [
      { path: "100hr", label: "10 Days 100 Hours Multi-Style YTTC" },
      { path: "200hr", label: "20 Days 200 Hours Multi-Style YTTC" },
      { path: "300hr", label: "26 Days 300 Hours Multi-Style YTTC" },
      { path: "500hr", label: "56 Days 500 Hours Multi-Style YTTC" },
    ],
    kundalini:      [  
           { path: "kundalini50hr", label: "5 Days 50 Hours Kundalini YTTC" },
      { path: "kundalini100hr", label: "10 Days 100 Hours Kundalini YTTC" },
            { path: "kundalini200hr", label: "25 Days 200 Hours Kundalini YTTC" },
      { path: "kundalini300hr", label: "29 Days 300 Hours Kundalini YTTC" },
      { path: "kundalini500hr", label: "59 Days 500 Hours Kundalini YTTC" },
    ],
    shortCourses:   [],
    specialization: [],
  },

  "chiang-mai": {
    multiStyle: [
      { path: "100hr", label: "100 Hour Foundation" },
      { path: "200hr", label: "200 Hour TTC" },
    ],
    kundalini:      [],
    shortCourses: [
      { path: "acroyoga", label: "Acro Yoga" },
    ],
    specialization: [],
  },

  dharamshala: {
    multiStyle:     [],
    kundalini:      [],
    shortCourses:   [],
    specialization: [],
  },
};

// ─────────────────────────────────────────────
// RETREAT LINKS  (keyed by slug)
// ─────────────────────────────────────────────
export const RETREAT_LINKS = {
  mysuru:      [],
  bali: [
    { path: "retreats6days", label: "6-Day Yoga and Detox Retreat" },
  ],
  rishikesh:    [],
  "chiang-mai": [],
  dharamshala:  [],
};

// ─────────────────────────────────────────────
// PATH BUILDER  (single function, used everywhere)
// ─────────────────────────────────────────────
export const buildPath = (slug, course, type = "programs") =>
  `/${type}/${slug}/${course}`;