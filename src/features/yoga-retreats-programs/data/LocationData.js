// ─── Program Categories Meta ───────────────────────────────────────────────────
export const PROGRAM_CATEGORIES = [
  { id: "multi-style",    icon: "🧘", label: "Multi-Style YTTC" },
  { id: "kundalini",      icon: "🔥", label: "Kundalini YTTC" },
  { id: "short",          icon: "🌿", label: "Short Courses" },
  { id: "specialization", icon: "🎵", label: "Specialization & Retreats" }
];

// ─── Location Specific Datasets ───────────────────────────────────────────────
export const LOCATION_DATA = {
  Bali: {
    tagline: "Island of the Gods",
    headline: "Transform in Bali",
    subheadline: "Where ancient wisdom meets tropical paradise",
    description:
      "Nestled among sacred rice terraces and whispering temples, our Bali programs offer the most immersive yoga teacher training experience in Southeast Asia. Train with master teachers, live in harmony with nature, and return home forever changed.",
    heroImage: "https://etimg.etb2bimg.com/photo/115997634.cms",
    accentColor: "#2e8b6e",
    accentLight: "#e8f5f0",
    highlights: [
      { icon: "🌿", label: "Tropical Climate", desc: "Year-round warmth, lush jungle setting" },
      { icon: "🛕", label: "Sacred Temples",   desc: "Train beside ancient Balinese sanctuaries" },
      { icon: "🌊", label: "Ocean Access",      desc: "Beach yoga & sunset meditation sessions" },
      { icon: "🍃", label: "Organic Living",    desc: "Farm-to-table Ayurvedic meals daily" },
    ],
    facts: ["Yoga Alliance Certified", "Small Batch Classes (max 12)", "Airport Transfers Included", "24/7 Support"],
    
    programsByCategoryId: {
      "multi-style": [
        { path: "50hr", hours: "50", title: "6 Days 50 Hours Multi-Style Yoga Course", price: "$650", duration: "6 days", badge: "Beginner Friendly", certification: "YACEP" },
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Multi-Style Yoga Course", price: "$999", duration: "10 days", badge: "Most Popular", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Multi-Style YTTC", price: "$1,299", duration: "20 days", badge: "Luxury Eco-Stay", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Multi-Style YTTC", price: "$2,099", duration: "26 days", badge: "For Teachers", certification: "RYT-300" },
      { path: "500hr", hours: "500", title: "56 Days 500 Hours Advanced Multi-Style YTTC", price: "$3,599", duration: "56 days", badge: "For Teachers", certification: "RYT-500" }
   
      ],
      "kundalini": [
           {
    path: "kundalini50hr",
    hours: "50",
    title: "6 Days 50 Hours Kundalini YTTC",
    price: "$650",
    duration: "6 days",
    badge: "Beginner Awakening",
    // certification: "RYT-100"
  },
         {
    path: "kundalini100hr",
    hours: "100",
    title: "10 Days 100 Hours Kundalini YTTC",
    price: "$999",
    duration: "10 days",
    badge: "Beginner Awakening",
    certification: "RYT-100"
  },
  {
    path: "kundalini200hr",
    hours: "200",
    title: "20 Days 200 Hours Kundalini YTTC",
    price: "$1,299",
    duration: "20 days",
    badge: "Energy Awakening",
    certification: "RYT-200"
  },
  {
    path: "kundalini300hr",
    hours: "300",
    title: "30 Days 300 Hours Kundalini YTTC",
    price: "$2,199",
    duration: "30 days",
    badge: "Advanced Transformation",
    certification: "RYT-300"
  },
  {
    path: "kundalini500hr",
    hours: "500",
    title: "50 Days 500 Hours Kundalini YTTC",
    price: "$3,699",
    duration: "50 days",
    badge: "Mastery & Enlightenment",
    certification: "RYT-500"
  }

      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Yin Yoga Course", price: "$790", duration: "6 days", badge: "Specialty", certification: "Yoga Alliance" },
        { path: "aerialyoga", hours: "50", title: "5 Days Aerial Yoga Course", price: "$650", duration: "5 days", badge: "Silk Hammocks Provided", certification: "YACEP" },
        { path: "acroYoga", hours: "50", title: "5 Days Acro Yoga Course", price: "$899", duration: "5 days", badge: "Beachside Practice", certification: "YACEP" }
      ],
      "specialization": [
        { path: "wellness-retreat", hours: "N/A", title: "Yoga & Wellness Detox Retreat", price: "$850", duration: "6 days", badge: "Spa Cleanse", certification: "YACEP" }
      ]
    }
  },

  Mysuru: {
    tagline: "City of Palaces",
    headline: "Discover Mysuru",
    subheadline: "The birthplace of modern Ashtanga yoga",
    description:
      "Mysuru is the spiritual cradle of yoga as we know it. Train in the city where Krishnamacharya and Pattabhi Jois shaped the world's yoga practice — a city of sandalwood, silk, and timeless wisdom.",
    heroImage: "/images/external/heroes/unsplash_photo-1590050752117-238cb0fb12b1.jpg",
    accentColor: "#c8813a",
    accentLight: "#fdf3e7",
    highlights: [
      { icon: "🏛️", label: "Yoga's Birthplace", desc: "Home of Ashtanga & classical traditions" },
      { icon: "🪔", label: "Palace City",        desc: "Practice in regal, culturally rich surroundings" },
      { icon: "🌸", label: "Jasmine Scented",    desc: "Serene gardens and flower markets" },
      { icon: "📿", label: "Deep Heritage",      desc: "Ancient lineage teachers available" },
    ],
    facts: ["Yoga Alliance Certified", "Vegetarian Meals Included", "Cultural Excursions", "Visa Assistance"],
    
    programsByCategoryId: {
      "multi-style": [
        { path: "50hr", hours: "50", title: "6 Days 50 Hours Primary Series Foundations", price: "$450", duration: "6 days", badge: "Intense Shala Setup", certification: "YACEP" },
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Classical Ashtanga Course", price: "$850", duration: "10 days", badge: "Lineage Focused", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Traditional Multi-Style YTTC", price: "$1,199", duration: "20 days", badge: "Authentic Shala", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Ashtanga Vinyasa", price: "$1,899", duration: "26 days", badge: "Intense Practice", certification: "RYT-300" }
      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Yin & Restoration", price: "$550", duration: "6 days", badge: "Traditional Styles", certification: "Yoga Alliance" }
      ]
    }
  },

  Rishikesh: {
    tagline: "Yoga Capital of the World",
    headline: "Rise in Rishikesh",
    subheadline: "Where the Himalayas and the Ganges unite",
    description:
      "Perched on the banks of the sacred Ganges, beneath the eternal Himalayas — Rishikesh is where yoga was born for the world. Every breath here carries centuries of practice and devotion.",
    heroImage: "/images/external/heroes/lucas-hemingway-Ezp5CvwKoXQ-unsplash-header_mobile.jpg",
    accentColor: "#4a7fb5",
    accentLight: "#eaf2fb",
    highlights: [
      { icon: "🏔️", label: "Himalayan Peaks", desc: "Breathtaking mountain backdrop for practice" },
      { icon: "🕉️", label: "Ganges Ghats",    desc: "Sacred river yoga & evening aarti ceremonies" },
      { icon: "🧘",  label: "Ashram Culture",  desc: "Immerse in authentic ashram living" },
      { icon: "🎶", label: "Kirtan Nights",    desc: "Nightly devotional music gatherings" },
    ],
    facts: ["Yoga Alliance Certified", "Ashram-style Stay", "Ganga Aarti Access", "Meditation Caves"],
    
    programsByCategoryId: {
      "multi-style": [
        { path: "50hr", hours: "50", title: "6 Days 50 Hours Vedic Foundation", price: "$499", duration: "6 days", badge: "Ganga Ashram Stay", certification: "YACEP" },
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Hatha & Vinyasa Course", price: "$750", duration: "10 days", badge: "Ashram Immersion", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Holy Ganges Multi-Style YTTC", price: "$999", duration: "20 days", badge: "Best Value Ashram", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Multi-Style YTTC", price: "$1,699", duration: "26 days", badge: "Deep Philosophy", certification: "RYT-300" },
        { path: "500hr", hours: "500", title: "56 Days 500 Hours Master Multi-Style Training", price: "$2,999", duration: "56 days", badge: "Ultimate Mastery", certification: "RYT-500" }
      ],
      "kundalini": [
        { path: "kundalini50hr", hours: "50", title: "6 Days 50 Hours Kundalini Awakening", price: "$550", duration: "6 days", badge: "Kriya Foundations", certification: "YACEP" },
        { path: "kundalini100hr", hours: "100", title: "10 Days 100 Hours Shaktipat Kundalini", price: "$799", duration: "10 days", badge: "Spiritual Awakening", certification: "Yoga Alliance" },
        { path: "kundalini200hr", hours: "200", title: "20 Days 200 Hours Authentic Kundalini YTTC", price: "$1,150", duration: "20 days", badge: "Sacred Lineage", certification: "RYT-200" },
        { path: "kundalini300hr", hours: "300", title: "26 Days 300 Hours Advanced Kundalini YTTC", price: "$1,850", duration: "26 days", badge: "Tantric Path", certification: "RYT-300" },
        { path: "kundalini500hr", hours: "500", title: "56 Days 500 Hours Complete Kundalini Master", price: "$3,200", duration: "~56 days", badge: "Elite Shaktipat", certification: "RYT-500" }
      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Meditative Yin Yoga", price: "$499", duration: "6 days", badge: "Ganga Riverside", certification: "Yoga Alliance" }
      ],
      "specialization": [
        { path: "soundhealing", hours: "50", title: "Vedic Sound Healing Level 1 & 2", price: "$350", duration: "4 days", badge: "Tibetan Bowls Included", certification: "YACEP" },
        { path: "wellness-retreat", hours: "N/A", title: "Ganga Aarti & Ashram Detox Retreat", price: "$550", duration: "6 days", badge: "Sacred Detox", certification: "YACEP" }
      ]
    }
  },

  "Chiang Mai": {
    tagline: "Rose of the North",
    headline: "Awaken in Chiang Mai",
    subheadline: "Ancient temples, misty mountains, quiet mind",
    description:
      "Surrounded by over 300 Buddhist temples and misty mountain peaks, Chiang Mai's peaceful energy makes it one of Asia's most beloved spiritual retreat destinations. Let Thailand's northern jewel slow you down.",
    heroImage: "/images/external/heroes/unsplash_photo-1528181304800-259b08848526.jpg",
    accentColor: "#a0522d",
    accentLight: "#f9ede5",
    highlights: [
      { icon: "⛩️", label: "300+ Temples",    desc: "Ancient Lanna temples surround the campus" },
      { icon: "🌄", label: "Mountain Mist",    desc: "Doi Inthanon peaks visible from practice halls" },
      { icon: "🍜", label: "Thai Cuisine",     desc: "Wholesome, plant-rich Northern Thai food" },
      { icon: "🐘", label: "Ethical Wildlife", desc: "Optional elephant sanctuary visits" },
    ],
    facts: ["Yoga Alliance Certified", "Thai Cooking Class", "Temple Tour Included", "Visa on Arrival"],
    
    programsByCategoryId: {
      "multi-style": [
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Nature Calm Course", price: "$899", duration: "10 days", badge: "Highland Retreat", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Lanna Highland YTTC", price: "$1,350", duration: "20 days", badge: "Mountain Sanctuary", certification: "RYT-200" }
      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Zen Yin Yoga", price: "$650", duration: "6 days", badge: "Buddhist Vibe", certification: "Yoga Alliance" },
        { path: "prenatalyoga", hours: "N/A", title: "Sacred Prenatal Yoga TTC", price: "$650", duration: "6 days", badge: "Specialized Care", certification: "RPYT" }
      ],
      "specialization": [
        { path: "wellness-retreat", hours: "N/A", title: "Monastery Meditation & Wellness Retreat", price: "$699", duration: "6 days", badge: "Total Stillness", certification: "YACEP" }
      ]
    }
  },

  Dharamshala: {
    tagline: "Abode of the Dharma",
    headline: "Ascend in Dharamshala",
    subheadline: "Where the Dalai Lama resides and dharma flows",
    description:
      "High in the Dhauladhar ranges, Dharamshala carries a rare spiritual electricity — home to the Tibetan government-in-exile and the Dalai Lama. Yoga here feels less like exercise and more like remembering.",
    heroImage: "/images/external/heroes/unsplash_photo-1626621341517-bbf3d9990a23.jpg",
    accentColor: "#7b5ea7",
    accentLight: "#f2eefb",
    highlights: [
      { icon: "🏔️", label: "Dhauladhar Views",  desc: "Snow-capped peaks from every practice window" },
      { icon: "☸️",  label: "Tibetan Influence", desc: "Buddhism and yoga in living dialogue" },
      { icon: "🌧️", label: "Cool Climate",       desc: "Refreshing mountain air year-round" },
      { icon: "🙏", label: "Dharma Teachings",   desc: "Guest talks by Tibetan monks & scholars" },
    ],
    facts: ["Yoga Alliance Certified", "Himalayan Trekking", "Tibetan Cooking Class", "Meditation Retreats"],
    
    programsByCategoryId: {
      "multi-style": [
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Mountain Meditation", price: "$699", duration: "10 days", badge: "Cool Altitude Shala", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Himalayan Zen YTTC", price: "$1,100", duration: "20 days", badge: "High Elevation Shala", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Masters Path", price: "$1,999", duration: "26 days", badge: "Deep Philosophy", certification: "RYT-300" }
      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Dhauladhar Yin Path", price: "$599", duration: "6 days", badge: "Alpine Vibe", certification: "Yoga Alliance" }
      ],
      "specialization": [
        { path: "soundhealing", hours: "50", title: "Tibetan Singing Bowl Certification", price: "$450", duration: "4 days", badge: "Monk Guided Sessions", certification: "YACEP" }
      ]
    }
  },
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { name: "Sarah M.", country: "🇦🇺 Australia", program: "200hr Multi-Style", text: "The 200hr training completely rewired how I understand yoga. The teachers were world-class, the food was incredible, and I left as a completely different person.", avatar: "SM" },
  { name: "Kai T.", country: "🇩🇪 Germany", program: "Kundalini 200hr", text: "I came burnt out from corporate life. After 28 days of Kundalini training, I felt alive again. The program structure was rigorous but deeply nourishing.", avatar: "KT" },
  { name: "Priya R.", country: "🇮🇳 India", program: "Sound Healing", text: "The sound healing certification is extraordinary. I now run workshops back home using exactly what I learned. Worth every rupee and every moment.", avatar: "PR" }
];