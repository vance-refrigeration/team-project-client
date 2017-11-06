'use strict'

const api = require('./api')
const ui = require('./ui')

const getAllOrders = (event) => {
  // console.log('Get products event invoked')
  event.preventDefault()
  // console.log('Target is', event.target)
  api.getOrders()
    .then(ui.getOrdersSuccess)
    .catch(ui.getOrdersFailure)
}

const addHandlers = () => {
  // need to add jquery for get products to display all
  $('#getOrders').on('click', getAllOrders)
}

module.exports = {
  addHandlers
}
