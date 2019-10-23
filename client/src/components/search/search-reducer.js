import {
  SEARCH_FIELD_UPDATE,
} from '../../actions/constants'

export default (state = {}, action) => {
  switch (action.type) {

    case SEARCH_FIELD_UPDATE:
      return Object.assign({}, state, { [action.key]: action.value })

    default:
      return state
  }
}
