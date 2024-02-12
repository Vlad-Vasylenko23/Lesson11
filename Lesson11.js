const fs = require('fs')
const readline = require('readline')
  
function countWords(st) { 
  return st.trim().split(/\s+/).length
} 
 
const Stream = fs.createReadStream("Lection5.txt")
const rl = readline.createInterface({ 
  input: Stream, 
  output: process.stdout, 
  terminal: false 
})
 
let total = 0 
 
rl.on('line', (line) => { 
  console.log(line)
  const wordCount = countWords(line)
  total += wordCount
})
 
rl.on('close', () => { 
  console.log(`Total word count: ${total}`)
  process.exit(0)
})
