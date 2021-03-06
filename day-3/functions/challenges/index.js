const { check, printGreenMessage, printRedMessage } = require("../../../test-api");

function modulo(num1, num2) {
  // return the remainder of the division a / b
 
 return num1 % num2;
}

//console.log (modulo(10,2));
console.log("modulo() gives the correct output");

try {
  check(modulo).whenCalledWith(10, 2).returns(0);
  check(modulo).whenCalledWith(119, 10).returns(9);
  check(modulo).whenCalledWith(50, 6).returns(2);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function squareRoot(num) {
  // return the square root of n
  return Math.sqrt(num);

}

console.log("squareRoot() works for positive integers");

try {
  check(squareRoot).whenCalledWith(100).returns(10);
  check(squareRoot).whenCalledWith(25).returns(5);
  check(squareRoot).whenCalledWith(121).returns(11);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

function raiseToPower(num, nth) {
  // return the result of raising m to the nth power
  return num ** nth;
}

console.log("raiseToPower() raises given number to a power");
try {
  check(raiseToPower).whenCalledWith(10, 3).returns(1000);
  check(raiseToPower).whenCalledWith(25, 2).returns(625);
  check(raiseToPower).whenCalledWith(10, 0).returns(1);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare capitaliseFirstLetter here
function capitaliseFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  
}

console.log("capitaliseFirstLetter() can capitalise the first letter in a string");
try {
  check(capitaliseFirstLetter).whenCalledWith("bang").returns("Bang");
  check(capitaliseFirstLetter).whenCalledWith("apple").returns("Apple");
  check(capitaliseFirstLetter).whenCalledWith("coding").returns("Coding");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare areValuesEqual here
function areValuesEqual(val1, val2) {
   if (val1 === val2){
   return true;
   }
   return false;
}


// return true if the passed arguments are strictly equal
// you can complete this problem without resorting to if statements

console.log("areValuesEqual() checks if two values are the same");
try {
  check(areValuesEqual).whenCalledWith(10, 10).returns(true);
  check(areValuesEqual).whenCalledWith("good", "bad").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare isFromThe60s here
function isFromThe60s (year) {
  //Tertiary operator
  return (year < 1970 && year > 1959) ? true : false;
   
}


// return true if the year is in the 1960's
// returns false otherwise
// you can complete this problem without resorting to if statements

console.log("isFromThe60s() checks if a number is within 1960 to 1969 (inclusive)");
try {
  check(isFromThe60s).whenCalledWith(1962).returns(true);
  check(isFromThe60s).whenCalledWith(1965).returns(true);
  check(isFromThe60s).whenCalledWith(1970).returns(false);
  check(isFromThe60s).whenCalledWith(1960).returns(true);
  check(isFromThe60s).whenCalledWith(1959).returns(false);
  check(isFromThe60s).whenCalledWith(1901).returns(false);
  check(isFromThe60s).whenCalledWith(1990).returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare isEvenLength here
function isEvenLength(str) {
 
  return (str.length % 2 === 0) ? true : false;

}

// return true if string has an even length
// you can complete this problem without resorting to if statements

console.log("isEvenLength() checks if string has even number of characters");
try {
  check(isEvenLength).whenCalledWith("hello").returns(false);
  check(isEvenLength).whenCalledWith("abcd").returns(true);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare isAbsolutePath here
function isAbsolutePath (str) {

  return (str[0] === '/')  ? true : false;

}


// checks if a string is an absolute path - does it start with a /
// HINT: all absolute file paths start with a /

console.log("isAbsolutePath() checks if a file path is absolute or relative");

try {
  check(isAbsolutePath).whenCalledWith("/Users/mitch").returns(true);
  check(isAbsolutePath).whenCalledWith("/Users/mitch/northcoders/remote_course/remote_precourse_1").returns(true);
  check(isAbsolutePath).whenCalledWith("../composers").returns(false);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare getMiddle here
function getMiddle(str) {

  return str.length % 2 === 0 ? str[str.length / 2 - 1] + str[str.length / 2] : str[Math.floor(str.length / 2)];
}


// return the middle (or middle two) character(s) of the passed string
// HINT: You could use the ternary operator for this challenge

console.log("getMiddle() returns the middle character in a string of odd length");
try {
  check(getMiddle).whenCalledWith("abc").returns("b");
  check(getMiddle).whenCalledWith("mitch").returns("t");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

console.log("getMiddle() returns the middle characters in a string of even length");
try {
  check(getMiddle).whenCalledWith("abcd").returns("bc");
  check(getMiddle).whenCalledWith("blob").returns("lo");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare getCharCode here

function getCharCode(char) {

  let charCode = char.charCodeAt();
  return "The ASCII character for " + char + " is " + charCode;
}

// returns a sentence stating the character code for a given character
// Look up ASCII online to get a better idea of what a character code is
// Look up a useful JavaScript method for dealing with charCodes !

console.log("getCharCode() will return a message stating the ascii code of a passed char");

try {
  check(getCharCode).whenCalledWith("A").returns("The ASCII character for A is 65");
  check(getCharCode).whenCalledWith("b").returns("The ASCII character for b is 98");
  check(getCharCode).whenCalledWith("z").returns("The ASCII character for z is 122");
  check(getCharCode).whenCalledWith("k").returns("The ASCII character for k is 107");
  check(getCharCode).whenCalledWith("!").returns("The ASCII character for ! is 33");
  check(getCharCode).whenCalledWith("M").returns("The ASCII character for M is 77");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare createPercentage here
function createPercentage(num1, num2) {
  
  return Math.round(num1 / num2 * 100) + "%";
}


// should take 2 numbers and work out their percentage

console.log('createPercentage() creates a percentage string in the form "--%"');

try {
  check(createPercentage).whenCalledWith(1, 2).returns("50%");
  check(createPercentage).whenCalledWith(50, 100).returns("50%");
  check(createPercentage).whenCalledWith(2, 3).returns("67%");
  check(createPercentage).whenCalledWith(3, 4).returns("75%");
  check(createPercentage).whenCalledWith(1, 7).returns("14%");

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}

// declare extractNumber here
function extractNumber (str){
 
  //Use the replace function with a regular expression which searches for all non digit characters and assigns them as a value to the num variable
  //then we need to convert the num value from a string data type to an number data type using the parseInt method.
  let num = str.replace(/\D/g, '');
  return parseInt(num);
}


// should extract a number embedded in a string surrounded by ( ) parentheses

console.log("extractNumber() should return the number buried inside a string");

try {
  check(extractNumber).whenCalledWith("lasjdasasj(123)asljdlajk").returns(123);
  check(extractNumber).whenCalledWith("qwasdaoyer(44687)iuwyeibasdahgsd").returns(44687);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(19827)iusdfsdfsd").returns(19827);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(5601)iusdfsdfsd").returns(5601);
  check(extractNumber).whenCalledWith("qwasdasdfsyer(29)iusdfsdfsd").returns(29);

  printGreenMessage("Pass ✔");
} catch (error) {
  printRedMessage("Fail ✗");
  printRedMessage(error);
}
