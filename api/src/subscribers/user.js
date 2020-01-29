import config from '../config'
import { Container } from 'typedi'
import MailerService from '../services/mailer'
import attachListeners from '../loaders/events'
import { EventTest } from '../events/onTesting'
import { OnSignUp } from '../events/onSignUp'
import { EventEmitter } from 'events'

const ee = new EventEmitter()

attachListeners(ee)

export default class UserSubscriber {
  constructor() {}

  async onTest() {
    const logger = Container.get('logger')
    const eventTest = new EventTest(ee)
    try {
      logger.debug('⏰  user test event triggered')
      const testMsg = 'user subscriber test event working'
      await eventTest.create({ txt: testMsg })
      return { testMsg }
    } catch (e) {
      logger.error('🔥  error on user test event' + e)
    }
  }

  async onSignUp(email) {
    const logger = Container.get('logger')
    const userModel = Container.get('userModel')
    const mailerServiceInstance = Container.get(MailerService)
    const signUp = new OnSignUp(ee)
    try {
      logger.debug('⏰  user signup event triggered')
      // 1. call the tracker tool: trackerService.track('user.signup', { email, _id })
      const user = await userModel.findOne({ email: email })
      await mailerServiceInstance.sendVerifyEmail(
        user.email,
        config.url.client,
        user.verifyToken
      )
      await signUp.sendMail({ email: user.email })
      return { user }
    } catch (e) {
      logger.error('🔥  error on signup event' + e)
    }
  }

  async onVerified(email) {
    const logger = Container.get('logger')
    const userModel = Container.get('userModel')
    const mailerServiceInstance = Container.get(MailerService)
    const signUp = new OnSignUp(ee)
    try {
      logger.debug('⏰  user signup event triggered')
      // 1. call the tracker tool: trackerService.track('user.signup', { email, _id })
      const user = await userModel.findOne({ email: email })
      await mailerServiceInstance.sendVerifyEmail(
        user.email,
        config.url.client,
        user.verifyToken
      )
      await signUp.sendMail({ email: user.email })
      return { user }
    } catch (e) {
      logger.error('🔥  error on signup event' + e)
    }
  }

  // use another approach like emit events to a queue,then save the latest in redis
  async onSignIn(id) {
    const logger = Container.get('logger')
    try {
      logger.debug('⏰  user signin event triggered')
    } catch (e) {
      logger.error('🔥  error on signin event' + e)
    }
  }
}
