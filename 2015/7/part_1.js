const fs = require("fs");

let q = [];
let w = {};
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((i) => q.push(i));

while (q.length !== 0) {
  const i = q.shift();
  const p1 = i.match(/^(\w+) -> (\w+)/);
  const p2 = i.match(/^(\w+) (AND|OR|LSHIFT|RSHIFT) (\w+) -> (\w+)/);
  const p3 = i.match(/^NOT (\w+) -> (\w+)/);
  if (p1) {
    const [, s, d] = p1;
    if (!(Number.isInteger(parseInt(s)) || s in w)) {
      q.push(i);
      continue;
    }
    w[d] = eval(Number.isInteger(parseInt(s)) ? s : undefined || w[s]);
  } else if (p2) {
    const [, s1, a, s2, d] = p2;
    if (
      !(
        (Number.isInteger(parseInt(s1)) || s1 in w) &&
        (Number.isInteger(parseInt(s2)) || s2 in w)
      )
    ) {
      q.push(i);
      continue;
    }
    switch (a) {
      case "AND":
        w[d] = eval(
          (Number.isInteger(parseInt(s1)) ? s1 : undefined || w[s1]) &
            (Number.isInteger(parseInt(s2)) ? s2 : undefined || w[s2])
        );
        break;
      case "OR":
        w[d] = eval(
          (Number.isInteger(parseInt(s1)) ? s1 : undefined || w[s1]) |
            (Number.isInteger(parseInt(s2)) ? s2 : undefined || w[s2])
        );
        break;
      case "LSHIFT":
        w[d] = eval(
          (Number.isInteger(parseInt(s1)) ? s1 : undefined || w[s1]) <<
            (Number.isInteger(parseInt(s2)) ? s2 : undefined || w[s2])
        );
        break;
      case "RSHIFT":
        w[d] = eval(
          (Number.isInteger(parseInt(s1)) ? s1 : undefined || w[s1]) >>
            (Number.isInteger(parseInt(s2)) ? s2 : undefined || w[s2])
        );
        break;
    }
  } else if (p3) {
    const [, s, d] = p3;
    if (!(Number.isInteger(parseInt(s)) || s in w)) {
      q.push(i);
      continue;
    }
    w[d] = 65535 - eval(Number.isInteger(parseInt(s)) ? s : undefined || w[s]);
  }
}
console.log(w["a"]);
