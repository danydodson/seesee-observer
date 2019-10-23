import {
  // TOAST_INFO, 
  // TOAST_SUCCESS, 
  TOAST_ADD,
  TOAST_REMOVE,
} from '../../actions/constants'

export default (state = {}, action) => {

  switch (action.type) {

    case TOAST_ADD:
      return {
        ...state,
      }

    case TOAST_REMOVE:
      return state.filter(toast => toast.id !== action.payload);

    default:
      return state
  }
}
