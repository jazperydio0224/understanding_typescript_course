// Index Properties

// flexible container
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character!' }
  // i don't know the exact property name. I also don't know the property count.
  // i just know that every property which is added to this object must have a
  // property name which can be interpreted as a string and the value for that
  // property also must be a string
  [prop: string]: string; // only string , number , symbol , template string patterns, and union types are allowed
  // we can also declare other properties as long as they are the same as the index property
  // id: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};
