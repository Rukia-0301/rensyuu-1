console.log("-----------------------------------------");

const characters = [
    {id: 1, name: "にんじゃわんこ"},
    {id: 2, name: "ひつじ仙人"}
];

const foundCharacter = characters.find((character) => {
    return character.id === 1;
});

console.log(foundCharacter);