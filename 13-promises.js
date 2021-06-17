const { readFile, writeFile } = require("fs");
// const { readFile, writeFile } = require("fs").promises;
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText('./folder/file1.txt').then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});

const readFunction = async () =>{
    try {
        const test1 = await getText('./folder/file1.txt');
        const test2 = await getText('./folder/file2.txt');

        const testPromisify1 = await readFilePromise('./folder/file1.txt', 'utf8');
        await writeFilePromise('./folder/awesome.txt', `This file is created by Node ${test1}, ${test2}`);
        
        console.log(test1, test2, testPromisify1);
        
    } catch (error) {
        console.log(error);
    }
}
readFunction();
console.log("first running");