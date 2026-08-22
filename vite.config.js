import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

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

export default defineConfig({
  plugins: [
    react(),
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