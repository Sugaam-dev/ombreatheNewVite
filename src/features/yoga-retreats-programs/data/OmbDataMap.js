// OmbDataMap.js
// Keyed by location SLUG (matches URL and locations.js).
// NormalisedTTCRoute lowercases both :location and :course before lookup.
import { Bali50HourData }           from "../../../data/bali/ttc/multiStyle/Bali50HourData";
import { Bali100HoursData }          from "../../../data/bali/ttc/multiStyle/Bali100HoursData";
import { Bali200HoursData }          from "../../../data/bali/ttc/multiStyle/Bali200HoursData";
import { Bali300HoursData }          from "../../../data/bali/ttc/multiStyle/Bali300HoursData";
import { Bali500HoursData }          from "../../../data/bali/ttc/multiStyle/Bali500HoursData";
import { BaliKundali50HoursData }  from "../../../data/bali/ttc/kundalini/BaliKundali50HoursData";
import { BaliKundali100HoursData } from "../../../data/bali/ttc/kundalini/BaliKundali100HoursData";
import { BaliKundali200HoursData } from "../../../data/bali/ttc/kundalini/BaliKundali200HoursData";
import { BaliKundali300HoursData } from "../../../data/bali/ttc/kundalini/BaliKundali300HoursData";
import { BaliKundali500HoursData } from "../../../data/bali/ttc/kundalini/BaliKundali500HoursData";
import { YinYogaData }             from "../../../data/bali/ttc/shortCourse/YinYogaData";
import { PrenatalYogaData }        from "../../../data/bali/ttc/shortCourse/PrenatalYogaData";
import { AerialYogaData }          from "../../../data/bali/ttc/shortCourse/AerialYogaData";
import { AcroYogaData }            from "../../../data/bali/ttc/shortCourse/AcroYogaData";
import { SoundHealingData }        from "../../../data/bali/ttc/specialization/SoundHealingData";
import { Bali100HourYogaTherapyAyurvedaData }        from "../../../data/bali/ttc/specialization/Bali100HourYogaTherapyAyurvedaData";
import { BaliAyurvedicTreatmentTTCData }        from "../../../data/bali/ttc/specialization/BaliAyurvedicTreatmentTTCData";
import { BaliAyurveda5HoursAbhyangamData }        from "../../../data/bali/ttc/specialization/BaliAyurveda5HoursAbhyangamData";

import { Retreats6DaysData }       from "../../../data/bali/retreats/Retreats6DaysData";
import { VipassanaMeditationRetreatData } from "../../../data/bali/retreats/VipassanaMeditationRetreatData";
import { ThreeDayWellnessRetreatData } from "../../../data/bali/retreats/ThreeDayWellnessRetreatData";
import { AdventureYogaRetreatData } from "../../../data/bali/retreats/AdventureYogaRetreatData";
import { MultiStyleMeditationRetreatData } from "../../../data/bali/retreats/MultiStyleMeditationRetreatData";
import { Rishikesh100HoursData }   from "../../../data/rishikesh/ttc/multiStyle/Rishikesh100HoursData";
import { Rishikesh200HoursData }   from "../../../data/rishikesh/ttc/multiStyle/Rishikesh200HoursData";
import { Rishikesh300HoursData }   from "../../../data/rishikesh/ttc/multiStyle/Rishikesh300HoursData";
import { Rishikesh500HoursData }   from "../../../data/rishikesh/ttc/multiStyle/Rishikesh500HoursData";

import { RishikeshKundali50HoursData } from "../../../data/rishikesh/ttc/kundalini/RishikeshKundali50HoursData";
import { RishikeshKundali100HoursData } from "../../../data/rishikesh/ttc/kundalini/RishikeshKundali100HoursData";
import { RishikeshKundali200HoursData } from "../../../data/rishikesh/ttc/kundalini/RishikeshKundali200HoursData";
import { RishikeshKundali300HoursData } from "../../../data/rishikesh/ttc/kundalini/RishikeshKundali300HoursData";
import { RishikeshKundali500HoursData } from "../../../data/rishikesh/ttc/kundalini/RishikeshKundali500HoursData";
  // Specialization
