import {
  APP_ASYNC_START,
  APP_ASYNC_END,
} from '../app/app-types'

import {
  SETTINGS_FORM_SAVED,
} from './settings-types'

export default (state = {}, action) => {
  switch (action.type) {

    case SETTINGS_FORM_SAVED:
      return {
        ...state,
        inProgress: false,
        errors: action.error
          ? action.payload.errors
          : undefined
      }

    case APP_ASYNC_START:
      return { ...state, inProgress: true }

    case APP_ASYNC_END:
      return { ...state, inProgress: undefined }

    default:
      return state
  }

}
