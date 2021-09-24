const { check, runTest, skipTest } = require("../../../test-api");

// Once you have passed the current test, change skipTest on the following test to runTest so you are able to run it with Node

runTest("get the multiples of 10 from 10 to 100", function () {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //ForEach * 10 use Map for returning a new array 
  const multiplesOf10 = items.map((nums)=> (nums *10));
  

  check(multiplesOf10).isEqualTo([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
});

runTest("adds ? to the words in order to form queries", function () {
  const words = ["who", "what", "why", "how", "huh"];
  //As we need to return a new Array we can use the map function to iterate through
  //the words array returning a new array of queries, taking the value of the current
  //element and appending the "?" character.
  const queries = words.map((element) => element + '?');

  check(queries).isEqualTo(["who?", "what?", "why?", "how?", "huh?"]);
});

runTest("will get the name and ages of each person in an array", function () {
  const people = [
    { name: "mitch", age: 30 },
    { name: "anat", age: 24 },
    { name: "howard", age: 58 },
  ];
  //Remember that the arg for higher functions is always the value in the array
  //We 3 objects nested in an array here so key becomes reference to the current element,
  //which is an object so we can use . notation to call the key values, i.e key.name
  const namesAndAges = people.map((key)=> `${key.name} - ${key.age}`);

  check(namesAndAges).isEqualTo(["mitch - 30", "anat - 24", "howard - 58"]);
});

runTest("can get the multiples of 3", function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //use the filter method to retrive all the element that are equally divisable by 3 with no 
  //remainder.
  const multiplesOf3 = nums.filter((el)=> el % 3 === 0);

  check(multiplesOf3).isEqualTo([3, 6, 9, 12, 15, 18]);
});

runTest("can get all the words ending in er", function () {
  const words = ["boulder", "wonder", "hello", "hi", "super", "something", "whoa", "booo", "horror"];
  
  //Passing to new Array
  //const wordsEndingInEr = words.filter((el)=> /er$/.test(el));
  //Here we bascially return true or false using the .test method on the regex defined
  //You can use the endsWith method to use an easy quick method for this one. 
  const wordsEndingInEr = words.filter((el)=> el.endsWith("er"));

  check(wordsEndingInEr).isEqualTo(["boulder", "wonder", "super"]);
});

runTest("can get the names of staff over 28", function () {
  const staff = [
    { name: "Anat", age: 22 },
    { name: "Paul C", age: 31 },
    { name: "Paul R", age: 27 },
    { name: "Vel", age: 29 },
    { name: "Sam", age: 30 },
    { name: "Jonny", age: 32 },
    { name: "Ant", age: 26 },
    { name: "Mitch", age: 28 },
    { name: "Tom", age: 24 },
    { name: "Alex", age: 24 },
  ];
  //const namesAndAges = people.map((key)=> `${key.name} - ${key.age}`);
  //Filter all the objects where ages > 28 in to the staffOver28 array
  const staffOver28 = staff.filter((el)=> el.age > 28);
  //Now map all the elements names from the staffOver28 array ion to the names ofStaffOver28 array
  const namesOfStaffOver28 = staffOver28.map((el)=> el.name);
  
  check(namesOfStaffOver28).isEqualTo(["Paul C", "Vel", "Sam", "Jonny"]);
});

runTest("can sum numbers in a list using forEach()", function () {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let sum = 0; // <- don't change this line

  // Try using .forEach() for this task
  nums.forEach((el)=> sum =sum+el);

  check(sum).isEqualTo(120);
});

runTest("can find the index position of X", function () {
  const treasureMap = "adhfashasoasduyoaisyioyadiyfoXsasdiyoiaysidyoiaysfi";

  const positionOfX = treasureMap.indexOf("X");
  // Look at different array methods on MDN or dev docs and try finding the best one for the job
  check(positionOfX).isEqualTo(29);
});

// >>>>>>>>>>> DON'T ALTER ANYTHING BELOW THIS LINE <<<<<<<<<<<<<<<

var USE_ARRAY_METHOD;
