const https = require('https');
const urls = [
  'https://unsplash.com/photos/model-on-saree-indian-culture-traditional-wear-K-tVxCdqMLs',
  'https://unsplash.com/photos/a-woman-holding-a-baby-in-her-arms-6tk7mKJj0pI',
  'https://unsplash.com/photos/a-woman-holding-a-baby-in-her-arms-HBHJKeKHEUg',
  'https://unsplash.com/photos/traditionally-dressed-south-indian-woman-salutes-with-folded-hands-5-LXErSHL3M',
  'https://unsplash.com/photos/portrait-of-a-happy-woman-of-indian-ethnicity-wearing-traditional-dress-sari-MmcArXNnCHA',
  'https://unsplash.com/photos/portrait-of-a-female-doctor-of-indian-origin-Zi8RGYxFf84',
  'https://unsplash.com/photos/a-man-sitting-in-a-car-giving-a-thumbs-up-IdM0H0ujIDI'
];

urls.forEach(url => {
  https.get(url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/property="og:image"\s+content="([^"]+)"/);
      if (match) {
        console.log(match[1]);
      } else {
        console.log("No match for: " + url);
      }
    });
  });
});
