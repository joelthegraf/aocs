const fs = require("fs");
const crypto = require("crypto");

const k = fs.readFileSync("input.txt", "utf-8");
let a = 0;
let h = "";
while (!h.startsWith("000000")) {
  a++;
  h = crypto.createHash("md5").update(`${k}${a}`).digest("hex");
}
console.log(a);
