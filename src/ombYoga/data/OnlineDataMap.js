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
  "85hr": Online85HoursPrenatalData, 
  "50hr-pranayama": Online50HoursPranayamaData,
  "50hr-ayurveda": Online50HoursAyurvedaData, 
  "50hr-yoga-nidra": Online50HoursYogaNidraData,
};