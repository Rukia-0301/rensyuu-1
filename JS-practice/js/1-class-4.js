console.log("-----------------------------------------");
console.log("＞戻り値");

class Animal4{
    constructor(name, age){
        this.name = name;
        this.age = age;
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
        const humanAge = this.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
    }
}

const animal2 = new Animal4("レオ", 3);
animal2.info();