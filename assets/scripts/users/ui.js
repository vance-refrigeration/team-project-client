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
  store.user = data.user
  if (store.user.cart.length === 1) {
    $('#message').text('Item added to cart.')
  } else {
    $('#message').text('Item added to cart. There are now ' + store.user.cart.length + ' items in your cart.')
  }
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
    $('#cart-total').hide()
  } else {
    $('#cart-total').show()
  }
}

const viewCartSuccess = () => {
  const cartHtml = cartTemplate({ products: store.user.cart })
  $('.cart-content').append(cartHtml)
  calculateTotal()
  if (store.user.cart.length > 0) {
    $('.checkout-button').show()
  }
}

const removeProductSuccess = (data) => {
  store.user = data.user
  if (store.user.cart.length === 0) {
    $('.checkout-button').hide()
    $('#message').text('Item removed from cart. Your cart is now empty.')
  } else if (store.user.cart.length === 1) {
    $('#message').text('Item removed from cart. There is now 1 item in your cart.')
  } else {
    $('#message').text('Item removed from cart. There are now ' + store.user.cart.length + ' items in your cart.')
  }
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
