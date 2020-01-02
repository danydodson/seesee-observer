import * as strategies from './strategies'

const pipe = (...functions) => args =>
  functions.reduce((arg, fn) => fn(arg), args)

const initialiseAuthentication = app => {
  pipe()(app)
}

export { initialiseAuthentication }
