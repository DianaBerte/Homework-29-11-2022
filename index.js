/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

console.log("Exercise 1: \n")
console.log("Datatypes in JavaScript are just different kinds of data. These are: ")
console.log("1) Numbers; ")
console.log("2) Strings, which are just lines of written content; ")
console.log("3) Booleans, which are a way to define whether a statement is true or false; ")
console.log("4) Undefined, which are statements that haven't been given to the computer (yet); ")
console.log("5) Null, which is a way for the developer to make empty a statement that previously had some content; ")
console.log("6) BigInt and Symbol, which are two datatypes that you don't need to know about for now.")

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("Exercise 2: \n")
console.log("A variable is a statement preceeded by the word 'let', followed by the equal sign, and by another statement. \nFor example: let newStatement = oldStatement. If we read it out loud, it can go like this: \n'let newStatement be the same value of oldStatement'. This way, we give the variable called 'oldStatement' the value of the variable called 'newStatement'.")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

console.log("Exercise 3: \n")
let number1 = 12;
let number2 = 20;
let result = (number1 + number2)

console.log("When we have twelve: ", number1)
console.log("and we add twenty to it: + ", number2)
console.log("... we get the result: ", result)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

console.log("Exercise 4: \n")
let namedX = "I am named X and assigned to number ";
let number = 12;
console.log(namedX + number)

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

console.log("Exercise 5: \n")
let randomName = "I am Name and I'm assigned to the string: ";
let string = "John Doe";
console.log(randomName + string)

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

console.log("Exercise 6: \n")
let anotherNumber = 12;
console.log(anotherNumber - number)

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

console.log("Exercise 7: \n")

let name1 = "john";
let name2 = "John";
console.log(name1 === name2) 

if (name2 === true) {
    console.log("True");
} else {
    console.log("True")
}



