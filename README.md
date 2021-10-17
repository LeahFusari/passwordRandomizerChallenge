# 03 JavaScript: Password Generator

The assignment was to create an application that generates a random password based on user-selected criteria. 

 I chose to create arrays of each character type.  
 
 When the user clicks the Generate Password button, a series of prompts will appear to ask the criteria of the password and the applicaiton validates if all criteria are met.
 
 If the user selects "OK" to the character type (they must choose at least one), that array is appended & concatonated to a new array called "All Possible." 
 
 A For Loop then randomly iterates, selects and appends characters from the All Possible array into a "Final Passowrd" variable, as a string.  
 
 The next function, "Write Password,"  takes the result of that Generate Password function and writes/displays it in the application.

 The user can then press the reset button to clear the old password and start again OR they can simply click the Generate Password and start again.


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Review

Deployed application:
https://leahfusari.github.io/passwordRandomizerChallenge/

GitHub repository:
https://github.com/LeahFusari/passwordRandomizerChallenge

Screenshot of application:
![passwordGeneratorScreenshot](https://user-images.githubusercontent.com/87339742/137635131-772eaaf7-2e2b-479a-a264-abfbf0e85933.jpg)
- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
