const fs = require("fs");

const p = (ns) => {
  let r = [];
  const h = (i, ns) => {
    if (i === ns.length) {
      r.push(ns.slice());
    }
    for (let j = i; j < ns.length; j++) {
      [ns[i], ns[j]] = [ns[j], ns[i]];
      h(i + 1, ns);
      [ns[i], ns[j]] = [ns[j], ns[i]];
    }
  };
  h(0, ns);
  return r;
};

let l = [];
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((i) => {
    const [, p, a, v, n] = i.match(
      /(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)\./
    );
    l.push({
      p,
      n,
      v: a === "gain" ? parseInt(v) : -parseInt(v),
    });
  });

let a = p([...new Set(l.map((e) => e.p))]);
let mh = 0;
for (let i = 0; i < a.length; i++) {
  let th = 0;
  for (let j = 0; j < a[i].length; j++) {
    let c = a[i][j];
    let [p, n] = [j - 1, j + 1];
    p = a[i][p < 0 ? a[i].length - 1 : p];
    n = a[i][n > a[i].length - 1 ? 0 : n];
    th += l.filter((e) => e.p === c && e.n === p)[0].v;
    th += l.filter((e) => e.p === c && e.n === n)[0].v;
  }
  if (th > mh) mh = th;
}
console.log(mh);
