// OnlineDataMap.js
// Keyed by online course slug (matches URL path segment after /online/).
// Mirrors the structure of OmbDataMap.js but for the online YTTC catalog.

import { Online100HoursData } from "../onlinedata/Online100HoursData";
import { Online300HoursData } from "../onlinedata/Online300HoursData";
import { Online50HoursPranayamaData } from "../onlinedata/Online50HoursPranayamaData";

export const OnlineDataMap = {
  "100hr": Online100HoursData,
  // "200hr": Online200HoursData,        // add when ready
  "300hr": Online300HoursData,

  "500hr": Online50HoursPranayamaData,        // add when ready
  // "kundalini100hr": OnlineKundalini100HoursData,  // add when ready
};