"use strict";
function merge1(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj1 = merge1({ name: "Jazper", hobbies: ["Movies"] }, { age: 30 });
console.log(mergedObj1);
