const fs = require("fs");

const p = (cs) => {
  let r = [];
  const h = (i, csr) => {
    if (i === csr.length) {
      r.push(csr.slice());
    }
    for (let j = i; j < csr.length; j++) {
      [csr[i], csr[j]] = [csr[j], csr[i]];
      h(i + 1, csr);
      [csr[i], csr[j]] = [csr[j], csr[i]];
    }
  };
  h(0, cs);
  return r;
};

function cD(ds, f, t) {
  return ds.filter((d) => d.f === f && d.t === t)[0].d;
}

let cs = [];
let ds = [];
fs.readFileSync("input.txt", "utf-8")
  .split("\n")
  .forEach((r) => {
    const [, f, t, d] = r.match(/(\w+) to (\w+) = (\d+)/);
    ds.push({ f, t, d: parseInt(d) }, { f: t, t: f, d: parseInt(d) });
    cs.push(f, t);
  });

let rs = p([...new Set(cs)]);
let rds = [];

for (r of rs) {
  let rd = 0;
  for (let i = 0; i < r.length - 1; i++) {
    rd += cD(ds, r[i], r[i + 1]);
  }
  rds.push(rd);
}

console.log(Math.min(...rds));
