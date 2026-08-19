


import { PROGRAM_PRICES } from "../../../data/bali/programPrices";
import { PROGRAM_PRICES_CHIANG } from "../../../data/chiang/programPricesChiang";
import { PROGRAM_PRICES_DHARAMSHALA } from "../../../data/dharamshala/programPricesDharamshala";
import { PROGRAM_PRICES_MYSORE } from "../../../data/mysore/programPricesMysore";
import { PROGRAM_PRICES_RISHIKESH } from "../../../data/rishikesh/programPricesRishikesh";
// Shared structure meta for the landing page layout filters
export const LANDING_PROGRAM_CATEGORIES = [
  { id: "multi-style",    icon: "🧘", label: "Multi-Style YTTC" },
  { id: "kundalini",      icon: "🔥", label: "Kundalini YTTC" },
  { id: "short",          icon: "🌿", label: "Short Courses" },
  { id: "specialization", icon: "🎵", label: "Specialization & Retreats" }
];

export const LANDING_LOCATION_DATA = {
  mysuru: {
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
      { icon: "🪔", label: "Palace City",         desc: "Practice in regal, culturally rich surroundings" },
      { icon: "🌸", label: "Jasmine Scented",    desc: "Serene gardens and flower markets" },
      { icon: "📿", label: "Deep Heritage",      desc: "Ancient lineage teachers available" },
    ],
    facts: ["Yoga Alliance Certified", "Vegetarian Meals Included", "Cultural Excursions", "Visa Assistance"],
    programsByCategoryId: {
      "multi-style": [
        // { path: "50hr", hours: "50", title: "6 Days 50 Hours Primary Series Foundations", price: "$450", duration: "6 days", badge: "Intense Shala Setup", certification: "YACEP" },
        // { path: "100hr", hours: "100", title: "10 Days 100 Hours Classical Ashtanga Course", price: "$850", duration: "10 days", badge: "Lineage Focused", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "200 Hours Ashtanga Yoga and Hatha Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.multiStyle["200hrAshtanga"], duration: "20 days", badge: "Authentic Shala", certification: "RYT-200" },
        { path: "200hrmultistyle", hours: "200", title: "200 hrs Multi Style Yoga TTC In Maysuru", price: PROGRAM_PRICES_MYSORE.multiStyle["200hrMultistyle"], duration: "20 days", badge: "Multi Style", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "300 Hour Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.multiStyle["300hr"], duration: "26 days", badge: "Intense Practice", certification: "RYT-300" },
        { path: "500hr", hours: "500", title: "500 Hour Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.multiStyle["500hr"], duration: "56 days", badge: "Ultimate Shala Mastery", certification: "RYT-500" },
        { path: "mysore21dayashtanga", hours: "N/A", title: "21-Day Ashtanga Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.multiStyle["21DayAshtanga"], duration: "21 days", badge: "Lineage Focused", certification: "RYT-200" },
        { path: "mysore21dayhatha", hours: "N/A", title: "21-Day Hatha Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.multiStyle["21DayHatha"], duration: "21 days", badge: "Classic Foundations", certification: "RYT-200" }
      ],
      "kundalini": [],
      "short": [
        { path: "mysore50houryinyoga", hours: "50", title: "50 hour Yin Yoga TTC", price: PROGRAM_PRICES_MYSORE.shortcourses["yinyoga"], duration: "6 days", badge: "Traditional Styles", certification: "Yoga Alliance" },
        { path: "mysore50houraerialyoga", hours: "50", title: "50 Hour Aerial Yoga Teacher Training", price: PROGRAM_PRICES_MYSORE.shortcourses["aerialyoga"], duration: "5 days", badge: "Silk Hammocks Provided", certification: "YACEP" },
        { path: "mysoreprenatalyoga", hours: "N/A", title: "Prenatal Postnatal Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.shortcourses["prenatalyoga"], duration: "6 days", badge: "Specialized Care", certification: "RPYT" },
        { path: "mysore7dayyogatherapy", hours: "50", title: "Yoga Therapy Teacher Training Course", price: PROGRAM_PRICES_MYSORE.shortcourses["yogatherapy"], duration: "7 days", badge: "Therapeutic Healing", certification: "YACEP" }
      ],
      "specialization": [
        { path: "mysoresingingbowlsoundhealing", hours: "50", title: "3 Days Intensive Training Sound Healing Course", price: PROGRAM_PRICES_MYSORE.specializations["MysoreSingingBowlSoundHealingData"], duration: "3 days", badge: "Tibetan Bowls Included", certification: "YACEP" },
        { path: "mysore7daychairyoga", hours: "50", title: "7 Day Chair Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.specializations["Mysore7DayChairYogaData"], duration: "7 days", badge: "Accessibility Variant", certification: "YACEP" },
        { path: "mysore7daywheelyoga", hours: "50", title: "7 Day wheel Yoga Teacher Training Course", price: PROGRAM_PRICES_MYSORE.specializations["Mysore7DayWheelYogaData"], duration: "7 days", badge: "Prop Supported", certification: "YACEP" }
      ]
    }
  },

  bali: {
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
        { path: "50hr", hours: "50", title: "6 Days 50 Hours Multi-Style Yoga Course", price: PROGRAM_PRICES.multiStyle["50hr"], duration: "6 days", badge: "Beginner Friendly", certification: "YACEP" },
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Multi-Style Yoga Course", price: PROGRAM_PRICES.multiStyle["100hr"], duration: "10 days", badge: "Most Popular", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Multi-Style YTTC", price: PROGRAM_PRICES.multiStyle["200hr"], duration: "20 days", badge: "Luxury Eco-Stay", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Multi-Style YTTC", price: PROGRAM_PRICES.multiStyle["300hr"], duration: "26 days", badge: "For Teachers", certification: "RYT-300" },
        { path: "500hr", hours: "500", title: "56 Days 500 Hours Advanced Multi-Style YTTC", price: PROGRAM_PRICES.multiStyle["500hr"], duration: "56 days", badge: "For Teachers", certification: "RYT-500" }
      ],
      "kundalini": [
        { path: "kundalini50hr", hours: "50", title: "6 Days 50 Hours Kundalini YTTC", price: PROGRAM_PRICES.kundalini["50hr"], duration: "6 days", badge: "Beginner Awakening", certification: "YACEP" },
        { path: "kundalini100hr", hours: "100", title: "10 Days 100 Hours Kundalini YTTC", price: PROGRAM_PRICES.kundalini["100hr"], duration: "10 days", badge: "Beginner Awakening", certification: "RYT-100" },
        { path: "kundalini200hr", hours: "200", title: "20 Days 200 Hours Kundalini YTTC", price: PROGRAM_PRICES.kundalini["200hr"], duration: "20 days", badge: "Energy Awakening", certification: "RYT-200" },
        { path: "kundalini300hr", hours: "300", title: "30 Days 300 Hours Kundalini YTTC", price: PROGRAM_PRICES.kundalini["300hr"], duration: "30 days", badge: "Advanced Transformation", certification: "RYT-300" },
        { path: "kundalini500hr", hours: "500", title: "50 Days 500 Hours Kundalini YTTC", price: PROGRAM_PRICES.kundalini["500hr"], duration: "5０ days", badge: "Mastery & Enlightenment", certification: "RYT-5００" }
      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Yin Yoga Course", price: PROGRAM_PRICES.shortcourses.yinyoga, duration: "6 days", badge: "Specialty", certification: "Yoga Alliance" },
        { path: "prenatalyoga", hours: "N/A", title: "Sacred Prenatal Yoga TTC", price: PROGRAM_PRICES.shortcourses.prenatalyoga, duration: "6 days", badge: "Specialized Care", certification: "RPYT" },
        { path: "aerialyoga", hours: "50", title: "5 Days Aerial Yoga Course", price: PROGRAM_PRICES.shortcourses.aerialyoga, duration: "5 days", badge: "Silk Hammocks Provided", certification: "YACEP" },
        { path: "acroyoga", hours: "50", title: "5 Days Acro Yoga Course", price: PROGRAM_PRICES.shortcourses.acroyoga, duration: "5 days", badge: "Beachside Practice", certification: "YACEP" }
      ],
      "specialization": [
        { path: "soundhealing", hours: "50", title: "Vedic Sound Healing Level 1 & 2", price: PROGRAM_PRICES.specializations.soundhealing, duration: "4 days", badge: "Tibetan Bowls Included", certification: "YACEP" },
        { path: "100houryogatherapyayurve", hours: "100", title: "Bali 100Hours Yoga Therapy Ayurveda", price: PROGRAM_PRICES.specializations.Bali100HourYogaTherapyAyurvedaData, duration: "10 days", badge: "Lineage Focused", certification: "Yoga Alliance" },
        { path: "ayurvedictreatmentttc", hours: "50", title: "Ayurvedic Treatment In Bali", price: PROGRAM_PRICES.specializations.BaliAyurvedicTreatmentTTCData, duration: "6 days", badge: "Specialty", certification: "Yoga Alliance" },
        { path: "ayurveda5hoursabhyangam", hours: "5", title: "Ayurveda Massage Course In Bali", price: PROGRAM_PRICES.specializations.BaliAyurveda5HoursAbhyangamData, duration: "1 day", badge: "Spa Cleanse", certification: "YACEP" },
        { path: "wellness-retreat", hours: "N/A", title: "Yoga & Wellness Detox Retreat", price: PROGRAM_PRICES.specializations.wellnessretreat, duration: "6 days", badge: "Spa Cleanse", certification: "YACEP" },
        { path: "retreats6days", hours: "N/A", title: "6-Day Yoga and Detox Retreat", price: PROGRAM_PRICES.specializations.retreats6days, duration: "6 days", badge: "Spa Cleanse", certification: "YACEP" }
      ]
    }
  },

  rishikesh: {
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
        { path: "50hr", hours: "50", title: "6 Days 50 Hours Vedic Foundation", price: PROGRAM_PRICES_RISHIKESH.multiStyle["50hr"], duration: "6 days", badge: "Ganga Ashram Stay", certification: "YACEP" },
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Hatha & Vinyasa Course", price: PROGRAM_PRICES_RISHIKESH.multiStyle["100hr"], duration: "10 days", badge: "Ashram Immersion", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Holy Ganges Multi-Style YTTC", price: PROGRAM_PRICES_RISHIKESH.multiStyle["200hr"], duration: "20 days", badge: "Best Value Ashram", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Multi-Style YTTC", price: PROGRAM_PRICES_RISHIKESH.multiStyle["300hr"], duration: "26 days", badge: "Deep Philosophy", certification: "RYT-300" },
        { path: "500hr", hours: "500", title: "56 Days 500 Hours Master Multi-Style Training", price: PROGRAM_PRICES_RISHIKESH.multiStyle["500hr"], duration: "56 days", badge: "Ultimate Mastery", certification: "RYT-500" }
      ],
      "kundalini": [
        { path: "kundalini50hr", hours: "50", title: "6 Days 50 Hours Kundalini Awakening", price: PROGRAM_PRICES_RISHIKESH.kundalini["50hr"], duration: "6 days", badge: "Kriya Foundations", certification: "YACEP" },
        { path: "kundalini100hr", hours: "100", title: "10 Days 100 Hours Shaktipat Kundalini", price: PROGRAM_PRICES_RISHIKESH.kundalini["100hr"], duration: "10 days", badge: "Spiritual Awakening", certification: "Yoga Alliance" },
        { path: "kundalini200hr", hours: "200", title: "20 Days 200 Hours Authentic Kundalini YTTC", price: PROGRAM_PRICES_RISHIKESH.kundalini["200hr"], duration: "20 days", badge: "Sacred Lineage", certification: "RYT-200" },
        { path: "kundalini300hr", hours: "300", title: "26 Days 300 Hours Advanced Kundalini YTTC", price: PROGRAM_PRICES_RISHIKESH.kundalini["300hr"], duration: "26 days", badge: "Tantric Path", certification: "RYT-300" },
        { path: "kundalini500hr", hours: "500", title: "56 Days 500 Hours Complete Kundalini Master", price: PROGRAM_PRICES_RISHIKESH.kundalini["500hr"], duration: "~56 days", badge: "Elite Shaktipat", certification: "RYT-500" }
      ],
      "short": [
        { path: "rishikeshprenatalyoga", hours: "50", title: "Prenatal Yoga Teacher Training Course In Rishikesh", price: PROGRAM_PRICES_RISHIKESH.shortcourses["prenatalyoga"], duration: "6 days", badge: "Ganga Riverside", certification: "Yoga Alliance" },
        { path: "rishikesh6nightsyinyoga", hours: "50", title: "Yin Yoga Teacher Training Course In Rishikesh", price: PROGRAM_PRICES_RISHIKESH.shortcourses["yinyoga"], duration: "6 days", badge: "Ganga Riverside", certification: "Yoga Alliance" },
        { path: "rishikesh50houryoganidra", hours: "50", title: "5 Days Yoga Nidra Teacher Training Course in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.shortcourses["nidra"], duration: "5 days", badge: "Ganga Riverside", certification: "Yoga Alliance" }
      ],
      "specialization": [
        { path: "rishikeshsoundhealing", hours: "50", title: "Master Level Sound Healing Course in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["RishikeshSoundHealingData"], duration: "4 days", badge: "Tibetan Bowls Included", certification: "YACEP" },
        { path: "rishikesh200hourmultistylekundaliniayurvedamassage", hours: "200", title: "200 Hour Multistyle / Kundalini Yoga TTC with Ayurveda Massage", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData"], duration: "20 days", badge: "Sacred Lineage", certification: "RYT-200" },
        { path: "rishikesh10dayspanchakarma", hours: "N/A", title: "10 Days Panchakarma Therapy Program in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh10DaysPanchakarmaData"], duration: "10 days", badge: "Sacred Detox", certification: "YACEP" },
        { path: "rishikesh2daysayurvedicnutrition", hours: "N/A", title: "2 Days Ayurvedic Nutrition Course In Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh2DaysAyurvedicNutritionData"], duration: "2 days", badge: "Sacred Detox", certification: "YACEP" },
        { path: "rishikeshayurvedatherapistdiploma", hours: "N/A", title: "Ayurveda Therapist Diploma Course in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["RishikeshAyurvedaTherapistDiplomaData"], duration: "10 days", badge: "Sacred Detox", certification: "YACEP" },
        { path: "rishikesh18daysyogatherapywellness", hours: "N/A", title: "Yoga Therapy & Wellness Teacher Training Course", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh18DaysYogaTherapyWellnessData"], duration: "18 days", badge: "Sacred Lineage", certification: "RYT-200" },
        { path: "rishikesh5daysmindfulnessmeditation", hours: "N/A", title: "Mindfulness & Meditation Retreat & Teacher Training Course in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["RishikeshmindfulnessMeditationData"], duration: "5 days", badge: "Sacred Detox", certification: "YACEP" },
        { path: "rishikesh5daysyogaretreat", hours: "N/A", title: "5 Days Transformative Yoga Retreat in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh5DaysYogaRetreatData"], duration: "5 days", badge: "Ganga Ashram Stay", certification: "YACEP" },
        { path: "rishikesh7daysyogaretreat", hours: "N/A", title: "7 Days Transformative Yoga Retreat in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh7DaysYogaRetreatData"], duration: "7 days", badge: "Ganga Ashram Stay", certification: "YACEP" },
        { path: "rishikesh15daysyogaretreat", hours: "N/A", title: "15 Days Multi-Style Yoga Retreat in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh15DaysYogaRetreatData"], duration: "15 days", badge: "Ashram Immersion", certification: "YACEP" },
        { path: "rishikesh5daysacupressure", hours: "N/A", title: "5 Days Acupressure Healing Course in Rishikesh", price: PROGRAM_PRICES_RISHIKESH.specializations["Rishikesh5DaysAcupressureData"], duration: "5 days", badge: "Natural Healing", certification: "YACEP" }
      ]
    }
  },

  "chiang-mai": {
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
        { path: "50hr", hours: "50", title: "6 Days 50 Hours Multi-Style Yoga Course", price: PROGRAM_PRICES_CHIANG.multiStyle["50"], duration: "6 days", badge: "Beginner Friendly", certification: "YACEP" },
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Nature Calm Course", price: PROGRAM_PRICES_CHIANG.multiStyle["100hr"], duration: "10 days", badge: "Highland Retreat", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Lanna Highland YTTC", price: PROGRAM_PRICES_CHIANG.multiStyle["200hr"], duration: "20 days", badge: "Mountain Sanctuary", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Multi-Style YTTC", price: PROGRAM_PRICES_CHIANG.multiStyle["300hr"], duration: "26 days", badge: "For Teachers", certification: "RYT-300" },
        { path: "500hr", hours: "500", title: "56 Days 500 Hours Advanced Multi-Style YTTC", price: PROGRAM_PRICES_CHIANG.multiStyle["500hr"], duration: "56 days", badge: "For Teachers", certification: "RYT-500" }
      ],
      "kundalini": [
        { path: "kundalini50hr", hours: "50", title: "6 Days 50 Hours Kundalini Yoga Course", price: PROGRAM_PRICES_CHIANG.kundalini["50hr"], duration: "6 days", badge: "Beginner Awakening", certification: "YACEP" },
        { path: "kundalini100hr", hours: "100", title: "10 Days 100 Hours Kundalini YTTC", price: PROGRAM_PRICES_CHIANG.kundalini["100hr"], duration: "10 days", badge: "Beginner Awakening", certification: "RYT-100" },
        { path: "kundalini200hr", hours: "200", title: "20 Days 200 Hours Kundalini YTTC", price: PROGRAM_PRICES_CHIANG.kundalini["200hr"], duration: "20 days", badge: "Energy Awakening", certification: "RYT-200" },
        { path: "kundalini300hr", hours: "300", title: "30 Days 300 Hours Kundalini YTTC", price: PROGRAM_PRICES_CHIANG.kundalini["300hr"], duration: "30 days", badge: "Advanced Transformation", certification: "RYT-300" },
        { path: "kundalini500hr", hours: "500", title: "56 Days 500 Hours Kundalini YTTC", price: PROGRAM_PRICES_CHIANG.kundalini["500hr"], duration: "56 days", badge: "Mastery & Enlightenment", certification: "RYT-500" }
      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Zen Yin Yoga", price: PROGRAM_PRICES_CHIANG.shortcourses["yinyoga"], duration: "6 days", badge: "Buddhist Vibe", certification: "Yoga Alliance" },
        { path: "prenatalyoga", hours: "N/A", title: "Sacred Prenatal Yoga TTC", price: PROGRAM_PRICES_CHIANG.shortcourses["prenatalyoga"], duration: "6 days", badge: "Specialized Care", certification: "RPYT" },
        { path: "aerialyoga", hours: "50", title: "5 Days Aerial Yoga Course", price: PROGRAM_PRICES_CHIANG.shortcourses["aerialyoga"], duration: "5 days", badge: "Silk Hammocks Provided", certification: "YACEP" },
        { path: "acroyoga", hours: "50", title: "5 Days Acro Yoga Course", price: PROGRAM_PRICES_CHIANG.shortcourses["acroyoga"], duration: "5 days", badge: "Beachside Practice", certification: "YACEP" }
      ],
      "specialization": [
        { path: "soundhealing", hours: "50", title: "Sound Healing Course", price: PROGRAM_PRICES_CHIANG.specializations["ChiangMaiSoundHealingData"], duration: "4 days", badge: "Monk Guided Sessions", certification: "YACEP" },
        { path: "100houryogatherapyayurve", hours: "100", title: "Bali 100Hours Yoga Therapy Ayurveda", price: PROGRAM_PRICES_CHIANG.specializations["ChiangMai100HourYogaTherapyAyurvedaData"], duration: "10 days", badge: "Lineage Focused", certification: "Yoga Alliance" },
        { path: "ayurvedictreatmentttc", hours: "50", title: "Ayurvedic Treatment In Chiang Mai", price: PROGRAM_PRICES_CHIANG.specializations["ChiangMaiAyurvedicTreatmentTTCData"], duration: "6 days", badge: "Specialty", certification: "Yoga Alliance" },
        { path: "ayurveda5hoursabhyangam", hours: "5", title: "Ayurveda Massage Course In Chiang Mai", price: PROGRAM_PRICES_CHIANG.specializations["ChiangMaiAyurveda5HoursAbhyangamData"], duration: "1 day", badge: "Spa Cleanse", certification: "YACEP" },
        { path: "wellness-retreat", hours: "N/A", title: "Monastery Meditation & Wellness Retreat", price: PROGRAM_PRICES_CHIANG.specializations["ChiangMaiwellnessretreat"], duration: "6 days", badge: "Total Stillness", certification: "YACEP" },
        { path: "chiangmairetreats6days", hours: "N/A", title: "6-Day Yoga and Detox Retreat", price: PROGRAM_PRICES_CHIANG.specializations["ChiangMairetreats6days"], duration: "6 days", badge: "Total Stillness", certification: "YACEP" }
      ]
    }
  },

  dharamshala: {
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
        { path: "100hr", hours: "100", title: "10 Days 100 Hours Mountain Meditation", price: PROGRAM_PRICES_DHARAMSHALA.multiStyle["100hr"], duration: "10 days", badge: "Cool Altitude Shala", certification: "Yoga Alliance" },
        { path: "200hr", hours: "200", title: "20 Days 200 Hours Himalayan Zen YTTC", price: PROGRAM_PRICES_DHARAMSHALA.multiStyle["200hr"], duration: "20 days", badge: "High Elevation Shala", certification: "RYT-200" },
        { path: "300hr", hours: "300", title: "26 Days 300 Hours Advanced Masters Path", price: PROGRAM_PRICES_DHARAMSHALA.multiStyle["300hr"], duration: "26 days", badge: "Deep Philosophy", certification: "RYT-300" },
        { path: "500hr", hours: "500", title: "56 Days 500 Hours Master Multi-Style Training", price: PROGRAM_PRICES_DHARAMSHALA.multiStyle["500hr"], duration: "56 days", badge: "Ultimate Mastery", certification: "RYT-500" }
      ],
      "kundalini": [
        { path: "kundalini50hr", hours: "50", title: "5 Days 50 Hours Kundalini YTTC", price: PROGRAM_PRICES_DHARAMSHALA.kundalini["50hr"], duration: "5 days", badge: "Kriya Foundations", certification: "YACEP" },
        { path: "kundalini100hr", hours: "100", title: "10 Days 100 Hours Kundalini YTTC", price: PROGRAM_PRICES_DHARAMSHALA.kundalini["100hr"], duration: "10 days", badge: "Spiritual Awakening", certification: "Yoga Alliance" },
        { path: "kundalini200hr", hours: "200", title: "25 Days 200 Hours Kundalini YTTC", price: PROGRAM_PRICES_DHARAMSHALA.kundalini["200hr"], duration: "25 days", badge: "Sacred Lineage", certification: "RYT-200" },
        { path: "kundalini300hr", hours: "300", title: "29 Days 300 Hours Kundalini YTTC", price: PROGRAM_PRICES_DHARAMSHALA.kundalini["300hr"], duration: "29 days", badge: "Tantric Path", certification: "RYT-300" },
        { path: "kundalini500hr", hours: "500", title: "59 Days 500 Hours Kundalini YTTC", price: PROGRAM_PRICES_DHARAMSHALA.kundalini["500hr"], duration: "59 days", badge: "Elite Shaktipat", certification: "RYT-500" }
      ],
      "short": [
        { path: "yinyoga", hours: "50", title: "6 Days 50 Hours Dhauladhar Yin Path", price: PROGRAM_PRICES_DHARAMSHALA.shortcourses.yinyoga, duration: "6 days", badge: "Alpine Vibe", certification: "Yoga Alliance" }
      ],
      "specialization": [
        { path: "soundhealing", hours: "50", title: "Tibetan Singing Bowl Certification", price: PROGRAM_PRICES_DHARAMSHALA.specializations["TibetanBowlSoundHealingData"], duration: "4 days", badge: "Monk Guided Sessions", certification: "YACEP" }
      ]
    }
  }
};