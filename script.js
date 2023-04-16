// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthChoice = window.prompt('(1-30) How many characters would you like the password to be? (1-30)').toUpperCase();
var userChoice = window.prompt('Would you like to include special characters?').toUpperCase();

console.log(userChoice);
console.log(lengthChoice);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
