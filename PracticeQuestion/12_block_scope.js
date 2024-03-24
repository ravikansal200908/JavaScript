// Scope and Block Scope
// Block scop also follow lexical scope

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)
console.log(b)  // ReferenceError
console.log(c)  // ReferenceError