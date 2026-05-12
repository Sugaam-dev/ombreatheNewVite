// data/shaktiSadhanaData.js - Complete Data Configuration

import React from 'react';
import shaktiSadhana from '../../../../images/Membership/SHAKTI SADHANA PAGE FRONT.jpg'
import a from '../../../../images/Membership/excursion_2.jpg'
import b from '../../../../images/Membership/Accomodation_2.jpg'
import c from '../../../../images/Membership/yogic_food.jpg'
import time from '../../../../images/Gallery/Daily_Schedule_100_200_300.jpg'
import background from '../../../../images/Background.jpg'
const shaktiSadhanaData = {
  // Theme colors specific to this program
  theme: {
    primary: '#2E3A87',
    accent: '#d4af37',
    buttonShadow: 'rgba(212, 175, 55, 0.4)'
  },

  // Hero section content
  hero: {
    subtitle: `SHAKTI SADHANA MEMBERSHIP PROGRAM
    Temple Yoga with Divine Feminine Energy
    200 Hours Certification with Ombreathe`,
    title: "Connect Your Jeevatma to Deviaatma Through Sacred Shakti Peeths Journey",
    description: "Experience transformative spiritual pilgrimage visiting 12 sacred temples during Navratri with ancient practices",
    ctaText: "Begin Your Sacred Journey",
    url:"/contact"
  },

  // Pricing information
  pricing: {
    nri: {
      amount: "$2,400",
      registration: "$100"
    },
    indian: {
      amount: "₹1,90,000",
      registration: "₹5,000"
    },
    inclusions: "*Inclusive of accommodation, meals, transportation, temple entries & certification"
  },

  // All images used in the component
  images: {
    main: shaktiSadhana,
    mainAlt: "Sacred Goddess temple with devotees",
    aboutMain: a,
    aboutMainAlt: "Devotees at sacred Shakti temple",
    gallery: [
      {
        src: b,
        alt: "Traditional saatvik meal"
      },
      {
        src: c,
        alt: "Sacred temple accommodation"
      }
    ],
    transformationBg: background
  },

  // Completion/Benefits section
  completion: {
    title: `After completing the
    sacred journey...`,
    benefits: [
      "Deep connection with Divine Feminine Energy (Shakti)",
      "200-hour Temple Yoga certification",
      "Mastery of Goddess postures and sacred practices",
      "Spiritual transformation through pilgrimage",
      "Understanding of sacred geography and energy spots",
      "Personal spiritual practice development"
    ],
    certificationText: [
      "You will receive Temple Yoga certification.",
      "Recognized by spiritual communities worldwide.",
      "Connecting Jeevatmaa To Deviaatmaa"
    ]
  },

  // Certification images
  certifications: [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      alt: "Temple Yoga Certification"
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616c95ae3d4?w=100&h=100&fit=crop&crop=face",
      alt: "Shakti Sadhana Certification"
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      alt: "Ombreathe Academy Certification"
    }
  ],

  // About section
  about: {
    sectionTitle: "ABOUT SHAKTI SADHANA",
    heading: `Join us for a life-changing
   Sacred Pilgrimage to 12 Shakti
    Peeths during Navratri`
  },

  // Features list with icons
  features: [
    {
      icon: React.createElement('svg', {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, React.createElement('path', {
        d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        fill: "#d4af37",
        stroke: "#d4af37",
        strokeWidth: "2"
      })),
      title: "Visit 12 Sacred Shakti/Siddha Peeths",
      subtitle: "During any one of the four Navratris"
    },
    {
      icon: React.createElement('svg', {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        React.createElement('circle', {
          key: "circle",
          cx: "12",
          cy: "12",
          r: "3",
          stroke: "#d4af37",
          strokeWidth: "2"
        }),
        React.createElement('path', {
          key: "path",
          d: "M12 1v6m0 6v6m11-7h-6m-6 0H1",
          stroke: "#d4af37",
          strokeWidth: "2"
        })
      ]),
      title: "Practice Goddess postures and",
      subtitle: "Devi Sadhanas (Navarna Mantra, Sri Lalita Sahasranama)"
    },
    {
      icon: React.createElement('svg', {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        React.createElement('path', {
          key: "check",
          d: "M20 6L9 17l-5-5",
          stroke: "#d4af37",
          strokeWidth: "2"
        }),
        React.createElement('circle', {
          key: "circle",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "#d4af37",
          strokeWidth: "1",
          opacity: "0.3"
        })
      ]),
      title: "200 Hours Temple Yoga",
      subtitle: "Certification upon completion"
    },
    {
      icon: React.createElement('svg', {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        React.createElement('path', {
          key: "path1",
          d: "M12 2c-2 0-4 1-5 3l-1 2c0 1 1 2 2 2h8c1 0 2-1 2-2l-1-2c-1-2-3-3-5-3z",
          stroke: "#d4af37",
          strokeWidth: "2",
          fill: "none"
        }),
        React.createElement('path', {
          key: "path2",
          d: "M8 9v6c0 2 2 4 4 4s4-2 4-4V9",
          stroke: "#d4af37",
          strokeWidth: "2"
        }),
        React.createElement('circle', {
          key: "circle",
          cx: "12",
          cy: "12",
          r: "2",
          fill: "#d4af37",
          opacity: "0.7"
        })
      ]),
      title: "Saatvik food throughout the journey",
      subtitle: "Nourishing and energizing meals"
    },
    {
      icon: React.createElement('svg', {
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        React.createElement('path', {
          key: "check",
          d: "M20 6L9 17l-5-5",
          stroke: "#d4af37",
          strokeWidth: "2"
        }),
        React.createElement('circle', {
          key: "circle",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "#d4af37",
          strokeWidth: "1",
          opacity: "0.3"
        })
      ]),
      title: "Free airport transfers throughout journey",
      subtitle: "Safe and comfortable transportation"
    },
    {
      icon: React.createElement('div', {
        style: {
          backgroundColor: '#d4af37',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%'
        }
      }, "KIT"),
      title: "Complete spiritual kit included:",
      subtitle: "Copper Diya, pendant, Sindoor, manual & Devi idol"
    }
  ],

  // Transformation section
  transformation: {
    mainText: `Embarking on a Shakti Sadhana pilgrimage is a transformative journey connecting you with the divine feminine energy across India's most powerful temples`,
    subtitle: "At Ombreathe, our sacred program is designed to awaken your inner goddess through temple visits, ancient practices, and spiritual communion with the Divine Mother"
  },

  // Practices section
  practices: {
    heading: `Comprehensive practices of Devi Yoga, Navarna Mantra Sadhana, and Sri Lalita Sahasranama exploring
    Divine Feminine energies - a fusion of Temple Yoga and Bhakti`,
    description: "Our Shakti Sadhana program dives deep into traditional goddess worship practices, helping you understand the sacred feminine principles, temple protocols, and ancient sadhanas. Beyond physical practice, explore the divine feminine energy, chakra systems, and practical applications of Shakti philosophy.",
    items: [
      {
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Goddess yoga postures practice",
        title: "Devi Yoga Asanas",
        description: "Sacred yoga postures dedicated to different forms of the Divine Mother, channeling goddess energies"
      },
      {
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Mantra chanting practice",
        title: "Navarna Mantra Sadhana",
        description: "Daily practice of the powerful 9-syllable Devi mantra for spiritual transformation and protection"
      },
      {
        image: "https://images.unsplash.com/photo-1574936913940-5b9f6b30b4c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        alt: "Temple meditation and prayer",
        title: "Sri Lalita Sahasranama",
        description: "Recitation of 1000 names of Divine Mother Lalita for deep devotion and spiritual connection"
      }
    ]
  },

  // Unique features
  unique: {
    title: "What Makes Our Shakti Sadhana Unique",
    items: [
      {
        title: "Sacred Geography",
        description: "Visit the most powerful Shakti Peeths where parts of Sati's body fell, each with unique divine energy"
      },
      {
        title: "Personalized Sadhana",
        description: "Develop your personal relationship with the Divine Mother through guided practices and meditation"
      },
      {
        title: "Spiritual Awakening",
        description: "Awaken dormant spiritual energies and connect with the divine feminine aspect within yourself"
      }
    ]
  },

  // Curriculum section
  curriculum: {
    title: "Shakti Sadhana Training Program",
    subtitle: "Comprehensive Sacred Curriculum",
    description: [
      "Our comprehensive program provides deep immersion into divine feminine energy practices through temple visits, ancient sadhanas, and transformative spiritual experiences",
      "Learn from experienced spiritual guides with decades of temple yoga and goddess worship practice"
    ],
    modules: [
      {
        title: "Devi Yoga Asanas",
        icon: "🧘‍♀️",
        content: [
          "Durga Asana (Warrior Goddess Pose)",
          "Kali Asana (Fierce Goddess Pose)",
          "Lakshmi Asana (Prosperity Goddess Pose)",
          "Saraswati Asana (Wisdom Goddess Pose)",
          "Parvati Asana (Mountain Goddess Pose)",
          "Tara Asana (Star Goddess Pose)",
          "Chinnamasta Asana (Self-sacrifice Pose)",
          "Goddess Mandala Flow Sequences",
          "Sacred Mudras for each Devi form"
        ]
      },
      {
        title: "Navarna Mantra Sadhana",
        icon: "🕉️",
        content: [
          "Om Aim Hreem Kleem Chamundaye Viche",
          "9-syllable powerful Devi mantra",
          "108 times daily chanting practice",
          "Beej mantra meanings and significance",
          "Proper pronunciation and rhythm",
          "Yantra meditation with mantra",
          "Mantra japa with mala",
          "Group chanting at temples",
          "Integration with breath work"
        ]
      },
      {
        title: "Sri Lalita Sahasranama",
        icon: "📿",
        content: [
          "1000 names of Divine Mother Lalita",
          "Daily recitation practice",
          "Meaning and significance study",
          "Bhakti yoga through names",
          "Sanskrit pronunciation training",
          "Temple chanting participation",
          "Personal devotion development",
          "Inner transformation through names",
          "Connection with divine feminine"
        ]
      },
      {
        title: "Temple Yoga Philosophy",
        icon: "🏛️",
        content: [
          "Shakti philosophy and principles",
          "Divine feminine energy concepts",
          "Tantra and Shakti worship",
          "History of Shakti Peeths",
          "Sacred geography of India",
          "Ritual and ceremony understanding",
          "Bhakti yoga practices",
          "Meditation in sacred spaces",
          "Energy work at power spots"
        ]
      },
      {
        title: "Chakra & Energy Work",
        icon: "⚡",
        content: [
          "7 chakras and goddess connection",
          "Kundalini Shakti awakening",
          "Energy channels (nadis) purification",
          "Sacred site energy absorption",
          "Auric field strengthening",
          "Divine feminine energy channeling",
          "Healing with goddess energy",
          "Protection practices",
          "Energy sensitivity development"
        ]
      },
      {
        title: "Sacred Rituals & Ceremonies",
        icon: "🕯️",
        content: [
          "Devi Puja (Goddess worship)",
          "Aarti and offering ceremonies",
          "Fire ceremony (Havan) participation",
          "Sacred water rituals",
          "Flower offering practices",
          "Temple etiquette and protocols",
          "Personal altar creation",
          "Daily worship routine",
          "Ceremonial clothing and preparation"
        ]
      },
      {
        title: "Meditation & Contemplation",
        icon: "🧘‍♀️",
        content: [
          "Goddess visualization meditation",
          "Third eye activation practices",
          "Temple meditation sessions",
          "Silent contemplation periods",
          "Walking meditation at sites",
          "Group meditation circles",
          "Personal reflection time",
          "Dream work and symbolism",
          "Intuitive development practices"
        ]
      },
      {
        title: "Spiritual Journal & Integration",
        icon: "📖",
        content: [
          "Daily spiritual journaling",
          "Experience documentation",
          "Dream recording and analysis",
          "Personal insights tracking",
          "Spiritual progress monitoring",
          "Integration exercises",
          "Life application practices",
          "Community sharing sessions",
          "Post-journey continuation plan"
        ]
      }
    ]
  },

  // Additional options (Navratri seasons)
  additionalOptions: {
    title: "Choose Your Navratri Season",
    options: [
      {
        name: "Chaitra Navratri",
        timing: "March-April",
        description: "Spring season journey with temple festivals and flower offerings",
        highlights: ["Pleasant weather", "Spring festivals", "Flower blooming season"]
      },
      {
        name: "Sharad Navratri",
        timing: "September-October",
        description: "Most popular Navratri with grand celebrations across all temples",
        highlights: ["Major celebrations", "Perfect weather", "Festive atmosphere"]
      },
      {
        name: "Magha Navratri",
        timing: "January-February",
        description: "Winter journey with spiritual focus and deep contemplation",
        highlights: ["Cool weather", "Deep spiritual practice", "Fewer crowds"]
      },
      {
        name: "Ashadha Navratri",
        timing: "June-July",
        description: "Monsoon season journey with powerful energy and natural beauty",
        highlights: ["Lush landscapes", "Powerful energies", "Unique experience"]
      }
    ]
  },

  // Daily schedule
  schedule: {
    title: "Daily Schedule - Shakti Sadhana",
    description: "Our daily schedule is designed to provide a perfect balance of spiritual practices, temple visits, sacred ceremonies, and deep contemplation. Each day brings new opportunities for divine connection and personal transformation guided by experienced spiritual teachers.",
    note: "*Please note: The timing and sequence may vary depending on temple schedules and seasonal factors.",
    image: time,
    imageAlt: "Sacred temple during Navratri celebration",
    morning: {
      title: "Morning Session",
      activities: [
        { time: "05:00 AM", activity: "Awakening & Personal Prayers" },
        { time: "05:30 AM", activity: "Devi Yoga Asanas Practice" },
        { time: "06:30 AM", activity: "Navarna Mantra Chanting (108x)" },
        { time: "07:30 AM", activity: "Temple Visit & Morning Puja" },
        { time: "09:00 AM", activity: "Saatvik Breakfast" },
        { time: "10:00 AM", activity: "Sri Lalita Sahasranama Study" }
      ]
    },
    afternoon: {
      title: "Afternoon & Evening Session",
      activities: [
        { time: "12:00 PM", activity: "Temple Philosophy & History" },
        { time: "01:00 PM", activity: "Saatvik Lunch & Rest" },
        { time: "03:00 PM", activity: "Travel to Next Sacred Site" },
        { time: "05:00 PM", activity: "Evening Temple Darshan" },
        { time: "06:30 PM", activity: "Group Aarti Participation" },
        { time: "08:00 PM", activity: "Dinner & Community Sharing" },
        { time: "09:30 PM", activity: "Personal Reflection & Rest" }
      ]
    },
    info: {
      title: "About the Sacred Journey",
      content: [
        "Our daily schedule provides a perfect balance of spiritual practices, temple visits, sacred ceremonies, and personal reflection time. Each day is structured to deepen your connection with the Divine Mother while respecting traditional temple protocols and timing.",
        "The program helps you align your spiritual energy with sacred sites, establish devotional practices, improve spiritual sensitivity, and build lasting connection with divine feminine energy."
      ]
    }
  },

  // Sacred locations
  locations: {
    title: "12 Sacred Shakti/Siddha Peeths",
    description: "Visit the most powerful centers of divine feminine energy across India, each carrying unique spiritual significance",
    places: [
      { 
        name: "Kamakhya Devi Temple", 
        location: "Assam", 
        description: "Most powerful Shakti Peeth for tantric worship where Sati's yoni (reproductive organ) fell" 
      },
      { 
        name: "Vaishno Devi", 
        location: "Jammu & Kashmir", 
        description: "Sacred cave temple of Mother Goddess where devotees trek through mountains" 
      },
      { 
        name: "Kali Ghat", 
        location: "West Bengal", 
        description: "Ancient temple of Goddess Kali in Kolkata where right toe of Sati fell" 
      },
      { 
        name: "Ambaji Temple", 
        location: "Gujarat", 
        description: "Eternal flame temple of Amba Mata, one of the 51 Shakti Peeths" 
      },
      { 
        name: "Jwala Devi Temple", 
        location: "Himachal Pradesh", 
        description: "Natural flame temple without idol where tongue of Sati fell" 
      },
      { 
        name: "Naina Devi Temple", 
        location: "Himachal Pradesh", 
        description: "Temple where Devi's eyes fell, situated on hilltop with panoramic views" 
      },
      { 
        name: "Chintpurni Temple", 
        location: "Himachal Pradesh", 
        description: "Fulfiller of wishes temple where Sati's feet fell" 
      },
      { 
        name: "Chamunda Devi Temple", 
        location: "Himachal Pradesh", 
        description: "Fierce form of Divine Mother, ancient temple with powerful energy" 
      },
      { 
        name: "Mansa Devi Temple", 
        location: "Haryana", 
        description: "Wish-fulfilling goddess temple atop Bilwa Parvat in Haridwar" 
      },
      { 
        name: "Chandi Devi Temple", 
        location: "Haryana", 
        description: "Temple atop Chandi Hill where Chanda and Munda demons were killed" 
      },
      { 
        name: "Daksheshwar Mahadev Temple", 
        location: "Uttarakhand", 
        description: "Site of Daksha's sacrifice where Sati self-immolated" 
      },
      { 
        name: "Additional Sacred Sites", 
        location: "Various", 
        description: "Based on Navratri timing and seasonal accessibility - may include Baglamukhi, Danteshwari, or regional Devi temples" 
      }
    ],
    note: "*Specific temple visits may vary based on the chosen Navratri period and seasonal accessibility"
  },

  // Final section
  final: {
    title: "Transform Your Spiritual Journey",
    description: "At Ombreathe Academy, we prioritize your spiritual growth, safety, and transformative experience. Join the Shakti Sadhana program and connect with the divine feminine energy while taking your spiritual journey to the next level.",
    benefits: [
      {
        title: "Divine Connection",
        description: "Connect with the divine feminine energy and receive blessings of the Devi at sacred sites"
      },
      {
        title: "Cultural Heritage",
        description: "Learn about India's rich spiritual heritage through authentic temple traditions and ceremonies"
      },
      {
        title: "Spiritual Growth",
        description: "Deepen your spiritual practice and gain understanding of divine feminine energies within yourself"
      }
    ],
    ctaText: "Start Your Sacred Journey Today"
  }
};

export default shaktiSadhanaData;