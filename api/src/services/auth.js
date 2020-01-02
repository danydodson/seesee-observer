import config from '../config'
import crypto from 'crypto'

export default class AuthService {
  constructor(container) {
    this.logger = container.get('logger')
    this.userModel = container.get('userModel')
    this.setAuthToken = container.get('authToken')
    this.verifyEmailToken = container.get('verifyToken')
    this.agendaJob = container.get('agendaInstance')
  }

  /**
   * @desc testingService
   */
  async testingService() {
    this.logger.debug('⭐  calling auth test endpoint')
    return { msg: 'auth test route working' }
  }

  /**
   * @desc signUpService
   */
  async signUpService(userObject) {
    this.logger.debug('⭐  calling sign up endpoint')

    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto
      .pbkdf2Sync(userObject.password, salt, 10000, 512, 'sha512')
      .toString('hex')

    this.logger.debug('⭐  creating user')

    const userRecord = await this.userModel.create({
      ...userObject,
      salt: salt,
      hash: hash,
    })

    this.logger.debug('⭐  creating auth token')
    const authToken = await this.setAuthToken(userObject)

    if (!userRecord) {
      this.logger.error('❌ user connot be created')
    }

    this.logger.debug('⭐  createing verify email token')
    const verifyToken = await this.verifyEmailToken(userObject)

    const user = userRecord.toObject()

    const mailData = {
      email: user.email,
      client: config.url.client,
      token: verifyToken,
    }
    await this.agendaJob.now('send-verify-account-email', mailData)

    return { user, authToken, verifyToken }
  }

  /**
   * @desc signInService
   */
  async signInService(email, password) {
    this.logger.debug('⭐  calling sign in endpoint')

    const userRecord = await this.userModel.findOne({ email })

    if (!userRecord) {
      throw new Error('user is not registered')
    }

    let hash = await crypto
      .pbkdf2Sync(password, userRecord.salt, 10000, 512, 'sha512')
      .toString('hex')

    if (userRecord.hash === hash) {
      const token = await this.setAuthToken(userRecord)

      const user = userRecord.toObject()
      Reflect.deleteProperty(user, 'hash')
      Reflect.deleteProperty(user, 'salt')

      return { user, token }
    } else {
      throw new Error('invalid credentials')
    }
  }

  /**
   * @desc setVerifiedService
   */
  async setVerifiedService(token) {
    this.logger.debug('⭐  calling verified email endpoint')

    const user = await this.UserModel.findOne({ verifyToken: token })

    if (!user) {
      process.exit(1)
      this.logger.error('❌ error on finding a user by verifyToken')
      throw new Error('no user found to verify')
    }

    user.verified = true
    user.verifyToken = null
    user.updated = Date.now()

    let updatedUser = await user.save()

    if (!updatedUser) {
      throw new Error('error updating user')
    }

    // TODO validation isnt called if this func is called again

    await this.agendaJob.now('send-verified-account-email', {
      email: user.email,
    })

    return { user }
  }

  /**
   * @desc forgotPassService
   */
  async forgotPassService(id) {
    this.logger.debug('⭐  calling forgot password endpoint')

    const user = await this.UserModel.findOne({ _id: id })

    if (!user) {
      throw new Error('user not found')
    }

    const getTokenObject = user => user.forgotPasswordToken()
    const tokenObject = await getTokenObject(user)
    const token = tokenObject.toString()

    user.resetToken = token
    await user.save()

    this.logger.debug(user)

    const mailData = {
      email: user.email,
      client: config.url.client,
      token: token,
    }
    await this.agendaJob.now('send-forgot-password-email', mailData)

    const userData = await user.forgotPasswordToken(user)

    return { userData }
  }

  /**
   * @desc resetPassService
   */
  async resetPassService(id, userInput) {
    this.logger.debug('⭐  calling reset password endpoint')

    const foundUser = await this.UserModel.findOne({ _id: id })
    const user = await this.UserModel.findOne({
      resetToken: foundUser.resetToken,
    })
    // const user = await this.UserModel.findOne({ resetToken: foundUser.resetToken })

    if (!foundUser || !user) {
      throw new Error('invalid reset password link')
    }

    await user.setPassword(userInput.newPassword)

    user.updated = Date.now()
    user.resetToken = null

    const updatedUser = await user.save()

    if (!updatedUser) {
      throw new Error('error updating password')
    }

    await this.agendaJob.now('send-password-reset-email', { email: user.email })

    const userData = user.resetPasswordUserToJSON()

    return { userData }
  }

  /**
   * @desc signOutService
   * @desc {  }
   */
  async signOutService(auth) {
    const token = auth.split(' ')[1]
    // insert an add to blacklist job here
    return { token }
  }

  /**
   * @desc delUserService
   */
  async delUserService(id) {
    this.logger.debug('⭐  calling destroy user endpoint')

    const user = await this.UserModel.findOne({ _id: id })

    if (!foundUser || user) {
      throw new Error('user not found')
    }

    const del = await this.UserModel.findOneAndRemove({ _id: user._id })

    if (!del) {
      throw new Error('error deleting user')
    }

    return
  }
}
