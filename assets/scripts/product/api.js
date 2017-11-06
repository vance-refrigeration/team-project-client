'use strict'

const config = require('../config')

const getProducts = () => {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'GET'
  })
}

module.exports = {
  getProducts
}
