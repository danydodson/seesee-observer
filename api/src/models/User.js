import { model } from 'mongoose'
import { Schema } from 'mongoose'

const User = new Schema({
  salt: String,
  hash: String,
  username: String,
  email: { type: String, unique: true, index: 1 },
  role: { type: String, default: 'user' },
  authToken: { data: String },
  resetToken: { type: String },
  verifyToken: { type: String },
  verified: { type: Boolean, default: false },
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  created: { type: Date, default: Date.now },
  updated: { type: Date },
})

export default model('User', User)
