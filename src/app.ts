let appId = "abc";
const button = document.querySelector("button")!;
//! use the exclamation mark when not sure that button exist
// or check it by if or ?.
// or set strictNullChecks on tsconfig

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let userName = 'Max';
  console.log("Clicked! " + message);
}
// a comment

button?.addEventListener("click", clickHandler.bind(null, "You're welcome!"));

// if (button) {
//   button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
// }
