const cart = ["shoes", "pants", "kurta"]

api.createOrder(cart, function () {

    api.processToPayment(function () {

        api.showOrderSummary(function () {
            api.updateWallet()
        })
    })
})
