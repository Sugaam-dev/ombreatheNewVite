// ─── Location Data ────────────────────────────────────────────────────────────

export const LOCATION_DATA = {
  Bali: {
    tagline: "Island of the Gods",
    headline: "Transform in Bali",
    subheadline: "Where ancient wisdom meets tropical paradise",
    description:
      "Nestled among sacred rice terraces and whispering temples, our Bali programs offer the most immersive yoga teacher training experience in Southeast Asia. Train with master teachers, live in harmony with nature, and return home forever changed.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=90",
    accentColor: "#2e8b6e",
    accentLight: "#e8f5f0",
    highlights: [
      { icon: "🌿", label: "Tropical Climate", desc: "Year-round warmth, lush jungle setting" },
      { icon: "🛕", label: "Sacred Temples",   desc: "Train beside ancient Balinese sanctuaries" },
      { icon: "🌊", label: "Ocean Access",      desc: "Beach yoga & sunset meditation sessions" },
      { icon: "🍃", label: "Organic Living",    desc: "Farm-to-table Ayurvedic meals daily" },
    ],
    facts: ["Yoga Alliance Certified", "Small Batch Classes (max 12)", "Airport Transfers Included", "24/7 Support"],
  },

  Mysuru: {
    tagline: "City of Palaces",
    headline: "Discover Mysuru",
    subheadline: "The birthplace of modern Ashtanga yoga",
    description:
      "Mysuru is the spiritual cradle of yoga as we know it. Train in the city where Krishnamacharya and Pattabhi Jois shaped the world's yoga practice — a city of sandalwood, silk, and timeless wisdom.",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1600&q=90",
    accentColor: "#c8813a",
    accentLight: "#fdf3e7",
    highlights: [
      { icon: "🏛️", label: "Yoga's Birthplace", desc: "Home of Ashtanga & classical traditions" },
      { icon: "🪔", label: "Palace City",        desc: "Practice in regal, culturally rich surroundings" },
      { icon: "🌸", label: "Jasmine Scented",    desc: "Serene gardens and flower markets" },
      { icon: "📿", label: "Deep Heritage",      desc: "Ancient lineage teachers available" },
    ],
    facts: ["Yoga Alliance Certified", "Vegetarian Meals Included", "Cultural Excursions", "Visa Assistance"],
  },

  Rishikesh: {
    tagline: "Yoga Capital of the World",
    headline: "Rise in Rishikesh",
    subheadline: "Where the Himalayas and the Ganges unite",
    description:
      "Perched on the banks of the sacred Ganges, beneath the eternal Himalayas — Rishikesh is where yoga was born for the world. Every breath here carries centuries of practice and devotion.",
    heroImage: "https://images.unsplash.com/photo-1585014612641-3c82a764ce9d?w=1600&q=90",
    accentColor: "#4a7fb5",
    accentLight: "#eaf2fb",
    highlights: [
      { icon: "🏔️", label: "Himalayan Peaks", desc: "Breathtaking mountain backdrop for practice" },
      { icon: "🕉️", label: "Ganges Ghats",    desc: "Sacred river yoga & evening aarti ceremonies" },
      { icon: "🧘",  label: "Ashram Culture",  desc: "Immerse in authentic ashram living" },
      { icon: "🎶", label: "Kirtan Nights",    desc: "Nightly devotional music gatherings" },
    ],
    facts: ["Yoga Alliance Certified", "Ashram-style Stay", "Ganga Aarti Access", "Meditation Caves"],
  },

  "Chiang Mai": {
    tagline: "Rose of the North",
    headline: "Awaken in Chiang Mai",
    subheadline: "Ancient temples, misty mountains, quiet mind",
    description:
      "Surrounded by over 300 Buddhist temples and misty mountain peaks, Chiang Mai's peaceful energy makes it one of Asia's most beloved spiritual retreat destinations. Let Thailand's northern jewel slow you down.",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1600&q=90",
    accentColor: "#a0522d",
    accentLight: "#f9ede5",
    highlights: [
      { icon: "⛩️", label: "300+ Temples",    desc: "Ancient Lanna temples surround the campus" },
      { icon: "🌄", label: "Mountain Mist",    desc: "Doi Inthanon peaks visible from practice halls" },
      { icon: "🍜", label: "Thai Cuisine",     desc: "Wholesome, plant-rich Northern Thai food" },
      { icon: "🐘", label: "Ethical Wildlife", desc: "Optional elephant sanctuary visits" },
    ],
    facts: ["Yoga Alliance Certified", "Thai Cooking Class", "Temple Tour Included", "Visa on Arrival"],
  },

  Dharamshala: {
    tagline: "Abode of the Dharma",
    headline: "Ascend in Dharamshala",
    subheadline: "Where the Dalai Lama resides and dharma flows",
    description:
      "High in the Dhauladhar ranges, Dharamshala carries a rare spiritual electricity — home to the Tibetan government-in-exile and the Dalai Lama. Yoga here feels less like exercise and more like remembering.",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=90",
    accentColor: "#7b5ea7",
    accentLight: "#f2eefb",
    highlights: [
      { icon: "🏔️", label: "Dhauladhar Views",  desc: "Snow-capped peaks from every practice window" },
      { icon: "☸️",  label: "Tibetan Influence", desc: "Buddhism and yoga in living dialogue" },
      { icon: "🌧️", label: "Cool Climate",       desc: "Refreshing mountain air year-round" },
      { icon: "🙏", label: "Dharma Teachings",   desc: "Guest talks by Tibetan monks & scholars" },
    ],
    facts: ["Yoga Alliance Certified", "Himalayan Trekking", "Tibetan Cooking Class", "Meditation Retreats"],
  },
};

