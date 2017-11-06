'use strict'

const getOrdersSuccess = function (data) {
  console.log('got all orders data ', data)
}

const getOrdersFailure = function (error) {
  console.log('got order data error, error is ', error)
}

module.exports = {
  getOrdersSuccess,
  getOrdersFailure
}
