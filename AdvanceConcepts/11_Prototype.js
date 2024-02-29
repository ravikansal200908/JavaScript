/*
- In JavaScript, each object has a prototype, which serves as a blueprint for the object.
- Prototypes are essentially objects themselves,
- And they contain properties and methods that are accessible to all instances created from them.
- Objects inherit properties and methods from their prototypes, allowing for code reuse and establishing a prototype chain.
*/


/* ======================================================= Prototype */
// Creating a prototype object
const personPrototype = {
    greet: function () {
        return `Hello, my name is ${this.name}. and age is ${this.age}`;
    }
};

// Creating an object using the prototype
const ravi = Object.create(personPrototype);
ravi.name = 'Ravi';
ravi.age = 30;

console.log(ravi.greet()); // Output: Hello, my name is Ravi.


/* ======================================================= Constructor Functions */
// Constructor function to create objects
function Person(name) {
    this.name = name;
}

// Adding methods to the prototype of the constructor function
Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}.`;
};

// Creating objects using the constructor function
const shanky = new Person('Shanky');

console.log(shanky.greet()); // Output: Hello, my name is John.