// ─── Program Categories ───────────────────────────────────────────────────────

export const PROGRAM_CATEGORIES = [
  {
    id: "multi-style",
    icon: "🧘",
    label: "Multi-Style YTTC",
    desc: "The most comprehensive path — blend Hatha, Vinyasa, Ashtanga & more into one powerful certification.",
    programs: [
      {
        path: "50hr",
        hours: "50",
        title: "Foundation",
        price: "$650",
        duration: "6 days",
        badge: "Beginner Friendly",
        certification: "YACEP",
      },
      {
        path: "100hr",
        hours: "100",
        title: "Foundation",
        price: "$999",
        duration: "10 days",
        badge: "Most Popular",
        certification: "Yoga Alliance",
      },
      {
        path: "200hr",
        hours: "200",
        title: "Professional",
        price: "$1,299",
        duration: "20 days",
        badge: "Yoga Alliance",
        certification: "RYT-200",
      },
      {
        path: "300hr",
        hours: "300",
        title: "Advanced",
        price: "$2,099",
        duration: "26 days",
        badge: "For Teachers",
        certification: "RYT-300",
      },
      {
        path: "500hr",
        hours: "500",
        title: "Master",
        price: "$3,599",
        duration: "~56 days",
        badge: "Elite Program",
        certification: "RYT-500",
      },
    ],
  },
  {
    id: "kundalini",
    icon: "🔥",
    label: "Kundalini YTTC",
    desc: "Awaken your life force energy through mantra, breathwork, Kriya and transformational Kundalini practice.",
    programs: [
      {
        path: "kundalini50hr",
        hours: "50",
        title: "Awakening",
        price: "$650",
        duration: "6 days",
        badge: "Beginner Friendly",
        certification: "YACEP",
      },
      {
        path: "kundalini100hr",
        hours: "100",
        title: "Activation",
        price: "$999",
        duration: "10 days",
        badge: "Immersive",
        certification: "Yoga Alliance",
      },
      {
        path: "kundalini200hr",
        hours: "200",
        title: "Integration",
        price: "$1,299",
        duration: "20 days",
        badge: "Yoga Alliance",
        certification: "RYT-200",
      },
      {
        path: "kundalini300hr",
        hours: "300",
        title: "Mastery",
        price: "$2,199",
        duration: "26 days",
        badge: "Advanced",
        certification: "RYT-300",
      },
      {
        path: "kundalini500hr",
        hours: "500",
        title: "Transmission",
        price: "$3,699",
        duration: "~56 days",
        badge: "Elite Program",
        certification: "RYT-500",
      },
    ],
  },
  {
    id: "short",
    icon: "🌿",
    label: "Short Courses",
    desc: "Focused specialty training. Perfect as an add-on or standalone certification for working teachers.",
    programs: [
      {
        path: "yinyoga",
        hours: "50",
        title: "Yin Yoga",
        price: "$650",
        duration: "6 days",
        badge: "Specialty",
        certification: "Yoga Alliance",
      },
      {
        path: "prenatalyoga",
        hours: "85",
        title: "Prenatal Yoga",
        price: "$650",
        duration: "6 days",
        badge: "Specialty",
        certification: "RPYT",
      },
      {
        path: "aerialyoga",
        hours: "50",
        title: "Aerial Yoga",
        price: "$550",
        duration: "6 days",
        badge: "Equipment Provided",
        certification: "YACEP",
      },
      {
        path: "acroYoga",
        hours: "50",
        title: "Acro Yoga",
        price: "$799",
        duration: "5 days",
        badge: "Partner Practice",
        certification: "YACEP",
      },
    ],
  },
  {
    id: "specialization",
    icon: "🎵",
    label: "Specialization",
    desc: "Deepen into the healing arts — ancient sound practices and holistic wellness for modern professionals.",
    programs: [
      {
        path: "soundhealing",
        hours: "50",
        title: "Sound Healing Level 1 & 2",
        price: "$400",
        duration: "4 days",
        badge: "Transformational",
        certification: "YACEP",
      },
      {
        path: "wellness-retreat",
        hours: "N/A",
        title: "Yoga & Wellness Detox Retreat",
        price: "$650",
        duration: "6 days",
        badge: "Retreat",
        certification: "YACEP",
      },
    ],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    country: "🇦🇺 Australia",
    program: "200hr Multi-Style",
    text: "The 200hr training completely rewired how I understand yoga. The teachers were world-class, the food was incredible, and I left as a completely different person.",
    avatar: "SM",
  },
  {
    name: "Kai T.",
    country: "🇩🇪 Germany",
    program: "Kundalini 200hr",
    text: "I came burnt out from corporate life. After 28 days of Kundalini training, I felt alive again. The program structure was rigorous but deeply nourishing.",
    avatar: "KT",
  },
  {
    name: "Priya R.",
    country: "🇮🇳 India",
    program: "Sound Healing",
    text: "The sound healing certification is extraordinary. I now run workshops back home using exactly what I learned. Worth every rupee and every moment.",
    avatar: "PR",
  },
];