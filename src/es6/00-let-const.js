var lastName= 'Aksonyn';
lastName='Ramses';
console.log(lastName);

let fruit='apple';
fruit ='kiwwi';
console.log(fruit);

const animal='Dog';
animal='cat';
console.log(animal);

const fruits=() => {
    if(true){
        var fruit1='Apple'; //function scope
        let fruit2='kiwi'; //block scope
        const fruit3='Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();