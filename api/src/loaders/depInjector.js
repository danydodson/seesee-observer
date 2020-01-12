import { Container } from 'typedi'
import mailgun from 'mailgun-js'
import config from '../config'

import agendaFactory from './agenda'
import loggerInstance from './logger'

import authTokenInstance from '../auth/tokens/auth'
import verifyEmailTokenInstance from '../auth/tokens/verify'
import resetPasswordTokenInstance from '../auth/tokens/reset'

export default ({ mongoConnection, models }) => {
  try {
    models.forEach(m => Container.set(m.name, m.model))

    const agendaInstance = agendaFactory({ mongoConnection })
    Container.set('agendaInstance', agendaInstance)

    Container.set('authToken', authTokenInstance)
    Container.set('verifyToken', verifyEmailTokenInstance)
    Container.set('resetToken', resetPasswordTokenInstance)

    Container.set('logger', loggerInstance)

    Container.set(
      'emailClient',
      mailgun({ apiKey: config.mailgun.apiKey, domain: config.mailgun.domain })
    )

    loggerInstance.info('✨  agenda injected into container')

    return { agenda: agendaInstance }
  } catch (e) {
    loggerInstance.error('❌ error on dependency injector loader:' + e)
    throw e
  }
}
