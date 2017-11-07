'use strict'

const config = require('../config')
const store = require('../store')

const addToCart = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/add-product/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const removeFromCart = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/remove-product/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const populate = () => {
  return $.ajax({
    url: config.apiOrigin + '/products/',
    method: 'GET'
  })
}

module.exports = {
  addToCart,
  populate,
  removeFromCart
}
