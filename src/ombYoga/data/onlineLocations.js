// src/ombYoga/data/onlineLocations.js
// Single source of truth for all online course slugs and navbar labels.
// Slugs are used in URLs. Labels are used for display.

export const ONLINE_CATEGORIES = [
  { slug: "ttc", label: "Online Teacher Training" },
  { slug: "short", label: "Specialty & Short Courses" },
];

export const ONLINE_LINKS = {
  ttc: [
    { path: "100hr", label: "100 Hour Online Yoga Teacher Training Course" },
    { path: "200hr", label: "200 Hour Online Yoga Teacher Training Course" },
    { path: "300hr", label: "300 Hour Online Yoga Teacher Training Course" },
  ],
  short: [
    { path: "prenatal", label: "85 Hour Online Pre-Natal Yoga Teacher Training Course" },
    { path: "pranayama", label: "50 Hour Online Online Pranayama Course" },
    { path: "ayurveda", label: "50 Hour Online Online Ayurveda Yoga Teacher Training Course" },
    { path: "yoganidra", label: "50 Hour Online Online Yoga Nidra Teacher Training Course" },
  ],
};
