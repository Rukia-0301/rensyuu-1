console.log("＞挨拶の表示");

class Animal1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        const name = this.name;
        const age = this.age;
        console.log(`${name}さん、こんにちは`);
        console.log(`${name}さんは現在${age}歳です`);
    }
}

const rukia1 = new Animal1("ルキア", 20);
rukia1.greet();