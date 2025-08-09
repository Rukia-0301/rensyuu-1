console.log("-----------------------------------------");

const characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ベイビーわんこ", age: 5},
    {name: "ひつじ仙人", age: 100}
];

const filteredCharacters = characters.filter((chacacter) => {
    return chacacter.age > 10;
});

console.log(filteredCharacters);