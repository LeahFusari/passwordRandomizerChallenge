
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphaSpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
var intNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// button variable assigned by selcecting the ID for the button
var generateBtn = document.querySelector("#generate");
var resetBtn = document.querySelector("#reset");

function generatePassword() {
    var promptLength = prompt("Enter Number of characters between 8-128.");
    var finalPassword = ""

    if (promptLength < 8 || promptLength > 128) {
        alert("You must choose a number between 8 and 128");
        return
    }

     if(isNaN(promptLength)){
            alert("You must choose a number between 8 and 128");
            return
        }
    
    var confirmLower = confirm("Do you want to use lower case letters?  Click 'OK' for Yes and 'Cancel' for No.");
    var confirmUpper = confirm("Do you want to use upper case letters? Click 'OK' for Yes and 'Cancel' for No.");
    var confirmNumber = confirm("Do you want to use a number? Click 'OK' for Yes and 'Cancel' for No." );
    var confirmSpecial = confirm("Do you want to use a special character? Click 'OK' for Yes and 'Cancel' for No.");

    

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

    if (!confirmLower && !confirmUpper && !confirmSpecial && !confirmNumber) {
        alert("Pleaes choose at least one character option!");
        
    return
    }

    //use for loop to randomly get the elements from the allPossible array as many times as the user selects.
    for (var i = 0; i < promptLength; i++) {
        finalPassword += allPossible[Math.floor(Math.random()*allPossible.length)];
      }
      return finalPassword;
}


// // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
        if(password==="undefined"){
            password=" "
        }
    passwordText.value = password;
    return
}

function clearTextArea(){
    location.reload()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

resetBtn.addEventListener("click", clearTextArea);


