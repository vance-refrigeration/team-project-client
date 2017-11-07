'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onAddToCart = (event) => {
  event.preventDefault()
  const button = event.target
  const data = $(button).attr('data-id')
  console.log(data)
  api.addToCart(data)
    .then(ui.addToCartSuccess)
    .catch(ui.addToCartFailure)
}

const populateProducts = () => {
  api.populate()
    .then(ui.populateSuccess)
    .catch(ui.populateFailure)
}

const addHandlers = () => {
  $('#add-to-cart').on('submit', onAddToCart)
}

module.exports = {
  addHandlers,
  populateProducts
}
