'use strict'

const config = require('../config')
const store = require('../store')

const addToCart = (data) => {
  console.log('addToCart', data)
  return $.ajax({
    url: config.apiOrigin + '/add-product/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  addToCart
}
