const fs = require("fs");

let f = 0;
fs.readFileSync("input.txt", "utf-8")
  .split("")
  .forEach((i) => (i === "(" ? f++ : f--));
console.log(f);
