// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(){
    return `Hello!`
}
console.log(greeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name){
    return `Hello ${name}!`;
}
console.log(customGreeting("Tom"))

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(fullName){
    return `Hello ${fullName}!`;
}
var firstName = "Thomas"
var midName = "Charles Edward"
var lastName = "Coney"
var fullName = firstName.concat(" ", midName, " ", lastName)

console.log(greetPerson(fullName))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.


    function square(num){
        var squaredNum = num * num
        return `${num} squared i.e. ${num} x ${num} equals ${squaredNum}`
    
    }
    
    console.log(square(10))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(qty, item){

    if(qty>3){return `${item} is STOCKED`}
    else if(qty>0 && qty<=3){return `${item} stock is running LOW`}
    else if(qty<1){return `${item} is OUT of stock`}
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"