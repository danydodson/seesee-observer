import { connect } from 'mongoose'
import config from '../config'

export default async () => {
  const connection = await connect(config.mongo, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // useUnifiedTopology: true,
  })

  return connection.connection.db
}
