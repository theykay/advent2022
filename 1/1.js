const data = require("./1.txt");

const data_edit = data.replace(/\n/gm, '.');
const mass_data = data_edit.split('..');
const elves = [];
mass_data.forEach(line => {
    let temp_data = line.split('.');
    let int_data = [];
    temp_data.forEach(entry => {
        int_data.push(parseInt(entry));
    })
    elves.push(int_data);
})

let elf_food = {};
let high1 = 0;
let high2 = 0;
let high3 = 0;
let ref_key1 = 0;
let ref_key2 = 0;
let ref_key3 = 0;

for (let i = 0; i < elves.length; i++) {
    let sum = elves[i].reduce((partialSum, a) => partialSum + a, 0);
    if (sum > high1) {
        high3 = high2;
        high2= high1;
        high1 = sum;
        ref_key3 = ref_key2;
        ref_key2 = ref_key1;
        ref_key1 = i;
    } else if (sum > high2) {
        high3 = high2;
        high2 = sum;
        ref_key3 = ref_key2;
        ref_key2 = i;
    } else if (sum > high3) {
        high3 = sum;
        ref_key3 = i;
    }
    elf_food[i] = {
        sum: sum,
        foods: elves[i]
    }
}

console.log(ref_key1);
console.log(ref_key2);
console.log(ref_key3);
console.log(elf_food[ref_key1].sum + elf_food[ref_key2].sum + elf_food[ref_key3].sum);