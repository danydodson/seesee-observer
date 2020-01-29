import Agenda from 'agenda'
import config from '../config'

// import CreateVerifyTokenJob from '../jobs/sendVerifyToken'
// import SendVerifyEmailJob from '../jobs/sendVerifyToken'
import SendVerifiedEmailJob from '../jobs/sendVerifiedEmail'
import SendForgotPasswordJob from '../jobs/forgotPassword'
import SendPasswordResetJob from '../jobs/resetPassword'

export default ({ agenda = new Agenda() }) => {
  // agenda.define(
  //   'create-new-verify-token',
  //   { priority: 'high', concurrency: config.agenda.concurrency },
  //   new CreateVerifyTokenJob().handler
  // )

  // agenda.define(
  //   'send-verify-account-email',
  //   { priority: 'high', concurrency: config.agenda.concurrency },
  //   new SendVerifyEmailJob().handler
  // )

  agenda.define(
    'send-verified-account-email',
    { priority: 'high', concurrency: config.agenda.concurrency },
    new SendVerifiedEmailJob().handler
  )

  agenda.define(
    'send-forgot-password-email',
    { priority: 'high', concurrency: config.agenda.concurrency },
    new SendForgotPasswordJob().handler
  )

  agenda.define(
    'send-password-reset-email',
    { priority: 'high', concurrency: config.agenda.concurrency },
    new SendPasswordResetJob().handler
  )

  agenda.start()
}
