import jwt from 'jsonwebtoken'
import config from '../../config'

const signAuthToken = (payload = {}) => {
  const options = {
    issuer: 'seesee_api',
    subject: 'user_auth',
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

export default signAuthToken
