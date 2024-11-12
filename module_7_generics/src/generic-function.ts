// Creating a Generic Function

// generic types are set dynamically (type inference) when we call
// the function
// it infers the types for the 2 arguments
function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// notice how the yielded value depends on the arguments
const mergedObj = merge({ name: "Jazper" }, { age: 29 });
const mergedObj2 = merge({ name: "Jazper", hobbies: ["Sports"] }, { age: 29 });
console.log(mergedObj.age);