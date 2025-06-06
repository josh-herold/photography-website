const fs = require('fs');
const path = require('path');

const lowResDir = path.join(__dirname, 'public/photography/images/istanbul/LowRes');
const fullResDir = path.join(__dirname, 'public/photography/images/istanbul/JPEG');

const thumbs = fs.readdirSync(lowResDir).filter(file => /\.(jpe?g|png)$/i.test(file));

const gallery = thumbs.map(filename => ({
    thumb: `/photography/images/istanbul/LowRes/${filename}`,
    full: `/photography/images/istanbul/JPEG/${filename}`,
}));

fs.writeFileSync(
    path.join(__dirname, 'public/photography/images/istanbul-gallery.json'),
    JSON.stringify(gallery, null, 2)
);

console.log('✔ JSON erfolgreich erstellt!');
