'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGetAllOrders = (event) => {
  // console.log('Get products event invoked')
  event.preventDefault()
  $('#getOrdersBody').empty()
  // console.log('Target is', event.target)
  api.getOrders()
    .then(ui.getOrdersSuccess)
    .catch(ui.getOrdersFailure)
}

const onCreateOrder = (event) => {
  // console.log('Get products event invoked')
  event.preventDefault()
  // console.log('Target is', event.target)
  api.createOrder()
    .then(ui.createOrderSuccess)
    .catch(ui.createOrderFailure)
}
// Start of stripe code
let tokenTriggered = false

const stripeHandler = StripeCheckout.configure({
  key: 'pk_test_n5itDkuM2xHubxhygUjisoph',
  token: function (token) {
    $('#stripeToken').val(token.id)
    $('#stripeEmail').val(token.email)
    tokenTriggered = true
  },
  closed: function () {
    if (!tokenTriggered) {
      console.log('Close button behavior here')
    } else {
      $('#cartModal').modal('hide')
      console.log('Success!!')
    }
  }
})

const stripeSubmit = function () {
  let cartTotal = 0
  for (let i = 0; i < store.user.cart.length; i++) {
    cartTotal += parseInt(store.user.cart[i].price)
  }
  cartTotal *= 100
  stripeHandler.open({
    name: 'Vance Refrigeration',
    amount: cartTotal
  })
}

const makePayment = function (event) {
  event.preventDefault()
  stripeSubmit()
}

// End of stripe code
const addHandlers = () => {
  // $('#getOrders').on('click', onGetAllOrders)
  $('#createOrder').on('click', onCreateOrder)
  $('#getOrdersForm').on('submit', onGetAllOrders)
  $('#checkout-button').on('click', makePayment)
  // need to add jquery for create order
}

module.exports = {
  addHandlers
}
