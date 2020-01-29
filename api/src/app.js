import config from './config'
import logger from './loaders/logger'
import expressApp from './loaders'
import express from 'express'

const app = express()
const env = config.app.env
const port = config.app.port

const startServer = async () => {
  await expressApp({ expressApp: app })

  app.listen(port, err => {
    if (err) {
      logger.error(err)
      process.exit(1)
      return
    }
    logger.info(`⭐  ${env} server on port ${port}`)
  })
}

startServer()
