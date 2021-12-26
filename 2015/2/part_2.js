const fs = require("fs");

let t = 0;
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((p) => {
    const [l, w, h] = p.split("x");
    const [ll, ww, hh] = [2 * l, 2 * w, 2 * h];
    t += Math.min(hh + ww, hh + ll, ww + ll) + l * w * h;
  });
console.log(t);
