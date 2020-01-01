import cors from 'cors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import config from '../config'
import routes from '../routes'
import errors from '../middleware/errors'
import helmet from 'helmet'

export default ({ app: app }) => {
  app.get('/status', (req, res) => res.status(200).end())

  app.head('/status', (req, res) => res.status(200).end())

  app.enable('trust proxy')

  app.use(cors())
  app.use(helmet())

  app.use(express.json())
  app.use(cookieParser())

  app.use(passport.initialize())
  // initialiseAuthentication(app)

  require('../auth')

  app.use(config.app.apiPrefix, routes())

  app.use(errors.notFound)
  app.use(errors.serverErrors)
  app.use(errors.unauthErrors)
}
