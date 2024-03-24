// function x() {
//     for (var i = 1; i <= 5; i++) {

//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
//     console.log("Hello user")
// }
// x()

// =========================================

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }
//     console.log("Hello user")
// }
// x()

// =========================================
// get same output with var
function x() {
    for (var i = 1; i <= 5; i++) {
        function close() {
            setTimeout(() => {
                console.log(i)
            }, i * 1000);
        }
        close(i)
    }
    console.log("Hello user")
}

x()