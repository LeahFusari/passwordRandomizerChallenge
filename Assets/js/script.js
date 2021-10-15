//Psudocode

//assign code to button to generate a password
//create prompts/confirms to collect criteria for the password
// var promptLength = prompt("Enter Number of characters between 8-128.")    
// var confirmLower = confirm("Do you want to use lower case letters?")
// var confirmUpper = confirm("Do you want to use upper case letters?")
// var confirmNum = confirm("Do you want to use a number?")
// var confirmSpecial = confirm("Do you want to use a special character?")

// //use the data from those prompts to assign to variables
// Validate input
//Select at least one char type each
// Length of pwd: 8-128
//Char types
//lowercase
//uppercase
//numeric
//special
//Once all prompts answered, generate password in <textarea>  (or alert)

//Arrays for charTypes

// function getRandomUpper(){
//     return String.fromCharCode(Math.floor(Math.random()*26)+65);

// }

// for (var i = 0; i < randArray.length;i++) {
//     console.log(randArray[i]);
// }

//series of prompts



// }
// console.log(randUpper,randLower,randNumber,randSpecial);

// for (var i = 0; i < randUpper.length; i++) {
//     console.log(randUpper[i]);
// }

// for (var i = 0; i < randLower.length; i++) {
//     console.log(randLower[i]);
// }

// for (var i = 0; i < randNumber.length; i++) {
//     console.log(randNumber[i]);
// }

// for (var i = 0; i < randSpecial.length; i++) {
//     console.log(randSpecial[i]);
// }
var alphaUpper = ["A", "B", "C"]
var alphaLower = ["a", "b", "c"]
var alphaSpecial = ["!", "@", "#"]
var intNumber = [1, 2, 3]


// button variable assigned by selcecting the ID for the button
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var promptLength = prompt("Enter Number of characters between 8-128.");
    // console.log(promptLength);

    if (promptLength < 8 || promptLength > 128) {
        alert("You must choose a number between 8 and 128");
        return
    }
    
    var confirmLower = confirm("Do you want to use lower case letters?");
    var confirmUpper = confirm("Do you want to use upper case letters?");
    var confirmNumber = confirm("Do you want to use a number?");
    var confirmSpecial = confirm("Do you want to use a special character?");

    var allPossible =[]

    if (confirmLower){
        allPossible = allPossible.concat(alphaLower)
    }

    if (confirmUpper){
        allPossible = allPossible.concat(alphaUpper)
    }

    if (confirmSpecial){
        allPossible = allPossible.concat(alphaSpecial)
    }

    if (confirmNumber){
        allPossible = allPossible.concat(intNumber)
    }

    console.log(allPossible);

    //use for loop to randomly get the elements from the allPossible array as many times as the user selects.

    // grab the random and save to another variable finalPassord
    // retrurn final password
//return that array

}


// // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Validation
