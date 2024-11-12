/* We can specify the types of the object properties but it's
   better for typescript to infer it
*/
// const person: { name: string; age: number } = {
//   name: "Maximilian",
//   age: 30,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Often, you'll see enums with all-uppercase values but that's
// not a "must-do". You can go with ANY value names.
// enum default value is 0
enum Role {
  ADMIN = 1, // set starting value (default is 0)
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin"); // typescript cannot detect this error when using arrays
// person.role[1] = 10;
// person.role = [0, "admin", "user"];

// explicitly tell typescript what data type the array contains
let favoriteActivities: string[];
favoriteActivities = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // error -> typescript type inference (detects that map is used for arrays not string datatypes)
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

// Of course object types can also be created for nested objects.
// Let's say you have this Javascript object:
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

// This would be the type of such an object:
/*
{
  id: string;
  price: number;
  details: {
    title: string;
    description: string;
  }
}
*/

// So you have an object type in an object type so to say.
