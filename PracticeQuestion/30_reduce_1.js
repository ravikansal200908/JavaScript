const users = [
    { f_n: "ravi", l_n: "kansal", age: 30 },
    { f_n: "shanky", l_n: "kumar", age: 30 },
    { f_n: "sahli", l_n: "singh", age: 25 },
    { f_n: "anku", l_n: "thakur", age: 27 },
    { f_n: "mohit", l_n: "kumar", age: 29 },
    { f_n: "anshul", l_n: "thakur", age: 25 },
]

// Get age and age count

const out1 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log("output is : ", out1)
