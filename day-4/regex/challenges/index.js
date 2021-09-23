const { check, runTest, skipTest } = require("../../../test-api");

// You should look up Regex methods to help you in these challenges :)
// Try this link -> https://javascript.info/regexp-introduction#regular-expressions

// Once you have passed the current test, change skipTest on the following test to runTest so you are able to run it with Node

// Declare a function extractCode that extracts a number from a string
// Use the assertions below to help guide you in your logic
    function extractCode(str){
     //Set up a regex \d all the digits, + operator 1 more occurances
      let regEx = /\d+/;
     //use the match method to return an array of all the numbers together ina  single index 
     //as one element value, so if the numbers were seperated then we would have multiple
     //indexes 
     let number = str.match(regEx);
     
     //Now we need to convert the string data type to a Number data type using parseInt
     return parseInt(number); 

    }


runTest("extractCode() can find the total from a single code string", function () {
  check(extractCode).whenCalledWith("abcd67yuio").returns(67);
  check(extractCode).whenCalledWith("abcd103yuio").returns(103);
  check(extractCode).whenCalledWith("abcd4567yuio").returns(4567);
  check(extractCode).whenCalledWith("abcd1000289yuio").returns(1000289);
});

// Declare and implement a function isValidSortCode
// Checks if a passed string is a valid sort code - 
//this should be in the form 2 digits hyphen 2 digits hyphen 2 digits
    function isValidSortCode(sortcode){
    let regEx = /^\d{2}[-]\d{2}[-]\d{2}$/;
    
    let result = regEx.test(sortcode);
    
    return result;


    }
runTest("isValidSortCode() should check is a sort code string is in the correct format", function () {
  check(isValidSortCode).whenCalledWith("10-34-67").returns(true);
  check(isValidSortCode).whenCalledWith("51-34-58").returns(true);
  check(isValidSortCode).whenCalledWith("85-16-23").returns(true);

  check(isValidSortCode).whenCalledWith("51-349-67").returns(false);
  check(isValidSortCode).whenCalledWith("7980-34-67").returns(false);
  check(isValidSortCode).whenCalledWith("34-12-899").returns(false);
  check(isValidSortCode).whenCalledWith("a8-78-10").returns(false);
  check(isValidSortCode).whenCalledWith("45_78_10").returns(false);
});

// Declare and implement a function isProfessionalEmail
// Returns true if the email text is professional (does not end in a kiss - 'x')
    function isProfessionalEmail(email) {
     let regEx = /[x$]/;

     let result = regEx.test(email);

     return result;

    }


runTest("isProfessionalEmail() checks if an email ends with an x", function () {
  check(isProfessionalEmail).whenCalledWith("x").returns(false);
  check(isProfessionalEmail).whenCalledWith("Dear Sir/Madam").returns(true);
  check(isProfessionalEmail).whenCalledWith("Dear Alex, How are you?").returns(true);
  check(isProfessionalEmail).whenCalledWith("i miss u xx").returns(false);
  check(isProfessionalEmail).whenCalledWith("X_X").returns(false);
});

// Declare and implement a function countVowels
// Returns a count of the vowels in a string.

skipTest("countVowels() counts the vowels in a string", function () {
  check(countVowels).whenCalledWith("").returns(0);
  check(countVowels).whenCalledWith("bcd").returns(0);
  check(countVowels).whenCalledWith("a").returns(1);
  check(countVowels).whenCalledWith("abc").returns(1);
  check(countVowels).whenCalledWith("AEbiO").returns(4);
  check(countVowels).whenCalledWith("aaeee!!!").returns(5);
});

// declare and implement a function called sumNums
// returns a sum of all numbers in a string
// consecutive digits should be taken as numbers: i.e. "12" = 12, not 3
// if there are no numbers it should return 0

skipTest("sumNums() totals all of the numbers in a string", function () {
  check(sumNums).whenCalledWith("hello").returns(0);
  check(sumNums).whenCalledWith("1").returns(1);
  check(sumNums).whenCalledWith("12").returns(12);
  check(sumNums).whenCalledWith("1hello2").returns(3);
  check(sumNums).whenCalledWith("12hiya!3").returns(15);
});
