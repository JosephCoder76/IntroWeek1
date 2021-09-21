//Part 1

// You need to think carefully about the data types you will use for each variable

// - Create a variable called `firstName` and assign it a value representing your name. Log this variable and log its type.

// - Create a variable called `lastName` and assign it a string. Log this variable and log its type

// - Create a variable called `age` and assign it a value for your age. Log this variable and log its type

// - Create a variable called `hasPets` and assign it a value, this value should indicate whether you have pets or not. Log this variable and log its type

// - Create a variable called `email` and assign it a value with your email address. Log this variable and log its type

let firstName = "Jonathan";
console.log(firstName + " string type")

let lastName = "Joseph";
console.log(lastName + " string type")

let age = 45;
console.log(age + " number type")

let hasPets = "Yes";
console.log(hasPets + " string type")

let email = "chenstyle@talk21.com" 
console.log(email + " string type")

//Part 2
// For this task you should use the variables you created in Task 1. You should use your variables from the previous section in this task.

// - Create a variable called `message` which is a string in the following form: `"Hello my name is <firstName> <lastName> and I'm <age> years old"`.
//   You should look into [template literals](https://javascript.info/types#string) for this task.

// - Create a variable called `initials` which is a string consisting of 2 letters - just the first letter from `firstName` and `lastName`.

// - Create a variable called `fullName` which is a string in the form: `"<firstName> <lastName>"`

// - Create a variable called `petInfo` which is `"I have pets"` or `"I don't have pets"` depending on the value of your `hasPets` variable.
//   You should look into [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) for this task. You should try changing the value of the `hasPets` 
//   boolean in order to observe a change in the value of the `petInfo` variable.

let message = "Hello my name is " + firstName + " " + lastName + " and I'm " + age + " years old"
console.log(message);

let initials = firstName.slice(0,1) + lastName.slice(0,1);
console.log(initials);

let fullName = firstName + " " + lastName;
console.log(fullName);

let petInfo = hasPets + " I have pets";
console.log(petInfo);