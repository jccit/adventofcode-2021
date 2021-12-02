const fs = require('fs');
const array = fs.readFileSync('input.txt').toString().split("\n");

let incCount = 0;
let lastSum = 0;

for (let i = 0; i < array.length; i++) {
    // Set the size of the window and setup array
    const windowSize = 3;
    let currentSum = 0;
    let numCount = 0;

    // Try to load the next {windowSize} numbers from the array
    for (let k = 0; k < windowSize; k++) {
        const index = i + k;
        if (index < array.length) {
            currentSum += parseInt(array[index]);
            numCount++;
        }
    }

    // Check if we managed to find 3 numbers
    if (numCount != windowSize) {
        continue;
    }

    // Check if we started from the first element or if the last sum is 0
    if (i === 0) {
        continue;
    }

    if (currentSum > lastSum && lastSum != 0) {
        incCount++;
    }

    // Save the last sum
    lastSum = currentSum;
}

console.log(incCount);