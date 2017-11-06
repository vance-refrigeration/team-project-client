'use strict'

const config = require('../config')
const store = require('../store')

const getOrders = () => {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createOrder = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getOrders,
  createOrder
}
