import jwt from 'jsonwebtoken'
import config from '../../config'

const signVerifyEmailToken = (payload = {}) => {
  const options = {
    issuer: 'seesee_api',
    subject: 'verify_email',
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

export default signVerifyEmailToken
