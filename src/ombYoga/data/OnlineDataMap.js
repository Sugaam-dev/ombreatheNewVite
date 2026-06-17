// OnlineDataMap.js
// Keyed by online course slug (matches URL path segment after /online/).
// Mirrors the structure of OmbDataMap.js but for the online YTTC catalog.

import { Online100HoursData } from "../onlinedata/Online100HoursData";

export const OnlineDataMap = {
  "100hr": Online100HoursData,
  // "200hr": Online200HoursData,        // add when ready
  // "300hr": Online300HoursData,        // add when ready
  // "500hr": Online500HoursData,        // add when ready
  // "kundalini100hr": OnlineKundalini100HoursData,  // add when ready
};