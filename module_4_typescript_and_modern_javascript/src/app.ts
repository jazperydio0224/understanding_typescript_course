/*
1. let & const
2. arrow functions
3. default function parameters
4. spread operator
5. rest parameters
6. array and object destructuring
*/

/* LET & CONST */
const userName = "Max";
// userName = "Maximilian";
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

/* ARROW FUNCTIONS/DEFAULT FUNCTION PARAMETERS */
// if you have one expression
// default argument (must be last in the list)
// const add (a: number = 1, b: number) => a + b; -> this won't work
const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

// single parameter -> more concise syntax
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));

/* SPREAD OPERATOR */
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies); // comma-separated list of values

const person = {
  name: "Max",
  age: 30,
};

// copying the pointer at the person object in memory
// we're not really creating a copy of the object
const notCopiedPerson = person;

const copiedPerson = { ...person }; // list of key-value pairs

/* REST PARAMETERS */
// it will merge all incoming comma-separated list of values
// into an array
const add1 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add1(5, 10, 2, 3.7);
console.log(addedNumbers);

// using a tuple
const add2 = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbers2 = add2(5, 10, 2);
console.log(addedNumbers2);

/* ARRAY & OBJECT DESTRUCTURING */
// 1. array destructuring
const hobbies1 = ["Sports", "Cooking", "Botany", "Astronomy"];
const [hobby1, hobby2, ...remainingHobbies] = hobbies1;
console.log(hobby1, hobby2, remainingHobbies);
console.log(hobbies, hobby1, hobby2);

// 2. object destructuring
const person1 = {
  firstName: "Max",
  yearsOfAge: 30,
  gender: "LGBTQ",
};

// alias
const { firstName: nameOfPerson, yearsOfAge, gender } = person1;
console.log(nameOfPerson, yearsOfAge, gender);
