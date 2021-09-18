// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = "How many characters would you like your password to have"

function generatePassword() {
  console.log("You clicked for password!")

// 1. Prompt the user for the password criteria
//   a. Password length 8-128
//   b. Lowercase, uppercase, numbers, special characters 
// 2. Validate the input.
// 3. Generate password based on criteria.

var passLength = window.prompt ('How many characters would you like your password to have? ');
console.log(passLength);

if( passLength === null) {
  return;
}

if (passLength < 8 || passLength > 128) {
  console.log(passLength);
  passLength = window.prompt('Password must be 8-128 characters');
}

if( passLength === null) {
  return;
}
console.log(passLength);


//Confirmation of characters to be used
var pickSpecial = window.confirm('Click ok to confirm including special characters ');

var pickNum = window.confirm('Click ok to confirm including numbers ');

var pickUpper = window.confirm('Click ok to confirm including uppercase characters ');

var pickLower = window.confirm('Click ok to confirm including lowercase characters ');
console.log(pickSpecial, pickNum, pickUpper, pickLower);

// Possible character arrays
var randomChar =['*', '#', '&','!','%','^','@','$','?','+'];
console.log(randomChar);

var randomNum =['1','2','3','4','5','6','7','8','9'];
console.log(randomNum);

var randomUpper =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
console.log(randomUpper);

var randomLower =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(randomLower);

// If the series of characters are confirmed
var chosenChar = [];
if(pickSpecial) {
  chosenChar = chosenChar.concat(randomChar);
}

if(pickNum) {
  chosenChar = chosenChar.concat(randomNum);
}

if(pickUpper) {
  chosenChar = chosenChar.concat(randomUpper);
}

if(pickLower) {
  chosenChar = chosenChar.concat(randomLower);
}
console.log(chosenChar);

//The length of the password is defined here

var lengthPass = Number(passLength);
var arrayPassword =[];

console.log(lengthPass)
console.log(arrayPassword)
console.log(arrayPassword.length);

for(var i=0; i<lengthPass; i++) {
  var numberRandom = Math.floor(Math.random() * chosenChar.length);

  console.log(numberRandom);

  arrayPassword.push(chosenChar[numberRandom]);
}

// 4. Display password to page
  return arrayPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
