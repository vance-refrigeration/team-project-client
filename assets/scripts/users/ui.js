'use strict'

// const store = require('../store')
const productsTemplate = require('../templates/products.handlebars')

const populateSuccess = (data) => {
  const productsHtml = productsTemplate({ products: data.products })
  $('.content').append(productsHtml)
}
const populateFailure = () => {
  $('#message').text('There was an error, please try again')
}

const addToCartSuccess = () => {
  $('#message').text('Item has been added to your shopping cart')
}
const addToCartFailure = () => {
  $('#message').text('There was an error, please try again')
}

module.exports = {
  populateSuccess,
  populateFailure,
  addToCartSuccess,
  addToCartFailure
}
