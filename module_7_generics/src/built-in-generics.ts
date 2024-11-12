// Built-in Generics & What are Generics

// 1. Array Generic Type
// Array type that stores a string
const names: Array<string> = []; // same as string[]
// names[0].split(" ");

// 2. Promise Generic Type
// Promise that yields a number
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is done"); // type checks the yielded value
    resolve(5); // type checks the yielded value
  }, 2000);
});

promise.then((data) => {
  // data.split(" "); // since we declared the generic type that yields a number, a string method is not allowed
});
