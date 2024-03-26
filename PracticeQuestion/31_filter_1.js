const users = [
    { f_n: "ravi", l_n: "kansal", age: 30 },
    { f_n: "shanky", l_n: "kumar", age: 30 },
    { f_n: "sahli", l_n: "singh", age: 25 },
    { f_n: "anku", l_n: "thakur", age: 27 },
    { f_n: "mohit", l_n: "kumar", age: 29 },
    { f_n: "anshul", l_n: "thakur", age: 25 },
]

// Get f_n where age is below 30

const out1 = users.filter((x) => x.age < 30)

console.log("output is : ", out1)

// chaining the method
const out2 = users.filter((x) => x.age < 30).map((x) => x.f_n)

console.log("output is : ", out2)
