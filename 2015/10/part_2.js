const fs = require("fs");

const las = (s) => {
  let r = [];
  let i = 0;
  while (i < s.length) {
    let c = 1;
    while (i + 1 < s.length && s[i] === s[i + 1]) {
      i++;
      c++;
    }
    r.push(`${c}${s[i]}`);
    i++;
  }
  return r.join("");
};

let l = fs.readFileSync("input.txt", "utf-8");
for (let i = 0; i < 50; i++) {
  l = las(l);
}
console.log(l.length);
