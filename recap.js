// 1. let ans const 
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsumg Galaxy s17';
// 2. defaule parameter 
function maxNumber (arrray = []){
    const max = Math.max(...arrray);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

// 3. templat string
const myNode = `I am mojmo of ${hubby}. I don't have laili.
my phone is ${phone}`;
// console.log(myNode)

// 4. array function 
function square (x){
    return x * x;
};
const square = x => x * x;
console.log(square(10))