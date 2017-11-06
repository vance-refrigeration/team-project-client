'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetAllOrders = (event) => {
  // console.log('Get products event invoked')
  event.preventDefault()
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

const addHandlers = () => {
  $('#getOrders').on('click', onGetAllOrders)
  $('#createOrder').on('click', onCreateOrder)
  // need to add jquery for create order
}

module.exports = {
  addHandlers
}
