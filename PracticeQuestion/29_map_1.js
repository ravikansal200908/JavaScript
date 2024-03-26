const users = [
    {f_n:"ravi", l_n:"kansal", age:30},
    {f_n:"shanky", l_n:"kumar", age:30},
    {f_n:"sahli", l_n:"singh", age:25},
    {f_n:"anku", l_n:"thakur", age:27},
    {f_n:"mohit", l_n:"kumar", age:29},
    {f_n:"anshul", l_n:"thakur", age:25},
]

// get full name

const out1 = users.map((x)=>x.f_n +' '+ x.l_n)
console.log("output is : ", out1)
