console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let name = 'Matt';
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName(name));

// 3. Function to add two numbers together & return the result
//secondNumber = 10;
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  sumNumbers = firstNumber + secondNumber;
  return sumNumbers;
}
console.log(addNumbers(5, 10));
console.log(addNumbers(-100, 90));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum) {
  productNumbers = firstNum * secondNum * thirdNum;
  return productNumbers;
}
console.log(multiplyThree(23, 5, 1.2));
console.log(multiplyThree(0 ,1 ,0));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(-4));
console.log(isPositive(22.54));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(array.length <= 0) {
    return undefined;
  } else if (array.length > 0) {
    return array[array.length - 1];
  }
}

// let stringArray = ['tacos', 'pizza', 'burgers'];
let emptyArray = [];
console.log(getLast(emptyArray));
console.log(emptyArray);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let returnValue = false;
  for (let item of array) {
      if (item === value) {
        returnValue = true;
      } 
    }
  return returnValue;
}
numArray = [1, 23, 4, 5, -1];
console.log(find(23, numArray));
console.log(find('bird', numArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) {
    return true;
  } else {
    return false;
  }
}
let stringTest = 'hello';
console.log(isFirstLetter('h', stringTest));
console.log(isFirstLetter('H', stringTest));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let num of array) {
    sum = sum + num;
  }
  return sum;
  // TODO: return the sum
}

sumArray = [2, 78, 11, -9];
console.log(sumAll(sumArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let posArray = [];
  // loop through the array
  for (let item = 0; item < array.length; item++) {
    // check if positive
    if (array[item] > 0) {
      posArray = array.slice()    
    }
  }
  return posArray;
}

posNegArray = [-1, 5, 8, 0, 1, -9];
console.log(allPositive(posNegArray));
console.log(posNegArray);

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
