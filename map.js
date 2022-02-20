const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number){
//     return number * 2;
// }

const doubleIt = number => number * 2;

for(const number of numbers){
    const result = doubleIt(number);
    // output.push(result);
}
// console.log(output);

// 1. llop
// 2. element diye function ke call korchi 
// 3. rusult ekta array er modde push korchi 

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2)
const output = numbers.map(x => x + 2)
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);