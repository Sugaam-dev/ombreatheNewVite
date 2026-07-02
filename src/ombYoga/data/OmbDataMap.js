// OmbDataMap.js
// Keyed by location SLUG (matches URL and locations.js).
// NormalisedTTCRoute lowercases both :location and :course before lookup.
import { Bali50HourData }           from "./bali/ttc/multiStyle/Bali50HourData";
import { Bali100HoursData }          from "./bali/ttc/multiStyle/Bali100HoursData";
import { Bali200HoursData }          from "./bali/ttc/multiStyle/Bali200HoursData";
import { Bali300HoursData }          from "./bali/ttc/multiStyle/Bali300HoursData";
import { Bali500HoursData }          from "./bali/ttc/multiStyle/Bali500HoursData";
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
  // Specialization
import { Rishikesh2DaysAyurvedicNutritionData } from "./rishikesh/ttc/specialization/Rishikesh2DaysAyurvedicNutritionData";
import { RishikeshSoundHealingData } from "./rishikesh/ttc/specialization/RishikeshSoundHealingData";
import { RishikeshAyurvedaTherapistDiplomaData } from "./rishikesh/ttc/specialization/RishikeshAyurvedaTherapistDiplomaData";
import { Rishikesh18DaysYogaTherapyWellnessData } from "./rishikesh/ttc/specialization/Rishikesh18DaysYogaTherapyWellnessData";
import { Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData } from "./rishikesh/ttc/specialization/Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData";
import { Rishikesh10DaysPanchakarmaData } from "./rishikesh/ttc/specialization/Rishikesh10DaysPanchakarmaData";

//short
import { RishikeshPrenatalYogaData } from "./rishikesh/ttc/shortCourse/RishikeshPrenatalYogaData";
import { Rishikesh6NightsYinYogaData } from "./rishikesh/ttc/shortCourse/Rishikesh6NightsYinYogaData";
import { Rishikesh50HourYogaNidraData } from "./rishikesh/ttc/shortCourse/Rishikesh50HourYogaNidraData";
import { Rishikesh5DaysMindfulnessMeditationData } from "./rishikesh/retreats/Rishikesh5DaysMindfulnessMeditationData";

