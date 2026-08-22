// src/utils/dynamicPrices.js

import { PROGRAM_PRICES, ROOM_PRICES_BALI } from "../data/bali/programPrices";
import { PROGRAM_PRICES_CHIANG, ROOM_PRICES_CHIANG } from "../data/chiang/programPricesChiang";
import { PROGRAM_PRICES_DHARAMSHALA, ROOM_PRICES_DHARAMSHALA } from "../data/dharamshala/programPricesDharamshala";
import { PROGRAM_PRICES_MYSORE, ROOM_PRICES_MYSORE } from "../data/mysore/programPricesMysore";
import { PROGRAM_PRICES_RISHIKESH, ROOM_PRICES_RISHIKESH } from "../data/rishikesh/programPricesRishikesh";



// Set to false to read directly from local Excel file (ombreathe_config_template_new.xlsx)
// Set to true  to read live from Google Sheets
export const USE_GOOGLE_SHEETS = false; 
// ============================================================================

export const DYNAMIC_BATCHES = {};

export const DYNAMIC_TESTIMONIALS = [
  {
    stars: 5,
    quote: "The Yoga TTC in Bali changed my life completely. The teachers, the food, the environment — everything was magical!",
    avatar: "/images/external/testimonials/44.jpg",
    name: "Jessica M.",
    country: "USA",
  },
  {
    stars: 5,
    quote: "Ayurveda Healing Retreat in Rishikesh gave me a new life. I feel lighter, healthier and mentally so calm.",
    avatar: "/images/external/testimonials/32.jpg",
    name: "Arjun P.",
    country: "Australia",
  },
  {
    stars: 5,
    quote: "A life-changing experience! I found my purpose and a beautiful community for life.",
    avatar: "/images/external/testimonials/68.jpg",
    name: "Maria K.",
    country: "Germany",
  }
];

