// Unknown type
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; // difference between type 'any': unknown cannot be assignable to other types
// needs an extra type check with 'unknown' to be able to assign 'unknown' value
// to a value with a fixed type
if (typeof userInput === "string") {
    userName = userInput; // difference between type 'any': unknown cannot be assignable to other types
}
// Never type - another type functions can return
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error ocurred", 500);
console.log(result);
