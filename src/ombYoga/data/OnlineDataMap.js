import { Online100HoursData } from "../onlinedata/Online100HoursData";
import { Online300HoursData } from "../onlinedata/Online300HoursData";
import { Online50HoursPranayamaData } from "../onlinedata/Online50HoursPranayamaData";
import { Online85HoursPrenatalData } from "../onlinedata/Online85HoursPrenatalData";
import { Online200HoursData } from "../onlinedata/Online200HoursData";
import { Online50HoursAyurvedaData } from "../onlinedata/Online50HoursAyurvedaData";
import { Online50HoursYogaNidraData } from "../onlinedata/Online50HoursYogaNidraData";

export const OnlineDataMap = {
  "100 Hour Online Yoga Teacher Training Course": Online100HoursData,
  "200 Hour Online Yoga Teacher Training Course": Online200HoursData,       
  "300 Hour Online Yoga Teacher Training Course": Online300HoursData,
  "85 Hour Online Pre-Natal Yoga Teacher Training Course": Online85HoursPrenatalData, 
  "50 Hour Online Online Pranayama Course": Online50HoursPranayamaData,
  "50 Hour Online Online Ayurveda Yoga Teacher Training Course": Online50HoursAyurvedaData, 
  "50 Hour Online Online Yoga Nidra Teacher Training Course": Online50HoursYogaNidraData,
};