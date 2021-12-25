const fs = require("fs");

let c = 0;
fs.readFileSync("input.txt", "utf-8")
    .split("\n")
    .forEach(s => {
        (s.replace(/[aeiou]/g, "_").match(/_/g) || []).length >= 3 &&
            (s.replace(/(.)\1/g, "_").match(/_/g) || []).length >= 1 &&
            (s.replace(/(ab|cd|pq|xy)/g, "_").match(/_/g) || []).length === 0 &&
            c++;
    });
console.log(c);
