const fs = require('fs');
const array = fs.readFileSync('input.txt').toString().split("\n");

let x = 0;
let y = 0;

for (let i = 0; i < array.length; i++) {
    const [dir, strVal] = array[i].split(' ');
    const val = parseInt(strVal);

    switch (dir) {
        case 'forward':
            x += val;
            break;

        case 'up':
            y -= val;
            break;
        
        case 'down':
            y += val;
            break;
    
        default:
            break;
    }
}

console.log(x * y);