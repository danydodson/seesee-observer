import cors from 'cors'
import path from 'path'
import express from 'express'
import errors from '../middleware/errors'
import helmet from 'helmet'
import routes from '../routes'
import config from '../config'

export default ({ app: app }) => {
  app.get('/status', (req, res) => res.status(200).end())

  app.head('/status', (req, res) => res.status(200).end())

  app.enable('trust proxy')

  app.use(cors())
  app.use(helmet())

  app.use(express.json())

  app.use(config.app.apiPrefix, routes())

  app.use(errors.notFound)
  app.use(errors.serverErrors)
  app.use(errors.unauthErrors)
}
