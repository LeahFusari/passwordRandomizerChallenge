//Psudocode

//assign code to button to generate a password
//create prompts/confirms to collect criteria for the password
    var confirmLower = confirm("Do you want to use lower case letters?")
    var confirmUpper = confirm("Do you want to use upper case letters?")
    var confirmNum = confirm("Do you want to use a number?")
    var confirmSpecial = confirm("Do you want to use a special character?")
    var promptLength = prompt("Enter Number of characters between 8-128.")
//use the data from those prompts to assign to variables
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

var charLower=[]
var charUpper=[]
var charNum=[]
var charSpecial=[]


//code below was given

// button variable assigned by selcecting the ID for the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
