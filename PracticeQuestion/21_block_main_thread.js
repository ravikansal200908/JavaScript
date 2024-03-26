console.log("start")

setTimeout(() => {
    console.log("Callback")
}, 5000);

console.log("end")

let start = new Date().getTime()
let end = start
while (end < start + 10000) {
    end = new Date().getTime();
}

console.log("While expire")
