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
    multiStyle: [
      // { path: "50hr",  label: "6 Days 50 Hours Primary Series Foundations" },
      // { path: "100hr", label: "10 Days 100 Hours Classical Ashtanga Course" },
      { path: "200hr", label: "200 Hours Ashtanga Yoga and Hatha Yoga Teacher Training Course" },
      {path:"200hrmultistyle",label:"200 hrs Multi Style Yoga TTC In Maysuru"},
      { path: "300hr", label: "300 Hour Yoga Teacher Training Course" },
      {path:"500hr", label:"500 Hour Yoga Teacher Training Course"},
      {path:"mysore21dayashtanga",label:"21-Day Ashtanga Yoga Teacher Training Course"},
      {path:"mysore21dayhatha",label:"21-Day Hatha Yoga Teacher Training Course"},

    ],
    kundalini: [],
    shortCourses: [
      { path: "mysore50houryinyoga", label: "50 hour Yin Yoga TTC" },
      {path:"mysore50houraerialyoga",label:"50 Hour Aerial Yoga Teacher Training"},
      {path:"mysoreprenatalyoga",label:"Prenatal Postnatal Yoga Teacher Training Course"},
      {path:"mysore7dayyogatherapy",label:"Yoga Therapy Teacher Training Course"}

    ],
    specialization: [],
  },

  bali: {
    multiStyle: [
      { path: "50hr",  label: "6 Days 50 Hours Multi-Style Yoga Course" },
      { path: "100hr", label: "10 Days 100 Hours Multi-Style Yoga Course" },
      { path: "200hr", label: "20 Days 200 Hours Multi-Style YTTC" },
      { path: "300hr", label: "26 Days 300 Hours Advanced Multi-Style YTTC" },
      { path: "500hr", label: "56 Days 500 Hours Advanced Multi-Style YTTC" },
    ],
    kundalini: [
      { path: "kundalini50hr",  label: "6 Days 50 Hours Kundalini YTTC" },
      { path: "kundalini100hr", label: "10 Days 100 Hours Kundalini YTTC" },
      { path: "kundalini200hr", label: "20 Days 200 Hours Kundalini YTTC" },
      { path: "kundalini300hr", label: "30 Days 300 Hours Kundalini YTTC" },
      { path: "kundalini500hr", label: "50 Days 500 Hours Kundalini YTTC" },
    ],
    shortCourses: [
      { path: "yinyoga",      label: "6 Days 50 Hours Yin Yoga Course" },
      { path: "prenatalyoga", label: "85-Hours Prenatal Yoga TTC in Bali" },
      { path: "aerialyoga",   label: "5 Days Aerial Yoga Course" },
      { path: "acroyoga",     label: "5 Days Acro Yoga Course" },
    ],
    specialization: [
      { path: "soundhealing", label: "Vedic Sound Healing Level 1 & 2" },
      { path: "100houryogatherapyayurve", label: "Bali 100 Hours Yoga Therapy Ayurveda" },
      { path: "ayurvedictreatmentttc", label: "Ayurvedic Treatment In Bali" },
      { path: "ayurveda5hoursabhyangam", label: "Abhyangam Massage Training Course In Bali" },
      // { path: "wellness-retreat", label: "Yoga & Wellness Detox Retreat" }
    ],
  },

  rishikesh: {
    multiStyle: [
      // { path: "50hr",  label: "6 Days 50 Hours Vedic Foundation" },
      { path: "100hr", label: "10 Days 100 Hours Hatha & Vinyasa Course" },
      { path: "200hr", label: "20 Days 200 Hours Holy Ganges Multi-Style YTTC" },
      { path: "300hr", label: "26 Days 300 Hours Advanced Multi-Style YTTC" },
      { path: "500hr", label: "56 Days 500 Hours Master Multi-Style Training" }
    ],
    kundalini: [
      { path: "kundalini50hr", label: "6 Days 50 Hours Kundalini Awakening" },
      { path: "kundalini100hr", label: "10 Days 100 Hours Shaktipat Kundalini" },
      { path: "kundalini200hr", label: "20 Days 200 Hours Authentic Kundalini YTTC" },
      { path: "kundalini300hr", label: "26 Days 300 Hours Advanced Kundalini YTTC" },
      { path: "kundalini500hr", label: "56 Days 500 Hours Complete Kundalini Master" }
    ],
    shortCourses: [
      // { path: "yinyoga", label: "6 Days 50 Hours Meditative Yin Yoga" },
      { path: "rishikeshprenatalyoga", label: "Prenatal Yoga Teacher Training Course In Rishikesh" },
      { path: "rishikesh6nightsyinyoga", label: "Yin Yoga Teacher Training Course In Rishikesh" },
      { path: "rishikesh50houryoganidra", label: "5 Days Yoga Nidra Teacher Training Course in Rishikesh" }
    ],
    specialization: [
      // { path: "soundhealing", label: "Vedic Sound Healing Level 1 & 2" },
      // { path: "wellness-retreat", label: "Ganga Aarti & Ashram Detox Retreat" },
      { path: "rishikesh200hourmultistylekundaliniayurvedamassage", label: "200 Hour Multistyle / Kundalini Yoga TTC with Ayurveda Massage" },
      { path: "rishikesh10dayspanchakarma", label: "10 Days Panchakarma Therapy Program in Rishikesh" },
      { path: "rishikesh2daysayurvedicnutrition", label: "2 Days Ayurvedic Nutrition Course In Rishikesh" },
      { path: "rishikeshsoundhealing", label: "Master Level Sound Healing Course in Rishikesh" },
      { path: "rishikeshayurvedatherapistdiploma", label: "Ayurveda Therapist Diploma Course in Rishikesh" },
      { path: "rishikesh18daysyogatherapywellness", label: "Yoga Therapy & Wellness Teacher Training Course" }
    ],
  },

  "chiang-mai": {
    multiStyle: [
      { path: "50hr",  label: "6 Days 50 Hours Multi-Style Yoga Course" },
      { path: "100hr", label: "10 Days 100 Hours Nature Calm Course" },
      { path: "200hr", label: "20 Days 200 Hours Lanna Highland YTTC" },
      { path: "300hr", label: "26 Days 300 Hours Advanced Multi-Style YTTC" },
      { path: "500hr", label: "56 Days 500 Hours Advanced Multi-Style YTTC" }
    ],
    kundalini: [
      { path: "kundalini50hr",  label: "6 Days 50 Hours Kundalini Yoga Course" },
      { path: "kundalini100hr", label: "10 Days 100 Hours Kundalini YTTC" },
      { path: "kundalini200hr", label: "20 Days 200 Hours Kundalini YTTC" },
      { path: "kundalini300hr", label: "30 Days 300 Hours Kundalini YTTC" },
      { path: "kundalini500hr", label: "56 Days 500 Hours Kundalini YTTC" }
    ],
    shortCourses: [
      { path: "yinyoga",      label: "6 Days 50 Hours Zen Yin Yoga" },
      { path: "prenatalyoga", label: "Sacred Prenatal Yoga TTC" },
      { path: "aerialyoga",   label: "5 Days Aerial Yoga Course" },
      { path: "acroyoga",     label: "5 Days Acro Yoga Course" }
    ],
    specialization: [
      { path: "soundhealing", label: "Sound Healing Course" },
      { path: "100houryogatherapyayurve", label: "Bali 100Hours Yoga Therapy Ayurveda" },
      { path: "ayurvedictreatmentttc", label: "Ayurvedic Treatment In Chiang Mai" },
      { path: "ayurveda5hoursabhyangam", label: "Ayurveda Massage Course In Chiang Mai" },
      { path: "wellness-retreat", label: "Monastery Meditation & Wellness Retreat" }
    ],
  },

  dharamshala: {
    multiStyle: [
      { path: "100hr", label: "10 Days 100 Hours Mountain Meditation" },
      { path: "200hr", label: "20 Days 200 Hours Himalayan Zen YTTC" },
      { path: "300hr", label: "26 Days 300 Hours Advanced Masters Path" },
      { path: "500hr", label: "56 Days 500 Hours Master Multi-Style Training" }
    ],
    kundalini: [
      { path: "kundalini50hr", label: "5 Days 50 Hours Kundalini YTTC" },
      { path: "kundalini100hr", label: "10 Days 100 Hours Kundalini YTTC" },
      { path: "kundalini200hr", label: "25 Days 200 Hours Kundalini YTTC" },
      { path: "kundalini300hr", label: "29 Days 300 Hours Kundalini YTTC" },
      { path: "kundalini500hr", label: "59 Days 500 Hours Kundalini YTTC" }
    ],
    shortCourses: [
      // { path: "yinyoga", label: "6 Days 50 Hours Dhauladhar Yin Path" }
    ],
    specialization: [
      // { path: "soundhealing", label: "Tibetan Singing Bowl Certification" }
    ],
  },
};

