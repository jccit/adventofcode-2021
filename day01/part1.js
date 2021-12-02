const fs = require('fs');
const array = fs.readFileSync('input.txt').toString().split("\n");

let incCount = 0;
let lastNum = null;

for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (lastNum) {
        if (num > lastNum) {
            incCount++;
        }
    } else {
        incCount++;
    }

    lastNum = num;
}

console.log(incCount);