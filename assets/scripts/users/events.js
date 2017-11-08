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
  // console.log(row)
  api.removeFromCart(data)
    .then(ui.removeProductSuccess)
    .then(() => {
      $(row).empty()
    })
    .then(ui.calculateTotal)
    .catch(ui.removeProductFailure)
}

const populateProducts = () => {
  api.populate()
    .then(ui.populateSuccess)
    .catch(ui.populateFailure)
}

const emptyUserCart = () => {
  api.emptyUserCart()
}

const viewCart = () => {
  ui.viewCartSuccess()
}

const clearCart = () => {
  $('.cart-content').empty()
}

const clearLoginForm = () => {
  $('#login')[0].reset()
}

const clearSignUpForm = () => {
  $('#sign-up')[0].reset()
}

const clearPassForm = () => {
  $('#change-password')[0].reset()
}

const clearPassMessage = () => {
  $('#password-message').text('')
}

const clearLoginMessage = () => {
  $('#login-message').text('')
}

const addHandlers = () => {
  $('.content').on('click', '#add-to-cart', onAddToCart)
  $('.cart-content').on('click', '.removeProduct', onRemoveProduct)
  $('#cart').on('click', viewCart)
  $('#cartModal').on('hidden.bs.modal', clearCart)
  $('#loginModal').on('hidden.bs.modal', clearLoginForm)
  $('#loginModal').on('show.bs.modal', clearLoginMessage)
  $('#signupModal').on('hidden.bs.modal', clearSignUpForm)
  $('#passwordModal').on('hidden.bs.modal', clearPassForm)
  $('#passwordModal').on('show.bs.modal', clearPassMessage)
}

module.exports = {
  addHandlers,
  populateProducts,
  viewCart,
  emptyUserCart
}
