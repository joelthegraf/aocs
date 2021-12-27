const fs = require("fs");

let c = 0,
  m = 0;
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((s) => {
    s = s.replace(/ /g, "");
    c += s.length;
    m += s.replace(/(\\\\|\\"|\\x[0-9a-f]{2})/g, "_").length - 2;
  });
console.log(c - m);
