import { Online100HoursData } from "../onlinedata/Online100HoursData";
import { Online300HoursData } from "../onlinedata/Online300HoursData";
import { Online50HoursPranayamaData } from "../onlinedata/Online50HoursPranayamaData";
import { Online85HoursPrenatalData } from "../onlinedata/Online85HoursPrenatalData";
import { Online200HoursData } from "../onlinedata/Online200HoursData";
import { Online50HoursAyurvedaData } from "../onlinedata/Online50HoursAyurvedaData";
import { Online50HoursYogaNidraData } from "../onlinedata/Online50HoursYogaNidraData";

export const OnlineDataMap = {
  "100hr": Online100HoursData,
  "200hr": Online200HoursData,
  "300hr": Online300HoursData,
  "prenatal": Online85HoursPrenatalData,
  "pranayama": Online50HoursPranayamaData,
  "ayurveda": Online50HoursAyurvedaData,
  "yoganidra": Online50HoursYogaNidraData,
};