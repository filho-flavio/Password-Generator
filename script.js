// Getting all elements with the DOM
const result = document.querySelector("#result");
const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const btGenerate = document.querySelector("#generate");

// Function to Generate password
function generatePassWord() {
  const length = document.querySelector("#length").value;
  let generatedPassword = "";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbol = "!@#$%^&*(){}[]=<>/,.";

  // Checking if any the checkboxes are selected
  if (
    upperCase.checked ||
    lowerCase.checked ||
    numbers.checked ||
    symbols.checked
  ) {
    // Guarantee that the password will be the given length
    while (generatedPassword.length < length) {
      if (upperCase.checked) {
        generatedPassword += upper[Math.floor(Math.random() * upper.length)];
      }
      if (lowerCase.checked) {
        generatedPassword += lower[Math.floor(Math.random() * lower.length)];
      }
      if (numbers.checked) {
        generatedPassword += number[Math.floor(Math.random() * number.length)];
      }
      if (symbols.checked) {
        generatedPassword += symbol[Math.floor(Math.random() * symbol.length)];
      }
    }
    generatedPassword = generatedPassword.slice(0, length);
    result.textContent = generatedPassword;
  } else {
    result.textContent = "Select an option!";
  }
}

btGenerate.addEventListener("click", generatePassWord);