const fs = require("fs");

let c = 0;
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((s) => {
    s.match(/(..).*\1/g) && s.match(/(.).{1}\1/g) && c++;
  });
console.log(c);
