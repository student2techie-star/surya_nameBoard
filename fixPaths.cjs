const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  // Replace string literal src
  content = content.replace(/src="\/([^"]+)"/g, 'src={`${import.meta.env.BASE_URL}$1`}');
  // Replace template literal src
  content = content.replace(/src=\{\`\/([^`]+)\`\}/g, 'src={`${import.meta.env.BASE_URL}$1`}');
  
  fs.writeFileSync(filePath, content);
}

const files = [
  'src/components/Navbar.jsx',
  'src/components/Footer.jsx',
  'src/pages/Home.jsx',
  'src/pages/About.jsx',
  'src/pages/ServicesHub.jsx',
  'src/pages/ServiceDetail.jsx',
  'src/pages/OurWork.jsx',
  'src/pages/Gallery.jsx'
];

files.forEach(f => {
  const p = path.join(process.cwd(), f);
  if (fs.existsSync(p)) {
    replaceInFile(p);
  }
});
console.log('Done fixing paths');
