const fs = require("fs");

let x = 0,
  y = 0;
let g = [`${x} ${y}`];
fs.readFileSync("input.txt", "utf-8")
  .split("")
  .forEach((i) => {
    switch (i) {
      case "^":
        y++;
        break;
      case "v":
        y--;
        break;
      case ">":
        x++;
        break;
      case "<":
        x--;
        break;
    }
    g.push(`${x} ${y}`);
  });
console.log([...new Set(g)].length);
