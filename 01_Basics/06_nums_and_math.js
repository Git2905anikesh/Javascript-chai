// *********************Numbers**********************
// Numbers are pretty straightforward. You can do all the basic math operations you would expect.
// Addition (+), Subtraction (-), Multiplication (*), Division (/), and Modulus (% - which gives you the remainder of a division operation).

const score = 100; // This is a number
console.log("Score:", score);
const balance = new Number(100); // This is also a number, but an object
console.log("Balance:", balance);
console.log(balance.toString().length); // You can use methods on number objects
console.log(balance.toFixed(2)); // toFixed is a method that formats a number using fixed-point notation.

const othernumber = 123.456;
console.log(othernumber.toPrecision(4)); // toPrecision formats a number to a specified length

const hundrad = 1000000000; // You can use underscores to make big numbers more readable
console.log(hundrad. toLocaleString('en-IN')); // toLocaleString formats a number according to locale-specific conventions


// **************************Math Object****************************
// The Math object has properties and methods for mathematical constants and functions. For example:

console.log(Math)
console.log(Math.PI); 
console.log(Math.E);
console.log(Math.abs(4.7)); // abs returns the absolute value
console.log(Math.ceil(4.4)); // ceil rounds up to the nearest integer
console.log(Math.floor(4.7)); // floor rounds down to the nearest integer
console.log(Math.round(4.5)); // round rounds to the nearest integer
console.log(Math.max(1, 3, 2)); // max returns the largest of the given numbers
console.log(Math.min(1, 3, 2)); // min returns the smallest of the given numbers
console.log(Math.random()); // random returns a random number between 0 and 1
console.log((Math.random()*10)+1);// This gives you a random number between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // This gives you a random number between min and max (inclusive)

// You can also use Math to do exponentiation and square roots
console.log(Math.pow(2, 3)); // 2 to the power of 3
console.log(2 ** 3); // This is another way to do exponentiation in JavaScript
console.log(Math.sqrt(16)); // Square root of 16

// There are many more methods and properties in the Math object. You can check them out in the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
