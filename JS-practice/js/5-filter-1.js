console.log("-----------------------------------------");
console.log("＞filterメソッド");

const numbers = [1, 3, 5, 7];

const filteredNumbers = numbers.filter((number) => {
    return number > 3;
});

console.log(filteredNumbers);