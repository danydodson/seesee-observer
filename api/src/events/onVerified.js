import logger from '../loaders/logger'

export const sendVerified = {
  email: user => {
    logger.info(`📧  a verified notification was sent to ${user.email}`)
  },
}

export class OnVerified {
  constructor(ee) {
    this.ee = ee
  }

  sendMail(user) {
    this.ee.emit('onSignUp', user)
  }
}
