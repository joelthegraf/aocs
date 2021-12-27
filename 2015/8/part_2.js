const fs = require("fs");

let e = 0,
  c = 0;
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((s) => {
    c += s.length;
    s = s.replace(/\\/g, "\\\\");
    s = s.replace(/"/g, '\\"');
    s = `"${s}"`;
    e += s.length;
  });
console.log(e - c);
