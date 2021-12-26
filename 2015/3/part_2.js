const fs = require("fs");

let sX = 0,
  sY = 0,
  rX = 0,
  rY = 0,
  c = 0;
let g = [`${sX} ${sY}`];
fs.readFileSync("input.txt", "utf-8")
  .split("")
  .forEach((i) => {
    t = c % 2 === 0;
    switch (i) {
      case "^":
        t ? sY++ : rY++;
        break;
      case "v":
        t ? sY-- : rY--;
        break;
      case ">":
        t ? sX++ : rX++;
        break;
      case "<":
        t ? sX-- : rX--;
        break;
    }
    g.push(t ? `${sX} ${sY}` : `${rX} ${rY}`);
    c++;
  });
console.log([...new Set(g)].length);
