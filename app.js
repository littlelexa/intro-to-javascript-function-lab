/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

  
/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if (age < 18){
        return "Minor";
    } else {
        return "Adult";
    }
}

console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(18));
console.log('Exercise 2 Result:', isAdult(16));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
    if (char === ("a"||"i"||"e"||"o"||"u")){
        return "True"
    } else {
        return "False"
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));
console.log('Exercise 3 Result:', isCharAVowel("y"));
console.log('Exercise 3 Result:', isCharAVowel("b"));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

const generateEmail = (name, domain)=>{
    return (`${name}@${domain}`)
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
console.log('Exercise 4 Result:', generateEmail("lockealexa", "gmail.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
const greetUser = (name, time)=>{
    return (`Good ${time}, ${name}!`)
}


console.log('Exercise 5 Result:', greetUser("Sam", "morning"));
console.log('Exercise 5 Result:', greetUser("Alexa", "Evening"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = (x, y, z)=>{
    if (x >= y && x>=z){
        return x
    }else if (y>=z){
        return y
    }else {
        return z
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(10, 10, 8));
console.log('Exercise 6 Result:', maxOfThree(11, 10, 12));
console.log('Exercise 6 Result:', maxOfThree(2, 10, 10));
console.log('Exercise 6 Result:', maxOfThree(10, 10, 11));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (bill, percentTip)=>{
    return bill * (percentTip / 100)
}

console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log('Exercise 7 Result:', calculateTip(70, 15));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
const convertTemperature = (temp, scale)=>{
    if (scale === 'C'){
        return (temp * (9/5)) + 32
    } else{
        return (temp -32)* (5/9)
    }
}


console.log('Exercise 8 Result:', convertTemperature(32, "C"));
console.log('Exercise 8 Result:', convertTemperature(32, "F"));
console.log('Exercise 8 Result:', convertTemperature(22, "C"));
console.log('Exercise 8 Result:', convertTemperature(79, "F"));


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
const basicCalculator = (x, y, operation)=>{
    if (operation.toLowerCase() === "add"){
        return x + y
    }else if (operation.toLowerCase() === "subtract"){
        return x - y
    }else if (operation.toLowerCase() === "multiply"){
        return x * y
    }else {
        return x / y
    }
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));
console.log('Exercise 9 Result:', basicCalculator(13, 7, "subTract"));
console.log('Exercise 9 Result:', basicCalculator(4, 5, "MULTIPLY"));
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));
