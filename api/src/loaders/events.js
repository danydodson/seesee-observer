import EventEmitter from 'eventemitter3'

export default ({ Ev = new EventEmitter() }) => {
  const sendMailEvent = Ev,
    context = { foo: 'bar' }

  function emitted() {
    console.log(this === context) // true
  }

  sendMailEvent.once('event-name', emitted, context)

  sendMailEvent.on('another-event', emitted, context)

  sendMailEvent.removeListener('another-event', emitted, context)
}
