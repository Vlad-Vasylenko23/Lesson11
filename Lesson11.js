const fs = require('fs');

function countWords(st) { 
  return st.trim().split(/\s+/).length;
} 

const Stream = fs.createReadStream("Lection5.txt");
let total = 0;

Stream.on('data', (chunk) => {
  const lines = chunk.toString().split('\n');
  lines.forEach((line) => {
    console.log(line);
    const wordCount = countWords(line);
    total += wordCount;
  });
});

Stream.on('end', () => {
  console.log(`Total word count: ${total}`);
  process.exit(0);
});

Stream.on('error', (err) => {
  console.error('Error reading the file:', err);
  process.exit(1);
});
