'use strict'

// const store = require('../store')
const productsTemplate = require('../templates/products.handlebars')

const populateSuccess = (data) => {
  const productsHtml = productsTemplate({ products: data.products })
  $('.content').append(productsHtml)
}
const populateFailure = (error) => {
  console.log(error)
}

module.exports = {
  populateSuccess,
  populateFailure
}
