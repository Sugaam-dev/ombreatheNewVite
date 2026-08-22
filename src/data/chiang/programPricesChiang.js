export const PROGRAM_PRICES_CHIANG = {
  multiStyle: {
    "50": "$650",
    "100hr": "$999",
    "200hr": "$1,299",
    "300hr": "$1,499",
    "500hr": "$2,999",
  },

  kundalini: {
    "50hr": "$650",
    "100hr": "$999",
    "200hr": "$1,299",
    "300hr": "$1,599",
    "500hr": "$2,599",
  },
  shortcourses: {
    "yinyoga": "$499",
    "prenatalyoga": "$499",
    "aerialyoga": "$399",
    "acroyoga": "$599",
  },
  specializations: {
    "ChiangMaiSoundHealingData": "$350",
    "ChiangMai100HourYogaTherapyAyurvedaData": "$899",
    "ChiangMaiAyurvedicTreatmentTTCData": "$1,250",
    "ChiangMaiAyurveda5HoursAbhyangamData": "$250",
    "ChiangMairetreats6days": "$650",
  },
};


export const ROOM_PRICES_CHIANG = {
  "50hr": {
    durationDays: 6,
    rooms: [
      { type: "2 Sharing Room", current: 650, original: 1050, popular: true },
      { type: "Private Room", current: 750, original: 1150, popular: false }
    ]
  },
  "100hr": {
    durationDays: 10,
    rooms: [
      { type: "2 Sharing Room", current: 999, original: 1399, popular: true },
      { type: "Private Room", current: 1299, original: 1699, popular: false }
    ]
  },
  "200hr": {
    durationDays: 20,
    rooms: [
      { type: "6 Sharing Room", current: 1299, original: 1899, popular: false },
      { type: "4 Sharing Room", current: 1499, original: 2099, popular: false },
      { type: "2 Sharing Room", current: 1899, original: 2499, popular: true },
      { type: "Private Room", current: 2399, original: 2999, popular: false }
    ]
  },
  "300hr": {
    durationDays: 26,
    rooms: [
      { type: "6 Sharing Room", current: 1499, original: 1899, popular: false },
      { type: "4 Sharing Room", current: 1699, original: 2099, popular: false },
      { type: "2 Sharing Room", current: 2099, original: 2499, popular: true },
      { type: "Private Room", current: 2699, original: 3099, popular: false }
    ]
  },
  "500hr": {
    durationDays: 56,
    rooms: [
      { type: "6 Sharing Room", current: 2999, original: 3699, popular: false },
      { type: "4 Sharing Room", current: 3299, original: 3999, popular: false },
      { type: "2 Sharing Room", current: 3699, original: 4399, popular: true },
      { type: "Private Room", current: 4299, original: 4999, popular: false }
    ]
  },
  "kundalini50hr": {
    durationDays: 6,
    rooms: [
      { type: "2 Sharing Room", current: 650, original: 1050, popular: true },
      { type: "Private Room", current: 750, original: 1150, popular: false }
    ]
  },
  "kundalini100hr": {
    durationDays: 10,
    rooms: [
      { type: "2 Sharing Room", current: 999, original: 1399, popular: true },
      { type: "Private Room", current: 1299, original: 1699, popular: false }
    ]
  },
  "kundalini200hr": {
    durationDays: 20,
    rooms: [
      { type: "6 Sharing Room", current: 1299, original: 1699, popular: false },
      { type: "4 Sharing Room", current: 1499, original: 1899, popular: false },
      { type: "2 Sharing Room", current: 1799, original: 2199, popular: true },
      { type: "Private Room", current: 2399, original: 2799, popular: false }
    ]
  },
  "kundalini300hr": {
    durationDays: 30,
    rooms: [
      { type: "6 Sharing Room", current: 1599, original: 1999, popular: false },
      { type: "4 Sharing Room", current: 2199, original: 2799, popular: false },
      { type: "2 Sharing Room", current: 2199, original: 2599, popular: true },
      { type: "Private Room", current: 2799, original: 3199, popular: false }
    ]
  },
  "kundalini500hr": {
    durationDays: 50,
    rooms: [
      { type: "6 Sharing Room", current: 2599, original: 3199, popular: false },
      { type: "4 Sharing Room", current: 2999, original: 3599, popular: false },
      { type: "2 Sharing Room", current: 3699, original: 4299, popular: true },
      { type: "Private Room", current: 4899, original: 5499, popular: false }
    ]
  },
  "yinyoga": {
    durationDays: 6,
    rooms: [
      { type: "Without Food & Stay", current: 499, original: 899, popular: false },
      { type: "2 Sharing Room", current: 650, original: 1050, popular: true },
      { type: "Private Room", current: 750, original: 1150, popular: false }
    ]
  },
  "prenatalyoga": {
    durationDays: 10,
    rooms: [
      { type: "Without Food & Stay", current: 499, original: 899, popular: false },
      { type: "2 Sharing Room", current: 650, original: 1050, popular: true },
      { type: "Private Room", current: 750, original: 1150, popular: false }
    ]
  },
  "aerialyoga": {
    durationDays: 5,
    rooms: [
      { type: "Without Food & Stay", current: 399, original: 799, popular: false },
      { type: "2 Sharing Room", current: 550, original: 950, popular: true },
      { type: "Private Room", current: 650, original: 1050, popular: false }
    ]
  },
  "acroyoga": {
    durationDays: 5,
    rooms: [
      { type: "4 Sharing Room", current: 599, original: 999, popular: false },
      { type: "2 Sharing Room", current: 799, original: 1199, popular: true },
      { type: "Private Room", current: 899, original: 1299, popular: false }
    ]
  },
  "soundhealing": {
    durationDays: 5,
    rooms: [
      { type: "Without Food & Stay", current: 350, original: 750, popular: false },
      { type: "2 Sharing Room", current: 400, original: 800, popular: true },
      { type: "Private Room", current: 450, original: 850, popular: false }
    ]
  },
  "100houryogatherapyayurve": {
    durationDays: 10,
    rooms: [
      { type: "4/6 Sharing", current: 899, original: 1299, popular: false },
      { type: "2 Sharing Room", current: 1299, original: 1799, popular: true },
      { type: "Private Room", current: 1499, original: 1999, popular: false }
    ]
  },
  "ayurvedictreatmentttc": {
    durationDays: 15,
    rooms: [
      { type: "Without Food & Stay", current: 1250, original: 1650, popular: false },
      { type: "2 Sharing Room", current: 1450, original: 1850, popular: true },
      { type: "Private Room", current: 1600, original: 2000, popular: false }
    ]
  },
  "ayurveda5hoursabhyangam": {
    durationDays: 2,
    rooms: [
      { type: "Course Fee", current: 250, original: 500, popular: true }
    ]
  },
  "chiangmairetreats6days": {
    durationDays: 6,
    rooms: [
      { type: "2 Sharing Room", current: 650, original: 1050, popular: true },
      { type: "Private Room", current: 799, original: 1199, popular: false }
    ]
  },
  "vipassanaretreat": {
    durationDays: 10,
    rooms: [
      { type: "4/6 Sharing", current: 99, original: 499, popular: false },
      { type: "2 Sharing Room", current: 150, original: 550, popular: true },
      { type: "Private Room", current: 200, original: 600, popular: false }
    ]
  },
  "yogameditationwellnessretreat": {
    durationDays: 7,
    rooms: [
      { type: "2 Sharing Room", current: 999, original: 1099, popular: true },
      { type: "Private Room", current: 1099, original: 1299, popular: false }
    ]
  },
  "kundalinisadhanaretreat": {
    durationDays: 7,
    rooms: [
      { type: "2 Sharing Room", current: 999, original: 1099, popular: true },
      { type: "Private Room", current: 1099, original: 1299, popular: false }
    ]
  },
  "seniorcitizenwellnessretreat": {
    durationDays: 7,
    rooms: [
      { type: "2 Sharing Room", current: 999, original: 1099, popular: true },
      { type: "Private Room", current: 1099, original: 1299, popular: false }
    ]
  },
  "womenshealthwellnessretreat": {
    durationDays: 7,
    rooms: [
      { type: "2 Sharing Room", current: 999, original: 1099, popular: true },
      { type: "Private Room", current: 1099, original: 1299, popular: false }
    ]
  },
  "wellness-retreat": {
    durationDays: 7,
    rooms: [
      { type: "2 Sharing Room", current: 999, original: 1099, popular: true },
      { type: "Private Room", current: 1099, original: 1299, popular: false }
    ]
  }
};