var a = 10
{
    console.log(a)
    let a = 30
    console.log(a)
}
console.log(a)

/*
- It shows error in line 3 because of hoisting concept.
- A block can contain declaration first to access local varialbe with same name.
- This is for let and const because in we need to decalare variable first.
*/
