import logger from '../loaders/logger'

export const sendVerify = {
  email: user => {
    logger.info(`📧  a verify email was sent to ${user.email}`)
  },
}

export class OnSignUp {
  constructor(ee) {
    this.ee = ee
  }

  sendMail(user) {
    this.ee.emit('onSignUp', user)
  }
}
