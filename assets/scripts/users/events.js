'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

// we are here
const onAddToCart = (event) => {
  event.preventDefault()
  event.target???
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
//

const addHandlers = () => {
  $('#add-to-cart').on('submit', onAddToCart)
}

module.exports = {
  addHandlers
}
