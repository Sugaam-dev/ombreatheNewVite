import { Online100HoursData } from "./Online100HoursData";
import { Online300HoursData } from "./Online300HoursData";
import { Online50HoursPranayamaData } from "./Online50HoursPranayamaData";
import { Online85HoursPrenatalData } from "./Online85HoursPrenatalData";
import { Online200HoursData } from "./Online200HoursData";
import { Online50HoursAyurvedaData } from "./Online50HoursAyurvedaData";
import { Online50HoursYogaNidraData } from "./Online50HoursYogaNidraData";

export const OnlineDataMap = {
  "100hr": Online100HoursData,
  "200hr": Online200HoursData,
  "300hr": Online300HoursData,
  "prenatal": Online85HoursPrenatalData,
  "pranayama": Online50HoursPranayamaData,
  "ayurveda": Online50HoursAyurvedaData,
  "yoganidra": Online50HoursYogaNidraData,
};