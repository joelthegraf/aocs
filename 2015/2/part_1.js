const fs = require("fs");

let t = 0;
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((p) => {
    const [l, w, h] = p.split("x");
    const [lw, wh, hl] = [l * w, w * h, h * l];
    t += 2 * lw + 2 * wh + 2 * hl + Math.min(lw, wh, hl);
  });
console.log(t);