import { Rishikesh2DaysAyurvedicNutritionData } from "../../../data/rishikesh/ttc/specialization/Rishikesh2DaysAyurvedicNutritionData";
import { RishikeshSoundHealingData } from "../../../data/rishikesh/ttc/specialization/RishikeshSoundHealingData";
import { RishikeshAyurvedaTherapistDiplomaData } from "../../../data/rishikesh/ttc/specialization/RishikeshAyurvedaTherapistDiplomaData";
import { Rishikesh18DaysYogaTherapyWellnessData } from "../../../data/rishikesh/ttc/specialization/Rishikesh18DaysYogaTherapyWellnessData";
import { Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData } from "../../../data/rishikesh/ttc/specialization/Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData";
import { Rishikesh10DaysPanchakarmaData } from "../../../data/rishikesh/ttc/specialization/Rishikesh10DaysPanchakarmaData";

//short
import { RishikeshPrenatalYogaData } from "../../../data/rishikesh/ttc/shortCourse/RishikeshPrenatalYogaData";
import { Rishikesh6NightsYinYogaData } from "../../../data/rishikesh/ttc/shortCourse/Rishikesh6NightsYinYogaData";
import { Rishikesh50HourYogaNidraData } from "../../../data/rishikesh/ttc/shortCourse/Rishikesh50HourYogaNidraData";
import { Rishikesh5DaysMindfulnessMeditationData } from "../../../data/rishikesh/retreats/Rishikesh5DaysMindfulnessMeditationData";
import { Rishikesh5DaysYogaRetreatData } from "../../../data/rishikesh/retreats/Rishikesh5DaysYogaRetreatData";
import { Rishikesh7DaysYogaRetreatData } from "../../../data/rishikesh/retreats/Rishikesh7DaysYogaRetreatData";
import { Rishikesh15DaysYogaRetreatData } from "../../../data/rishikesh/retreats/Rishikesh15DaysYogaRetreatData";
import { Rishikesh5DaysAcupressureData } from "../../../data/rishikesh/retreats/Rishikesh5DaysAcupressureData";

import { Dharamshala100HoursData }   from "../../../data/dharamshala/ttc/multiStyle/Dharamshala100HoursData";
import { Dharamshala200HoursData }   from "../../../data/dharamshala/ttc/multiStyle/Dharamshala200HoursData";
import { Dharamshala300HoursData }   from "../../../data/dharamshala/ttc/multiStyle/Dharamshala300HoursData";
import { Dharamshala500HoursData }   from "../../../data/dharamshala/ttc/multiStyle/Dharamshala500HoursData";

import { DharamshalaKundali50HoursData } from "../../../data/dharamshala/ttc/kundalini/DharamshalaKundali50HoursData";
import { DharamshalaKundali100HoursData } from "../../../data/dharamshala/ttc/kundalini/DharamshalaKundali100HoursData";
import { DharamshalaKundali200HoursData } from "../../../data/dharamshala/ttc/kundalini/DharamshalaKundali200HoursData";
import { DharamshalaKundali300HoursData } from "../../../data/dharamshala/ttc/kundalini/DharamshalaKundali300HoursData";
import { DharamshalaKundali500HoursData } from "../../../data/dharamshala/ttc/kundalini/DharamshalaKundali500HoursData";


