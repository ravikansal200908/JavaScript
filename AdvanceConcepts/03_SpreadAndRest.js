/*
- Spread Operator (...):
    - Used to expand elements of an iterable (like an array) into individual elements.
    - It can be used in function calls, array literals, or object literals.

- Rest Parameter (...):
    - Used to represent an indefinite number of arguments as an array.
    - It's typically used in function parameter lists to gather all remaining arguments into a single parameter.
*/


/* ======================================================= Spread Operator in Arrays */
const num = [1, 2, 3];
// Spread operator used to concatenate arrays
const newNumbers = [...num, 4, 5];

console.log(newNumbers); // Output: [1, 2, 3, 4, 5]


/* ======================================================= Spread Operator in Function Calls */
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Spread operator used to pass array elements as function arguments
// Output: 6


/* ======================================================= Spread Operator in Function Calls */
const num1 = [1, 2, 3];
const [first, ...rest] = num1; // Rest operator used to gather remaining elements

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3]


/* ======================================================= Spread Operator in Function Calls */
const person = { name: 'Ravi', age: 30 };
const newPerson = { ...person, country: 'INDIA' }; // Spread operator used to create a new object with additional properties

console.log(newPerson); // Output: { name: 'Ravi', age: 30, country: 'INDIA' }
