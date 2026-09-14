const fs = require('fs');
const path = require('path');
const https = require('https');

const publicImagesDir = 'a:\\suryaNameBoard\\public\\images';

// Unsplash IDs for signage, nameplates, neon, letters, storefronts
const signIds = [
  '1563298723-dcfebaa392e3', '1550745165-9bc0b252726f', '1508739773434-c26b3d09e071',
  '1486406146926-c627a92ad1ab', '1542869781-a272dcbc082b', '1579781403261-f67a2113ae85',
  '1517502884422-41eaead166d4', '1520697980209-43c39a826458', '1507206130118-b5907f817163',
  '1554625293-1bb0f590656a', '1497215842964-222b430dc094', '1497366216548-37526070297c',
  '1580130089304-0994a5e30fa7', '1533261975419-79f972b9a716', '1615555461942-d611867c2e0b',
  '1572949645841-094f3a9c4c94', '1541887372-e1c94d0a3d45', '1606559775390-449e73523bd1',
  '1556379069-7c1672847a98', '1576427389279-d3e92c2dd236', '1509311651811-1ee0677e1dce'
];

const filesToUpdate = [
  'surya-designs-3d-letters-1.webp', 'surya-designs-3d-letters-2.webp',
  'surya-designs-acrylic-sign-1.webp', 'surya-designs-acrylic-sign-2.webp',
  'surya-designs-acrylic-sign-boards.webp', 'surya-designs-brass-name-plates.webp',
  'surya-designs-glow-sign-boards.webp', 'surya-designs-house-name-board-1.webp',
  'surya-designs-house-name-board-2.webp', 'surya-designs-house-name-boards-thiruvananthapuram.webp',
  'surya-designs-led-sign-1.webp', 'surya-designs-led-sign-2.webp',
  'surya-designs-led-sign-boards-thiruvananthapuram.webp', 'surya-designs-neon-sign-1.webp',
  'surya-designs-neon-sign-2.webp', 'surya-designs-neon-sign-boards-thiruvananthapuram.webp',
  'surya-designs-number-plate-1.webp', 'surya-designs-number-plate-2.webp',
  'surya-designs-office-door-name-plates.webp', 'surya-designs-other-sign-1.webp',
  'surya-designs-other-sign-2.webp', 'surya-designs-shop-sign-1.webp',
  'surya-designs-shop-sign-2.webp', 'surya-designs-shop-sign-boards-thiruvananthapuram.webp',
  'surya-designs-stainless-steel-sign-boards.webp', 'surya-designs-vehicle-number-plates.webp',
  'surya-designs-wooden-name-boards.webp', 'surya-designs-about-workshop.webp'
];

function downloadFile(url, targetPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, targetPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(targetPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading high-quality sign images...');
  
  for (let i = 0; i < filesToUpdate.length; i++) {
    const filename = filesToUpdate[i];
    const imageId = signIds[i % signIds.length];
    const url = `https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=800&q=80`;
    const targetPath = path.join(publicImagesDir, filename);
    
    try {
      await downloadFile(url, targetPath);
      console.log(`✓ Downloaded ${filename}`);
    } catch (err) {
      console.error(`X Failed ${filename}:`, err.message);
    }
  }
  console.log('All images updated with relevant signs!');
}

main();
