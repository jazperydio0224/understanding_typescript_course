"use strict";
function add3(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add3("Jazper", "Jazper");
result.split(" ");
