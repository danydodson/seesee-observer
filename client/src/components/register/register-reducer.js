import {
  APP_ASYNC_START,
  AUTH_USER_REGISTER,
  REGISTER_UPDATE_FIELD,
  REGISTER_FORM_UNLOADED,
} from '../../actions/constants'

export default (state = {}, action) => {
  switch (action.type) {

    case AUTH_USER_REGISTER:
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      }

    case REGISTER_FORM_UNLOADED:
      return {}

    case APP_ASYNC_START:
      if (action.subtype === AUTH_USER_REGISTER) {
        return { ...state, inProgress: true }
      }
      break

    case REGISTER_UPDATE_FIELD:
      return { ...state, [action.key]: action.value }

    default:
      return state
  }

  return state
}
