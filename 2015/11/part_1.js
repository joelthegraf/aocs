const fs = require("fs");

String.prototype.replaceAt = function (i, r) {
  return this.substring(0, i) + r + this.substring(i + r.length);
};

const i = (s) => {
  let c = String.fromCharCode(s.charCodeAt(s.length - 1) + 1);
  s = s.replaceAt(s.length - 1, c);
  while (s.includes("{")) {
    let i = s.indexOf("{");
    s = s.replaceAt(i, "a");
    i--;
    if (i >= 0) {
      c = String.fromCharCode(s.charCodeAt(i) + 1);
      s = s.replaceAt(i, c);
    }
  }
  return s;
};

const cIL = (s) => {
  let v = false;
  for (let i = 0; i < s.length - 2; i++) {
    if (
      s.charCodeAt(i) + 2 === s.charCodeAt(i + 1) + 1 &&
      s.charCodeAt(i + 1) + 1 === s.charCodeAt(i + 2)
    ) {
      v = true;
    }
  }
  return v;
};

const cNIC = (s) => s.match(/[iol]/g) === null;

const cTP = (s) => {
  let p = new Set();
  for (let i = 0; i < s.length - 1; i++) {
    if (s.charCodeAt(i) === s.charCodeAt(i + 1)) {
      p.add(s[i]);
    }
  }
  return p.size >= 2;
};

let p = fs.readFileSync("input.txt", "utf-8");
while (1) {
  p = i(p);
  if (cIL(p) && cNIC(p) && cTP(p)) {
    break;
  }
}
console.log(p);
