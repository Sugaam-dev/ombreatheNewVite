// OmbDataMap.js — location-aware map + case fix

import { Bali50HourData }        from "./bali/ttc/multiStyle/Bali50HourData";
import { Bali100HoursData }      from "./bali/ttc/multiStyle/Bali100HoursData";
import { Bali200HoursData }      from "./bali/ttc/multiStyle/Bali200HoursData";
import { Bali300HoursData }      from "./bali/ttc/multiStyle/Bali300HoursData";
import { Bali500HoursData }      from "./bali/ttc/multiStyle/Bali500HoursData";

import { BaliKundali50HoursData }  from "./bali/ttc/kundalini/BaliKundali50HoursData";
import { BaliKundali100HoursData } from "./bali/ttc/kundalini/BaliKundali100HoursData";
import { BaliKundali200HoursData } from "./bali/ttc/kundalini/BaliKundali200HoursData";
import { BaliKundali300HoursData } from "./bali/ttc/kundalini/BaliKundali300HoursData";
import { BaliKundali500HoursData } from "./bali/ttc/kundalini/BaliKundali500HoursData";

import { YinYogaData }      from "./bali/ttc/shortCourse/YinYogaData";
import { PrenatalYogaData } from "./bali/ttc/shortCourse/PrenatalYogaData";
import { AerialYogaData }   from "./bali/ttc/shortCourse/AerialYogaData";
import { AcroYogaData }     from "./bali/ttc/shortCourse/AcroYogaData";

import { SoundHealingData } from "./bali/ttc/specialization/SoundHealingData";

import { Retreats6DaysData } from "./bali/retreats/Retreats6DaysData";


// Keyed by lowercase location → lowercase course slug.
// The NormalisedTTCRoute in App.jsx lowercases both before lookup,
// so "Bali" → "bali" and "acroYoga" → "acroyoga" all resolve correctly.

export const OmbDataMap = {
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
    "yinyoga":     YinYogaData,
    "prenatalyoga": PrenatalYogaData,
    "aerialyoga":  AerialYogaData,
    "acroyoga":    AcroYogaData,   // navbar sends "acroYoga" → lowercased to "acroyoga" ✓

    // Specialization
    "soundhealing": SoundHealingData,

    // Retreats
    "retreats6days": Retreats6DaysData,
  },

  mysuru: {
    // add Mysuru data imports and keys here when ready
  },

  rishikesh: {
    // add Rishikesh data imports and keys here when ready
  },

  "chiang mai": {
    // add Chiang Mai data imports and keys here when ready
  },

  dharamshala: {
    // add Dharamshala data imports and keys here when ready
  },
};