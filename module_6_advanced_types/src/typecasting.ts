// Typecasting

// const paragraph: HTMLParagraphElement | null
const paragraph = document.querySelector("p");

// const paragraphId: HTMLElement | null
// typescript only knows that it's some HTML element
const paragraphId = document.getElementById("message-output");

// const userInputElement: HTMLElement | null
// typescript only knows that it's some HTML element
// so we have to typecast the type of the value that is
// being retrieved by the dom function
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")! // note: the ! means that it will never yield null
);
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// Property 'value' does not exist on type 'HTMLElement'.
userInputElement.value = "Hi there!";

// alternative to not use the exclamation mark
const userInputElement1 = document.getElementById("user-input");
if (userInputElement1) {
  (<HTMLInputElement>userInputElement1).value = "Hi there 1";
}
