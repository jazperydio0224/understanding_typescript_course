let userName = "Maximilian";
userName = "Jazper";

console.log(userName);

const button = document.querySelector("button")!; // exclamation mark allows null values

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = "Max";
  console.log("Clicked! " + message);
}

// checking button if (truthy)
if (button) {
  button.addEventListener("click", () =>
    clickHandler.bind(null, "You're welcome!")
  );
}
