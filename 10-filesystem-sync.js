const {readFileSync, writeFileSync} = require('fs')
const path = require('path')

const myPath = path.join('./','folder', 'file1.txt')
console.log(myPath)

// const write = writeFileSync(myPath, 'test 2')
// const write = writeFileSync('./folder/file2.txt', 'test 2')

const readFromFile1 = readFileSync('./folder/file1.txt', 'utf8')
const readFromFile2 = readFileSync('./folder/file2.txt', 'utf8')

writeFileSync('./folder/file3.txt', `The result is ${readFromFile1}, ${readFromFile2}`, {flag: 'a'})
