// function return types (ADVISABLE TO LET TYPESCRIPT INFER THE RETURN TYPE)
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void return type
// to make it clear that the function does not have a return statement
function printResult(num: number): void {
  console.log("Result: " + num);
}

// function types as callbacks
// defining void as the callback function return type means the outer function will ignore the returned value
// of the callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

console.log(printResult(add(5, 12)));

// undefined as a type
let someValue: undefined; // undefined is a valid type in TypeScript

// functions as types
let combineValues: (a: number, b: number) => number; // specify the function definition (parameters & types + return type)
combineValues = add;
console.log(combineValues(8, 8));

// combineValues = printResult; // complains about printResult because it does not match the function definition

addAndHandle(10, 10, (result) => {
  console.log(result);
});
