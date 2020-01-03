import asyncHandler from 'express-async-handler'
import auth from '../middleware/auth'
import attachUser from '../middleware/attach'

import {
  testingCtrl,
  signUpCtrl,
  signInCtrl,
  getUserCtrl,
  setVerifiedCtrl,
  forgotPassCtrl,
  resetPassCtrl,
  signOutCtrl,
  delUserCtrl,
} from '../controllers/auth'

import { newProfileCtrl, delProfileCtrl } from '../controllers/profile'

import {
  validateSignUp,
  validateSignIn,
  validateIsVerified,
  validateReset,
  validateResults,
} from '../validation'

import { Router } from 'express'

export default (app, route = Router()) => {
  app.use('/auth', route)

  route.get('/testing', testingCtrl)

  route.post(
    '/signup',
    validateSignUp,
    validateResults,
    asyncHandler(signUpCtrl)
  )
  route.post(
    '/signin',
    validateSignIn,
    validateResults,
    asyncHandler(signInCtrl)
  )
  route.get('/details', auth.required, attachUser, asyncHandler(getUserCtrl))

  route.put(
    '/verify-email',
    auth.required,
    attachUser,
    validateIsVerified,
    validateResults,
    asyncHandler(setVerifiedCtrl),
    asyncHandler(newProfileCtrl)
  )
  route.put(
    '/forgot-password',
    auth.required,
    attachUser,
    asyncHandler(forgotPassCtrl)
  )
  route.put(
    '/reset-password',
    auth.required,
    attachUser,
    validateReset,
    validateResults,
    asyncHandler(resetPassCtrl)
  )

  route.get('/signout', auth.required, attachUser, asyncHandler(signOutCtrl))
  route.delete(
    '/destroy',
    auth.required,
    attachUser,
    asyncHandler(delProfileCtrl),
    asyncHandler(delUserCtrl)
  )
}
