"use strict";
const userName = "Max";
let age = 30;
age = 29;
const add = (a, b = 1) => a + b;
console.log(add(2, 5));
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
printOutput(add(5));
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);
const person = {
    name: "Max",
    age: 30,
};
const notCopiedPerson = person;
const copiedPerson = Object.assign({}, person);
const add1 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add1(5, 10, 2, 3.7);
console.log(addedNumbers);
const add2 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers2 = add2(5, 10, 2);
console.log(addedNumbers2);
const hobbies1 = ["Sports", "Cooking", "Botany", "Astronomy"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies1;
console.log(hobby1, hobby2, remainingHobbies);
console.log(hobbies, hobby1, hobby2);
const person1 = {
    firstName: "Max",
    yearsOfAge: 30,
    gender: "LGBTQ",
};
const { firstName: nameOfPerson, yearsOfAge, gender } = person1;
console.log(nameOfPerson, yearsOfAge, gender);
