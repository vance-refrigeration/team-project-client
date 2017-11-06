'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#login').on('submit', onSignIn)
  // $('#sign-out').on('click', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
  // $('#clearSignup').on('click', onClearSignup)
  // $('#clearLogin').on('click', onClearLogin)
  // $('#clearPass').on('click', onClearPass)
}

module.exports = {
  addHandlers
}
