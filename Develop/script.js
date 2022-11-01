// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");
const numbers = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "!@#$%^&*()_+{}";
let passwordLength = "";
let finalCharacters = "";
let password = "";

function writePassword() {
// checking for correct password length
  let userInput = prompt("Choose a Password from 8 to 128 characters long.");
  passLength = parseInt(userInput);
  console.log(passLength);

  if (isNaN(passLength)) {
    alert("Enter a number.")
    return;
  } else if (8 <= passLength && passLength <= 128) {
    passwordLength = passLength;
  } else {
    do {
      alert("Enter a valid length.")
      passLength = prompt("Choose a Password from 8 to 128 characters long.");
    } while (8 >= passLength || passLength >= 128);
    passwordLength = passLength;
  }

// asking if numbers should be in the password
  let numb = confirm("Would you like numbers in your password?");
  if (numb == true) {
    finalCharacters += numbers;
    console.log(finalCharacters);
  }

//asking if lowercase letters should be included in the password
  let lower = confirm("Would you like to use lowercase letters in your password?");
  if (lower == true) {
    finalCharacters += lowerCase;
    console.log(finalCharacters);
  }

// asking if uppercase letters should be in the password
  let upper = confirm("Would you like to use uppercase letters in your password?");
  if (upper == true) {
    finalCharacters += upperCase;
    console.log(finalCharacters);
  }

// asking if special characters should be included in the password
  let special = confirm("Would you like to include special characters in your password?");
  if (special == true) {
    finalCharacters += specialCharacters;
    console.log(finalCharacters);
  }
  
// alerts if the user did not add any character types to the final string of characters
  if (finalCharacters === "") {
    alert("Must select at least one character type.");
    return;
  }

// creates a random password using the final string of characters
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * finalCharacters.length);
    password += finalCharacters.substring(randomNumber, randomNumber + 1);
  }


  passwordText.value = password;
  console.log(password);
  console.log(password.length)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);