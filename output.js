const fs = require("fs");

fs.readFile("./words.txt", (err, data) => {
  let words = data.toString().split(/\r?\n/);
  let jsonReady = [];
  words.map(word => {
    let newString = `"${word}",`;
    console.log(newString);
  });
});
