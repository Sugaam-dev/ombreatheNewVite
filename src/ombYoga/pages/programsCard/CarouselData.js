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
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1600&q=90",
    accentColor: "#c8813a",
    totalProgramsCount: 13
  },
  Bali: {
    tagline: "Island of the Gods",
    description: "Nestled among sacred rice terraces and whispering temples, our Bali programs offer the most immersive yoga teacher training experience in Southeast Asia. Train with master teachers, live in harmony with nature, and return home forever changed.",
    heroImage: "https://etimg.etb2bimg.com/photo/115997634.cms",
    accentColor: "#2e8b6e",
    totalProgramsCount: 15 // Updated to match your exact link map index totals (including all 4 specialization paths + 1 retreat layout)
  },
  Rishikesh: {
    tagline: "Yoga Capital of the World",
    description: "Perched on the banks of the sacred Ganges, beneath the eternal Himalayas — Rishikesh is where yoga was born for the world. Every breath here carries centuries of practice and devotion.",
    heroImage: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt80398e03b309f555/68a82def94a89550e2e57d49/lucas-hemingway-Ezp5CvwKoXQ-unsplash-header_mobile.jpg?format=webp&auto=avif&quality=60&crop=1%3A1&width=1440",
    accentColor: "#4a7fb5",
    totalProgramsCount: 19 // Updated to explicitly factor in all 3 dynamic short courses and 6 specialization paths
  },
  "Chiang-mai": {
    tagline: "Rose of the North",
    description: "Surrounded by over 300 Buddhist temples and misty mountain peaks, Chiang Mai's peaceful energy makes it one of Asia's most beloved spiritual retreat destinations. Let Thailand's northern jewel slow you down.",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=90",
    accentColor: "#a0522d",
    totalProgramsCount: 15
  },
  Dharamshala: {
    tagline: "Abode of the Dharma",
    description: "High in the Dhauladhar ranges, Dharamshala carries a rare spiritual electricity — home to the Tibetan government-in-exile and the Dalai Lama. Yoga here feels less like exercise and more like remembering.",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=90",
    accentColor: "#7b5ea7",
    totalProgramsCount: 11
  }
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { name: "Sarah M.", country: "🇦🇺 Australia", program: "200hr Multi-Style", text: "The 200hr training completely rewired how I understand yoga. The teachers were world-class, the food was incredible, and I left as a completely different person.", avatar: "SM" },
  { name: "Kai T.", country: "🇩🇪 Germany", program: "Kundalini 200hr", text: "I came burnt out from corporate life. After 28 days of Kundalini training, I felt alive again. The program structure was rigorous but deeply nourishing.", avatar: "KT" },
  { name: "Priya R.", country: "🇮🇳 India", program: "Sound Healing", text: "The sound healing certification is extraordinary. I now run workshops back home using exactly what I learned. Worth every rupee and every moment.", avatar: "PR" }
];