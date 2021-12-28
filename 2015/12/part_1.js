const fs = require("fs");

/* simple solution

let s = 0;
fs.readFileSync("input.txt", "utf-8")
  .match(/-?\d+/g)
  .forEach((d) => (s += parseInt(d)));
console.log(s);

*/

const p = (d) => {
  let sum = 0;
  const r = (e) => {
    if (typeof e === "number") {
      sum += e;
    } else if (e instanceof Array) {
      for (v of e) {
        r(v);
      }
    } else if (typeof e === "object") {
      for (v of Object.values(e)) {
        r(v);
      }
    }
  };
  r(d);
  return sum;
};

let d = JSON.parse(fs.readFileSync("input.txt", "utf-8"));
console.log(p(d));
