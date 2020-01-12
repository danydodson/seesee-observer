import cors from 'cors'
import path from 'path'
import express from 'express'
import errors from '../middleware/errors'
import helmet from 'helmet'
import routes from '../routes'
import config from '../config'

import EventEmitter from 'eventemitter3'

export default ({ app: app }) => {
  app.get('/status', (req, res) => res.status(200).end())

  app.head('/status', (req, res) => res.status(200).end())

  app.enable('trust proxy')

  app.use(cors())
  app.use(helmet())

  app.use(express.json())

  app.use(config.app.apiPrefix, routes())

  // const myEmitter = new EventEmitter()

  // const sendMailEvent = myEmitter,
  //   context = { foo: 'bar' }

  // function emitted() {
  //   console.log(this === context) // true
  // }

  // //Subscribe for ping event
  // myEmitter.on(
  //   'ping',
  //   (data) => { console.log(`First event: '${data}`) },
  //   context
  // )

  // Raising ping event
  // myEmitter.emit('ping', 'My first Node.js event has been triggered.')

  app.use(errors.notFound)
  app.use(errors.serverErrors)
  app.use(errors.unauthErrors)
}
