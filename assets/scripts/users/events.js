'use strict'

// const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onAddToCart = (event) => {
  event.preventDefault()
  const button = event.target
  const name = $(button).attr('data-name')
  const description = $(button).attr('data-description')
  const price = $(button).attr('data-price')
  const id = $(button).attr('data-id')
  const product = {name: name, description: description, price: price, id: id}
  const data = {product}
  api.addToCart(data)
    .then(ui.addToCartSuccess)
    .catch(ui.addToCartFailure)
}

const populateProducts = () => {
  api.populate()
    .then(ui.populateSuccess)
    .catch(ui.populateFailure)
}

const viewCart = () => {
  ui.viewCartSuccess()
    .catch(ui.viewCartFailure)
}

const addHandlers = () => {
  $('.content').on('click', '#add-to-cart', onAddToCart)
  $('#cart').on('click', viewCart)
}

module.exports = {
  addHandlers,
  populateProducts,
  viewCart
}
