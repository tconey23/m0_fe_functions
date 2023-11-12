// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

//The includes() method is called on the string "Hello World" with the argument "Hello"
//This method tests whether the string "Hello" is contained within the string "Hello World"
//In this case the return value is True
"Hello World".includes("Hello");

//The endsWith() method is called on the string "Hello World" with the argument "Hello"
//This method tests whether the string "Hello World" and with the string "Hello"
//In this case the return value is False
"Hello World".endsWith("Hello");

//The endsWith() method is called on the string "Hello World" with the argument "rld"
//This method tests whether the string "Hello World" and with the string "rld"
//In this case the return value is True
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


//The length() method is called on the lastName variable and a comparison operator is used to determine whether the 
//length of the lastName variable is greater than or equal to 5
// The console.log() statement prints the return value of True to the console.

//The includes() method is called on the midName variable with an argument of " " in order to determine if the midName variable contains any spaces. 
//The console.log() statement prints the return value of True to the console.
var lastName = "Coney";
var midName = "Charles Edward"

console.log(lastName.length>=5)

console.log(midName.includes(" "))



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var beatles = ["John", "Paul", "George", "Ringo"]
var metallica = ["James", "Kirk", "Lars", "Rob"]

//variable arrays assigned to beatles and metallica.
//The length() method is called on both arrays and a comparison operator is used to determine whether
//The beatles and metallica arrays contain the same number is elements (names)
//The console.log statement is used to return the value of True and print it to the console. 
console.log(metallica.length === beatles.length)


//The startsWith() method is called on both arrays in the first index position. 
//This method is used to determine whether the strings in the first index positions start with "J"
// and a logical operator is used to determine whether the first letter for both variables match
// The console.log statement prints the return value of True to the console. 
console.log(beatles[0].startsWith("J") && metallica[0].startsWith("J"))


