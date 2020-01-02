import asyncHandler from 'express-async-handler'
import { Container } from 'typedi'
import AuthService from '../services/auth'

/**
 * @desc auth test route
 * @route GET /api/auth
 * @auth public
 */
export const testingCtrl = asyncHandler(async (req, res, next) => {
  const authServiceInstance = await Container.get(AuthService)
  const msg = await authServiceInstance.testingService()
  return res.status(201).json({ msg })
})

/**
 * @desc register new user
 * @route POST /api/auth/signup
 * @auth public
 */
export const signUpCtrl = asyncHandler(async (req, res, next) => {
  const authServiceInstance = await Container.get(AuthService)
  const {
    user,
    authToken,
    verifyToken,
  } = await authServiceInstance.signUpService(req.body)
  return res.status(201).json({ user, authToken, verifyToken })
})

/**
 * @desc user signin
 * @route POST /api/auth/signin
 * @auth public
 */
export const signInCtrl = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body
  const authServiceInstance = await Container.get(AuthService)
  const { user, token } = await authServiceInstance.signInService(
    email,
    password
  )
  return res.status(201).json({ user, token })
})

/**
 * @desc get jwt payload for user
 * @route GET /api/auth/details
 * @auth private
 */
export const getUserCtrl = asyncHandler(async (req, res, next) => {
  return res.status(200).json({ user: req.currentUser })
})

/**
 * @desc verify email & continue to create profile
 * @route PUT /api/auth/verify-email
 * @auth private
 */
export const setVerifiedCtrl = asyncHandler(async (req, res, next) => {
  const authServiceInstance = await Container.get(AuthService)
  const { user } = await authServiceInstance.setVerifiedService(
    req.payload.verifyToken
  )
  next()
})

/**
 * @desc create & mail password reset token
 * @route PUT /api/auth/forgot-password
 * @auth private
 */
export const forgotPassCtrl = asyncHandler(async (req, res, next) => {
  const authServiceInstance = await Container.get(AuthService)
  const { userData } = await authServiceInstance.forgotPassService(
    req.payload.id
  )
  return res.status(200).json(userData)
})

/**
 * @desc verifies resetToken and sets new password
 * @route PUT /api/auth/reset-password
 * @auth private
 */
export const resetPassCtrl = asyncHandler(async (req, res, next) => {
  const authServiceInstance = await Container.get(AuthService)
  const { userData } = await authServiceInstance.resetPassService(
    req.payload.id,
    req.body
  )
  return res.status(200).json(userData)
})

/**
 * @desc removes token
 * The reason for a logout route could be deleting a 'push notification token'
 * so the device stops receiving push notifications after logout.
 * @route GET /api/auth/signout
 * @auth private
 */
export const signOutCtrl = asyncHandler(async (req, res, next) => {
  const authServiceInstance = await Container.get(AuthService)
  const { token } = await authServiceInstance.signOutService(
    req.headers['authorization']
  )
  return res.status(200).json(token)
})

/**
 * @desc deletes one user
 * @route DELETE /api/auth/delete
 * @auth private
 */
export const delUserCtrl = asyncHandler(async (req, res, next) => {
  const authServiceInstance = await Container.get(AuthService)
  await authServiceInstance.delUserService(req.payload.id)
  return res.status(204).json({ msg: 'success: user was removed' })
})
