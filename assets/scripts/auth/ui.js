'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully! Please sign in.')
  $('#signupModal').modal('hide')
  $('#sign-up')[0].reset()
}

const signUpFailure = function () {
  $('#signup-message').text('Error on sign up. Please try again.')
}

const signInSuccess = function (response) {
  $('#message').text('You\'re now signed in.')
  store.user = response.user
  $('#loginModal').modal('hide')
  $('#login')[0].reset()
  $('.display-when-logged-in').show()
  $('.hide-when-logged-in').hide()
  // console.log(store.user)
}

const signInFailure = function () {
  $('#login-message').text('Error on sign in. Please try again.')
}

const signOutSuccess = function () {
  $('#message').text('You\'re now signed out.')
  store.user = null
  $('.hide-when-logged-in').show()
  $('.display-when-logged-in').hide()
  $('.cart-content').empty()
}

const signOutFailure = function () {
  $('#message').text('Error on sign out.')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully.')
  $('#passwordModal').modal('hide')
  $('#change-password')[0].reset()
}

const changePasswordFailure = function () {
  $('#password-message').text('There was an error. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFailure
}
