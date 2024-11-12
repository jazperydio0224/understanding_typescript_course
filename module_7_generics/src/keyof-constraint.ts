// the keyof Constraint

// we are getting an error from typescript because
// we don't know if the object we're getting here
// really have that key

// now we're informing typescript that the first parameter should be any kind of object
// and the second parameter should be any kind of key in that object (keyof)
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Jazper" }, "name"));
