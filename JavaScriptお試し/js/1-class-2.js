console.log("-----------------------------------------");
console.log("＞クラス内で計算してみる練習");

class Animal2{
    constructor(name, start){
        this.name = name;
        this.start = start;
    }
    greet(){
        const name = this.name;
        console.log(`${name}さん、こんにちは`);
    }
    info(){
        const years = 2025 - this.start;
        console.log(`あなたはこのゲームを${years}年間プレイしています`);
    }
}

const rukia2 = new Animal2("ルキア", 2020);
rukia2.greet();
rukia2.info();