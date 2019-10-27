import {
  APP_LOAD,
  APP_REDIRECT_LOCATION,
} from './app-types'

import {
  POST_ITEM_DELETE_POST,
  POST_ITEM_UNLOADED,
} from '../post/post-types'

import {
  HOME_PAGE_UNLOADED,
} from '../home/home-types'

import {
  REGISTER_USER_REGISTER,
  REGISTER_USER_DELETE,
  REGISTER_FORM_UNLOADED,
} from '../register/register-types'

import {
  LOGIN_USER_LOGIN,
  LOGIN_USER_LOGOUT,
  LOGIN_FORM_UNLOADED,
} from '../login/login-types'

import {
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_UNLOADED,
} from '../profile/profile-types'

import {
  SETTINGS_FORM_SAVED,
  SETTINGS_FORM_UNLOADED,
} from '../settings/settings-types'

import {
  EDITOR_POST_SUBMITTED,
  EDITOR_FORM_UNLOADED,
} from '../editor/editor-types'

const defaultState = {
  appName: 'seesee',
  token: null,
  viewChangeCounter: 0,
}

export default (state = defaultState, action) => {
  switch (action.type) {

    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null,
      }

    case APP_REDIRECT_LOCATION:
      return {
        ...state,
        redirectTo: null,
      }

    case REGISTER_USER_DELETE:
    case LOGIN_USER_LOGOUT:
      return { ...state, redirectTo: '/', token: null, currentUser: null }

    case EDITOR_POST_SUBMITTED:
      const redirectUrl = `/post/${action.payload.post.slug}`
      return {
        ...state,
        redirectTo: redirectUrl,
      }

    case SETTINGS_FORM_SAVED:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        currentUser: action.error ? null : action.payload.user,
      }

    case LOGIN_USER_LOGIN:
    case REGISTER_USER_REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
      }

    case POST_ITEM_DELETE_POST:
      return {
        ...state, redirectTo: '/'
      }

    case HOME_PAGE_UNLOADED:
    case LOGIN_FORM_UNLOADED:
    case REGISTER_FORM_UNLOADED:
    case SETTINGS_FORM_UNLOADED:
    case PROFILE_PAGE_UNLOADED:
    case POST_ITEM_UNLOADED:
    case EDITOR_FORM_UNLOADED:
    case PROFILE_FAVORITES_UNLOADED:
      return {
        ...state,
        viewChangeCounter: state.viewChangeCounter + 1
      }

    default:
      return state
  }
}
