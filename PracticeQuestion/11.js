// ReferenceError
console.log(a)
let a = 10;
var b = 100;

// =======================================
let a = 10;
console.log(a)
var b = 100;

console.log(a)
console.log(b)
console.log(window.b)  // Correct
console.log(this.b)  // Correct
console.log(window.a)  // Incorrect
console.log(this.a)  // Incorrect

// =======================================
// SyntaxError
let a = 10;
let a = 100;

// Or if we not assign value to const

// =======================================
// TypeError
const b = 10;
b = 1000;
console.log(b)
