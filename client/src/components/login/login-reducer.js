import {
  APP_ASYNC_START,
} from '../app/app-types'

import {
  LOGIN_USER_LOGIN,
  LOGIN_UPDATE_FIELD,
  LOGIN_FORM_UNLOADED,
} from './login-types'

export default (state = {}, action) => {
  switch (action.type) {

    case LOGIN_USER_LOGIN:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      }

    case LOGIN_FORM_UNLOADED:
      return {}

    case APP_ASYNC_START:
      if (action.subtype === LOGIN_USER_LOGIN) {
        return {
          ...state,
          inProgress: true
        }
      }
      break

    case LOGIN_UPDATE_FIELD:
      return { ...state, [action.key]: action.value }

    default:
      return state
  }

  return state
}
