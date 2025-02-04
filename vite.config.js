// import { defineConfig } from 'vite';
// import { resolve } from 'path';

// export default defineConfig({
//   base: '/vite-portfolio/', // Must match GitHub repo name
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         about: resolve(__dirname, 'src/pages/aboutMe.html'),
//         portfolio: resolve(__dirname, 'src/pages/porfolio.html'),
//       },
//     },
//   },
// });
// import { defineConfig } from 'vite';
// import { resolve } from 'path';

// export default defineConfig({
//   base: '/vite-portfolio/', // Must match GitHub repo name
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         about: resolve(__dirname, 'pages/aboutMe.html'), // Fix path
//         portfolio: resolve(__dirname, 'pages/porfolio.html'), 
//       },
//     },
//   },
// });
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/vite-portfolio/', // Ensures correct paths for GitHub Pages
});

