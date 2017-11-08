'use strict'

const store = require('../store')
const productsTemplate = require('../templates/products.handlebars')
const cartTemplate = require('../templates/cart.handlebars')

const populateSuccess = (data) => {
  const productsHtml = productsTemplate({ products: data.products })
  $('.content').append(productsHtml)
}
const populateFailure = () => {
  $('#message').text('There was an error, please try again')
}

const addToCartSuccess = (data) => {
  $('#message').text('Item has been added to your shopping cart')
  store.user = data.user
  console.log('store user is', store.user)
}
const addToCartFailure = () => {
  $('#message').text('There was an error, please try again')
}

const calculateTotal = () => {
  let cartTotal = 0
  for (let i = 0; i < store.user.cart.length; i++) {
    cartTotal += parseInt(store.user.cart[i].price)
  }
  $('#total-price').text(cartTotal)
  // do not display cart-total <p> text if cartTotal = 0
  if (cartTotal === 0) {
    $('#cart-total').text('')
  }
}

const viewCartSuccess = () => {
  const cartHtml = cartTemplate({ products: store.user.cart })
  $('.cart-content').append(cartHtml)
  calculateTotal()
}

const removeProductSuccess = (data) => {
  $('#message').text('Item has been removed from your shopping cart')
  store.user = data.user
  console.log('store user is', store.user)
}

module.exports = {
  populateSuccess,
  populateFailure,
  addToCartSuccess,
  addToCartFailure,
  viewCartSuccess,
  calculateTotal,
  removeProductSuccess
}
