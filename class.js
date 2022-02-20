class Supprot {
    name ;
    designation = 'support wed devloper';
    address = 'BD';
    constructor(name, designation, address){
        this.name = name;
        this.designation = designation;
        this.address = address;
    }
    startSession(){
        console.log(this.name, "start a support session");
    }
}

const amir = new Supprot ('Amir khan', 'wed devoloper', 'Bangladhash');
const salman = new Supprot ('Salman khan', 'wed dijainin', 'katar');
const sharif = new Supprot ('sharif khan', 'grfict dognig ', 'dubai');
const abir = new Supprot ('abir hasan', 'wed dijainin', 'mail shiya');
salman.startSession();
amir.startSession();

console.log(amir, salman, sharif, abir);
// console.log(salman);