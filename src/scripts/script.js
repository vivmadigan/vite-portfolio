import 'jquery';
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';



document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = import.meta.env.BASE_URL;
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('#')) {
        link.setAttribute('href', `${baseUrl}${href}`); // ✅ Correct syntax
      }
    });
});


