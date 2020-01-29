import logger from '../loaders/logger'

export const onTesting = {
  sendMsg: testMsg => {
    logger.info(`🎵  test event msg: ${testMsg.txt}`)
  },
}

export class EventTest {
  constructor(ee) {
    this.ee = ee
  }
  create(testMsg) {
    this.ee.emit('onTest', testMsg)
  }
}