const UNIFIED_PRICE_MAP = {
  bali: {
    "50hr": { cat: "multiStyle", key: "50hr" },
    "100hr": { cat: "multiStyle", key: "100hr" },
    "200hr": { cat: "multiStyle", key: "200hr" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "kundalini50hr": { cat: "kundalini", key: "50hr" },
    "kundalini100hr": { cat: "kundalini", key: "100hr" },
    "kundalini200hr": { cat: "kundalini", key: "200hr" },
    "kundalini300hr": { cat: "kundalini", key: "300hr" },
    "kundalini500hr": { cat: "kundalini", key: "500hr" },
    "yinyoga": { cat: "shortcourses", key: "yinyoga" },
    "prenatalyoga": { cat: "shortcourses", key: "prenatalyoga" },
    "aerialyoga": { cat: "shortcourses", key: "aerialyoga" },
    "acroyoga": { cat: "shortcourses", key: "acroyoga" },
    "soundhealing": { cat: "specializations", key: "soundhealing" },
    "100houryogatherapyayurve": { cat: "specializations", key: "Bali100HourYogaTherapyAyurvedaData" },
    "ayurvedictreatmentttc": { cat: "specializations", key: "BaliAyurvedicTreatmentTTCData" },
    "ayurveda5hoursabhyangam": { cat: "specializations", key: "BaliAyurveda5HoursAbhyangamData" },
    "wellness-retreat": { cat: "specializations", key: "wellnessretreat" },
    "retreats6days": { cat: "specializations", key: "retreats6days" },
    "vipassanameditation": { cat: "specializations", key: "vipassanameditation" },
    "3daywellness": { cat: "specializations", key: "3daywellness" },
    "adventureyoga": { cat: "specializations", key: "adventureyoga" },
    "multistylemeditation": { cat: "specializations", key: "multistylemeditation" }
  },
  rishikesh: {
    "100hr": { cat: "multiStyle", key: "100hr" },
    "200hr": { cat: "multiStyle", key: "200hr" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "kundalini50hr": { cat: "kundalini", key: "50hr" },
    "kundalini100hr": { cat: "kundalini", key: "100hr" },
    "kundalini200hr": { cat: "kundalini", key: "200hr" },
    "kundalini300hr": { cat: "kundalini", key: "300hr" },
    "kundalini500hr": { cat: "kundalini", key: "500hr" },
    "rishikeshprenatalyoga": { cat: "shortcourses", key: "prenatalyoga" },
    "rishikesh6nightsyinyoga": { cat: "shortcourses", key: "yinyoga" },
    "rishikesh50houryoganidra": { cat: "shortcourses", key: "nidra" },
    "rishikeshsoundhealing": { cat: "specializations", key: "RishikeshSoundHealingData" },
    "rishikesh200hourmultistylekundaliniayurvedamassage": { cat: "specializations", key: "Rishikesh200HourMultiStyleKundaliniAyurvedaMassageData" },
    "rishikesh10dayspanchakarma": { cat: "specializations", key: "Rishikesh10DaysPanchakarmaData" },
    "rishikesh2daysayurvedicnutrition": { cat: "specializations", key: "Rishikesh2DaysAyurvedicNutritionData" },
    "rishikeshayurvedatherapistdiploma": { cat: "specializations", key: "RishikeshAyurvedaTherapistDiplomaData" },
    "rishikesh18daysyogatherapywellness": { cat: "specializations", key: "Rishikesh18DaysYogaTherapyWellnessData" },
    "rishikesh5daysmindfulnessmeditation": { cat: "specializations", key: "RishikeshmindfulnessMeditationData" },
    "rishikesh5daysyogaretreat": { cat: "specializations", key: "Rishikesh5DaysYogaRetreatData" },
    "rishikesh7daysyogaretreat": { cat: "specializations", key: "Rishikesh7DaysYogaRetreatData" },
    "rishikesh15daysyogaretreat": { cat: "specializations", key: "Rishikesh15DaysYogaRetreatData" },
    "rishikesh5daysacupressure": { cat: "specializations", key: "Rishikesh5DaysAcupressureData" }
  },
  mysore: {
    "200hr": { cat: "multiStyle", key: "200hrAshtanga" },
    "200hrmultistyle": { cat: "multiStyle", key: "200hrMultistyle" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "mysore21dayashtanga": { cat: "multiStyle", key: "21DayAshtanga" },
    "mysore21dayhatha": { cat: "multiStyle", key: "21DayHatha" },
    "mysore50houryinyoga": { cat: "shortcourses", key: "yinyoga" },
    "mysore50houraerialyoga": { cat: "shortcourses", key: "aerialyoga" },
    "mysoreprenatalyoga": { cat: "shortcourses", key: "prenatalyoga" },
    "mysore7dayyogatherapy": { cat: "shortcourses", key: "yogatherapy" },
    "mysoresingingbowlsoundhealing": { cat: "specializations", key: "MysoreSingingBowlSoundHealingData" },
    "mysore7daychairyoga": { cat: "specializations", key: "Mysore7DayChairYogaData" },
    "mysore7daywheelyoga": { cat: "specializations", key: "Mysore7DayWheelYogaData" }
  },
  chiang: {
    "50hr": { cat: "multiStyle", key: "50hr" },
    "100hr": { cat: "multiStyle", key: "100hr" },
    "200hr": { cat: "multiStyle", key: "200hr" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "kundalini50hr": { cat: "kundalini", key: "50hr" },
    "kundalini100hr": { cat: "kundalini", key: "100hr" },
    "kundalini200hr": { cat: "kundalini", key: "200hr" },
    "kundalini300hr": { cat: "kundalini", key: "300hr" },
    "kundalini500hr": { cat: "kundalini", key: "500hr" },
    "yinyoga": { cat: "shortcourses", key: "yinyoga" },
    "prenatalyoga": { cat: "shortcourses", key: "prenatalyoga" },
    "aerialyoga": { cat: "shortcourses", key: "aerialyoga" },
    "acroyoga": { cat: "shortcourses", key: "acroyoga" },
    "soundhealing": { cat: "specializations", key: "ChiangMaitibetanbowlsoundhealingdata" },
    "ayurvedictreatmentttc": { cat: "specializations", key: "ChiangMaiayurvedictreatmentttc" },
    "ayurveda5hoursabhyangam": { cat: "specializations", key: "ChiangMaiayurvedamassagecourse" },
    "100houryogatherapyayurve": { cat: "specializations", key: "ChiangMai100houryogatherapyayurveda" },
    "wellness-retreat": { cat: "specializations", key: "ChiangMaiwellnessretreat" },
    "chiangmairetreats6days": { cat: "specializations", key: "ChiangMairetreats6days" },
    "vipassanaretreat": { cat: "specializations", key: "ChiangMaivipassanaretreat" },
    "yogameditationwellnessretreat": { cat: "specializations", key: "ChiangMaiyogameditationwellnessretreat" },
    "kundalinisadhanaretreat": { cat: "specializations", key: "ChiangMaikundalinisadhanaretreat" },
    "seniorcitizenwellnessretreat": { cat: "specializations", key: "ChiangMaiseniorcitizenwellnessretreat" },
    "womenshealthwellnessretreat": { cat: "specializations", key: "ChiangMaiwomenshealthwellnessretreat" }
  },
  dharamshala: {
    "100hr": { cat: "multiStyle", key: "100hr" },
    "200hr": { cat: "multiStyle", key: "200hr" },
    "300hr": { cat: "multiStyle", key: "300hr" },
    "500hr": { cat: "multiStyle", key: "500hr" },
    "kundalini50hr": { cat: "kundalini", key: "50hr" },
    "kundalini100hr": { cat: "kundalini", key: "100hr" },
    "kundalini200hr": { cat: "kundalini", key: "200hr" },
    "kundalini300hr": { cat: "kundalini", key: "300hr" },
    "kundalini500hr": { cat: "kundalini", key: "500hr" }
  }
};

function normalizeHeaders(headers) {
  return headers.map(h => {
    if (!h) return "";
    const lower = h.toLowerCase();
    if (lower.includes("location")) return "location";
    if (lower.includes("course") || lower.includes("key") || lower.includes("code") || lower.includes("id")) return "coursekey";
    if (lower.includes("program name") || lower.includes("title")) return "programname";
    if (lower.includes("duration")) return "durationdays";
    if (lower.includes("room type")) return "roomtype";
    if (lower.includes("current") || lower.includes("discounted")) return "current";
    if (lower.includes("original") || lower.includes("strike")) return "original";
    if (lower.includes("base price") || lower.includes("program price") || lower.includes("price")) return "price";
    if (lower.includes("note")) return "note";
    if (lower.includes("popular")) return "popular";
    if (lower.includes("start date") || lower.includes("startdate")) return "startdate";
    if (lower.includes("end date") || lower.includes("enddate")) return "enddate";
    if (lower.includes("seats")) return "seatsleft";
    if (lower.includes("custom date") || lower.includes("datetext")) return "datetext";
    return lower.replace(/\s+/g, '');
  });
}

/**
 * Parses raw CSV text into an array of objects based on header row.
 */
function parseCSV(text) {
  const lines = text.split(/\r?\n/);
  if (lines.length === 0) return [];
  
  const rawHeaders = parseCSVLine(lines[0]);
  const headers = normalizeHeaders(rawHeaders);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = parseCSVLine(line);
    const obj = {};
    headers.forEach((header, idx) => {
      if (header) {
        obj[header] = values[idx] !== undefined ? values[idx] : null;
      }
    });
    rows.push(obj);
  }
  return rows;
}

/**
 * Parses a single CSV line, preserving fields surrounded by double quotes.
 */
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Fetches rows from a public Google Sheet using the Google Visualization API (JSONP) for standard IDs,
 * or downloading and parsing CSV output directly for published web links (2PACX- or /d/e/).
 */
async function fetchGoogleSheetRows(spreadsheetId, sheetName) {
  const isPublished = spreadsheetId.includes("2PACX-") || spreadsheetId.includes("/d/e/");
  let url;
  
  if (isPublished) {
    // If the URL already has output=csv, use it directly (no reconstruction needed)
    if (spreadsheetId.includes("output=csv")) {
      url = spreadsheetId;
    } else {
      // Extract the published ID and gid, then build the CSV download URL
      const match = spreadsheetId.match(/\/d\/e\/([a-zA-Z0-9_-]+)/);
      const publishedId = match ? match[1] : spreadsheetId;
      const gidMatch = spreadsheetId.match(/[&?]gid=([0-9]+)/);
      const gidParam = gidMatch ? `&gid=${gidMatch[1]}` : "";
      url = `https://docs.google.com/spreadsheets/d/e/${publishedId}/pub?output=csv${gidParam}`;
    }
  } else {
    const sheetParam = sheetName ? `&sheet=${encodeURIComponent(sheetName)}` : "";
    url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json${sheetParam}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch sheet: HTTP status ${res.status}`);
  }
  const text = await res.text();

  if (isPublished) {
    const rows = parseCSV(text);
    return rows;
  }
  
  const startIdx = text.indexOf('{');
  const endIdx = text.lastIndexOf('}');
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Invalid response format from Google Sheets API`);
  }
  
  const jsonStr = text.substring(startIdx, endIdx + 1);
  const data = JSON.parse(jsonStr);
  
  if (data.status !== "ok" || !data.table) {
    throw new Error(`Google Sheets API status is not OK`);
  }
  
  const rawCols = data.table.cols.map((col, idx) => {
    return col.label ? col.label.trim() : `col${idx}`;
  });
  const cols = normalizeHeaders(rawCols);
  
  const rows = data.table.rows.map(row => {
    const obj = {};
    if (row && row.c) {
      row.c.forEach((cell, idx) => {
        const colName = cols[idx];
        if (colName) {
          obj[colName] = cell ? (cell.f !== undefined ? cell.f : cell.v) : null;
        }
      });
    }
    return obj;
  });
  
  return rows;
}

/**
 * Reads and parses rows from the local Excel file inside the project (ombreathe_config_template_new.xlsx).
 */
async function fetchLocalExcelRows() {
  const XLSX = await import("xlsx");
  const res = await fetch("/ombreathe_config_template_new.xlsx");
  if (!res.ok) {
    throw new Error(`Failed to load local Excel file: HTTP status ${res.status}`);
  }
  const arrayBuffer = await res.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });

  const parseSheet = (sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) return [];
    const json = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
    if (json.length === 0) return [];
    
    const rawHeaders = json[0].map(h => String(h || "").trim());
    const headers = normalizeHeaders(rawHeaders);
    
    const rows = [];
    for (let i = 1; i < json.length; i++) {
      const rowArr = json[i];
      if (!rowArr || rowArr.every(c => c === "" || c === null || c === undefined)) continue;
      const obj = {};
      headers.forEach((header, idx) => {
        if (header) {
          obj[header] = rowArr[idx] !== undefined && rowArr[idx] !== null ? String(rowArr[idx]).trim() : null;
        }
      });
      rows.push(obj);
    }
    return rows;
  };

  return {
    programRows: parseSheet("Program Prices"),
    roomRows: parseSheet("Room Prices"),
    batchRows: parseSheet("Batches")
  };
}

