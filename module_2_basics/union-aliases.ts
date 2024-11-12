// function combine(
//   input1: number | string, // union
//   input2: number | string, // union
//   resultConversion: "as-number" | "as-text" // Literal Types with union
// ) {
//   let result: null | number | string = null;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   return result;
//   // if (resultConversion === "as-number") {
//   //   return +result;
//   // } else {
//   //   return result.toString();
//   // }
// }

// Type aliases custom types
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable, // type alias
  input2: Combinable, // type alias
  resultConversion: ConversionDescriptor // type alias
) {
  let result: null | number | string = null;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
