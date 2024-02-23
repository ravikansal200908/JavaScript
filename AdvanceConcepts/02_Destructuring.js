/*
- Destructuring in JavaScript is a convenient way to extract multiple values.
- From arrays or objects and assign them to variables in a single statement.
- It provides a concise syntax to unpack values from arrays or objects into distinct variables.
*/


/* ======================================================= Array Destructuring */
const numbers = [1, 2, 3, 4, 5];

// ...rest must be come in the last
const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);


/* ======================================================= Object Destructuring */
const person = {
    firstName: 'Ravi',
    lastName: 'Kansal',
    age: 30,
    country: 'INDIA'
};
// Extracting values from the object into individual variables
const { firstName, lastName, ...details } = person;
console.log(firstName);
console.log(lastName);
console.log(details);


/* ======================================================= Function Parameter Destructuring */
// Destructuring function parameters
function printUserDetails({ firstName, lastName, age }) {
    console.log(`${firstName} ${lastName} is ${age} years old.`);
}

const user = {
    firstName: 'test',
    lastName: 'user',
    age: 25
};

printUserDetails(user);
