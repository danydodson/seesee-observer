import EventEmitter from 'events'

export default ({ event = new EventEmitter() }) => {
  const sendMailEvent = E,
    context = { foo: 'bar' }

  function emitted() {
    console.log(this === context) // true
  }

  event.on(
    'event-name',
    // new CreateVerifyTokenJob().handler,
    emitted,
    context
  )
}
