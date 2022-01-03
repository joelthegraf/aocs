const fs = require("fs");

let rs = [];
fs.readFileSync("input.txt", "utf-8")
    .split("\n")
    .forEach(r => {
        const [, s, a, p] = r.match(/\w+ can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\./);
        rs.push({ s: parseInt(s), a: parseInt(a), p: parseInt(p), ds: [], ps: 0 });
    });


for (let r of rs) {
    let t = 0;
    let d = 0;
    for (let i = 1; i <= 2503; i++) {
        t++;
        if (t > r.a) {
            if (t === r.a + r.p) {
                t = 0;
            }
        } else {
            d += r.s;
        }
        r.ds.push(d);
    }
}

for (let i = 1; i <= 2503; i++) {
    let m = 0;
    for (let r of rs) {
        m = Math.max(m, r.ds[i]);
    }
    for (let r of rs) {
        if (r.ds[i] == m) {
            r.ps++;
        }
    }
}
console.log(Math.max(...rs.map(r => r.ps)));
