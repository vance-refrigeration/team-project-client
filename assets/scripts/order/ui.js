'use strict'

const ordersTemplate = require('../templates/orders.handlebars')
const store = require('../store')

const getOrdersSuccess = function (data) {
  // console.log('got all orders data ', data)
  $('#getOrdersModal').modal('hide')
  const oldOrdersHtml = ordersTemplate({ orders: data.orders })
  $('#getOrdersBody').append(oldOrdersHtml)
  $('#getOrdersMessageModal').modal('show')
}

const getOrdersFailure = function () {
}

const createOrderSuccess = function (data) {
  store.user.cart = []
  $('.checkout-button').hide()
}

const createOrderFailure = function () {
}

module.exports = {
  getOrdersSuccess,
  getOrdersFailure,
  createOrderSuccess,
  createOrderFailure
}
