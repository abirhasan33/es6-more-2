const fish = {id:58, name: 'Kinh Hilsha', price: 9000, phone:'01608889768', address: 'Chandpur', dress: 'silver'};
// const phone = fish.phone;
// const price = fish.parce;
// const address = fish.address;
// const id = fish.id;

const {phone, price, dress, id} = fish;

// console.log(phone, price);
// console.log(phone, id);
// console.log(phone, dress);
// console.log(phone, price);


const commpany = {
    name: 'gp',
     ceo: {id: 1, name:'ajmol', ford: 'fuchka'},
    wed:{work: 'website devoloper', employee: 22, farmework:'react', cech:{firht:'html', second: 'css', third: 'js'}}
};

// const work = commpany.wed.work;
const {work, farmework} = commpany.wed;
const {ford, } = commpany.ceo;
const {second, third} = commpany.wed.cech;

console.log(work, farmework, ford, second, third)