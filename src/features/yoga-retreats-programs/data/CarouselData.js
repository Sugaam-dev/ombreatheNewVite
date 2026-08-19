import { PROGRAM_LINKS, RETREAT_LINKS } from "../../../data/locations";

const getCountForLocation = (slug) => {
  const normalizedSlug = slug.toLowerCase();
  const programs = PROGRAM_LINKS[normalizedSlug] || {};
  let pCount = 0;
  for (const cat in programs) {
    if (Array.isArray(programs[cat])) {
      pCount += programs[cat].length;
    }
  }
  const rCount = Array.isArray(RETREAT_LINKS[normalizedSlug]) ? RETREAT_LINKS[normalizedSlug].length : 0;
  return pCount + rCount;
};

// ─── Program Categories Meta ───────────────────────────────────────────────────
export const PROGRAM_CATEGORIES = [
  { id: "multi-style",    icon: "🧘", label: "Multi-Style YTTC" },
  { id: "kundalini",      icon: "🔥", label: "Kundalini YTTC" },
  { id: "short",          icon: "🌿", label: "Short Courses" },
  { id: "specialization", icon: "🎵", label: "Specialization & Retreats" }
];

// ─── Location Data for Carousel (Synchronized Slugs & Exact Course Counts) ─────
export const CAROUSEL_LOCATION_DATA = {
  Mysuru: {
    tagline: "City of Palaces",
    description: "Mysuru is the spiritual cradle of yoga as we know it. Train in the city where Krishnamacharya and Pattabhi Jois shaped the world's yoga practice — a city of sandalwood, silk, and timeless wisdom.",
    heroImage: "/images/external/heroes/unsplash_photo-1590050752117-238cb0fb12b1.jpg",
    accentColor: "#c8813a",
    totalProgramsCount: getCountForLocation("mysuru")
  },
  Bali: {
    tagline: "Island of the Gods",
    description: "Nestled among sacred rice terraces and whispering temples, our Bali programs offer the most immersive yoga teacher training experience in Southeast Asia. Train with master teachers, live in harmony with nature, and return home forever changed.",
    heroImage: "https://etimg.etb2bimg.com/photo/115997634.cms",
    accentColor: "#2e8b6e",
    totalProgramsCount: getCountForLocation("bali")
  },
  Rishikesh: {
    tagline: "Yoga Capital of the World",
    description: "Perched on the banks of the sacred Ganges, beneath the eternal Himalayas — Rishikesh is where yoga was born for the world. Every breath here carries centuries of practice and devotion.",
    heroImage: "/images/external/heroes/lucas-hemingway-Ezp5CvwKoXQ-unsplash-header_mobile.jpg",
    accentColor: "#4a7fb5",
    totalProgramsCount: getCountForLocation("rishikesh")
  },
  "Chiang-mai": {
    tagline: "Rose of the North",
    description: "Surrounded by over 300 Buddhist temples and misty mountain peaks, Chiang Mai's peaceful energy makes it one of Asia's most beloved spiritual retreat destinations. Let Thailand's northern jewel slow you down.",
    heroImage: "/images/external/heroes/unsplash_photo-1528181304800-259b08848526.jpg",
    accentColor: "#a0522d",
    totalProgramsCount: getCountForLocation("chiang-mai")
  },
  Dharamshala: {
    tagline: "Abode of the Dharma",
    description: "High in the Dhauladhar ranges, Dharamshala carries a rare spiritual electricity — home to the Tibetan government-in-exile and the Dalai Lama. Yoga here feels less like exercise and more like remembering.",
    heroImage: "/images/external/heroes/unsplash_photo-1626621341517-bbf3d9990a23.jpg",
    accentColor: "#7b5ea7",
    totalProgramsCount: getCountForLocation("dharamshala")
  }
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { name: "Sarah M.", country: "🇦🇺 Australia", program: "200hr Multi-Style", text: "The 200hr training completely rewired how I understand yoga. The teachers were world-class, the food was incredible, and I left as a completely different person.", avatar: "SM" },
  { name: "Kai T.", country: "🇩🇪 Germany", program: "Kundalini 200hr", text: "I came burnt out from corporate life. After 28 days of Kundalini training, I felt alive again. The program structure was rigorous but deeply nourishing.", avatar: "KT" },
  { name: "Priya R.", country: "🇮🇳 India", program: "Sound Healing", text: "The sound healing certification is extraordinary. I now run workshops back home using exactly what I learned. Worth every rupee and every moment.", avatar: "PR" }
];