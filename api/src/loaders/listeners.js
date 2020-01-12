import EventEmitter from 'events'
import config from '../config'

import CreateVerifyTokenJob from '../jobs/verify-token'

export default ({ event = new EventEmitter() }) => {
  event.on(
    'create-new-verify-token',
    { priority: 'high', concurrency: config.agenda.concurrency },
    new CreateVerifyTokenJob().handler
  )
}
