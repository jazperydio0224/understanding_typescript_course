/* function type using types */
// type AddFn = (a: number, b: number) => number;

// interfaces as function types
interface AddFn {
  (a: number, b: number): number; // anonymous function (no method name)
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // optional properties
}

interface City {
  city: string;
}

interface Greetable extends Named, City {
  greet(phrase: string): void;
}

interface Age {
  age: number;
}

class Person implements Greetable, Age {
  name?: string; // optional class property
  city: string;
  age: number;

  constructor(c: string, a: number, n?: string) {
    if (n) {
      this.name = n;
    }
    this.city = c;
    this.age = a;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let user1: Greetable;

user1 = new Person("Moscow", 27);
// user1.name = "Manu"; typescript detects it

user1.greet("Hi there - I am");
console.log(user1);
