import { Container } from 'typedi'
import { EventSubscriber, On } from 'event-dispatch'
import events from './events'

// @EventSubscriber()
export default class UserSubscriber {
  /**
   * Use another approach like emit events to a queue (rabbitmq/aws sqs),
   * then save the latest in Redis/Memcache or something similar
   */
  // @On(events.user.signIn)
  async onUserSignIn(_id) {
    const Logger = Container.get('logger')
    try {
      const UserModel = Container.get('UserModel')
      UserModel.update({ _id }, { $set: { lastLogin: new Date() } })
    } catch (e) {
      Logger.error(`🔥 Error on event ${events.user.signIn}: %o`, e)
      // Throw the error so the process die (check src/app.ts)
      throw e
    }
  }

  // @On(events.user.signUp)
  async onUserSignUp(name, email, _id) {
    const Logger = Container.get('logger')
    try {
      // Call the tracker tool so your investor knows that there is a new signup
      // and leave you alone for another hour.
      // TrackerService.track('user.signup', { email, _id })
      // Start your email sequence or whatever
      // MailService.startSequence('user.welcome', { email, name })
    } catch (e) {
      Logger.error(`🔥 Error on event ${events.user.signUp}: %o`, e)
      // Throw the error so the process dies (check src/app.ts)
      throw e
    }
  }
}