/**
 * Resolves a dynamic program price for a given location and course key.
 */
function getUpdatedProgramPrice(mappedLoc, key) {
  const program = {
    bali: PROGRAM_PRICES,
    rishikesh: PROGRAM_PRICES_RISHIKESH,
    mysore: PROGRAM_PRICES_MYSORE,
    chiang: PROGRAM_PRICES_CHIANG,
    dharamshala: PROGRAM_PRICES_DHARAMSHALA
  }[mappedLoc];

  if (!program) return null;

  // 1. Try look up in UNIFIED_PRICE_MAP first
  const mapping = UNIFIED_PRICE_MAP[mappedLoc]?.[key];
  if (mapping) {
    const { cat, key: priceKey } = mapping;
    if (program[cat]?.[priceKey]) {
      return program[cat][priceKey];
    }
  }

  // Kundalini courses (e.g. "kundalini100hr" -> program.kundalini["100hr"])
  if (key.startsWith("kundalini")) {
    const duration = key.replace("kundalini", "");
    if (program.kundalini?.[duration]) {
      return program.kundalini[duration];
    }
  }

  // Multi-style matching exact key
  if (program.multiStyle?.[key]) {
    return program.multiStyle[key];
  }

  // Short courses and specializations exact key
  if (program.shortcourses?.[key]) {
    return program.shortcourses[key];
  }
  if (program.specializations?.[key]) {
    return program.specializations[key];
  }

  // Case-insensitive substring matching for prefixed/unprefixed keys
  for (const cat of ["shortcourses", "specializations"]) {
    if (program[cat]) {
      for (const [sKey, val] of Object.entries(program[cat])) {
        if (key.toLowerCase().includes(sKey.toLowerCase())) {
          return val;
        }
      }
    }
  }

  // Special fallback mappings (e.g., Mysore multiStyle variant keys)
  if (mappedLoc === "mysore") {
    if (key === "200hr" && program.multiStyle?.["200hrAshtanga"]) return program.multiStyle["200hrAshtanga"];
    if (key === "200hrmultistyle" && program.multiStyle?.["200hrMultistyle"]) return program.multiStyle["200hrMultistyle"];
  }

  return null;
}

