// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?");
}

askForName();

// Formatted the code by moving the console.log statement to the second line
// added semicolons after the statments and moved the closing bracket to the last line of the function.




// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  return sum;
        }
  
  console.log(addThreeNums(1, 2, 3));
  console.log(addThreeNums(4, 2, 7));

  //Added console.log statement to the function calls in order to display the output.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

//corrected "func" to "function"


//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

return avg
  }

  console.log(average(12,20))
  console.log(average(25,200))

  // added console.log statements calling the function and displaying the average of the arguments
  