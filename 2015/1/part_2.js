const fs = require("fs");
const { exit } = require("process");

let f = 0;
let c = 0;
fs.readFileSync("input.txt", "utf-8")
    .split("")
    .forEach(i => {
        c++;
        i === "(" ? f++ : f--;
        f === -1 && console.log(c);
    });
