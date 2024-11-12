// Function Overloads

/*
type Combinable2 = string | number;

function add2(a: Combinable2, b: Combinable2) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// due to union types, typescript can't determine the return type of the function.
// even if we checked for the type as a string, we still cant call string functions on the result

const result = add("Max", "Schwartz");
result.split(" ");
*/

// implementing function overloads

type Combinable3 = string | number;

function add3(a: number, b: number): number;
function add3(a: string, b: string): string;
function add3(a: number, b: string): string;
function add3(a: string, b: number): string;
function add3(a: Combinable3, b: Combinable3) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// now it detects the result as a string
const result = add3("Jazper", "Jazper");
result.split(" ");