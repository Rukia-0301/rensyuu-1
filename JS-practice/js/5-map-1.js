console.log("-----------------------------------------");
console.log("＞mapメソッド");

const numbers = [1, 2, 3];

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubledNumbers);