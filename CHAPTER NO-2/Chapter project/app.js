                                        // Chapter-2 Project

                                        // Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the 
// value in kilometers in the following format: 
// The distance of 130 kms is equal to 209.2142 miles
// For reference, 1 mile equals 1.60934 kilometers.

// Answer: 

let distanceMiles = 130;
//1 mile equals 1.60934 kilometers
let distanceKM = distanceMiles * 1.60934;
console.log("The distance of " + distanceMiles + " miles is equal to " + distanceKM + " kilometers");


                                        // BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console.

// Answer:


let pounds = 180;                      //weight in kg
let weight = pounds / 2.2046;         //2.2046 pounds in a kilo
                                      

let inches = 72;                      //height in cm
let height = inches * 2.54;           //1 inch = 2.54 centimetres.
console.log(weight, height);

let bMi = weight/(height/100*height/100);
console.log(bMi);

                                       // Self-check quiz

// 1. What data type is the following variable? 
// const c = "5";

// Answer: Data type of variable c is "String"


// 2. What data type is the following variable? 
// const c = 91;

// Answer: The variable c in the given code is of the data type "number."


// 3. Which one is generally better, line 1 or line 2?
// let empty1 = undefined; //line 1
// let empty2 = null; //line 2

// Answer: let empty2 = null; //line 2


// 4. What is the console output for the following? 
// let a = "Hello";
// a = "world";
// console.log(a);

// Answer: world


// 5. What will be logged to the console?
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);

// Answer: Hello world!


// 6. What is the value of a? 
// let a = "Hello";
// a = prompt("world");
// console.log(a)

// Answer: The value of "a" will be the string entered by the user in the prompt dialog.




// 7. What is the value of b output to the console? 
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);

// Answer: 71


// 8. What is the value of result?
// let result = 3 + 4 * 2 / 8; 

// Answer: 4


// 9. What is the value of total and total2?
// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);

// Answer: 16 and 536


// 10. What is logged to the console here?
// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0); 
// console.log(a == 5 && b == 4); 
// console.log(true ||false); 
// console.log(a == 3 || b == 10); 
// console.log(a == 3 || b == 7); 

// Answer: true
        // false
        // true
        // true
        // false