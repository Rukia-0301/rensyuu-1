console.log("-----------------------------------------");
console.log("＞オーバーライド");

class Animal5{
    constructor(name, age){
        this.name = name;
        this.age =age;
    }
    greet(){
        console.log("こんにちは");
    }
    getHumanAge(){
        return this.age * 7;
    }
    info(){
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}

class Dog extends Animal5{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    info(){
        super.info();
        console.log(`犬種は${this.breed}です`);
        const humanAge = this.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
    }
}

const dog = new Dog("ルキア", 4, "コリー");
dog.info();