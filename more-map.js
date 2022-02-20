const frends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Abirhasan'];

const fLength = frends.map(frends => frends.length);
// console.log(fLength);

const poructs = [
    {name: 'phone', price: '2000', color: 'black'},
    {name: 'leptep', price: '4000', color: 'white'},
    {name: 'Smart w2atch', price: '300', color: 'blue'},
    {name: 'sticky note', price: '100', color: 'pink'},
    {name: 'water glass', price: '50', color: 'white'}
];

const productNames = poructs.map(poruct => poruct.name);
const productPricess = poructs.map(poruct => poruct.price);
// poructs.map(poruct => console.log(poruct));
poructs.forEach(poruct => console.log(poruct));
// console.log(productNames);
// console.log(productPricess);