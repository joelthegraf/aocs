const fs = require("fs");

const p = (d) => {
  let sum = 0;
  const r = (e) => {
    if (typeof e === "number") {
      sum += e;
    } else if (e instanceof Array) {
      for (v of e) {
        r(v);
      }
    } else if (typeof e === "object" && !Object.values(e).includes("red")) {
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
