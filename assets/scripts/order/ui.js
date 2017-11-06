'use strict'

const getOrdersSuccess = function (data) {
  console.log('got all orders data ', data)
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