async function applyDynamicPricesToDataMaps() {
  const { OmbDataMap } = await import("../features/yoga-retreats-programs/data/OmbDataMap");
  const { LANDING_LOCATION_DATA } = await import("../features/yoga-retreats-programs/data/LandingPageData");

  const mappings = [
    { locKeys: ["bali"], mappedLoc: "bali" },
    { locKeys: ["rishikesh"], mappedLoc: "rishikesh" },
    { locKeys: ["mysuru", "mysore"], mappedLoc: "mysore" },
    { locKeys: ["chiang-mai", "chiang"], mappedLoc: "chiang" },
    { locKeys: ["dharamshala"], mappedLoc: "dharamshala" }
  ];

  for (const mapping of mappings) {
    for (const locKey of mapping.locKeys) {
      // 1. Update OmbDataMap
      const locationData = OmbDataMap[locKey];
      if (locationData) {
        for (const [courseKey, courseData] of Object.entries(locationData)) {
          if (!courseData || !courseData.heroSection || !courseData.heroSection.hero) continue;

          const newPrice = getUpdatedProgramPrice(mapping.mappedLoc, courseKey);
          if (newPrice) {
            courseData.heroSection.hero.price = newPrice;
          }
        }
      }

      // 2. Update LANDING_LOCATION_DATA
      const landingData = LANDING_LOCATION_DATA[locKey];
      if (landingData && landingData.programsByCategoryId) {
        for (const programs of Object.values(landingData.programsByCategoryId)) {
          if (!Array.isArray(programs)) continue;
          for (const prog of programs) {
            if (!prog || !prog.path) continue;
            const newPrice = getUpdatedProgramPrice(mapping.mappedLoc, prog.path);
            if (newPrice) {
              prog.price = newPrice;
            }
          }
        }
      }
    }
  }
}

