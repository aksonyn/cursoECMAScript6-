class user{
    //constructor
    constructor(name, age){
        this.name= name;
        this.age= age;
    }
    //metodos
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age=n;
    }
}

const beveloper= new user('Ramses', 26);
console.log(beveloper.uAge);
console.log(beveloper.uAge = 20);
