'use strict'

const api = require('./api')
const ui = require('./ui')

const getAllProducts = (event) => {
  // console.log('Get products event invoked')
  event.preventDefault()
  // console.log('Target is', event.target)
  api.getProducts()
    .then(ui.getProductsSuccess)
    .catch(ui.getProductsFailure)
}

const addHandlers = () => {
  // need to add jquery for get products to display all
  $('#getAllProducts').on('click', getAllProducts)
}

module.exports = {
  addHandlers
}
