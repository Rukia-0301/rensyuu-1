import AnimalTest from "./export-animal.js";

class DogTest extends AnimalTest{
    constructor(name, age, breed){
        super(name, age);

        this.breed = breed;
    }
    getHumanAge(){
        return this.age * 7;
    }
    info(){
        super.info();

        const humanAge = this.getHumanAge();
        console.log(`人間年齢で${humanAge}歳です`);
        console.log(`犬種は${this.breed}です`);
    }
}

export default DogTest;