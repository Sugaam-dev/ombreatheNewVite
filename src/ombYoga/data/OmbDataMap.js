// import { OmbServiceData } from "./OmbServiceData";
import { Bali50HourData } from "./bali/ttc/multiStyle/Bali50HourData";
import { Bali100HoursData } from "./bali/ttc/multiStyle/Bali100HoursData";
import {Bali200HoursData} from "./bali/ttc/multiStyle/Bali200HoursData"
import {Bali300HoursData} from "./bali/ttc/multiStyle/Bali300HoursData"
import {Bali500HoursData} from "./bali/ttc/multiStyle/Bali500HoursData"
//kundalini ===============================
import {BaliKundali50HoursData} from "./bali/ttc/kundalini/BaliKundali50HoursData"
import {BaliKundali100HoursData} from "./bali/ttc/kundalini/BaliKundali100HoursData"
import {BaliKundali200HoursData} from "./bali/ttc/kundalini/BaliKundali200HoursData"
import {BaliKundali300HoursData} from "./bali/ttc/kundalini/BaliKundali300HoursData"
import {BaliKundali500HoursData} from "./bali/ttc/kundalini/BaliKundali500HoursData"

//YinYoga==============================
import { YinYogaData } from "./bali/ttc/shortCourse/YinYogaData";
import { PrenatalYogaData } from "./bali/ttc/shortCourse/PrenatalYogaData";
import { AerialYogaData } from "./bali/ttc/shortCourse/AerialYogaData";
import {AcroYogaData} from "./bali/ttc/shortCourse/AcroYogaData"

//Specialization=========================
import {SoundHealingData} from  "./bali/ttc/specialization/SoundHealingData"

//retreats===============================
import {Retreats6DaysData} from "./bali/retreats/Retreats6DaysData"


export const OmbDataMap = {
  "50hr": Bali50HourData,
  "100hr": Bali100HoursData,
  "200hr": Bali200HoursData,
  "300hr": Bali300HoursData,
  "500hr": Bali500HoursData,

  //kundalini=================================
  "kundalini50hr": BaliKundali50HoursData,
  "kundalini100hr": BaliKundali100HoursData,
  "kundalini200hr": BaliKundali200HoursData,
  "kundalini300hr": BaliKundali300HoursData,
  "kundalini500hr": BaliKundali500HoursData,
  //YinYoga=================================
  "yinyoga": YinYogaData,
  "prenatalyoga": PrenatalYogaData,
  "aerialyoga": AerialYogaData,
  "acroyoga": AcroYogaData,

  //Specialization=========================
  "soundhealing": SoundHealingData,

  //Retreats=============================
  "retreats6days": Retreats6DaysData,
};