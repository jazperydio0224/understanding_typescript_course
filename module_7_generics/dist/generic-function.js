"use strict";
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: "Jazper" }, { age: 29 });
const mergedObj2 = merge({ name: "Jazper", hobbies: ["Sports"] }, { age: 29 });
console.log(mergedObj.age);