// rom "./chiang/ttc/kundalini/ChiangKundali50HoursData";
//Chiang
// ./chiang/ttc/multiStyle/Chiang50HourData
import { Chiang50HourData }          from "../../../data/chiang/ttc/multiStyle/Chiang50HourData";
import { Chiang100HoursData }        from "../../../data/chiang/ttc/multiStyle/Chiang100HoursData";
import { Chiang200HoursData }        from "../../../data/chiang/ttc/multiStyle/Chiang200HoursData";
import { Chiang300HoursData }        from "../../../data/chiang/ttc/multiStyle/Chiang300HoursData";
import { Chiang500HoursData }        from "../../../data/chiang/ttc/multiStyle/Chiang500HoursData";
import { ChiangKundali50HoursData }  from "../../../data/chiang/ttc/kundalini/ChiangKundali50HoursData";
import { ChiangKundali100HoursData } from "../../../data/chiang/ttc/kundalini/ChiangKundali100HoursData";
import { ChiangKundali200HoursData } from "../../../data/chiang/ttc/kundalini/ChiangKundali200HoursData";
import { ChiangKundali300HoursData } from "../../../data/chiang/ttc/kundalini/ChiangKundali300HoursData";
import { ChiangKundali500HoursData } from "../../../data/chiang/ttc/kundalini/ChiangKundali500HoursData";
import { ChiangYinYogaData }             from "../../../data/chiang/ttc/shortCourse/ChiangYinYogaData";
import { ChiangPrenatalYogaData }        from "../../../data/chiang/ttc/shortCourse/ChiangPrenatalYogaData";
import { ChiangAerialYogaData }          from "../../../data/chiang/ttc/shortCourse/ChiangAerialYogaData";
import { ChiangAcroYogaData }            from "../../../data/chiang/ttc/shortCourse/ChiangAcroYogaData";
import { ChiangSoundHealingData }        from "../../../data/chiang/ttc/specialization/ChiangSoundHealingData";
import { Chiang100HourYogaTherapyAyurvedaData }        from "../../../data/chiang/ttc/specialization/Chiang100HourYogaTherapyAyurvedaData";
import { ChiangAyurvedicTreatmentTTCData }        from "../../../data/chiang/ttc/specialization/ChiangAyurvedicTreatmentTTCData";
import { ChiangAyurveda5HoursAbhyangamData }        from "../../../data/chiang/ttc/specialization/ChiangAyurveda5HoursAbhyangamData";
// retreats
import { ChiangRetreats6DaysData }       from "../../../data/chiang/retreats/ChiangRetreats6DaysData";
import { VipassanaRetreatData } from "../../../data/chiang/retreats/VipassanaRetreatData";
import { YogaMeditationWellnessRetreatData} from "../../../data/chiang/retreats/YogaMeditationWellnessRetreatData";
import { KundaliniSadhanaRetreatData } from "../../../data/chiang/retreats/KundaliniSadhanaRetreatData";
import { SeniorCitizenWellnessRetreatData } from "../../../data/chiang/retreats/SeniorCitizenWellnessRetreatData";
import { WomensHealthWellnessRetreatData } from "../../../data/chiang/retreats/WomensHealthWellnessRetreatData";

//mysore
//multistyle
import {Mysore200HourAshtangaHathaData} from "../../../data/mysore/ttc/multiStyle/Mysore200HourAshtangaHathaData"
import {Mysore200HoursMultistyle} from "../../../data/mysore/ttc/multiStyle/Mysore200HoursMultistyle"
import {Mysore300HoursData} from "../../../data/mysore/ttc/multiStyle/Mysore300HoursData"
import {Mysore500HoursData} from "../../../data/mysore/ttc/multiStyle/Mysore500HoursData"
import {Mysore21DayAshtangaTTCData} from "../../../data/mysore/ttc/multiStyle/Mysore21DayAshtangaTTCData"
import {Mysore21DayHathaTTCData} from "../../../data/mysore/ttc/multiStyle/Mysore21DayHathaTTCData"
//short
import {Mysore50HourYinYogaData} from "../../../data/mysore/ttc/shortCourse/Mysore50HourYinYogaData"
import {Mysore50HourAerialYogaData} from "../../../data/mysore/ttc/shortCourse/Mysore50HourAerialYogaData"
import {MysorePrenatalYogaData} from "../../../data/mysore/ttc/shortCourse/MysorePrenatalYogaData"
import {Mysore7DayYogaTherapyTTCData} from "../../../data/mysore/ttc/shortCourse/Mysore7DayYogaTherapyTTCData"

//specialization
import {MysoreSingingBowlSoundHealingData} from "../../../data/mysore/retreats/MysoreSingingBowlSoundHealingData"
import {Mysore7DayChairYogaData} from "../../../data/mysore/retreats/Mysore7DayChairYogaData"
import {Mysore7DayWheelYogaData} from "../../../data/mysore/retreats/Mysore7DayWheelYogaData"


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
    "vipassanameditation": VipassanaMeditationRetreatData,
    "3daywellness": ThreeDayWellnessRetreatData,
    "adventureyoga": AdventureYogaRetreatData,
    "multistylemeditation": MultiStyleMeditationRetreatData,
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
    "rishikesh5daysyogaretreat": Rishikesh5DaysYogaRetreatData,
    "rishikesh7daysyogaretreat": Rishikesh7DaysYogaRetreatData,
    "rishikesh15daysyogaretreat": Rishikesh15DaysYogaRetreatData,
    "rishikesh5daysacupressure": Rishikesh5DaysAcupressureData,
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
    "vipassanaretreat": VipassanaRetreatData,
    "yogameditationwellnessretreat": YogaMeditationWellnessRetreatData,
    "kundalinisadhanaretreat": KundaliniSadhanaRetreatData,
    "seniorcitizenwellnessretreat": SeniorCitizenWellnessRetreatData,
    "womenshealthwellnessretreat": WomensHealthWellnessRetreatData,
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

 
  },
};