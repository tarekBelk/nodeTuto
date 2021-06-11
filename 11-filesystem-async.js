const { readFile, writeFile } = require("fs");

// const write = writeFileSync(myPath, 'test 2')
// const write = writeFileSync('./folder/file2.txt', 'test 2')

readFile("./folder/file1.txt", "utf8", (err, result) => {
  if (err) {
    return;
  }
  const read1 = result;
  readFile("./folder/file2.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const read2 = result;
    writeFile("./folder/resultAsync.txt",`The result is ${read1}, ${read2}. ` ,{ flag: "a" }, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  });
});
