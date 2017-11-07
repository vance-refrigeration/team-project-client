'use strict'

const ordersTemplate = require('../templates/orders.handlebars')

const getOrdersSuccess = function (data) {
  console.log('got all orders data ', data)
  $('#getOrdersModal').modal('hide')
  const oldOrdersHtml = ordersTemplate({ orders: data.orders })
  $('#getOrdersBody').append(oldOrdersHtml)
  $('#getOrdersMessageModal').modal('show')
}

const getOrdersFailure = function (error) {
  console.log('got order data error, error is ', error)
}

const createOrderSuccess = function (data) {
  console.log('create order success ', data)
}

const createOrderFailure = function (error) {
  console.log('create order error, error is ', error)
}

module.exports = {
  getOrdersSuccess,
  getOrdersFailure,
  createOrderSuccess,
  createOrderFailure
}
