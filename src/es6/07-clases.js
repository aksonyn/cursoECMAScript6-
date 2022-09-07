//declare
class User{

};

//instance
//const newUser= new User();
class user{
    //metodos
    greeting() {
        return 'Hello';
    }
};

const aksonyn= new user();
console.log(aksonyn.greeting());
const developer = new user();
console.log(developer.greeting());

//construct

class user{
    //construct
    constructor(){
        console.log('Nuevo Usuario');
    }
    //metodo
    greeting() {
        return 'Hello';
    }
}

const ramses = new user();

//this

class user{
    constructor(name){
    //constructor
    this.name=name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const evelyn = new user('Evelyn');
console.log(evelyn.greeting());

//setter and getters

class user{
    //constructor
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
}

const beveloper= new user('Ramses', 26);
console.log(beveloper.uAge);
console.log(beveloper.uAge = 20);
