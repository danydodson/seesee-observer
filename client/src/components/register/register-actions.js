import {
  REGISTER_FORM_LOADED,
  REGISTER_FORM_UNLOADED,
  REGISTER_UPDATE_FIELD,
  REGISTER_USER_REGISTER,
} from './register-types'

import Agent from '../../agent'

export const loadForm = () => dispatch => {
  dispatch({
    type: REGISTER_FORM_LOADED,
    payload: {}
  })
}

export const unloadForm = () => dispatch => {
  dispatch({
    type: REGISTER_FORM_UNLOADED,
    payload: {}
  })
}

export const changeUsername = ({ value }) => dispatch => {
  dispatch({
    type: REGISTER_UPDATE_FIELD,
    key: 'username',
    value: value,
  })
}

export const changeEmail = ({ value }) => dispatch => {
  dispatch({
    type: REGISTER_UPDATE_FIELD,
    key: 'email',
    value: value,
  })
}

export const changePassword = ({ value }) => dispatch => {
  dispatch({
    type: REGISTER_UPDATE_FIELD,
    key: 'password',
    value: value,
  })
}

export const changeConfirm = ({ value }) => dispatch => {
  dispatch({
    type: REGISTER_UPDATE_FIELD,
    key: 'confirm',
    value: value,
  })
}

export const register = ({ username, email, password, confirm }) => async dispatch => {
  try {
    const payload = Agent.Auth.register(username, email, password, confirm)
    dispatch({
      type: REGISTER_USER_REGISTER,
      payload: payload
    })
  } catch (err) {
    console.log(err)
  }
}