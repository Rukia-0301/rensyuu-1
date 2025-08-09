console.log("＞findメソッド");

const numbers = [1, 3, 5, 7];

const foundNumber = numbers.find((number) => {
    return number > 3;
});

console.log(foundNumber);