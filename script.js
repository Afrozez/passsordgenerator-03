// Assignment Code
var lengthChoice = window.prompt('(1-30) How many characters would you like the password to be? (1-30)').toUpperCase();
var userChoice = window.prompt('Would you like to include special characters?').toUpperCase();
var generateBtn = document.querySelector("#generate");


console.log(userChoice);
console.log(lengthChoice);


function generatePassword() {
  // This defines the possible characters to use in the password
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var passwordLength = lengthChoice; // Sets the length of the password to prompt input value

  var password = ""; // This is what the password will be once the for loop is done
  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * chars.length); // Generate a random number to select a character
    password += chars.substring(randomNum, randomNum + 1); // Add the selected character to the password
  }  
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