// ─────────────────────────────────────────────
// RETREAT LINKS  (keyed by slug)
// ─────────────────────────────────────────────
export const RETREAT_LINKS = {
  mysuru:      [
    { path: "mysoresingingbowlsoundhealing", label: "3 Days Sound Healing Training Course" },
    { path: "mysore7daychairyoga", label: "7 Day Chair Yoga Teacher Training Course" },
    { path: "mysore7daywheelyoga", label: "7 Day wheel Yoga Teacher Training Course" },
  ],
  bali: [
    { path: "retreats6days", label: "6-Day Yoga and Detox Retreat" },
    { path: "vipassanameditation", label: "New-Age Vipassana Meditation Retreat" },
    { path: "3daywellness", label: "3-Day Yoga and Wellness Retreat" },
    { path: "adventureyoga", label: "7-Day Adventure and Yoga Retreat" },
    { path: "multistylemeditation", label: "7-Day Multi-Style & Meditation Retreat" },
  ],
  rishikesh:    [
    { path: "rishikesh5daysmindfulnessmeditation", label: "Mindfulness & Meditation Retreat & Teacher Training Course in Rishikesh" },
    { path: "rishikesh5daysyogaretreat", label: "5-Day Transformative Yoga Retreat" },
    { path: "rishikesh7daysyogaretreat", label: "7-Day Transformative Yoga Retreat" },
    { path: "rishikesh15daysyogaretreat", label: "15-Day Multi-Style Yoga Retreat" },
    { path: "rishikesh5daysacupressure", label: "5-Day Acupressure Healing Course" },
    { path: "rishikesh10dayspanchakarma", label: "10-Day Panchakarma Therapy Program" },
  ],
  "chiang-mai": [
    { path: "chiangmairetreats6days", label: "6-Day Yoga and Detox Retreat" },
     { path: "VipassanaRetreat", label: "Vipassana Retreat" },
        { path: "YogaMeditationWellnessRetreat", label: "Yoga, Meditation & Wellness Retreat" },
         { path: "KundaliniSadhanaRetreat", label: "Kundalini Sadhana Retreat" },
         { path: "SeniorCitizenWellnessRetreat", label: "Senior Citizen Wellness Retreat" },
        { path: "WomensHealthWellnessRetreat", label: "Women's Health & Wellness Retreat" },
  ],
  dharamshala: [
  { path: "host-your-retreat",   label: "Host Your Retreat" },
  { path: "make-your-own-combo", label: "Make Your Own Combo" },
],
};

// ─────────────────────────────────────────────
// PATH BUILDER  (single function, used everywhere)
// ─────────────────────────────────────────────
export const buildPath = (slug, course, type = "programs") =>
  `/${type}/${slug}/${course}`;