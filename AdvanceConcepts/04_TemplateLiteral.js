/*
- Introduced in ECMAScript 2015 (ES6) for creating strings in JavaScript.
- They provide a way to embed expressions and multiline strings more conveniently.
- Compared to traditional string concatenation or interpolation methods.
*/


/* ======================================================= Basic Usage */
const myname = 'Ravi';
const age = 30;
const greeting = `Hello, my name is ${myname} and I am ${age} years old.`;

console.log(greeting);


/* ======================================================= Multiline Strings */
const multilineString = `
This is a multiline
string using template literals.
It allows for easy formatting
without the need for escape characters.
`;

console.log(multilineString);


/* ======================================================= Expression Interpolation */
const a = 10;
const b = 20;
const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);


/* ======================================================= Tagged Templates */
function tag(strings, ...values) {
    console.log("Array of string : ", strings);
    console.log("Array of interpolated values : ", values);
    return 'Customized string'; // Return customized string
  }
  
  const a1 = 10;
  const b1 = 20;
  const customizedString = tag`The sum of ${a1} and ${b1} is ${a1 + b1}.`;
  
  console.log(customizedString);
  // Output: Customized string
  