console.log("-----------------------------------------");
console.log("同じクラスの他のメソッドを使う");

class Animal3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("こんにちは");
    }
    info(){
        this.greet();
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}歳です`);
    }
}

const animal = new Animal3("レオ", 3);
animal.info();