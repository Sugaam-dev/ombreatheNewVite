// data/saptaRishiSadhanaData.js - Complete Data for Third Membership Program
import saptaRishiSadhana from '../../../../images/Membership/SAPTA RISHI SADHANA PAGE FRONT.jpg'
import a from '../../../../images/Membership/excursion_3.jpg'
import b from '../../../../images/Membership/Accomodation_3.jpg'
import c from '../../../../images/Membership/yogic_food.jpg'
import time from '../../../../images/Gallery/Daily_Schedule_100_200_300.jpg'
import background from '../../../../images/Background.jpg'
const saptaRishiSadhanaData = {
  // Theme colors specific to Sapta Rishi program
  theme: {
    primary: '#2F4F4F',    // Dark slate gray for wisdom
    accent: '#DAA520',     // Golden rod for enlightenment
    buttonShadow: 'rgba(218, 165, 32, 0.4)'
  },

  // Hero section content
  hero: {
    subtitle: `SAPTA RISHI SADHANA MEMBERSHIP PROGRAM
    Vedic Wisdom and Ancient Knowledge
    400 Hours Certification with Ombreathe`,
    title: "Connect with Seven Great Sages Through Sacred Ashram Visits and Ancient Practices",
    description: "Experience profound wisdom transformation visiting ancient Rishi ashrams and learning timeless Vedic knowledge from authentic lineage holders",
    ctaText: "Begin Your Wisdom Journey",
    url:"/contact"
  },

  // Pricing information
  pricing: {
    nri: {
      amount: "$3,200",
      registration: "$200"
    },
    indian: {
      amount: "₹2,50,000",
      registration: "₹10,000"
    },
    inclusions: "*Inclusive of accommodation, meals, transportation, ashram stays, texts & certification"
  },

  // All images used in the component
  images: {
    main: saptaRishiSadhana,
    mainAlt: "Ancient sage in meditation at ashram",
    aboutMain: a,
    aboutMainAlt: "Sacred Vedic fire ceremony",
    gallery: [
      {
        src: b,
        alt: "Traditional ashram sattvic food"
      },
      {
        src: c,
        alt: "Mountain ashram accommodation"
      }
    ],
    transformationBg: background
  },

  // Completion/Benefits section
  completion: {
    title: `After completing the
    wisdom journey...`,
    benefits: [
      "Deep connection with Vedic wisdom and ancient knowledge",
      "400-hour Advanced Vedic Studies certification",
      "Mastery of ancient Rishi meditation techniques",
      "Understanding of cosmic laws and universal principles",
      "Ability to teach and guide others in Vedic practices",
      "Personal spiritual transformation through sage wisdom"
    ],
    certificationText: [
      "You will receive Advanced Vedic Studies certification.",
      "Recognized by traditional ashrams and spiritual institutions worldwide.",
      "Connecting Ancient Wisdom to Modern Life"
    ]
  },

  // Certification images
  certifications: [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      alt: "Vedic Studies Certification"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616c95ae3d4?w=100&h=100&fit=crop&crop=face",
      alt: "Sapta Rishi Lineage Certification"
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      alt: "Ombreathe Advanced Wisdom Certification"
    }
  ],

  // About section
  about: {
    sectionTitle: "ABOUT SAPTA RISHI SADHANA",
    heading: `Join us for a profound
   Wisdom Journey to Sacred
    Ashrams of the Seven Great Sages`
  },

  // Features list with icons
  features: [
    {
      icon: "🧙‍♂️",
      title: "Visit 7 Sacred Rishi Ashrams",
      subtitle: "Experience ancient wisdom at original sage locations"
    },
    {
      icon: "📜",
      title: "Study original Vedic texts",
      subtitle: "Learn from Rigveda, Upanishads, and ancient scriptures"
    },
    {
      icon: "🎓",
      title: "400 Hours Advanced Certification",
      subtitle: "Most comprehensive Vedic wisdom program"
    },
    {
      icon: "🔥",
      title: "Daily Vedic fire ceremonies",
      subtitle: "Participate in ancient Agnihotra and Yagnas"
    },
    {
      icon: "🏔️",
      title: "Himalayan ashram experiences",
      subtitle: "Stay in authentic mountain hermitages"
    },
    {
      icon: "🎁",
      title: "Complete Vedic study kit:",
      subtitle: "Sacred texts, meditation accessories, Rudraksha & spiritual tools"
    }
  ],

  // Transformation section
  transformation: {
    mainText: `Embarking on a Sapta Rishi Sadhana connects you with the timeless wisdom of the seven great sages who preserve universal knowledge for humanity`,
    subtitle: "At Ombreathe, our advanced program transmits authentic Vedic wisdom through direct experience at sacred ashrams, ancient practices, and guidance from traditional lineage holders"
  },

  // Practices section
  practices: {
    heading: `Ancient practices of Vedic Meditation, Sacred Fire Ceremonies, and Rishi Yoga exploring Universal Wisdom - a fusion of Traditional Knowledge and Modern Application`,
    description: "Our Sapta Rishi Sadhana program provides deep immersion into Vedic knowledge systems, ancient meditation techniques, and universal principles. Learn directly from traditional teachers in authentic ashram environments while discovering practical applications for modern life.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Vedic meditation practice",
        title: "Rishi Meditation Techniques",
        description: "Ancient meditation methods passed down through sage lineages for accessing higher consciousness"
      },
      {
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Vedic fire ceremony",
        title: "Sacred Fire Ceremonies",
        description: "Traditional Agnihotra and Yajna practices for purification and cosmic connection"
      },
      {
        image: "https://images.unsplash.com/photo-1606166894937-8ea762d2c4db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Ancient text study",
        title: "Vedic Scripture Study",
        description: "Deep study of original texts including Vedas, Upanishads, and sage teachings"
      }
    ]
  },

  // Unique features
  unique: {
    title: "What Makes Our Sapta Rishi Sadhana Unique",
    items: [
      {
        title: "Authentic Lineage",
        description: "Learn from traditional teachers maintaining unbroken lineages from the ancient Rishis"
      },
      {
        title: "Complete Knowledge System",
        description: "Experience the full spectrum of Vedic knowledge including philosophy, science, and spiritual practices"
      },
      {
        title: "Practical Application",
        description: "Discover how ancient wisdom applies to modern challenges and daily life situations"
      }
    ]
  },

  // Curriculum section - 400-hour advanced program
  curriculum: {
    title: "Sapta Rishi Sadhana Training Program",
    subtitle: "Advanced 400-Hour Vedic Wisdom Curriculum",
    description: [
      "Our comprehensive program provides the deepest immersion into Vedic knowledge systems through visits to seven sacred Rishi ashrams and intensive study with traditional teachers",
      "Learn from authentic lineage holders who maintain the original teachings of the great sages through centuries of unbroken transmission"
    ],
    modules: [
      {
        title: "Rishi Kashyapa Lineage",
        icon: "🌅",
        content: [
          "Cosmic creation principles",
          "Prajapati consciousness techniques",
          "Family and social dharma",
          "Celestial being connections",
          "Cosmic law understanding",
          "Creation meditation practices",
          "Universal father archetype",
          "Responsibility and leadership",
          "Cosmic hierarchy wisdom"
        ]
      },
      {
        title: "Rishi Atri Lineage",
        icon: "🔥",
        content: [
          "Fire element mastery",
          "Agni yoga practices",
          "Digestive fire cultivation",
          "Inner light meditation",
          "Transformative practices",
          "Sacred fire ceremonies",
          "Energy purification methods",
          "Metabolic balance techniques",
          "Inner radiance development"
        ]
      },
      {
        title: "Rishi Bharadvaja Lineage",
        icon: "🎵",
        content: [
          "Sacred sound and music",
          "Vedic chanting mastery",
          "Mantra composition techniques",
          "Sound healing methods",
          "Rhythmic meditation",
          "Musical consciousness",
          "Vibrational therapy",
          "Sonic purification",
          "Divine music creation"
        ]
      },
      {
        title: "Rishi Vishvamitra Lineage",
        icon: "⚔️",
        content: [
          "Warrior-sage transformation",
          "Power and compassion balance",
          "Tapasya (austerity) practices",
          "Willpower development",
          "Spiritual warriorship",
          "Protection techniques",
          "Leadership consciousness",
          "Strength with wisdom",
          "Divine authority understanding"
        ]
      },
      {
        title: "Rishi Gautama Lineage",
        icon: "💎",
        content: [
          "Clarity and discrimination",
          "Truth-seeking practices",
          "Pure perception development",
          "Intellectual clarity methods",
          "Witness consciousness",
          "Analytical meditation",
          "Wisdom discrimination",
          "Mental purification",
          "Clear seeing practices"
        ]
      },
      {
        title: "Rishi Jamadagni Lineage",
        icon: "🌿",
        content: [
          "Healing arts and Ayurveda",
          "Herbal medicine knowledge",
          "Natural healing methods",
          "Plant consciousness",
          "Therapeutic practices",
          "Earth element mastery",
          "Regenerative techniques",
          "Nature connection",
          "Holistic health wisdom"
        ]
      },
      {
        title: "Rishi Vasishtha Lineage",
        icon: "🌟",
        content: [
          "Royal sage wisdom",
          "Dharmic governance",
          "Spiritual counseling",
          "Guidance and mentorship",
          "Righteous living",
          "Wisdom transmission",
          "Teacher consciousness",
          "Divine guidance",
          "Sage authority mastery"
        ]
      },
      {
        title: "Vedic Sciences Integration",
        icon: "🔬",
        content: [
          "Jyotisha (Vedic astrology)",
          "Ayurveda principles",
          "Yoga philosophy depth",
          "Meditation science",
          "Sacred geometry",
          "Mathematics and astronomy",
          "Consciousness studies",
          "Universal principles",
          "Modern application methods"
        ]
      },
      {
        title: "Advanced Meditation",
        icon: "🧘",
        content: [
          "Rishi meditation techniques",
          "Samadhi state cultivation",
          "Consciousness expansion",
          "Higher perception development",
          "Cosmic consciousness",
          "Unity awareness practices",
          "Divine communion",
          "Enlightenment preparation",
          "Wisdom embodiment"
        ]
      },
      {
        title: "Sacred Text Study",
        icon: "📚",
        content: [
          "Rigveda hymn study",
          "Upanishads exploration",
          "Brahma Sutras understanding",
          "Bhagavad Gita depth",
          "Yoga Sutras mastery",
          "Sanskrit language basics",
          "Chanting and recitation",
          "Textual interpretation",
          "Wisdom application"
        ]
      },
      {
        title: "Life Application",
        icon: "🏠",
        content: [
          "Daily spiritual routine",
          "Modern ashram creation",
          "Teaching methodology",
          "Community building",
          "Wisdom sharing techniques",
          "Mentorship development",
          "Integration practices",
          "Service orientation",
          "Continuous learning"
        ]
      },
      {
        title: "Certification Preparation",
        icon: "🎯",
        content: [
          "Knowledge assessment",
          "Practical demonstration",
          "Teaching capability",
          "Personal transformation",
          "Wisdom integration",
          "Service readiness",
          "Lineage connection",
          "Certification ceremony",
          "Continuing education"
        ]
      }
    ]
  },

  // Additional options - Different ashram experiences
  additionalOptions: {
    title: "Choose Your Ashram Experience",
    options: [
      {
        name: "Complete Immersion",
        timing: "45 Days",
        description: "Full journey visiting all seven Rishi ashrams with extensive study time",
        highlights: ["All 7 Rishi ashrams", "Deep text study", "Complete certification"]
      },
      {
        name: "Essential Wisdom",
        timing: "30 Days",
        description: "Core ashrams with fundamental Vedic practices and key teachings",
        highlights: ["5 major ashrams", "Essential practices", "Comprehensive study"]
      },
      {
        name: "Intensive Study",
        timing: "21 Days",
        description: "Focused learning at key ashrams with concentrated practice",
        highlights: ["3 powerful ashrams", "Intensive study", "Rapid transformation"]
      },
      {
        name: "Seasonal Retreats",
        timing: "Multiple seasons",
        description: "Quarterly visits spread over a year for gradual wisdom absorption",
        highlights: ["Seasonal wisdom", "Gradual integration", "Year-long journey"]
      }
    ]
  },

  // Daily schedule for ashram life
  schedule: {
    title: "Daily Schedule - Sapta Rishi Sadhana",
    description: "Our traditional ashram schedule follows ancient rhythms of spiritual life, balancing meditation, study, service, and contemplation. Each day deepens your connection with Rishi wisdom while maintaining sustainable spiritual growth.",
    note: "*Schedule follows traditional ashram timing and may vary based on location and season",
    image: time,
    imageAlt: "Dawn meditation at mountain ashram",
    morning: {
      title: "Dawn Practices",
      activities: [
        { time: "04:00 AM", activity: "Brahma Muhurta Awakening" },
        { time: "04:30 AM", activity: "Personal Meditation & Japa" },
        { time: "05:30 AM", activity: "Group Meditation & Pranayama" },
        { time: "06:30 AM", activity: "Vedic Chanting & Mantras" },
        { time: "07:30 AM", activity: "Sunrise Agnihotra Ceremony" },
        { time: "08:30 AM", activity: "Simple Breakfast & Silence" },
        { time: "09:30 AM", activity: "Karma Yoga (Selfless Service)" }
      ]
    },
    afternoon: {
      title: "Study & Integration",
      activities: [
        { time: "11:00 AM", activity: "Sacred Text Study & Discussion" },
        { time: "01:00 PM", activity: "Lunch & Rest Period" },
        { time: "03:00 PM", activity: "Rishi Yoga & Movement" },
        { time: "04:30 PM", activity: "Individual Study & Reflection" },
        { time: "06:00 PM", activity: "Evening Meditation & Contemplation" },
        { time: "07:30 PM", activity: "Simple Dinner & Community" },
        { time: "09:00 PM", activity: "Personal Practice & Rest" }
      ]
    },
    info: {
      title: "About Ashram Life",
      content: [
        "Our traditional ashram schedule honors the natural rhythms of spiritual life while accommodating modern needs. Each day includes meditation, study, service, and contemplation in balanced measure.",
        "Living in ashrams provides direct experience of how the ancient Rishis organized spiritual life for optimal growth, community harmony, and wisdom development."
      ]
    }
  },

  // Sacred locations - 7 Rishi Ashrams
  locations: {
    title: "7 Sacred Rishi Ashrams",
    description: "Visit the original hermitages and sacred sites where the seven great sages lived, meditated, and transmitted timeless wisdom",
    places: [
      { name: "Kashyapa Ashram", location: "Kashmir Valley", description: "Original hermitage of Rishi Kashyapa, creator of cosmic principles and father of celestial beings" },
      { name: "Atri Ashram", location: "Chitrakoot, UP", description: "Sacred site where Rishi Atri mastered fire element and composed fire hymns" },
      { name: "Bharadvaja Ashram", location: "Prayagraj, UP", description: "Ancient center of learning where Rishi Bharadvaja developed sacred music and sound" },
      { name: "Vishvamitra Ashram", location: "Pushkar, Rajasthan", description: "Powerful site where warrior became sage through intense spiritual practices" },
      { name: "Gautama Ashram", location: "Godavari Valley", description: "Peaceful hermitage focused on clarity, discrimination, and pure perception" },
      { name: "Jamadagni Ashram", location: "Renuka, Himachal", description: "Healing center where Ayurveda and herbal medicine were perfected" },
      { name: "Vasishtha Ashram", location: "Vashisht, Himachal", description: "Royal sage's ashram known for wisdom, guidance, and spiritual counseling" }
    ],
    note: "*Some locations may be substituted with related sacred sites based on accessibility and season"
  },

  // Final section
  final: {
    title: "Transform Through Ancient Wisdom",
    description: "At Ombreathe Academy, we offer the most authentic and comprehensive Vedic wisdom training available. Our program connects you directly with the living lineages of the great Rishis while providing practical tools for applying ancient knowledge in contemporary life.",
    benefits: [
      {
        title: "Timeless Wisdom",
        description: "Access the complete knowledge system preserved by the seven great sages for optimal living and spiritual growth"
      },
      {
        title: "Authentic Teaching",
        description: "Learn from traditional lineage holders maintaining unbroken connections to the original Rishi teachings"
      },
      {
        title: "Life Mastery",
        description: "Develop the wisdom, clarity, and spiritual authority to guide others and create positive change in the world"
      }
    ],
    ctaText: "Begin Your Wisdom Journey Today"
  }
};

export default saptaRishiSadhanaData;