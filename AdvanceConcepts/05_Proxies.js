/*
- Proxies in JavaScript provide a way to intercept and customize fundamental operations on objects.
- Such as property access, assignment, enumeration, function invocation, etc.
- They allow you to create a wrapper around an object and define custom behavior for various operations.
- They are commonly used in scenarios like data validation, logging, caching, and more.
- Before proxies were introduced, developers often had to rely on manual methods like getter and setter methods.
- Or using object augmentation techniques to achieve similar functionality.
- But proxies offer a more standardized and versatile solution.
*/


/* ======================================================= Basic Proxy Usage */
const target = {
    name: 'Ravi',
    age: 30
};

const handler = {
    get: function (target, prop, receiver) {
        console.log(`Getting property "${prop}"`);
        return target[prop];
    },
    set: function (target, prop, value, receiver) {
        console.log(`Setting property "${prop}" to "${value}"`);
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Output: Getting property "name", Ravi
proxy.age = 35; // Output: Setting property "age" to "35"
console.log(proxy.age); // Output: Getting property "age", 35


/* ======================================================= Validation with Proxies */

const validator = {
    set: function (target, prop, value) {
        if (prop === 'age') {
            if (typeof value !== 'number' || value <= 0) {
                throw new TypeError('Age must be a positive number');
            }
        }
        target[prop] = value;
        return true;
    }
};

const person = new Proxy({}, validator);

person.age = 30; // Valid
console.log(person.age); // Output: 30

// person.age = -5; // Throws TypeError: Age must be a positive number


/* ======================================================= Logging with Proxies */
const logger = {
    get: function (target, prop) {
        if (typeof target[prop] === 'function') {
            return function (...args) {
                console.log(`Calling function "${prop}" with arguments:`, args);
                return target[prop](...args);
            }
        }
        return target[prop];
    }
};

const math = new Proxy(Math, logger);

console.log(math.max(5, 10)); // Output: Calling function "max" with arguments: [5, 10], 10
console.log(math.min(5, 10)); // Output: Calling function "min" with arguments: [5, 10], 5

