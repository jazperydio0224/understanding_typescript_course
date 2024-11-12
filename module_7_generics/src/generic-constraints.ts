// Working with Constraints

// we need to restrict our generic types
// T type can be any structure but it has to be an object
// U type can be any structure but it has to be an object
function merge1<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

// // note: 30 is not an object
// const mergedObj1 = merge1({ name: "Jazper", hobbies: ["Movies"] }, 30);
const mergedObj1 = merge1({ name: "Jazper", hobbies: ["Movies"] }, { age: 30 });
console.log(mergedObj1);
