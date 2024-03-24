// Shadowing
var a = 100
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)  // Shadowing output would be 10

// =========================================

let b = 100
{
    let b = 20;
    console.log(b)
}
console.log(b)  // Shadowing output would be 100

// =========================================

const b1 = 100
{
    const b1 = 20;
    console.log(b1)
}
console.log(b1)  // Shadowing output would be 100

// =========================================
// illegal shadowing 
// invalid
let a1 = 20
{
    var a1 = 30
    console.log(a1)
}

// valid
let a2 = 20
{
    let a2 = 30
    console.log(a2)
}

// valid
var a3 = 20
{
    var a3 = 30
    console.log(a3)
}

// valid
var a4 = 20
{
    let a4 = 30
    console.log(a4)
}
