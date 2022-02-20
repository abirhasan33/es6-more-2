// declar vatiable based on the name of an objet party 
const myObjet = {x: 2, y: 50, z: 600, a:25, b:68};
const {x, z} = myObjet;
// console.log(x, z);

// destrctring array 
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);


const [best, faltu] = ['abir', 'poroshi'];
// console.log(best , faltu);
const {sek, color, money} = {sky: 'blue', soil: 'matti', color: 'red', money: 500}



const commpany = {
    name: 'gp',
     ceo: {id: 1, name:'ajmol', ford: 'fuchka'},
    wed:{work: 'website devoloper', employee: 22, farmework:'react', cech:{firht:'html', second: 'css', third: 'js'}}
};

console.log(commpany?.wed.cech.third);
console.log(commpany?.wed.backend?.cech.third);