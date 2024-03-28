/*
const promise = createOrder(cart);

promise.then(function (orderid){
    proceedToPayment(orderID)
})
*/

console.log("Start")
const URL = "https://api.github.com/users/ravikansal200908"

const user = fetch(URL)

console.log('user : ', user)

// user.then(function(data){
//     console.log('data : ', data)
// })

console.log("End")
