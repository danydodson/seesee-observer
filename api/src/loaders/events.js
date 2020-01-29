import { onTesting } from '../events/onTesting'
import { sendVerify } from '../events/onSignUp'
import { sendVerified } from '../events/onVerified'

export default ee => {
  ee.on('onTest', onTesting.sendMsg)
  ee.on('onSignUp', sendVerify.email)
  ee.on('onVerified', sendVerified.email)
}
