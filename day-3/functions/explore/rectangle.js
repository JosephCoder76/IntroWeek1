// Create a function makeRectangle that will print an m by n rectangle of * to the screen

// For example, makeRectangle(3,5) should print a 3 by 5 rectangle of *, as shown below:

//  * * *
//  * * *
//  * * *
//  * * *
//  * * *

// You don't need to use loops for this one! :)

function makeRectangle(num1, num2) {

//Firstly we use the repeat method to create the three *** and append it with the next line switch
let threeStars = '*'.repeat(num1) + "\n";

//Now we take the value of threeStars and use th repeat method again for the number of rows and pass num 2 to the repeat method
let finalString = threeStars = threeStars.repeat(num2)

return finalString;

}

console.log(makeRectangle(3,5));
