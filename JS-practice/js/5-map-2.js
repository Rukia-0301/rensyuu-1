console.log("-----------------------------------------");

const names = [
    {firstName: "Kate", lastName: "Jones"},
    {firstName: "Brian", lastName: "Smith"}
];

const fullNames = names.map((name) => {
    return name.firstName + name.lastName;
});

console.log(fullNames);