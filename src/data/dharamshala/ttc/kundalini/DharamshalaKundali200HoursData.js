import { PROGRAM_PRICES_DHARAMSHALA } from "../../programPricesDharamshala";

export const DharamshalaKundali200HoursData = {
  heroSection: {
      colors: {
        cream: "#F1F7F6",       // Luminous light emerald cream
        goldLight: "#DAA520",   // Prana electric gold
        navy: "#0A2F2D",        // Deep mystic emerald
        sage: "#1E5E5A",        // Rich forest mint tint
        overlay:
          "linear-gradient(180deg, rgba(10,47,45,0.6), rgba(10,47,45,0.95))",
        white: "#ffffff",
        textLight: "rgba(255,255,255,0.92)",
        textFade: "rgba(255,255,255,0.76)",
      },
  
      hero: {
        location: "Dharamshala · 200-Hour Kundalini Yoga TTC",
        title: "Kundalini Yoga YTTC",
        highlight: "25 Days 200 Hours ",
        subtitle:
          "Activate your dormant power through profound, realistic learning and authentic practice. Awaken your cosmic energy centers, kriya paths, and foundational tantra traditions.",
        price: PROGRAM_PRICES_DHARAMSHALA.kundalini["200hr"],
        priceNote: "Includes 24 nights room accommodation, fresh vegetarian meals, airport taxi pick-up, and RYT-200 credentials",
        bgImage:
          "/images/external/general/unsplash_photo-1545389336-cf090694435e.jpg",
        buttonText: "Get Your Yoga Certification Course Today",
        url: "/contact",
      },
  
      gains: [
        "Systematic activation of all 7 core chakras from root foundation to crown integration",
        "Deep practical exposure to ancient tantra philosophies and precise Kriya Yoga traditions",
        "Mastery of energy sequencing, pranayama channels, specific mantra loops, and bandhas",
        "Comprehensive understanding of traditional anatomical principles linked with energy centers",
        "Eligibility to register immediately as an internationally certified teacher with Yoga Alliance",
        "Transformation of the inner soul, cultivating courage and expansive cosmic mindfulness",
      ],
  
      certificates: [
        { img: "/images/cirtificats/200.png", label: "200 Hrs Kundalini" },
        { img: "/images/cirtificats/yoga.png", label: "Free Live Classes" },
        { img: "/images/cirtificats/yoga.png", label: "Yoga Alliance RYT" }
      ],
  
      content: {
        bottomText:
          "Once you have completed this RYT-200 certification in Kundalini Yoga, you will become a highly confident, efficient instructor capable of unfolding hidden spiritual potentials.",
      },
    },

  highlightsSection: {
    community: {
        colors: {
          white: "#ffffff",
          goldLight: "#DAA520",
          overlay:
            "linear-gradient(180deg, rgba(21,79,76,0.7), rgba(6,24,23,0.98))",
          textLight: "rgba(255,255,255,0.85)",
          textFade: "rgba(255,255,255,0.72)",
          glass: "rgba(255,255,255,0.06)",
          glassHover: "rgba(255,255,255,0.13)",
          border: "rgba(255,255,255,0.18)",
        },
    
        content: {
          bgImage:
            "/images/external/general/unsplash_photo-1506126613408-eca07ce68773.jpg",
          eyebrow: "Ombreathe Core Lineage",
          title: "Join our",
          highlight: "passionate energy community",
          subtitle:
            "Our exclusively guided curriculum under Master teachers led by Guru Vishnu offers deep exposure to systemic Kundalini Sadhana derived safely from traditional Vedic texts.",
          stats: [
            { value: "200 Hours", label: "Intensive Practice Scope", icon: "clock" },
            { value: "7 Chakras", label: "Complete Awakening System", icon: "sparkles" },
            { value: "25 Days", label: "Ashram Residential Living", icon: "calendar" },
            { value: "RYT 200", label: "Yoga Alliance Verification", icon: "award" },
            { value: "Himalayas", label: "Birthplace Energy Fields", icon: "globe" },
          ],
          bottomText1:
            "Kundalini is a grander dimension of energy whose complete potential is unlocked systematically by dropping external mental noise and aligning your life force.",
          bottomText2:
            "At our landmark center in the heart of Laxman Jhula, you get a distraction-free space where researchers, creators, and spiritual seekers train with identical goals.",
        },
      },
    promo: {
        colors: {
          navy: "#0A2F2D",
          violet: "#1E5E5A",
          white: "#ffffff",
          shadowSm: "0 4px 12px rgba(10,47,45,0.05)",
          shadowMd: "0 8px 24px rgba(10,47,45,0.12)",
          overlay: "linear-gradient(to top, rgba(6,24,23,0.6), transparent)",
        },
    
        content: {
          eyebrow: "Residential Awakening Blueprints",
          title: "Experience a",
          highlight: "broad transformation",
          duration: "25-day",
          strongText: "Dharamshala",
          features: [
            {
              icon: "award",
              title: "Yoga Alliance Registration",
              sub: "Acquire an international professional identity that meets authorized global instruction standards",
            },
            {
              icon: "bed",
              title: "Comfortable Ashram Lodging",
              sub: "Airy, clean living environments featuring private bathrooms and integrated study desks",
            },
            {
              icon: "utensils",
              title: "Delicious Sattvic Nutrition",
              sub: "Fresh vegetarian and vegan dishes prepared perfectly to clean physical channels",
            },
            {
              icon: "heart",
              title: "Innovative Resource Package",
              sub: "Includes a free online preparatory course and a full year of live follow-up modules",
            },
            {
              icon: "compass",
              title: "Kunjapuri Mountain Sightseeing",
              sub: "Weekend outdoor excursions to iconic temples, historical ashram grounds, and silent caves",
            },
          ],
          images: {
            main:
              "/images/external/general/unsplash_photo-1575052814086-f385e2e2ad1b.jpg",
            food:
              "/images/external/general/unsplash_photo-1540420773420-3366772f4999.jpg", // Clear Vegetarian Sattvic Image URL
            stay:
              "/images/external/general/unsplash_photo-1590490360182-c33d57733427.jpg",
          },
        },
      }

  },

  practiceSection: {
      colors: {
        navy: "#0A2F2D",
        cream: "#F1F7F6",
        white: "#ffffff",
        shadowSm: "0 4px 12px rgba(0,0,0,0.04)",
        shadowLg: "0 10px 30px rgba(10,47,45,0.15)",
        overlay: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
      },
  
      content: {
        eyebrow: "Chakra System Architecture",
        title: "Awakening of the",
        highlight: "Seven Protuberant Energy Seats",
        subtitle:
          "Gain strong control over the hidden power locked within your physical and spiritual systems.",
        practices: [
          {
            label: "Muladhara & Swadhistan Base",
            desc: "Balance the physical foundation root before guiding reproductive energy away from external desire blocks.",
            icon: "sparkles",
            img: "/images/external/general/unsplash_photo-1506126613408-eca07ce68773.jpg",
          },
          {
            label: "Manipura & Anahata Core",
            desc: "Ignite your personal power seat below the navel before expanding emotional balances into states of pure bliss.",
            icon: "wind",
            img: "/images/external/excursions/indian-male-thirties-doing-yoga-temple-background-1024x1024.jpg",
          },
          {
            label: "Vishuddhi, Ajna & Sahasrara Highs",
            desc: "Refine throat communication paths, unlock third-eye wisdom stillness, and touch crown trance limits under absolute guide parameters.",
            icon: "feather",
            img: "/images/external/general/unsplash_photo-1517838277536-f5f99be501cd.jpg",
          },
        ],
        specialTitle: "What Makes Our",
        specialHighlight: "Ecosystem Special",
        specials: [
          {
            title: "15+ Years Active Footprint",
            desc: "Deep roots established directly on the holy riverbanks of Ganga, serving traditional training formats across decades.",
            icon: "heart",
          },
          {
            title: "PhD-Level Expert Educators",
            desc: "Classes are entirely designed and supervised by recognized Masters and scholars holding lifetime execution records.",
            icon: "shield",
          },
          {
            title: "Genuine Scriptural Foundations",
            desc: "No shallow gimmicks. We strictly track the Patanjali Yoga Sutras alongside historical traditional Tantra parameters.",
            icon: "sparkles",
          },
        ],
      },
    },

  programDetailsSection: {
    curriculum: {
        colors: {
          navy: "#0A2F2D",
          violet: "#1E5E5A",
          sage: "#2C8580",
          cream: "#F1F7F6",
          white: "#ffffff",
          shadowSm: "0 4px 12px rgba(0,0,0,0.05)",
          shadowLg: "0 10px 30px rgba(10,47,45,0.15)",
          gradientCard: "linear-gradient(135deg,#0A2F2D,#1E5E5A)",
          gradientCTA: "linear-gradient(135deg,#0A2F2D,#031413)",
        },
    
        content: {
          row: "Syllabus Modules",
          title: "Comprehensive",
          highlight: "200-Hour Kundalini Mapping",
          subtitle:
            "Carefully woven modules designed to unpack subtle energy dynamics across structured classroom blocks.",
    
          courses: [
            {
              title: "Vocal Vibration Tracks",
              icon: "sparkles",
              items: [
                "Art and science of Mantra physics",
                "Sound wave vibration applications",
                "Sacred Gayatri & Shiva chanting loops",
                "Mantra Jaap for sensory presence",
              ],
            },
            {
              title: "Physical Energy Postures",
              icon: "wind",
              items: [
                "Kundalini specific Asana sets",
                "100+ structural base postures",
                "Kundalini joint movement drills",
                "Classical Hatha coordination rules",
              ],
            },
            {
              title: "Internal Vital Lockouts",
              icon: "brainCircuit",
              items: [
                "Pranayama energy distribution",
                "Kundalini Tantra Mudra templates",
                "Bandha physiological locks",
                "Shatkarma operational purification",
              ],
            },
            {
              title: "Philosophical Synthesis",
              icon: "book",
              items: [
                "Traditional Kundalini Tantra ideas",
                "Mapping of the 7 vital chakras",
                "Himalayan tradition text reviews",
                "Mindfulness lifestyle training blueprints",
              ],
            },
            {
              title: "Scientific Logistics",
              icon: "heart",
              items: [
                "Kundalini functional anatomy lines",
                "Nervous system interaction loops",
                "Ayurvedic profile calculations",
                "Yoga Therapy baseline diagnostics",
              ],
            },
            {
              title: "Professional Instruction",
              icon: "users",
              items: [
                "How to sequence a Kundalini class",
                "Traditional teaching methodologies",
                "Safe props and modification logic",
                "Practical training review metrics",
              ],
            },
          ],
    
          phases: [
            {
              title: "Ancestral Origins",
              days: "5000-Year Roots",
              desc: "Following the unbroken chains of Agastya Muni, Sage Patanjali, and Mahavatar Babaji.",
              color: "#0A2F2D",
            },
            {
              title: "Lineage Custody",
              days: "Monastic Masters",
              desc: "Absorbing direct scriptural transfers via Swami Rama and Swami Veda Bharati structures.",
              color: "#1E5E5A",
            },
            {
              title: "Modern Pipeline",
              days: "Your Instruction",
              desc: "Evolving under Guru Vishnu into a certified educator equipped with direct clarity.",
              color: "#2C8580",
            },
          ],
    
          cta: {
            title: "Ready to Arise Your Slumbering Presence?",
            desc:
              "Secure your 200-Hour residential placement today and step into an intimate learning environment crafted for all levels.",
            buttonText: "Apply Now For This Course",
            url: "/contact",
          },
        },
      },
    schedule: {
        colors: {
          cream: "#F1F7F6",
          creamDark: "#D2E4E2",
          navy: "#0A2F2D",
          violet: "#1E5E5A",
          white: "#ffffff",
          shadowSm: "0 4px 12px rgba(0,0,0,0.05)",
          shadowLg: "0 10px 30px rgba(0,0,0,0.12)",
          noteBg: "rgba(30,94,90,0.06)",
        },
    
        content: {
          eyebrow: "Mandatory Daily Loop",
          title: "Structured Daily",
          highlight: "Kundalini Flow Blueprint",
          subtitle:
            "Living by the schedule teaches deep control, pushing your cognitive layers into fresh perspectives.",
    
          image:
            "/images/external/general/unsplash_photo-1544367567-0f2fcb009e0b.jpg",
    
          morning: [
            { time: "05:00 AM - 06:00 AM", activity: "Kundalini Sadhana Session", icon: "moon" },
            { time: "06:15 AM - 07:15 AM", activity: "Kundalini Pranayama and Meditation", icon: "wind" },
            { time: "07:30 AM - 09:00 AM", activity: "Kundalini Theory & Asana Practice", icon: "sun" },
            { time: "09:00 AM - 09:45 AM", activity: "Sattvic Breakfast served", icon: "coffee" },
            { time: "10:45 AM - 11:45 AM", activity: "Yoga Anatomy & Physiology", icon: "brain" },
            { time: "12:00 PM - 01:00 PM", activity: "Yoga Alignment & Adjustment / Teaching Methodology", icon: "users" },
          ],
    
          afternoon: [
            { time: "01:00 PM - 02:00 PM", activity: "Pure Ashram Lunch", icon: "utensils" },
            { time: "02:00 PM - 03:30 PM", activity: "Mandatory Self Study Blocks", icon: "book" },
            { time: "03:30 PM - 04:30 PM", activity: "Kundalini Philosophy Masterclass", icon: "feather" },
            { time: "04:30 PM - 06:00 PM", activity: "Classical Hatha Yoga Practice Layouts", icon: "sparkles" },
            { time: "06:00 PM - 07:00 PM", activity: "Healthy Ashram Dinner", icon: "utensils" },
            { time: "07:00 PM - 08:00 PM", activity: "Ganga Beach Silent Meditation (Self-Guided)", icon: "moon" },
          ],
    
          sections: {
            morningTitle: "Energy Mobilization and Technical Tracks",
            afternoonTitle: "Philosophical Synthesis and Resting Silence",
            note:
              "All regular scheduled classes remain mandatory. Latecomers will not be granted entry permissions. Timetables are subject to seasonal changes.",
          },
        },
      },
  },

  experienceSection: {
    food: {
        colors: {
          cream: "#F1F7F6",
          navy: "#0A2F2D",
          white: "#ffffff",
          sage: "#1E5E5A",
          shadowSm: "0 4px 12px rgba(0,0,0,0.04)",
          shadowMd: "0 8px 24px rgba(10,47,45,0.1)",
        },
    
        content: {
          eyebrow: "Holistic Nourishment",
          title: "Delicious Ayurvedic",
          highlight: "Sattvic Whole Foods Only",
          subtitle:
            "Our bodies mirror what we consume. We avoid tamasic items like meat or eggs to optimize muscle flexibility and mental clarity.",
    
          meals: [
            {
              key: "breakfast",
              title: "Morning Pure Nutrition",
              icon: "sun",
              time: "09:00 AM – 09:45 AM",
              img: "/images/external/general/unsplash_photo-1496042399014-dc73c4f2bde1.jpg", // Pure Vegetarian Asset
              desc: "Light vegetable profiles and seasonal fruits that supply easy, clean energy fields.",
              items: [
                "Fresh regional hill fruits",
                "Organic oatmeal or porridge",
                "Nutritious herbal detox teas",
                "Freshly squeezed green juices",
              ],
            },
            {
              key: "lunch",
              title: "Midday Balanced Diet",
              icon: "coffee",
              time: "01:00 PM – 02:00 PM",
              img: "/images/external/general/unsplash_photo-1540420773420-3366772f4999.jpg", // Pure Vegetarian Asset
              desc: "Traditional Indian preparations mapping cleanly to all six environmental tastes.",
              items: [
                "Ayurvedic wellness Khichdi",
                "Nutritious protein lentils (Dhal)",
                "Fresh garden greens & salads",
                "Freshly baked wheat chapattis",
              ],
            },
            {
              key: "dinner",
              title: "Calming Evening Supper",
              icon: "moon",
              time: "06:00 PM – 07:00 PM",
              img: "/images/external/general/383358-chaitra-navratri-2024-recipes-ideas-2024-04-45920c418220b803d30dfec9ceac631d.webp", // Pure Vegetarian Asset
              desc: "Ultra-digestible, light compositions ensuring quiet evening beach meditation runs.",
              items: [
                "Clear organic bean soups",
                "Steamed green vegetables",
                "Warm digestive herbal water",
                "Light traditional health desserts",
              ],
            },
          ],
    
          dietary: [
            { icon: "leaf", label: "100% Vegetarian/Vegan" },
            { icon: "feather", label: "Strictly Meat & Egg Free" },
            { icon: "sparkles", label: "Sattvic Kitchen Values" },
            { icon: "sun", label: "Ayurvedic Alignment" },
            { icon: "shield", label: "No Chemical Toxins" },
            { icon: "heart", label: "Enhances Soul Compassion" },
        ],
    
          philosophy: [
            { icon: "leaf", title: "Five Elements Balanced", desc: "Aligns your biological codes to physical environment realities" },
            { icon: "globe", title: "Flexibility Booster", desc: "Eliminating tamasic blocks makes physical joints responsive" },
            { icon: "heart", title: "Mindfulness Catalyst", desc: "Helps separate your internal awareness from sensory chatter" },
            { icon: "feather", title: "Zero Resource Waste", desc: "Always warn our kitchen manager if you plan external dining blocks" },
          ],
        },
      },
    excursion: {
        colors: {
          white: "#ffffff",
          navy: "#0A2F2D",
          sage: "#1E5E5A",
          overlay: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
          cardShadow: "0 8px 24px rgba(10,47,45,0.08)",
        },
    
        content: {
          eyebrow: "Ashram Outings",
          title: "Explore the",
          highlight: "Timeless Magic of Dharamshala",
          subtitle:
            "On Sundays, we arrange comprehensive excursion paths to relax your physical and cognitive channels perfectly.",
    
          excursions: [
            {
              title: "Kunjapuri Temple Sunrise Peak",
              tag: "Mountain Trek",
              tagBg: "#1E5E5A",
              duration: "Half Day",
              icon: "mountain",
              img: "/images/external/general/unsplash_photo-1464822759023-fed622ff2c3b.jpg",
              desc: "High alpine sunrise trek overlooking snow peak terrains and ancient regional temples.",
              highlights: ["Himalayan vistas", "Sunrise integration", "Pure clean air"],
            },
            {
              title: "Beatles Ashram Historic Domes",
              tag: "Jungle History",
              tagBg: "#2C8580",
              duration: "3 Hours",
              icon: "trees",
              img: "/images/external/general/unsplash_photo-1545389336-cf090694435e.jpg",
              desc: "Historic stone structures and meditation caves wrapped within serene forest environments.",
              highlights: ["Contemplation caves", "Graffiti visual arts", "Eco jungle strolls"],
            },
            {
              title: "Parmarth Niketan Devotionals",
              tag: "Sacred Aarti",
              tagBg: "#C8874A",
              duration: "Evening Block",
              icon: "sparkles",
              img: "/images/external/heroes/Mysore-banner.jpg",
              desc: "Watch beautiful devotional light ceremonies held right along the holy river steps.",
              highlights: ["Ganga Aarti seating", "Mantra vocal choruses", "Sacred river vibrations"],
            },
            {
              title: "Vashishta Ancient Cave Stillness",
              tag: "Lineage Silence",
              tagBg: "#8B3A3A",
              duration: "Half Day",
              icon: "globe",
              img: "/images/external/general/unsplash_photo-1447752875215-b2761acb3c5d.jpg",
              desc: "Deep cave layout used across millennia for intense sensory withdrawal and quiet practices.",
              highlights: ["Absolute sound silence", "Pristine sandy beaches", "Deep internal listening"],
            },
          ],
    
          bottom: {
            title: "Fully Covered Sightseeing Tours ✨",
            desc: "All transit logistics, entry tickets, and guides stand completely covered inside base pricing variables.",
          },
        },
      },
    location: {
        colors: {
          cream: "#F1F7F6",
          navy: "#0A2F2D",
          violet: "#1E5E5A",
          white: "#ffffff",
          activeBg: "rgba(30,94,90,0.08)",
          border: "rgba(0,0,0,0.04)",
        },
    
        content: {
          eyebrow: "Geographic Energy Coordinates",
          title: "Flagship Space",
          highlight: "In the Heart of Laxman Jhula",
          subtitle:
            "Located in Northern India tucked into the Himalayas, where cool mountain breezes clear down toxic thoughts.",
          address:
            "Ombreathe, Police Station, behind Laxman Jhula, Laxman Jhula, Dharamshala, Uttarakhand 249302, India",
          mapEmbed:
            "https://www.google.com/maps?q=Dharamshala&output=embed",
    
          spots: [
            {
              name: "Laxman Jhula Market Bridge",
              distance: "Ashram Footprint",
              desc: "Energetic local walking zone full of organic cafes, books, and gemstone shops.",
              icon: "globe",
            },
            {
              name: "Ganga River Banks",
              distance: "200 meters out",
              desc: "White sand river beaches ideal for early morning sadhana and twilight contemplation loops.",
              icon: "leaf",
            },
            {
              name: "Dehradun Airport (DED)",
              distance: "Free Taxi Pick-Up",
              desc: "Incoming shuttle solutions handled completely by our logistics registration desk.",
              icon: "sparkles",
            },
            {
              name: "Himalayan Wilderness Borders",
              distance: "Ashram Environs",
              desc: "Protected hills backing the rooms, making it common to see wild peacocks and deer.",
              icon: "trees",
            },
          ],
    
          stats: [
            { label: "Airport Transit", value: "Complimentary Shuttle", icon: "globe" },
            { label: "River Proximity", value: "200 meters away", icon: "map" },
            { label: "Linage Integrity", value: "15+ Years Active", icon: "mountain" },
            { label: "Global Alumni", value: "15,000+ Certified", icon: "sun" },
          ],
        },
      },
    massage: {
      colors: {
        navy: "#1A2456",
        white: "#ffffff",
        sage: "#7BAF8A",
        border: "rgba(255,255,255,0.15)",
        cardBg: "rgba(255, 255, 255, 0.05)",
        shadowLg: "0 10px 30px rgba(0,0,0,0.2)",
      },
      content: {
        title: "Signature",
        highlight: "Massage Treatments",
        subtitle: "Unwind your body and restore your muscle flexibility after intensive yoga training sessions with expert therapies.",
        massages: [
          {
            id: 1,
            title: "Deep Tissue Ritual",
            tagline: "Designed to relieve deep-seated muscle tension, chronic stress, and stiffness using slow, deliberate strokes.",
            duration: "60 mins",
            rating: 4.9,
            reviews: 184,
            isPopular: true,
            isPaid: true,
            image: "/images/external/general/unsplash_photo-1600334129128-685c5582fd35.jpg"
          },
          {
            id: 2,
            title: "Himalayan Hot Stone",
            tagline: "Warm, mineral-rich basalt stones are placed strategically to melt away anxiety and restore deeply aligned energy flow.",
            duration: "75 mins",
            rating: 4.8,
            reviews: 92,
            isPopular: false,
            isPaid: true,
            image: "/images/external/general/unsplash_photo-1544161515-4ab6ce6db874.jpg"
          },
          {
            id: 3,
            title: "Complimentary Aroma Mist",
            tagline: "A brief, relaxing hydration aromatherapy session available to all resort guests during morning welcome check-ins.",
            duration: "15 mins",
            rating: 5.0,
            reviews: 210,
            isPopular: false,
            isPaid: false,
            image: "/images/external/general/unsplash_photo-1519699047748-de8e457a634e.jpg"
          },
          {
            id: 4,
            title: "Swedish Bliss Massage",
            tagline: "Long, gliding strokes mixed with kneading to promote total body relaxation, improved circulation, and optimal flexibility.",
            duration: "50 mins",
            rating: 4.7,
            reviews: 145,
            isPopular: false,
            isPaid: true,
            image: "/images/external/general/unsplash_photo-1515377905703-c4788e51af15.jpg"
          },
          {
            id: 5,
            title: "Welcome Scalp Massage",
            tagline: "Enjoy a quick, stress-relieving tension release head massage routine. Completely complimentary.",
            duration: "10 mins",
            rating: 4.9,
            reviews: 76,
            isPopular: true,
            isPaid: false,
            image: "/images/external/general/unsplash_photo-1540555700478-4be289fbecef.jpg"
          }
        ]
      }
    },
  },

  accommodationSection: {
      colors: {
        navy: "#0A2F2D",
        white: "#ffffff",
        sage: "#1E5E5A",
        border: "rgba(255,255,255,0.15)",
        cardBg: "rgba(255,255,255,0.06)",
        shadowMd: "0 8px 24px rgba(0,0,0,0.1)",
        shadowLg: "0 10px 30px rgba(0,0,0,0.15)",
      },
  
      content: {
        title: "Luxurious Comfortable",
        highlight: "Ashram Room Tiers",
        subtitle:
          "Rest inside clean, peaceful housing quarters backed by the natural forest and the sound of the Ganga bridge.",
  
        rooms: [
          {
            type: "2 Sharing Twin Setup",
            tag: "Standard Inclusion",
            tagBg: "#1E5E5A",
            price: "$1399",
            img: "/images/external/general/unsplash_photo-1590490360182-c33d57733427.jpg",
            desc: "Light and airy double occupancy layout housing private ensuite bathrooms.",
            features: [
              "Shared companion layout",
              "Private attached bathroom",
              "Dedicated study desk tools",
              "Weekly sheet & linen swap",
              "Personal secure wardrobes",
              "Regular space cleanup blocks",
            ],
          },
          {
            type: "Private Single Deluxe",
            tag: "Sovereign Upgrade",
            tagBg: "#0A2F2D",
            price: "$1699",
            img: "/images/external/general/unsplash_photo-1591088398332-8a7791972843.jpg",
            desc: "Complete isolation layout optimizing deep inner journeys and quiet evening reflection hours.",
            features: [
              "Total room privacy bounds",
              "Private hot plumbing attached",
              "Comfortable premium bedding",
              "High-speed wireless feed",
              "Forest mountain view lines",
              "Isolated quiet parameters",
            ],
          },
          {
            type: "4-6 Sharing Group Dorm",
            tag: "Females Only Space",
            tagBg: "#C8874A",
            price: "$1099",
            img: "/images/external/general/unsplash_photo-1582719508461-905c673771fd.jpg",
            desc: "Budget-friendly shared environments limited strictly to female practitioners for community tracking.",
            features: [
              "Shared female bed layout",
              "Ensuite group bathroom",
              "Highly ventilated space bounds",
              "Individual secure storage",
              "High sisterhood support",
              "Most accessible pricing bracket",
            ],
          },
        ],
  
        amenities: [
          { icon: "waves", label: "200m To Ganga Banks" },
          { icon: "heart", label: "Indoor Meditation Cave" },
          { icon: "leaf", label: "Lush Ashram Gardens" },
          { icon: "wifi", label: "Filtered Water Lines" },
          { icon: "utensils", label: "Large Ashram Dining Space" },
          { icon: "feather", label: "Three Grand Practice Halls" },
          { icon: "trees", label: "Wild Nature Sightings" },
          { icon: "music", label: "24-Hour Reception Desk" },
        ],
  
        buttonText: "Enroll This Course Now",
        url: "/contact",
      },
    },

  faqSection: {
      colors: {
        navy: "#0A2F2D",
        white: "#ffffff",
        sage: "#1E5E5A",
        border: "rgba(255,255,255,0.15)",
        cardBg: "rgba(255,255,255,0.06)",
        shadowMd: "0 8px 24px rgba(10,47,45,0.1)",
        shadowLg: "0 10px 30px rgba(10,47,45,0.15)",
      },
  
      content: {
        title: "Kundalini Inquiries",
        highlight: "200-Hour FAQ Matrix",
        subtitle:
          "Explicitly defining technical, operational, and structural frameworks for incoming students.",
  
        faqs: [
          {
            question: "How is Kundalini different from other styles of yoga?",
            answer:
              "Kundalini Yoga is a highly spiritual, precise, and repetitive practice. While it involves physical movements, its main focus points target energy activation, sound vibrations, and breath controls, unlike Hatha or Vinyasa which favor purely physical alignments.",
          },
          {
            question: "Can a beginner in yoga learn Kundalini safely?",
            answer:
              "Yes! While Kundalini is an intense energy practice, its deep cognitive and physical benefits make it an optimal option for beginners and advanced yogis alike. Practitioners work safely at their own unique speed.",
          },
          {
            question: "What exactly are chakras inside Kundalini training?",
            answer:
              "Chakras represent the huge hidden potential centers present within us. Our blueprint utilizes specific tool sets like specialized pranayamas, mantras, and advanced meditation loops to safely channel this static energy upward.",
          },
          {
            question: "Is this 200-Hour Kundalini course eligible for RYT-200 status?",
            answer:
              "Yes, Ombreathe is a globally recognized institution. Graduating this 200-Hour Kundalini track allows you to register your official RYT-200 credentials directly with the international Yoga Alliance directory.",
          },
          {
            question: "Who is the primary eligibility profile for this training?",
            answer:
              "It is crafted for students of every level who want to earn an international teaching certificate, practitioners wanting to deep-dive into self-growth, or anyone looking to master yoga postures, tantra traditions, and Yoga Nidra under a single package.",
          },
          {
            question: "Can we effectively awaken our kundalini chakras over 25 days?",
            answer:
              "To arouse your Kundalini, you must eliminate your prana from its obstinate focus on external thoughts. Our course sets down systematic ways to separate your senses from physical chatter, unlocking baseline access to your latent vital energy fields.",
          },
          {
            question: "What structural rules look after student code behaviors?",
            answer:
              "Smoking, alcohol, and non-veg inputs including eggs are strictly banned inside or near our ashram premises. Strict punctuality must be followed across all sessions; late arrivals are locked out of active tracking hours.",
          },
          {
            question: "What is your financial protocol regarding cancellations or departures?",
            answer:
              "Initial secure advances are non-refundable. If an extreme emergency like serious illness happens before arrival, we can delay or defer your course timeline. Once you are registered on campus, 100% of the tuition metric becomes locked.",
          },
          {
            question: "What specific clothes or tools do I need to pack?",
            answer:
              "Appropriate dress codes must be followed during classes to keep hands-on alignment checkups comfortable. Modesty parameters matching local culture must be followed when visiting local temples. We supply all gear on-site, plus one white uniform for special ceremonies.",
          },
          {
            question: "What core logistics are packed inside the base course fees?",
            answer: [
              "24 Nights - 25 Days ashram residential accommodation room",
              "Daily nutritious vegetarian sattvic dishes and regional herbal teas",
              "Free incoming taxi pick-up service from Dehradun Airport steps",
              "All physical study textbooks, notebooks, pens, and raw cleansing kits",
              "Full group access to Sunday mountain sightseeing trips and cave tours",
              "Complete post-grad access to preparatory resources and online classes",
            ],
          },
        ],
      },
    },
};