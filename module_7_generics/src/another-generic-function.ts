// Another Generic function

interface Lengthy {
  length: number;
}

// typescript infers that we return an array of either a string or type T (union)
// or any data type that has a length function.
// function countAndDescribe<T extends Lengthy>(element: T): (string | T)[];
// Let's modify its return type (a tuple which contains a type T or a string)
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";

  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

// console.log(countAndDescribe("Hi there!"));
// console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe([]));
