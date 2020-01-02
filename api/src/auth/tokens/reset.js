import jwt from 'jsonwebtoken'
import config from '../../config'

const signForgotPasswordToken = (payload = {}) => {
  const options = {
    issuer: 'seesee_api',
    subject: 'forgot_password',
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  }

  return jwt.sign(
    {
      id: payload._id,
      email: payload.email,
    },
    config.app.jwtSecret,
    options
  )
}

export default signForgotPasswordToken
