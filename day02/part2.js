const fs = require('fs');
const array = fs.readFileSync('input.txt').toString().split("\n");

let x = 0;
let y = 0;
let aim = 0;

for (let i = 0; i < array.length; i++) {
    const [dir, strVal] = array[i].split(' ');
    const val = parseInt(strVal);

    switch (dir) {
        case 'forward':
            x += val;
            y += aim * val;
            break;

        case 'up':
            aim -= val;
            break;
        
        case 'down':
            aim += val;
            break;
    
        default:
            break;
    }
}

console.log(x * y);