import { Dharamshala100HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala100HoursData";
import { Dharamshala200HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala200HoursData";
import { Dharamshala300HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala300HoursData";
import { Dharamshala500HoursData }   from "./dharamshala/ttc/multiStyle/Dharamshala500HoursData";

import { DharamshalaKundali50HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali50HoursData";
import { DharamshalaKundali100HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali100HoursData";
import { DharamshalaKundali200HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali200HoursData";
import { DharamshalaKundali300HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali300HoursData";
import { DharamshalaKundali500HoursData } from "./dharamshala/ttc/kundalini/DharamshalaKundali500HoursData";

import { HostYourRetreatData } from "./dharamshala/retreats/HostYourRetreatData";
import { MakeYourOwnComboData } from "./dharamshala/retreats/MakeYourOwnComboData";

// rom "./chiang/ttc/kundalini/ChiangKundali50HoursData";
//Chiang
// ./chiang/ttc/multiStyle/Chiang50HourData
import { Chiang50HourData }          from "./chiang/ttc/multiStyle/Chiang50HourData";
import { Chiang100HoursData }        from "./chiang/ttc/multiStyle/Chiang100HoursData";
import { Chiang200HoursData }        from "./chiang/ttc/multiStyle/Chiang200HoursData";
import { Chiang300HoursData }        from "./chiang/ttc/multiStyle/Chiang300HoursData";
import { Chiang500HoursData }        from "./chiang/ttc/multiStyle/Chiang500HoursData";
import { ChiangKundali50HoursData }  from "./chiang/ttc/kundalini/ChiangKundali50HoursData";
import { ChiangKundali100HoursData } from "./chiang/ttc/kundalini/ChiangKundali100HoursData";
import { ChiangKundali200HoursData } from "./chiang/ttc/kundalini/ChiangKundali200HoursData";
import { ChiangKundali300HoursData } from "./chiang/ttc/kundalini/ChiangKundali300HoursData";
import { ChiangKundali500HoursData } from "./chiang/ttc/kundalini/ChiangKundali500HoursData";
import { ChiangYinYogaData }             from "./chiang/ttc/shortCourse/ChiangYinYogaData";
import { ChiangPrenatalYogaData }        from "./chiang/ttc/shortCourse/ChiangPrenatalYogaData";
import { ChiangAerialYogaData }          from "./chiang/ttc/shortCourse/ChiangAerialYogaData";
import { ChiangAcroYogaData }            from "./chiang/ttc/shortCourse/ChiangAcroYogaData";
import { ChiangSoundHealingData }        from "./chiang/ttc/specialization/ChiangSoundHealingData";
import { Chiang100HourYogaTherapyAyurvedaData }        from "./chiang/ttc/specialization/Chiang100HourYogaTherapyAyurvedaData";
import { ChiangAyurvedicTreatmentTTCData }        from "./chiang/ttc/specialization/ChiangAyurvedicTreatmentTTCData";
import { ChiangAyurveda5HoursAbhyangamData }        from "./chiang/ttc/specialization/ChiangAyurveda5HoursAbhyangamData";
import { ChiangRetreats6DaysData }       from "./chiang/retreats/ChiangRetreats6DaysData";
import { VipassanaRetreatData } from "./chiang/retreats/VipassanaRetreatData";
import { YogaMeditationWellnessRetreatData} from "./chiang/retreats/YogaMeditationWellnessRetreatData";
import { KundaliniSadhanaRetreatData } from "./chiang/retreats/KundaliniSadhanaRetreatData";
import { SeniorCitizenWellnessRetreatData } from "./chiang/retreats/SeniorCitizenWellnessRetreatData";
import { WomensHealthWellnessRetreatData } from "./chiang/retreats/WomensHealthWellnessRetreatData";

//mysore
//multistyle
import {Mysore200HourAshtangaHathaData} from "./mysore/ttc/multiStyle/Mysore200HourAshtangaHathaData"
import {Mysore200HoursMultistyle} from "./mysore/ttc/multiStyle/Mysore200HoursMultistyle"
import {Mysore300HoursData} from "./mysore/ttc/multiStyle/Mysore300HoursData"
import {Mysore500HoursData} from "./mysore/ttc/multiStyle/Mysore500HoursData"
import {Mysore21DayAshtangaTTCData} from "./mysore/ttc/multiStyle/Mysore21DayAshtangaTTCData"
import {Mysore21DayHathaTTCData} from "./mysore/ttc/multiStyle/Mysore21DayHathaTTCData"
//short
import {Mysore50HourYinYogaData} from "./mysore/ttc/shortCourse/Mysore50HourYinYogaData"
import {Mysore50HourAerialYogaData} from "./mysore/ttc/shortCourse/Mysore50HourAerialYogaData"
import {MysorePrenatalYogaData} from "./mysore/ttc/shortCourse/MysorePrenatalYogaData"
import {Mysore7DayYogaTherapyTTCData} from "./mysore/ttc/shortCourse/Mysore7DayYogaTherapyTTCData"

//specialization
import {MysoreSingingBowlSoundHealingData} from "./mysore/ttc/specializtion/MysoreSingingBowlSoundHealingData"
import {Mysore7DayChairYogaData} from "./mysore/ttc/specializtion/Mysore7DayChairYogaData"
import {Mysore7DayWheelYogaData} from "./mysore/ttc/specializtion/Mysore7DayWheelYogaData"
import {Mysore10DayYogaMassageTTCData} from "./mysore/ttc/specializtion/Mysore10DayYogaMassageTTCData"


export const OmbDataMap = {
  // ── Mysuru ──────────────────────────────────
  mysuru: {
    // add Mysuru data imports and keys here when ready
    "200hr":Mysore200HourAshtangaHathaData,
    "200hrmultistyle":Mysore200HoursMultistyle,
    "300hr":Mysore300HoursData,
    "500hr":Mysore500HoursData,
    "mysore21dayashtanga":Mysore21DayAshtangaTTCData,
    "mysore21dayhatha":Mysore21DayHathaTTCData,
    //short
    "mysore50houryinyoga":Mysore50HourYinYogaData,
    "mysore50houraerialyoga": Mysore50HourAerialYogaData,
    "mysoreprenatalyoga":MysorePrenatalYogaData,
    "mysore7dayyogatherapy":Mysore7DayYogaTherapyTTCData,
    //specialization
    "mysoresingingbowlsoundhealing":MysoreSingingBowlSoundHealingData,
    "mysore7daychairyoga":Mysore7DayChairYogaData,
    "mysore7daywheelyoga":Mysore7DayWheelYogaData,
    "mysore10dayyogamassage":Mysore10DayYogaMassageTTCData


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
    "aerialyoga":    AerialYogaData,
    "acroyoga":      AcroYogaData,
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

    // Specialization
    "rishikesh2daysayurvedicnutrition": Rishikesh2DaysAyurvedicNutritionData,
    "rishikeshsoundhealing": RishikeshSoundHealingData,
    "rishikeshayurvedatherapistdiploma": RishikeshAyurvedaTherapistDiplomaData,
    "rishikesh18daysyogatherapywellness": Rishikesh18DaysYogaTherapyWellnessData,
    "rishikesh200hourmultistylekundaliniayurvedamassage": Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData,
    "rishikesh10dayspanchakarma": Rishikesh10DaysPanchakarmaData,
    //short
    "rishikeshprenatalyoga": RishikeshPrenatalYogaData,
    "rishikesh6nightsyinyoga": Rishikesh6NightsYinYogaData,
    "rishikesh50houryoganidra": Rishikesh50HourYogaNidraData,
    "rishikesh5daysmindfulnessmeditation": Rishikesh5DaysMindfulnessMeditationData,
  },

  // ── Chiang Mai ──────────────────────────────
  // slug is "chiang-mai" (hyphen) — matches URL and locations.js
  "chiang-mai": {
    // add Chiang Mai data imports and keys here when ready
    // Multi-style
    "50hr":  Chiang50HourData,
    "100hr": Chiang100HoursData,
    "200hr": Chiang200HoursData,
    "300hr": Chiang300HoursData,
    "500hr": Chiang500HoursData,
    // Kundalini
    "kundalini50hr":  ChiangKundali50HoursData,
    "kundalini100hr": ChiangKundali100HoursData,
    "kundalini200hr": ChiangKundali200HoursData,
    "kundalini300hr": ChiangKundali300HoursData,
    "kundalini500hr": ChiangKundali500HoursData,
    // Short courses
    "yinyoga":      ChiangYinYogaData,
    "prenatalyoga": ChiangPrenatalYogaData,
    "aerialyoga":    ChiangAerialYogaData,
    "acroyoga":      ChiangAcroYogaData,
    // Specialization
    "soundhealing": ChiangSoundHealingData,
    "100houryogatherapyayurve": Chiang100HourYogaTherapyAyurvedaData,
    "ayurvedictreatmentttc": ChiangAyurvedicTreatmentTTCData,
    "ayurveda5hoursabhyangam": ChiangAyurveda5HoursAbhyangamData,

    // Retreats
    "chiangmairetreats6days": ChiangRetreats6DaysData,
    "vipassana-retreat": VipassanaRetreatData,
    "womenshealthwellness-retreat" : WomensHealthWellnessRetreatData,
    "kundalinisadhana-retreat" : KundaliniSadhanaRetreatData,
    "seniorcitizenwellness-retreat" : SeniorCitizenWellnessRetreatData,
    "yogameditationwellness-retreat" : YogaMeditationWellnessRetreatData,
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
    "kundalini200hr": DharamshalaKundali200HoursData,
    "kundalini300hr": DharamshalaKundali300HoursData,
    "kundalini500hr": DharamshalaKundali500HoursData,

    "host-your-retreat":   HostYourRetreatData,
    "make-your-own-combo": MakeYourOwnComboData,
  },
};