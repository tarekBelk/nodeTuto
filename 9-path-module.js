const { clear } = require('console')
const path = require('path')

console.log(path.sep)

const myPath = path.join('/folder/','subfolder','test.txt')

console.log(myPath)
console.log(path.basename(myPath))

const absolutePath = path.resolve(__dirname,'folder', 'subfolder','test.txt')
console.log(absolutePath)