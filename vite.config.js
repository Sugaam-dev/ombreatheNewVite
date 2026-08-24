import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import * as XLSX_MODULE from "xlsx";

const XLSX = XLSX_MODULE.default || XLSX_MODULE;

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  if (exists) {
    const isDirectory = fs.statSync(src).isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach((childItemName) => {
        copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
    '.avif': 'image/avif'
  };
  return mimes[ext] || 'application/octet-stream';
}

function compileExcelToJSON() {
  const excelPath = path.resolve('ombreathe_config_template_new.xlsx');
  if (!fs.existsSync(excelPath)) return;

  try {
    const buffer = fs.readFileSync(excelPath);
    const workbook = XLSX.read(buffer, { type: 'buffer' });

    function normalizeHeaders(headers) {
      return headers.map(h => {
        if (!h) return '';
        const lower = String(h).toLowerCase();
        if (lower.includes('location')) return 'location';
        if (lower.includes('course') || lower.includes('key') || lower.includes('code') || lower.includes('id')) return 'coursekey';
        if (lower.includes('program name') || lower.includes('title')) return 'programname';
        if (lower.includes('duration')) return 'durationdays';
        if (lower.includes('room type')) return 'roomtype';
        if (lower.includes('current') || lower.includes('discounted')) return 'current';
        if (lower.includes('original') || lower.includes('strike')) return 'original';
        if (lower.includes('base price') || lower.includes('program price') || lower.includes('price')) return 'price';
        if (lower.includes('note')) return 'note';
        if (lower.includes('popular')) return 'popular';
        if (lower.includes('start date') || lower.includes('startdate')) return 'startdate';
        if (lower.includes('end date') || lower.includes('enddate')) return 'enddate';
        if (lower.includes('seats')) return 'seatsleft';
        if (lower.includes('custom date') || lower.includes('datetext')) return 'datetext';
        return lower.replace(/\s+/g, '');
      });
    }

    const parseSheet = (sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      if (!sheet) return [];
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
      if (json.length === 0) return [];
      
      const rawHeaders = json[0].map(h => String(h || '').trim());
      const headers = normalizeHeaders(rawHeaders);
      
      const rows = [];
      for (let i = 1; i < json.length; i++) {
        const rowArr = json[i];
        if (!rowArr || rowArr.every(c => c === '' || c === null || c === undefined)) continue;
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

    const data = {
      programRows: parseSheet('Program Prices'),
      roomRows: parseSheet('Room Prices'),
      batchRows: parseSheet('Batches')
    };

    const outDir = path.resolve('src/data');
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const jsonStr = JSON.stringify(data, null, 2);
    fs.writeFileSync(path.resolve(outDir, 'generated-prices.json'), jsonStr);
    fs.writeFileSync(path.resolve(outDir, 'generated-prices.js'), 'export default ' + jsonStr + ';\n');
    console.log('[excel-compiler] Successfully compiled Excel to src/data/generated-prices.js');
  } catch (err) {
    console.warn('[excel-compiler] Note compiling Excel:', err.message);
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'excel-to-json-compiler',
      buildStart() {
        compileExcelToJSON();
      },
      configureServer(server) {
        compileExcelToJSON();
        let debounceTimer = null;
        server.watcher.add(path.resolve('ombreathe_config_template_new.xlsx'));
        server.watcher.on('change', (changedPath) => {
          if (changedPath.includes('ombreathe_config_template_new.xlsx') && !changedPath.includes('~$')) {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
              console.log('[excel-compiler] Excel file changed, recompiling JSON...');
              compileExcelToJSON();
            }, 150);
          }
        });
      }
    },
    {
      name: 'sync-excel-config',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/ombreathe_config_template_new.xlsx' || req.url.startsWith('/ombreathe_config_template_new.xlsx?')) {
            const excelPath = path.resolve('ombreathe_config_template_new.xlsx');
            if (fs.existsSync(excelPath)) {
              res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
              res.end(fs.readFileSync(excelPath));
              return;
            }
          }
          next();
        });
      },
      closeBundle() {
        const srcFile = path.resolve('ombreathe_config_template_new.xlsx');
        const destFile = path.resolve('dist/ombreathe_config_template_new.xlsx');
        if (fs.existsSync(srcFile)) {
          fs.copyFileSync(srcFile, destFile);
          console.log('[sync-excel-config] Copied ombreathe_config_template_new.xlsx to dist/');
        }
      }
    },
    {
      name: 'copy-external-images',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url.startsWith('/images/external/')) {
            const urlPath = req.url.split('?')[0];
            const relativePath = urlPath.slice('/images/external/'.length);
            const localPath = path.resolve('src/images/external', decodeURIComponent(relativePath));
            if (fs.existsSync(localPath)) {
              res.setHeader('Content-Type', getMimeType(localPath));
              res.end(fs.readFileSync(localPath));
              return;
            }
          }
          next();
        });
      },
      closeBundle() {
        const srcDir = path.resolve('src/images/external');
        const destDir = path.resolve('dist/images/external');
        if (fs.existsSync(srcDir)) {
          copyRecursiveSync(srcDir, destDir);
          console.log('[copy-external-images] Copied src/images/external to dist/images/external');
        }
      }
    },
    {
      name: 'async-css',
      transformIndexHtml(html) {
        return html.replace(
          /<link rel="stylesheet"([^>]*?)href="([^"]+)"([^>]*?)>/g,
          '<link rel="preload" as="style" href="$2" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$2"></noscript>'
        );
      }
    }
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-international-phone') || id.includes('libphonenumber-js')) {
              return 'vendor-phone';
            }
            if (id.includes('bootstrap') || id.includes('react-slick')) {
              return 'vendor-ui';
            }
            return 'vendor-core';
          }
        }
      }
    }
  }
});