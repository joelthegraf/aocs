const fs = require("fs");

let g = Array.from(Array(1000), () => new Array(1000).fill(false));
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((i) => {
    const m = i.match(/([^\d]+)(\d+,\d+)[^\d]+(\d+,\d+)/);
    const a = m[1].trim();
    const [x1, y1] = m[2].split(",");
    const [x2, y2] = m[3].split(",");
    for (let x = parseInt(x1); x <= parseInt(x2); x++) {
      for (let y = parseInt(y1); y <= parseInt(y2); y++) {
        switch (a) {
          case "turn on":
            g[y][x] = true;
            break;
          case "turn off":
            g[y][x] = false;
            break;
          case "toggle":
            g[y][x] = !g[y][x];
            break;
        }
      }
    }
  });

let c = 0;
for (let x = 0; x < 1000; x++) {
  for (let y = 0; y < 1000; y++) {
    g[y][x] && c++;
  }
}
console.log(c);
