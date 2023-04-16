// Assignment Code
var generateBtn = document.querySelector("#generate");


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

function generatePassword() {
  // This defines the possible characters to use in the password
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var passwordLength;
  do {
    passwordLength = parseInt(prompt("How long would you like your password to be (8-128)?"));
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);



  var includeNumbers = confirm("Would you like to include numbers in your password?");

  if (includeNumbers) {
    chars += "0123456789";
  }

  var includeSpecials  = confirm("Would you like to include $pecail characters in your password?");

  if (includeSpecials) {
    chars += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  }


  var password = ""; // This is what the password will be once the for loop is done
  
  for (var i = 0; i < passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * chars.length); // Generate a random number to select a character
    password += chars.substring(randomNum, randomNum + 1); // Add the selected character to the password
  }  
  return password;
}
