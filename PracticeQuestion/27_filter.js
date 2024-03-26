const arr = [5, 1, 3, 2, 6]

function isEven(x) {
    return x % 2 == 0
}

const out1 = arr.filter(isEven)
console.log("out1 : ", out1)


function greaterThan4(x) {
    return x > 4
}

const out2 = arr.filter(greaterThan4)
console.log("out2 : ", out2)

const out3 = arr.filter((x) => x > 4)
console.log("out3 : ", out3)