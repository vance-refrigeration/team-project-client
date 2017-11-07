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

const onRemoveProduct = (event) => {
  event.preventDefault()
  const button = event.target
  const id = $(button).attr('data-id')
  const product = {id: id}
  const data = {product}
  const row = button.parentElement.parentElement
  console.log(row)
  api.removeFromCart(data)
    .then(ui.removeProductSuccess)
    .then(() => {
      $(row).empty()
    })
    .catch(ui.removeProductFailure)
}

const populateProducts = () => {
  api.populate()
    .then(ui.populateSuccess)
    .catch(ui.populateFailure)
}

const viewCart = () => {
  ui.viewCartSuccess()
}

const clearCart = () => {
  $('.cart-content').empty()
}

const addHandlers = () => {
  $('.content').on('click', '#add-to-cart', onAddToCart)
  $('.cart-content').on('click', '.removeProduct', onRemoveProduct)
  $('#cart').on('click', viewCart)
  $('#cartModal').on('hidden.bs.modal', clearCart)
}

module.exports = {
  addHandlers,
  populateProducts,
  viewCart
}
