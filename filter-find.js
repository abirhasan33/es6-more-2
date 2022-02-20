const numbers = [5, 13, 7, 41, 29, 79, 30, 5, 19, 21];
const bigNumbers = numbers.filter(Number => Number > 20 );
const smallNumbers = numbers.filter(Number => Number < 20 );
// console.log(smallNumbers);

const proucts = [
    {name: 'phone', price: '2000', color: 'black'},
    {name: 'leptep', price: '4000', color: 'white'},
    {name: 'Smart w2atch', price: '300', color: 'blue'},
    {name: 'sticky note', price: '100', color: 'pink'},
    {name: 'water glass', price: '50', color: 'white'}
];

// const expensive = proucts.filter(prouct => prouct.price > 1000);
// console.log(expensive);
const colors = proucts.filter(prouct => prouct.color == 'pink');
// console.log(colors);

const whiteItems = proucts.find(product => product.color == 'white');
console.log(whiteItems);