/**
 * Main execution function to fetch and apply dynamic prices.
 * Returns true if prices were loaded and applied successfully.
 */
export async function fetchAndApplyDynamicPrices() {
  const useGoogleSheets = USE_GOOGLE_SHEETS || import.meta.env.VITE_USE_GOOGLE_SHEETS === "true";

  console.log(`[Dynamic Pricing] Source Mode: ${useGoogleSheets ? "GOOGLE SHEETS (Live)" : "LOCAL EXCEL FILE (ombreathe_config_template_new.xlsx)"}`);

  let programRows = [], roomRows = [], batchRows = [];

  try {
    if (useGoogleSheets) {
    const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID;
    const programSpreadsheetId = import.meta.env.VITE_SPREADSHEET_ID_PROGRAM;
    const roomSpreadsheetId = import.meta.env.VITE_SPREADSHEET_ID_ROOM;
    const batchesSpreadsheetId = import.meta.env.VITE_SPREADSHEET_ID_BATCHES;

    console.log("[Dynamic Pricing] Google Sheets Loader initialized:", {
      spreadsheetId: spreadsheetId ? "Configured" : "NOT CONFIGURED",
      programSpreadsheetId: programSpreadsheetId ? "Configured" : "NOT CONFIGURED",
      roomSpreadsheetId: roomSpreadsheetId ? "Configured" : "NOT CONFIGURED",
      batchesSpreadsheetId: batchesSpreadsheetId ? "Configured" : "NOT CONFIGURED"
    });

    if (spreadsheetId || programSpreadsheetId || roomSpreadsheetId || batchesSpreadsheetId) {
      try {
        const isSingleSheet = !!spreadsheetId && !spreadsheetId.includes("2PACX-") && !spreadsheetId.includes("/d/e/");
        if (isSingleSheet) {
          console.log("[Dynamic Pricing] Loading all tabs from single Google Spreadsheet...");
          [programRows, roomRows, batchRows] = await Promise.all([
            fetchGoogleSheetRows(spreadsheetId, "Program Prices").catch(err => {
              console.warn("[Dynamic Pricing] Failed to load tab 'Program Prices':", err);
              return [];
            }),
            fetchGoogleSheetRows(spreadsheetId, "Room Prices").catch(err => {
              console.warn("[Dynamic Pricing] Failed to load tab 'Room Prices':", err);
              return [];
            }),
            fetchGoogleSheetRows(spreadsheetId, "Batches").catch(err => {
              console.warn("[Dynamic Pricing] Failed to load tab 'Batches':", err);
              return [];
            })
          ]);
        } else {
          console.log("[Dynamic Pricing] Loading from individual sheets / published URLs...");
          const pSrc = programSpreadsheetId || spreadsheetId;
          const rSrc = roomSpreadsheetId || spreadsheetId;
          const bSrc = batchesSpreadsheetId || spreadsheetId;

          const [pRes, rRes, bRes] = await Promise.all([
            pSrc ? fetchGoogleSheetRows(pSrc, "Program Prices").catch(() => []) : [],
            rSrc ? fetchGoogleSheetRows(rSrc, "Room Prices").catch(() => []) : [],
            bSrc ? fetchGoogleSheetRows(bSrc, "Batches").catch(() => []) : []
          ]);

          programRows = pRes;
          roomRows = rRes;
          batchRows = bRes;
        }
      } catch (err) {
        console.warn("[Dynamic Pricing] Error fetching Google Sheets:", err);
      }
    }
  }

  // If not using Google Sheets, or if Google Sheets fetch returned empty, read directly from local project Excel file
  if (!useGoogleSheets || (programRows.length === 0 && roomRows.length === 0)) {
    try {
      console.log("[Dynamic Pricing] Reading data from local project Excel file (ombreathe_config_template_new.xlsx)...");
      const localData = await fetchLocalExcelRows();
      programRows = localData.programRows;
      roomRows = localData.roomRows;
      batchRows = localData.batchRows;
      console.log(`[Dynamic Pricing] Successfully loaded from Excel: ${programRows.length} programs, ${roomRows.length} room rows, ${batchRows.length} batch rows.`);
    } catch (err) {
      console.warn("[Dynamic Pricing] Failed to load local Excel file, falling back to static defaults:", err);
      return false;
    }
  }

    // 1. Group and apply Program Prices first
    const sheetProgramPrices = {
      bali: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
      rishikesh: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
      mysore: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
      chiang: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} },
      dharamshala: { multiStyle: {}, kundalini: {}, shortcourses: {}, specializations: {} }
    };

    for (const row of programRows) {
      const loc = row.location?.toLowerCase().trim();
      let mappedLoc = loc;
      if (loc === "mysuru") mappedLoc = "mysore";
      if (loc === "chiang-mai") mappedLoc = "chiang";

      if (!sheetProgramPrices[mappedLoc]) continue;

      const courseKey = row.coursekey?.trim();
      const price = row.price?.trim();
      if (courseKey && price) {
        const mapping = UNIFIED_PRICE_MAP[mappedLoc]?.[courseKey];
        if (mapping) {
          const { cat, key } = mapping;
          sheetProgramPrices[mappedLoc][cat][key] = price;
        } else {
          const category = row.category?.trim();
          if (category && sheetProgramPrices[mappedLoc][category]) {
            sheetProgramPrices[mappedLoc][category][courseKey] = price;
          }
        }
      }
    }

    // Overwrite exported Program Price categories in-place
    for (const cat of ["multiStyle", "kundalini", "shortcourses", "specializations"]) {
      if (PROGRAM_PRICES[cat]) Object.assign(PROGRAM_PRICES[cat], sheetProgramPrices.bali[cat]);
      if (PROGRAM_PRICES_RISHIKESH[cat]) Object.assign(PROGRAM_PRICES_RISHIKESH[cat], sheetProgramPrices.rishikesh[cat]);
      if (PROGRAM_PRICES_MYSORE[cat]) Object.assign(PROGRAM_PRICES_MYSORE[cat], sheetProgramPrices.mysore[cat]);
      if (PROGRAM_PRICES_CHIANG[cat]) Object.assign(PROGRAM_PRICES_CHIANG[cat], sheetProgramPrices.chiang[cat]);
      if (PROGRAM_PRICES_DHARAMSHALA[cat]) Object.assign(PROGRAM_PRICES_DHARAMSHALA[cat], sheetProgramPrices.dharamshala[cat]);
    }

    // Helper to clean price strings
    const parsePriceValue = (val) => {
      if (!val) return 0;
      const clean = String(val).replace(/[^0-9.]/g, "");
      return parseFloat(clean) || 0;
    };

    // 2. Group, calculate, and apply Room Prices
    const sheetRoomPrices = {
      bali: {},
      rishikesh: {},
      mysore: {},
      chiang: {},
      dharamshala: {}
    };

    for (const row of roomRows) {
      const loc = row.location?.toLowerCase().trim();
      let mappedLoc = loc;
      if (loc === "mysuru") mappedLoc = "mysore";
      if (loc === "chiang-mai") mappedLoc = "chiang";

      if (!sheetRoomPrices[mappedLoc]) continue;

      const courseKey = row.coursekey?.trim();
      if (!courseKey) continue;

      if (!sheetRoomPrices[mappedLoc][courseKey]) {
        sheetRoomPrices[mappedLoc][courseKey] = {
          durationDays: parseInt(row.durationdays) || 0,
          rooms: []
        };
      }

      // Fetch the updated base course price
      const basePriceStr = getUpdatedProgramPrice(mappedLoc, courseKey);
      const basePrice = parsePriceValue(basePriceStr);

      const rawCurrent = parseFloat(row.current) || 0;
      const rawOriginal = parseFloat(row.original) || 0;

      // Add base course price to the room surcharge
      const currentPrice = basePrice + rawCurrent;
      const originalPrice = basePrice + rawOriginal;

      sheetRoomPrices[mappedLoc][courseKey].rooms.push({
        type: row.roomtype || "",
        current: currentPrice,
        original: originalPrice,
        note: row.note || "",
        popular: String(row.popular).toLowerCase() === "true"
      });
    }

    // Overwrite the exported Room Price objects in-place
    for (const [key, val] of Object.entries(sheetRoomPrices.bali)) {
      ROOM_PRICES_BALI[key] = val;
    }
    for (const [key, val] of Object.entries(sheetRoomPrices.rishikesh)) {
      ROOM_PRICES_RISHIKESH[key] = val;
    }
    for (const [key, val] of Object.entries(sheetRoomPrices.mysore)) {
      ROOM_PRICES_MYSORE[key] = val;
    }
    for (const [key, val] of Object.entries(sheetRoomPrices.chiang)) {
      ROOM_PRICES_CHIANG[key] = val;
    }
    for (const [key, val] of Object.entries(sheetRoomPrices.dharamshala)) {
      ROOM_PRICES_DHARAMSHALA[key] = val;
    }

    // 3. Propagate updated prices into static maps (OmbDataMap & LandingPageData)
    await applyDynamicPricesToDataMaps();

    // 4. Fetch and apply Testimonials (if set separately)
    const testimonialSpreadsheetId = import.meta.env.VITE_SPREADSHEET_ID_TESTIMONIALS;
    if (testimonialSpreadsheetId) {
      try {
        const rows = await fetchGoogleSheetRows(testimonialSpreadsheetId, "Testimonials");
        const parsedTestimonials = rows.map(row => ({
          stars: parseInt(row.stars) || 5,
          quote: row.quote || "",
          avatar: row.avatar || "/images/external/testimonials/unsplash_photo-1535713875002-d1d0cf377fde.jpg",
          name: row.name || "",
          country: row.country || ""
        })).filter(t => t.name && t.quote);
        
        if (parsedTestimonials.length > 0) {
          DYNAMIC_TESTIMONIALS.length = 0;
          DYNAMIC_TESTIMONIALS.push(...parsedTestimonials);
        }
      } catch (err) {
        console.warn("[Dynamic Pricing] Failed to load testimonials spreadsheet:", err);
      }
    }

    // 5. Parse and apply Batch Dates (from batchRows)
    if (batchRows && batchRows.length > 0) {
      // Clear previous batches
      for (const key of Object.keys(DYNAMIC_BATCHES)) {
        delete DYNAMIC_BATCHES[key];
      }
      
      for (const row of batchRows) {
        const loc = row.location?.toLowerCase().trim();
        let mappedLoc = loc;
        if (loc === "mysuru") mappedLoc = "mysore";
        if (loc === "chiang-mai") mappedLoc = "chiang";
        
        const courseKey = row.coursekey?.toLowerCase().trim();
        if (!mappedLoc || !courseKey) continue;
        
        const customKey = `${mappedLoc}_${courseKey}`;
        if (!DYNAMIC_BATCHES[customKey]) {
          DYNAMIC_BATCHES[customKey] = [];
        }
        
        const startDate = new Date(row.startdate);
        const endDate = new Date(row.enddate);
        const dateText = row.datetext?.trim() || "";
        
        if (dateText || (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()))) {
          DYNAMIC_BATCHES[customKey].push({
            startDate: !isNaN(startDate.getTime()) ? startDate : new Date(),
            endDate: !isNaN(endDate.getTime()) ? endDate : new Date(),
            dateText,
            seatsLeft: parseInt(row.seatsleft) || 3
          });
        }
      }
      
      // Sort batches chronologically
      for (const key of Object.keys(DYNAMIC_BATCHES)) {
        DYNAMIC_BATCHES[key].sort((a, b) => a.startDate - b.startDate);
      }
    }

    return true;
  } catch (error) {
    console.error("[Dynamic Pricing] Fatal error loading spreadsheet data:", error);
    return false;
  }
}
