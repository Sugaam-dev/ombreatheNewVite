# 🧘 OmBreathe — Developer Documentation

> A React + Vite web application for **OmBreathe**, listing Teacher Training Courses (TTCs), Retreats, Specializations, and Membership Programs across multiple global locations.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [How the App Works — End to End](#how-the-app-works--end-to-end)
5. [Locations System](#locations-system)
6. [Data Architecture & Dynamic Pricing](#data-architecture--dynamic-pricing)
   - [Program Data Files](#program-data-files)
   - [Pricing Files (Local Static Fallbacks)](#pricing-files-local-static-fallbacks)
   - [OmbDataMap — The Routing Brain](#ombdatamap--the-routing-brain)
   - [Dynamic Pricing & Batches (Google Sheets Integration)](#dynamic-pricing--batches-google-sheets-integration)
7. [Page Sections — What Each Section Renders](#page-sections--what-each-section-renders)
8. [How to Add a New Program or Retreat](#how-to-add-a-new-program-or-retreat)
9. [How to Update Prices](#how-to-update-prices)
10. [Membership Programs](#membership-programs)
11. [Online Programs](#online-programs)
12. [Shared Components](#shared-components)
13. [Routing Reference](#routing-reference)
14. [Environment Variables](#environment-variables)
15. [Deployment](#deployment)

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool and dev server |
| **React Router DOM v7** | Client-side routing |
| **Bootstrap 5** | Grid and utility classes |
| **Lucide React** | Icon set |
| **React Icons** | Additional icons |
| **React Slick** | Carousel / slider |
| **AOS** | Scroll animations |
| **Web3Forms** | Contact form & checkout submissions processor (no backend needed) |

---

## Project Structure

```
ombreathe/
├── public/
│   ├── images/              # Static images (certificates, logos, etc.)
│   ├── robots.txt
│   └── llms.txt
│
├── src/
│   ├── app/
│   │   ├── App.jsx          # Root component — ALL routes defined here
│   │   ├── App.css          # Global app-level styles
│   │   └── main.jsx         # ReactDOM entry point
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx   # Wraps every page (Navbar + Outlet + Footer)
│   │   │   ├── Layout.css
│   │   │   ├── Navbar/      # Full responsive navbar with mega-menu
│   │   │   └── Footer/      # Site footer
│   │   │
│   │   ├── shared/
│   │   │   ├── AutoTyping/        # Animated typing effect text
│   │   │   ├── DiscountPopup/     # Timed discount banner popup
│   │   │   ├── FloatingDonateButton/
│   │   │   ├── LazySection/       # Intersection Observer lazy loader
│   │   │   ├── Ratings/           # Star rating display
│   │   │   ├── SectionHeading/    # Reusable section title component
│   │   │   ├── WhatsAppButton/    # Floating WhatsApp CTA
│   │   │   └── questions/         # FAQ accordion (shared across all program pages)
│   │   │
│   │   └── ui/
│   │       ├── Accordion/
│   │       ├── Button/
│   │       └── Carousal/
│   │
│   ├── data/                # ★ ALL content / program data lives here
│   │   ├── locations.js     # Single source of truth for locations, slugs, and nav links
│   │   ├── onlineLocations.js
│   │   │
│   │   ├── bali/
│   │   │   ├── programPrices.js       # All room prices for Bali
│   │   │   ├── ttc/
│   │   │   │   ├── multiStyle/        # 50hr, 100hr, 200hr, 300hr, 500hr data files
│   │   │   │   ├── kundalini/         # Kundalini YTTC data files
│   │   │   │   ├── shortCourse/       # Yin Yoga, Prenatal, Aerial, Acro Yoga
│   │   │   │   └── specialization/    # Sound Healing, Yoga Therapy, Ayurveda, etc.
│   │   │   └── retreats/              # Retreat-specific data files
│   │   │
│   │   ├── rishikesh/
│   │   │   ├── programPricesRishikesh.js
│   │   │   ├── ttc/
│   │   │   │   ├── multiStyle/
│   │   │   │   ├── kundalini/
│   │   │   │   ├── shortCourse/
│   │   │   │   └── specialization/
│   │   │   └── retreats/
│   │   │
│   │   ├── chiang/          # URL slug is "chiang-mai"
│   │   │   ├── programPricesChiang.js
│   │   │   ├── ttc/
│   │   │   └── retreats/
│   │   │
│   │   ├── dharamshala/
│   │   │   ├── programPricesDharamshala.js
│   │   │   ├── ttc/
│   │   │   └── retreats/
│   │   │
│   │   └── mysore/          # URL slug is "mysuru"
│   │       ├── programPricesMysore.js
│   │       ├── ttc/
│   │       └── retreats/
│   │
│   ├── features/            # Page-level feature modules
│   │   ├── home/            # Homepage sections and page
│   │   ├── about/           # About Us page
│   │   ├── contact/         # Contact page + EmailJS form component
│   │   ├── teachers/        # Our Teachers listing page
│   │   ├── blog/            # Blog pages
│   │   ├── checkout/        # Booking / Checkout page
│   │   ├── membership/      # Membership programs (Sapta Rishi, Shiv Shakti, etc.)
│   │   ├── online/          # Online yoga programs
│   │   ├── terms/           # Terms and Conditions page
│   │   └── yoga-retreats-programs/
│   │       ├── components/  # ProgramsCarousel component
│   │       ├── data/
│   │       │   ├── OmbDataMap.js      # ★ Maps location + course slug → data object
│   │       │   ├── LandingPageData.js # Content for location landing pages
│   │       │   ├── LocationData.js    # Location-specific metadata
│   │       │   └── CarouselData.js    # Programs carousel content
│   │       ├── pages/
│   │       │   ├── YogaProgramPage.jsx     # Renders any individual program or retreat page
│   │       │   └── LocationLandingPage.jsx # Per-location overview landing page
│   │       └── sections/    # All reusable page section components (Hero, Curriculum, Food, etc.)
│   │
│   ├── hooks/
│   │   ├── useGTMPageView.jsx   # Google Tag Manager page-view tracking hook
│   │   └── useScrollToTop.jsx   # Scrolls to top on route change
│   │
│   ├── images/              # Local image assets used inside components
│   └── styles/
│       └── globalStyles.jsx # Injected global CSS-in-JS styles
│
├── index.html
├── vite.config.js
├── vercel.json              # Vercel SPA redirect config (sends all routes to index.html)
├── .env                     # EmailJS credentials — never commit this file
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Install and Run

```bash
# 1. Clone the repository
git clone <repo-url>
cd ombreathe

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output goes to `/dist`. This folder is what gets deployed to Vercel.

---

## How the App Works — End to End

Here is the complete flow when a user visits a program page:

1. **User visits** `/programs/rishikesh/200hr`
2. **React Router** matches the route pattern `programs/:location/:course`
3. The `NormalisedTTCRoute` wrapper lowercases the URL params (so `/Programs/RISHIKESH/200HR` auto-redirects to `/programs/rishikesh/200hr`)
4. `YogaProgramPage` receives `location = "rishikesh"` and `course = "200hr"` from `useParams()`
5. It looks up **`OmbDataMap["rishikesh"]["200hr"]`** → returns `Rishikesh200HoursData` (the full content object)
6. It looks up **`ROOM_PRICES_RISHIKESH["200hr"]`** → returns room types, fallback prices, and duration as static defaults
7. **Dynamic Sheets Fetch**: When the app initializes, it calls `fetchAndApplyDynamicPrices()` to fetch the configured Google Spreadsheet. If loaded, these dynamic prices, room options, and batch dates overwrite the static defaults.
8. Room prices from the pricing file (or Google Sheets) **overwrite** the placeholder prices inside the data file at runtime
9. Batch dates are retrieved from the Google Sheets "Batches" sheet, falling back to being **auto-generated** from today's date using the `durationDays` field if Google Sheets are not available
10. User clicks **Enroll / Book** → navigates to `/checkout` with `location`, `slug`, `roomType`, `type` (program vs. retreat), and `selectedDate` in router state

---

## Locations System

All locations are declared in a **single source of truth**:

**`src/data/locations.js`**

This file exports:

| Export | Purpose |
|---|---|
| `LOCATIONS` | Array of `{ slug, label }` — drives all navigation loops |
| `slugToLabel` | Quick lookup: `"rishikesh"` → `"Rishikesh"` |
| `labelToSlug` | Reverse lookup: `"Rishikesh"` → `"rishikesh"` |
| `PROGRAM_LINKS` | All TTC / Short Course / Specialization nav links per location |
| `RETREAT_LINKS` | All retreat nav links per location |
| `buildPath(slug, course, type)` | Generates URL: `/programs/bali/200hr` |

### Current Locations

| Display Name | URL Slug | Data Folder |
|---|---|---|
| Mysuru | `mysuru` | `src/data/mysore/` |
| Bali | `bali` | `src/data/bali/` |
| Rishikesh | `rishikesh` | `src/data/rishikesh/` |
| Chiang Mai | `chiang-mai` | `src/data/chiang/` |
| Dharamshala | `dharamshala` | `src/data/dharamshala/` |

> **Important:** The slug in `locations.js`, the key in `OmbDataMap`, and the folder under `src/data/` must all be consistent. Note that Chiang Mai's slug is `chiang-mai` but the data folder is `chiang/`. And Mysuru's slug is `mysuru` but the data folder is `mysore/`.

---

## Data Architecture

### Program Data Files

Every program (TTC, retreat, short course, specialization) has its **own dedicated JavaScript data file** under `src/data/<location>/`. Each file exports a single large object that contains all the content for every section of that program's page.

**Full structure of a program data object:**

```js
export const MyProgramData = {

  // ── 1. HERO SECTION ─────────────────────────────
  heroSection: {
    colors: {
      cream:     "#F4F6F7",
      goldLight: "#4AABB0",
      navy:      "#0B2527",
      sage:      "#1E5154",
      overlay:   "linear-gradient(180deg, rgba(11,37,39,0.6), rgba(11,37,39,0.96))",
      white:     "#ffffff",
      textLight: "rgba(255,255,255,0.92)",
      textFade:  "rgba(255,255,255,0.76)",
    },
    hero: {
      location:   "Rishikesh · Spiritual Haven",
      title:      "200 Hour Yoga Teacher Training",
      highlight:  "20 Days Immersive Experience",
      subtitle:   "Full description of the program...",
      price:      "$999",
      priceNote:  "Shared room package; includes airport pickup, welcome kit, and daily excursions.",
      bgImage:    "https://images.unsplash.com/photo-XXXX?w=1600&q=80",
      certificateImage: "https://...",
      buttonText: "Enroll This Course Now",
      url:        "/contact",
    },
    gains: [
      "What students will gain or learn — bullet 1",
      "Bullet 2",
      // ...up to 6-8 items
    ],
    certificates: [
      { img: "/images/cirtificats/yoga.png", label: "200 Hour YTTC" },
      { img: "/images/cirtificats/yoga.png", label: "Yoga Alliance" },
    ],
    content: {
      bottomText: "Closing / summary text displayed at the bottom of the hero area.",
    },
  },

  // ── 2. HIGHLIGHTS SECTION ────────────────────────
  highlightsSection: {
    community: {
      colors: { /* same shape as above */ },
      content: {
        bgImage:   "https://...",
        eyebrow:   "Ombreathe",
        title:     "Join our",
        highlight: "vibrant global community",
        subtitle:  "Supporting text...",
        stats: [
          { value: "20 Days", label: "Residential Training", icon: "calendar" },
          { value: "3 Meals", label: "Organic Nutrition",    icon: "sparkles" },
          { value: "100%",    label: "Vegetarian",           icon: "feather"  },
          { value: "Certified", label: "Instructors",        icon: "users"    },
          { value: "Global",  label: "Community",            icon: "globe"    },
        ],
      },
    },
    promo: { /* promotional banner content */ },
    transformation: { /* transformation / outcome highlights */ },
  },

  // ── 3. PRACTICE SECTION ──────────────────────────
  practiceSection: {
    content: {
      title: "Core Practices",
      items: [
        { title: "Asana",      description: "..." },
        { title: "Pranayama",  description: "..." },
        { title: "Meditation", description: "..." },
        // ...
      ],
    },
  },

  // ── 4. PROGRAM DETAILS ───────────────────────────
  programDetailsSection: {
    curriculum: {
      title: "Curriculum",
      modules: [
        { title: "Module 1 — Foundations", topics: ["Topic A", "Topic B"] },
        // ...
      ],
    },
    schedule: {
      title: "Daily Schedule",
      days: [
        { time: "6:00 AM", activity: "Morning Yoga" },
        { time: "8:00 AM", activity: "Breakfast"    },
        // ...
      ],
    },
  },

  // ── 5. EXPERIENCE SECTION ────────────────────────
  experienceSection: {
    food: {
      title: "Sattvic Nutrition",
      description: "...",
      items: [ /* meal descriptions */ ],
    },
    excursion: {
      title: "Excursions",
      items: [ { title: "Ganga Aarti", description: "..." } ],
    },
    location: {
      title: "Location",
      description: "About the ashram / venue...",
      mapEmbed: "https://maps.google.com/...",
    },
    massage: {
      // Only include if program includes massage / bodywork
      title: "Ayurvedic Massage",
      description: "...",
    },
  },

  // ── 6. ACCOMMODATION SECTION ─────────────────────
  // NOTE: room prices here are OVERWRITTEN at runtime from the pricing file.
  // You only need to update the pricing file to change prices.
  accommodationSection: {
    colors: { /* optional color overrides */ },
    content: {
      title: "Accommodation",
      rooms: [
        {
          type:     "2 Sharing Room",
          price:    "$999",          // Runtime-overridden from ROOM_PRICES file
          image:    "https://...",
          features: ["AC", "Attached bathroom", "Hot water", "WiFi"],
          popular:  true,
        },
        {
          type:     "Private Room",
          price:    "$1299",
          image:    "https://...",
          features: ["AC", "Private bathroom", "Hot water", "WiFi", "Balcony"],
          popular:  false,
        },
      ],
    },
  },

  // ── 7. FAQ SECTION ───────────────────────────────
  faqSection: {
    faqs: [
      {
        question: "What is included in the program fee?",
        answer:   "Accommodation, 3 meals/day, course materials, and a certificate."
      },
      {
        question: "Is prior yoga experience required?",
        answer:   "No, beginners are welcome."
      },
      // ...up to 8-10 FAQs
    ],
  },

};
```

---

### Pricing Files (Local Static Fallbacks)

Each location has **one centralized pricing file** that stores all room prices. This serves as the **local static fallback** if the Google Sheets API fetch fails or if spreadsheet IDs are not configured.

| Location | Pricing File |
|---|---|
| Bali | `src/data/bali/programPrices.js` |
| Rishikesh | `src/data/rishikesh/programPricesRishikesh.js` |
| Mysuru | `src/data/mysore/programPricesMysore.js` |
| Chiang Mai | `src/data/chiang/programPricesChiang.js` |
| Dharamshala | `src/data/dharamshala/programPricesDharamshala.js` |

Each file exports two objects:

```js
// ── Object 1: Simple price lookup (used in cards and carousels)
export const PROGRAM_PRICES_RISHIKESH = {
  multiStyle: {
    "100hr": "$899",
    "200hr": "$999",
    "300hr": "$1,299",
    "500hr": "$2,299",
  },
  kundalini: {
    "50hr":  "$799",
    "200hr": "$999",
    // ...
  },
  shortcourses: {
    "yinyoga":     "$599",
    "prenatalyoga":"$599",
  },
  specializations: {
    "rishikeshsoundhealing":          "$599",
    "rishikesh10dayspanchakarma":     "$599",
    // key = URL slug (lowercase, no spaces)
  },
};

// ── Object 2: Detailed room pricing (used on the program detail page)
export const ROOM_PRICES_RISHIKESH = {
  "200hr": {
    durationDays: 20,          // Used to auto-generate batch start/end dates
    rooms: [
      { type: "6 Sharing Room", current: 999,  original: 1399, popular: false },
      { type: "4 Sharing Room", current: 1099, original: 1499, popular: false },
      { type: "2 Sharing Room", current: 1399, original: 1799, popular: true  },
      { type: "Private Room",   current: 1699, original: 2099, popular: false },
    ],
  },
  "rishikesh5daysyogaretreat": {
    durationDays: 5,
    rooms: [
      { type: "2 Sharing Room", current: 299, original: 699, popular: true  },
      { type: "Private Room",   current: 499, original: 899, popular: false },
    ],
  },
  // ... one entry per program slug
};
```

**Field explanations:**
- `current` — The price the user pays (displayed prominently)
- `original` — The original price (shown crossed out in strikethrough)
- `popular: true` — Highlights this room with a "Most Popular" badge
- `durationDays` — Duration used to auto-generate upcoming batch dates from today

---

### OmbDataMap — The Routing Brain

**`src/features/yoga-retreats-programs/data/OmbDataMap.js`**

This is the **central registry** that maps a `location slug + course slug` combination to its data object. When `YogaProgramPage` loads, it uses this map to find the correct content.

```js
export const OmbDataMap = {

  "rishikesh": {
    "200hr":                          Rishikesh200HoursData,
    "300hr":                          Rishikesh300HoursData,
    "kundalini200hr":                 RishikeshKundali200HoursData,
    "rishikesh5daysyogaretreat":      Rishikesh5DaysYogaRetreatData,
    "rishikeshsoundhealing":          RishikeshSoundHealingData,
    // ... one key per program
  },

  "bali": {
    "200hr": Bali200HoursData,
    // ...
  },

  "chiang-mai": {
    "200hr": Chiang200HoursData,
    // ...
  },

  "dharamshala": { /* ... */ },
  "mysuru":       { /* ... */ },
};
```

When a user visits `/programs/rishikesh/200hr`:
- `OmbDataMap["rishikesh"]["200hr"]` returns `Rishikesh200HoursData`
- If the key doesn't exist, the page shows a "Coming Soon" message automatically

---

### Dynamic Pricing & Batches (Google Sheets vs. Local Excel File)

The application supports loading prices, room rates, batches, and testimonials either **directly from the local project Excel file (`ombreathe_config_template_new.xlsx`)** or **live from Google Spreadsheets**.

#### Source Mode Configuration (`.env` Toggle)

You can choose where the website reads its pricing and batch data using `VITE_USE_GOOGLE_SHEETS`:

```env
# Set to 'false' (or omit) to read directly from the local Excel file: ombreathe_config_template_new.xlsx
VITE_USE_GOOGLE_SHEETS=false

# Set to 'true' to fetch live in real-time from Google Spreadsheets
# VITE_USE_GOOGLE_SHEETS=true
```

* **Mode 1 (Default: `false`): Local Project Excel File (`ombreathe_config_template_new.xlsx`)**  
  The app automatically reads and parses `ombreathe_config_template_new.xlsx` directly from the project. Any updates made in the Excel file are automatically applied.

* **Mode 2 (`true`): Live Google Spreadsheets**  
  The app fetches live from your configured Google Spreadsheet IDs on mount and applies real-time overrides.

---

#### Google Sheet Configuration & Column Schema

The loader parses CSV data and maps columns case-insensitively using header normalization. The spreadsheet must follow these column layouts:

1. **Program Prices** (Tab/Sheet Name: `Program Prices`):
   - **Required Columns**: `location`, `coursekey`, `price`
   - **Optional Columns**: `category`, `programname`
   - *Example values*: `location` (e.g. `Rishikesh`, `Bali`), `coursekey` (e.g. `200hr`, `300hr`, `rishikeshsoundhealing`), `price` (e.g. `$999`).

2. **Room Prices** (Tab/Sheet Name: `Room Prices`):
   - **Required Columns**: `location`, `coursekey`, `roomtype`, `current`, `original`, `durationdays`
   - **Optional Columns**: `popular` (`true` or `false`), `note`
   - *Formula Logic*: `current` and `original` on the sheet are surcharges added to the base program price. At runtime: `currentPrice = basePrice + rawCurrent`.

3. **Batches** (Tab/Sheet Name: `Batches`):
   - **Required Columns**: `location`, `coursekey`, `startdate`, `enddate`, `seatsleft`
   - **Optional Columns**: `datetext` (custom display string like `"Flexible dates"`)
   - *Sorting*: Batch dates are sorted chronologically.

4. **Testimonials** (Tab/Sheet Name: `Testimonials`):
   - **Required Columns**: `name`, `quote`
   - **Optional Columns**: `stars`, `avatar`, `country`
   - *Overwrites*: Overrides the default homepage testimonials with dynamic submissions.

#### Local Static Fallback

If sheet coordinates are missing, network requests fail, or a program key is omitted from the sheet, the application automatically uses static files (e.g., `ROOM_PRICES_RISHIKESH`) as fallbacks.

---

## Page Sections — What Each Section Renders

`YogaProgramPage` renders these sections in order, all driven from the data object:

| Order | Section Component | Data Key | What It Shows |
|---|---|---|---|
| 1 | `OmbHeroSection` | `data.heroSection` | Full-screen hero, title, price badge, gains list, CTA button |
| 2 | `HighlightsSection` | `data.highlightsSection` | Community stats, promo banner, transformation highlights |
| 3 | `OmbPracticeSection` | `data.practiceSection` | Core subjects and practices taught |
| 3.5 | `YogaTrainingPage` | *(from pricing file)* | Batch date selector + room price comparison table |
| 4 | `ProgramDetailsSection` | `data.programDetailsSection` | Curriculum modules + daily schedule |
| 5 | `ExperienceSection` | `data.experienceSection` | Food, excursions, location info, massage (if applicable) |
| 6 | `OmbAccommodationSection` | `data.accommodationSection` | Room photos + prices (prices overridden from pricing file) |
| 7 | `Questions` | `data.faqSection` | FAQ accordion |
| 8 | `Contact` (form) | *(hardcoded)* | EmailJS contact form |

> **Performance:** All sections except the Hero and Accommodation are wrapped in `<LazySection>`, which uses Intersection Observer to only render them when they scroll into view. This keeps the initial page load fast.

---

## How to Add a New Program or Retreat

Follow these 4 steps in order. This example adds a **7-Day Sound Healing Retreat in Mysuru**.

---

### Step 1 — Create the Data File

Decide where the file goes:
- TTC programs → `src/data/<location>/ttc/<category>/`
- Retreats → `src/data/<location>/retreats/`

Create the file:
```
src/data/mysore/retreats/Mysore7DaySoundHealingData.js
```

Copy the structure from an existing similar file (e.g., `Rishikesh5DaysYogaRetreatData.js`) and fill in your content:

```js
export const Mysore7DaySoundHealingData = {
  heroSection: {
    colors: {
      cream:     "#F4F4F0",
      goldLight: "#C9A84C",
      navy:      "#1A1A2E",
      sage:      "#2C3E50",
      overlay:   "linear-gradient(180deg, rgba(26,26,46,0.6), rgba(26,26,46,0.96))",
      white:     "#ffffff",
      textLight: "rgba(255,255,255,0.92)",
      textFade:  "rgba(255,255,255,0.76)",
    },
    hero: {
      location:   "Mysuru · Ancient Healing Traditions",
      title:      "7-Day Sound Healing Retreat",
      highlight:  "Deep Vibrational Therapy Experience",
      subtitle:   "Immerse yourself in the ancient art of sound healing...",
      price:      "$499",
      priceNote:  "Shared room package. Includes 3 meals/day, all materials, and airport transfer.",
      bgImage:    "https://images.unsplash.com/photo-XXXXX?w=1600&q=80",
      buttonText: "Enroll Now",
      url:        "/contact",
    },
    gains: [
      "Learn to play Tibetan singing bowls for therapeutic effect",
      "Experience deep states of meditation through sound",
      "Receive a certificate recognized by international wellness bodies",
      // ...
    ],
    certificates: [
      { img: "/images/cirtificats/yoga.png", label: "Sound Healing" },
    ],
    content: { bottomText: "End your retreat with a closing sound bath ceremony..." },
  },

  highlightsSection: { /* ... fill in community, promo, transformation */ },
  practiceSection:   { /* ... list what practices are taught */ },
  programDetailsSection: { /* ... curriculum and daily schedule */ },
  experienceSection:  { /* ... food, excursions, location */ },

  accommodationSection: {
    content: {
      rooms: [
        {
          type:     "2 Sharing Room",
          price:    "$499",        // This gets overridden at runtime from the pricing file
          image:    "https://...",
          features: ["AC", "Attached bathroom", "Hot water", "WiFi"],
          popular:  true,
        },
        {
          type:     "Private Room",
          price:    "$699",
          image:    "https://...",
          features: ["AC", "Private bathroom", "Hot water", "WiFi"],
          popular:  false,
        },
      ],
    },
  },

  faqSection: {
    faqs: [
      { question: "Do I need prior experience?", answer: "No prior experience needed." },
      // ...
    ],
  },
};
```

---

### Step 2 — Add Room Pricing

Open the Mysuru pricing file:
```
src/data/mysore/programPricesMysore.js
```

Add an entry to `ROOM_PRICES_MYSORE`:

```js
"mysore7daysoundhealing": {
  durationDays: 7,
  rooms: [
    { type: "2 Sharing Room", current: 499, original: 799, popular: true  },
    { type: "Private Room",   current: 699, original: 999, popular: false },
  ],
},
```

> **The key `"mysore7daysoundhealing"` is the URL slug** — it must be lowercase with no spaces or special characters. This slug will appear in the URL and be used as the lookup key throughout the app.

---

### Step 3 — Register in OmbDataMap

Open:
```
src/features/yoga-retreats-programs/data/OmbDataMap.js
```

**Add the import** at the top of the file with the other Mysuru imports:

```js
import { Mysore7DaySoundHealingData } from "../../../data/mysore/retreats/Mysore7DaySoundHealingData";
```

**Add the entry** inside the `mysuru` block:

```js
mysuru: {
  // ... existing entries ...
  "mysore7daysoundhealing": Mysore7DaySoundHealingData,  // ← add this line
},
```

---

### Step 4 — Add to Navigation

Open:
```
src/data/locations.js
```

Find the `RETREAT_LINKS` section for `mysuru` and add your program:

```js
RETREAT_LINKS = {
  mysuru: [
    { path: "mysoresingingbowlsoundhealing", label: "3 Days Sound Healing Training Course" },
    // ... existing entries ...
    { path: "mysore7daysoundhealing", label: "7 Day Sound Healing Retreat" },  // ← add this
  ],
  // ...
};
```

The live URL for this retreat will be:
```
/retreats/mysuru/mysore7daysoundhealing
```

> ✅ **Done!** The page is now live. Batch dates auto-generate from today, room prices are pulled from the pricing file, and the contact form works out of the box.

---

### (Optional) Step 5 — Add to Location Landing Page

If you want the program to appear on the Mysuru location landing page (`/programs/mysuru`), open:
```
src/features/yoga-retreats-programs/data/LandingPageData.js
```
and add your program to the Mysuru section listing.

---

## How to Update Prices

Prices and room options are primarily updated dynamically. However, the static files serve as backup fallbacks.

### Method 1 — Google Sheets (Primary & Real-time)

To change prices, update the respective rows and columns in the configured Google Spreadsheet. These changes will reflect immediately upon refreshing the page:
1. **Base Program Price**: Edit the `price` column on the **Program Prices** tab for the target `location` and `coursekey`.
2. **Room Surcharge/Option Price**: Edit the `current` (price to pay) and `original` (strikethrough price) columns on the **Room Prices** tab. (At runtime, these surcharges are added to the Base Program Price to compute final room rate).
3. **Cheapest Badge/Notes**: Ensure that the lowest room package price matches the base program price.

---

### Method 2 — Local Static Files (Fallback)

If you need to update prices directly in the code (e.g. for offline use or when spreadsheet IDs are not used):

#### Updating Room Prices on the Program Detail Page

1. Open the pricing file for the location:

   | Location | File |
   |---|---|
   | Bali | `src/data/bali/programPrices.js` → `ROOM_PRICES_BALI` |
   | Rishikesh | `src/data/rishikesh/programPricesRishikesh.js` → `ROOM_PRICES_RISHIKESH` |
   | Mysuru | `src/data/mysore/programPricesMysore.js` → `ROOM_PRICES_MYSORE` |
   | Chiang Mai | `src/data/chiang/programPricesChiang.js` → `ROOM_PRICES_CHIANG` |
   | Dharamshala | `src/data/dharamshala/programPricesDharamshala.js` → `ROOM_PRICES_DHARAMSHALA` |

2. Find the entry by course slug (e.g., `"200hr"`, `"rishikesh5daysyogaretreat"`)

3. Update `current` (shown price) and/or `original` (strikethrough price):

```js
"200hr": {
  durationDays: 20,
  rooms: [
    { type: "2 Sharing Room", current: 1099, original: 1499, popular: true  },  // ← change current / original
    { type: "Private Room",   current: 1399, original: 1799, popular: false },
  ],
},
```

#### Updating the Hero Price Badge

The price shown in the top hero area of each page is inside the program's data file:

For example, for the Rishikesh 5-Day Retreat:
```
src/data/rishikesh/retreats/Rishikesh5DaysYogaRetreatData.js
```

Find `hero.price` and update it:

```js
hero: {
  price:     "$349",   // ← Update this value
  priceNote: "Shared room package. Includes airport pickup...",
  // ...
}
```

> **Best practice:** Keep `hero.price` in sync with the lowest room option in the pricing file.

#### Updating Prices in Carousels / Program Cards

The `PROGRAM_PRICES_*` object (first export in each pricing file) is used in program listing cards and carousels. Update this too if needed:

```js
export const PROGRAM_PRICES_RISHIKESH = {
  multiStyle: {
    "200hr": "$999",   // ← Update this
  },
  // ...
};
```

---

## Membership Programs

Membership programs are fully separate from location-based programs. They live in:
```
src/features/membership/data/
```

There are 4 membership tiers, each with its own data file and fixed route:

| Program | Data File | URL |
|---|---|---|
| Shakti Sadhana | `shaktiSadhanaData.js` | `/programs/shakti-sadhana` |
| Shiv Shakti Sadhana | `shivShaktiSadhanaData.js` | `/programs/shiv-shakti-sadhana` |
| Sapta Rishi Sadhana | `saptaRishiSadhanaData.js` | `/programs/sapta-rishi-sadhana` |
| Pashu Patayaa Sadhana | `pashuPatayaaData.js` | `/programs/pashu-patayaa-sadhana` |

These use the `MembershipPage` component and are **directly routed in `App.jsx`** — they do **not** go through `OmbDataMap`.

To update membership content, edit the relevant data file directly. The data structure is self-contained within each file.

---

## Online Programs

Online programs are at:
```
src/features/online/pages/OnlineYogaPage.jsx
```

URL pattern: `/online/:course`

Available online courses are listed in:
```
src/data/onlineLocations.js
```

---

## Shared Components

These components are reused across multiple pages:

| Component | Path | What It Does |
|---|---|---|
| `Layout` | `components/layout/Layout.jsx` | Shell wrapping all pages — renders Navbar + `<Outlet>` + Footer |
| `Navbar` | `components/layout/Navbar/Navbar.jsx` | Full mega-menu responsive navbar |
| `Footer` | `components/layout/Footer/` | Site-wide footer |
| `LazySection` | `components/shared/LazySection/` | Wraps sections to lazy-load them on scroll (Intersection Observer) |
| `WhatsAppButton` | `components/shared/WhatsAppButton/` | Floating green WhatsApp button |
| `DiscountPopup` | `components/shared/DiscountPopup/` | Timed popup discount offer |
| `Questions` | `components/shared/questions/` | Collapsible FAQ accordion — used on all program pages |
| `SectionHeading` | `components/shared/SectionHeading/` | Consistent section title + subtitle styling |
| `Ratings` | `components/shared/Ratings/` | Star rating display component |
| `AutoTyping` | `components/shared/AutoTyping/` | Typewriter-effect animated text |

---

## Routing Reference

All routes are defined in `src/app/App.jsx`.

| URL Pattern | Component | Notes |
|---|---|---|
| `/` | `HomePage` | Main homepage |
| `/about` | `AboutUsPage` | About Us page |
| `/contact` | `ContactPage` | Contact page |
| `/our-teachers-list` | `TeachersPage` | Teacher bios and listing |
| `/programs` | `ProgramsCarousel` | All programs overview carousel |
| `/programs/:location/:course` | `YogaProgramPage` | Individual TTC or specialization page |
| `/programs/:location` | `LocationLandingPage` | Per-location overview page |
| `/retreats/:location/:course` | `YogaProgramPage` | Retreat page (same component as TTC) |
| `/online/:course` | `OnlineYogaPage` | Online program page |
| `/programs/shakti-sadhana` | `MembershipPage` | Membership program |
| `/programs/shiv-shakti-sadhana` | `MembershipPage` | Membership program |
| `/programs/sapta-rishi-sadhana` | `MembershipPage` | Membership program |
| `/programs/pashu-patayaa-sadhana` | `MembershipPage` | Membership program |
| `/retreats/personalize-your-retreat/host-your-retreat` | `HostYourRetreats` | Custom retreat hosting |
| `/retreats/personalize-your-retreat/make-your-own-combo` | `MakeYourOwnCombo` | Custom combo retreat |
| `/checkout` | `CheckoutPage` | Booking and enrollment checkout |
| `/terms-and-conditions` | `TermsPage` | Terms and Conditions |
| `*` | 404 message | Catch-all for unknown routes |

> **URL normalisation:** Both `:location` and `:course` params are automatically lowercased. Visiting `/Programs/RISHIKESH/200HR` will auto-redirect to `/programs/rishikesh/200hr` using `NormalisedTTCRoute`.

---

## Environment Variables

Create a `.env` file in the root of the project (already listed in `.gitignore` — never commit it):

```env
# Web3Forms API key for form submissions
VITE_WEB3FORMS_KEY=your_web3forms_access_key

# Unified Google Spreadsheet ID (Shared as "Anyone with link can view")
VITE_SPREADSHEET_ID=your_google_spreadsheet_id

# Optional/Fallback direct published CSV links for individual tabs
VITE_SPREADSHEET_ID_PROGRAM=https://docs.google.com/spreadsheets/d/e/.../pub?output=csv&gid=...
VITE_SPREADSHEET_ID_ROOM=https://docs.google.com/spreadsheets/d/e/.../pub?output=csv&gid=...
VITE_SPREADSHEET_ID_BATCHES=https://docs.google.com/spreadsheets/d/e/.../pub?output=csv&gid=...
VITE_SPREADSHEET_ID_TESTIMONIALS=https://docs.google.com/spreadsheets/d/e/.../pub?output=csv&gid=...
```

Web3Forms is used by the contact form and checkout page to submit user inquiries and booking requests directly without needing a backend server. Google Sheets environment variables enable dynamic loading of prices, rooms, batches, and testimonials.

---

## Deployment

The project deploys to **Vercel** (connected to the main Git branch).

`vercel.json` is configured to handle client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This ensures that deep links like `/programs/rishikesh/200hr` work correctly when users navigate directly to them or refresh the page.

To deploy manually:
```bash
npm run build
# Upload /dist to your hosting provider, or push to the connected branch for auto-deploy
```

---

## Quick Reference Checklists

### Adding a New Program or Retreat

- [ ] Create data file in `src/data/<location>/<type>/YourProgramData.js`
- [ ] Fill in all sections: heroSection, highlightsSection, practiceSection, programDetailsSection, experienceSection, accommodationSection, faqSection
- [ ] Add room pricing fallback entry to `ROOM_PRICES_*` in the location's pricing file
- [ ] Import and add the data to `OmbDataMap` in `src/features/yoga-retreats-programs/data/OmbDataMap.js`
- [ ] Add the nav link to `PROGRAM_LINKS` or `RETREAT_LINKS` in `src/data/locations.js`
- [ ] **(Dynamic)** Add the program entry, room surcharges, and batch dates to the respective tabs in the Google Sheets configuration

### Updating a Price

- [ ] **(Primary)** Open the Google Sheet and update base prices (Program Prices tab) or room surcharges (Room Prices tab)
- [ ] **(Static Fallback)** Open the location's pricing file (`programPrices<Location>.js`) and update `current` and/or `original` in `ROOM_PRICES_*` for the specific course slug
- [ ] **(Static Fallback)** Update `hero.price` in the program data file to match the cheapest room option
- [ ] **(Static Fallback)** Update `PROGRAM_PRICES_*` for the price shown in cards and carousels

---

*Last updated: August 2026*
