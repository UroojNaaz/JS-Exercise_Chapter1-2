                                          // Chapter-2 (Practice exercise)
                                          
                                          // Practice exercise 2.1
//  What are the types of these variables listed below? Verify this with typeof and 
//  output the result to the console:
//  let str1 = 'Laurence'; 
//  let str2 = "Svekis"; 
//  let val1 = undefined;
//  let val2 = null;
//  let myNum = 1000;

// Answer: 
let str1 = "Laurence"; 
let str2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(typeof(str1));
console.log(typeof(str2));
console.log(typeof(val1));
console.log(typeof(val2));
console.log(typeof(myNum));


                                            //Practice exercise 2.2
//   Create a variable for your name, another one for your age, and another one for 
//   whether you can code JavaScript or not.
//   Log to the console the following sentence, where name, age and true/false are 
//   variables: 
//   Hello, my name is Maaike, I am 29 years old and I can code JavaScript: 
//   true.

// Answer:
let myName = "Maaike";
let myAge = 29;
let coder = true;
let message = "Hello, my name is " + myName + ", I am " + myAge + " " + "years old and I can code JavaScript: " + coder + "."; 
console.log(message);


                                            //Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
// theorem when given the values of the other two sides. The theorem specifies that the 
// relation between the sides of a right-angled triangle is a2 + b2= c2. 

// Answer:
let A = window.prompt("Value No-1?");
let B = window.prompt("Value No-2?");
A = Number(A);
A = Number(B);

// // Pythagorean theorem
let hypotenuseValue = ((A * A) + (B * B))**0.5;
console.log(hypotenuseValue);


                                          //   Practice exercise 2.4

// Create variables for three numbers: a, b, and c. Update these variables with the 
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console
                                            
// Answer:
let a = 4;
let b = 11;
let c = 21;
a = a + b;
a = a / c;
c = c % b;
console.log(a, b, c);