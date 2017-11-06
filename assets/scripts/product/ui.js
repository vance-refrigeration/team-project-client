'use strict'

const getProductsSuccess = function (data) {
  console.log('got all product data ', data)
}

const getProductsFailure = function (error) {
  console.log('got product data error, error is ', error)
}

module.exports = {
  getProductsSuccess,
  getProductsFailure
}
