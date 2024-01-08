console.log("a");
setTimeout(() => {
    console.log("b");
}, 300);
console.log("c");

console.log("a");
setTimeout(() => {
    console.log("b");
}, 0);
console.log("c");


/*
- output would be a, c, b
- because of task priority
- console has high priority than settimeout
*/
