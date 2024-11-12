"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(c, a, n) {
        if (n) {
            this.name = n;
        }
        this.city = c;
        this.age = a;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}
let user1;
user1 = new Person("Moscow", 27);
user1.greet("Hi there - I am");
console.log(user1);
