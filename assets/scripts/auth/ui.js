'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully! Please sign in.')
  $('#signupModal').modal('hide')
  // console.log('yoooooooo')
}

const signUpFailure = function (error) {
  $('#signup-message').text('Error on sign up. Please try again.')
  console.error(error)
}

const signInSuccess = function (response) {
  $('#message').text('You\'re now signed in.')
  store.user = response.user
  $('#loginModal').modal('hide')
  console.log(store.user)
}

const signInFailure = function () {
  $('#login-message').text('Error on sign in. Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
