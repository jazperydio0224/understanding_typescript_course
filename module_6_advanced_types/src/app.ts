// Nullish Coalescing

const userInput = undefined;
// if userInput is null or undefined, then we go to the fallback
// if it's not 'null' or 'undefined' then we'll use that value
const storedData = userInput ?? "DEFAULT";

console.log(storedData);
