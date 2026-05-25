// OmbDataMap.js
// Keyed by location SLUG (matches URL and locations.js).
// NormalisedTTCRoute lowercases both :location and :course before lookup.
import { Bali50HourData }          from "./bali/ttc/multiStyle/Bali50HourData";
import { Bali100HoursData }        from "./bali/ttc/multiStyle/Bali100HoursData";
import { Bali200HoursData }        from "./bali/ttc/multiStyle/Bali200HoursData";
import { Bali300HoursData }        from "./bali/ttc/multiStyle/Bali300HoursData";
import { Bali500HoursData }        from "./bali/ttc/multiStyle/Bali500HoursData";
import { BaliKundali50HoursData }  from "./bali/ttc/kundalini/BaliKundali50HoursData";
import { BaliKundali100HoursData } from "./bali/ttc/kundalini/BaliKundali100HoursData";
import { BaliKundali200HoursData } from "./bali/ttc/kundalini/BaliKundali200HoursData";
import { BaliKundali300HoursData } from "./bali/ttc/kundalini/BaliKundali300HoursData";
import { BaliKundali500HoursData } from "./bali/ttc/kundalini/BaliKundali500HoursData";
import { YinYogaData }             from "./bali/ttc/shortCourse/YinYogaData";
import { PrenatalYogaData }        from "./bali/ttc/shortCourse/PrenatalYogaData";
import { AerialYogaData }          from "./bali/ttc/shortCourse/AerialYogaData";
import { AcroYogaData }            from "./bali/ttc/shortCourse/AcroYogaData";
import { SoundHealingData }        from "./bali/ttc/specialization/SoundHealingData";
import { Bali100HourYogaTherapyAyurvedaData }        from "./bali/ttc/specialization/Bali100HourYogaTherapyAyurvedaData";
import { BaliAyurvedicTreatmentTTCData }        from "./bali/ttc/specialization/BaliAyurvedicTreatmentTTCData";
import { BaliAyurveda5HoursAbhyangamData }        from "./bali/ttc/specialization/BaliAyurveda5HoursAbhyangamData";




import { Retreats6DaysData }       from "./bali/retreats/Retreats6DaysData";
import { Rishikesh100HoursData }   from "./rishikesh/ttc/multiStyle/Rishikesh100HoursData";
import { Rishikesh200HoursData }   from "./rishikesh/ttc/multiStyle/Rishikesh200HoursData";
import { Rishikesh300HoursData }   from "./rishikesh/ttc/multiStyle/Rishikesh300HoursData";
import { Rishikesh500HoursData }   from "./rishikesh/ttc/multiStyle/Rishikesh500HoursData";


import { RishikeshKundali50HoursData } from "./rishikesh/ttc/kundalini/RishikeshKundali50HoursData";
import { RishikeshKundali100HoursData } from "./rishikesh/ttc/kundalini/RishikeshKundali100HoursData";
import { RishikeshKundali200HoursData } from "./rishikesh/ttc/kundalini/RishikeshKundali200HoursData";
import { RishikeshKundali300HoursData } from "./rishikesh/ttc/kundalini/RishikeshKundali300HoursData";
import { RishikeshKundali500HoursData } from "./rishikesh/ttc/kundalini/RishikeshKundali500HoursData";


import { Dharamshala100HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala100HoursData";
import { Dharamshala200HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala200HoursData";
import { Dharamshala300HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala300HoursData";
import { Dharamshala500HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala500HoursData";


import { DharamshalaKundali50HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali50HoursData";
import { DharamshalaKundali100HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali100HoursData";
import { DharamshalaKundali200HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali200HoursData";
import { DharamshalaKundali300HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali300HoursData";
import { DharamshalaKundali500HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali500HoursData";


export const OmbDataMap = {
  // ── Mysuru ──────────────────────────────────
  mysuru: {
    // add Mysuru data imports and keys here when ready
  },

  // ── Bali ────────────────────────────────────
  bali: {
    // Multi-style
    "50hr":  Bali50HourData,
    "100hr": Bali100HoursData,
    "200hr": Bali200HoursData,
    "300hr": Bali300HoursData,
    "500hr": Bali500HoursData,
    // Kundalini
    "kundalini50hr":  BaliKundali50HoursData,
    "kundalini100hr": BaliKundali100HoursData,
    "kundalini200hr": BaliKundali200HoursData,
    "kundalini300hr": BaliKundali300HoursData,
    "kundalini500hr": BaliKundali500HoursData,
    // Short courses
    "yinyoga":      YinYogaData,
    "prenatalyoga": PrenatalYogaData,
    "aerialyoga":   AerialYogaData,
    "acroyoga":     AcroYogaData,
    // Specialization
    "soundhealing": SoundHealingData,
    "100houryogatherapyayurve": Bali100HourYogaTherapyAyurvedaData,
    "ayurvedictreatmentttc": BaliAyurvedicTreatmentTTCData,
     "ayurveda5hoursabhyangam": BaliAyurveda5HoursAbhyangamData,


    // Retreats
    "retreats6days": Retreats6DaysData,
  },

  // ── Rishikesh ────────────────────────────────
  rishikesh: {
    "100hr": Rishikesh100HoursData,
    "200hr": Rishikesh200HoursData,
    "300hr": Rishikesh300HoursData,
    "500hr": Rishikesh500HoursData,

    "kundalini50hr": RishikeshKundali50HoursData,
    "kundalini100hr": RishikeshKundali100HoursData,
      "kundalini200hr": RishikeshKundali200HoursData,
    "kundalini300hr": RishikeshKundali300HoursData,
    "kundalini500hr": RishikeshKundali500HoursData,
  },

  // ── Chiang Mai ──────────────────────────────
  // slug is "chiang-mai" (hyphen) — matches URL and locations.js
  "chiang-mai": {
    // add Chiang Mai data imports and keys here when ready
  },

  // ── Dharamshala ─────────────────────────────
  dharamshala: {
    // add Dharamshala data imports and keys here when ready
        "100hr": Dharamshala100HoursData,
    "200hr": Dharamshala200HoursData,
    "300hr": Dharamshala300HoursData,
    "500hr": Dharamshala500HoursData,

    "kundalini50hr": DharamshalaKundali50HoursData,
    "kundalini100hr": DharamshalaKundali100HoursData,
      "kundalini200hr":DharamshalaKundali200HoursData,
    "kundalini300hr": DharamshalaKundali300HoursData,
    "kundalini500hr": DharamshalaKundali500HoursData,
  },
};