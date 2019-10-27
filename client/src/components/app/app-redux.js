import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../../store'
import { push } from 'connected-react-router'

import agent from '../../agent'
import Header from '../header'
import Routes from '../routes'
import Fonts from '../../helpers/load-fonts'

import { CloudinaryContext } from 'cloudinary-react'
import { CLOUD_NAME, CLOUD_PRESET } from '../../configs'

import {
  LOGIN_USER_LOGOUT,
} from '../login/login-types'

import {
  APP_LOAD,
  APP_REDIRECT_LOCATION
} from './app-types'

const mapStateToProps = state => {
  return {
    appLoaded: state.app.appLoaded,
    appName: state.app.appName,
    currentUser: state.app.currentUser,
    redirectTo: state.app.redirectTo
  }
}

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onClickLogout: () =>
    dispatch({ type: LOGIN_USER_LOGOUT }),
  onRedirect: () =>
    dispatch({ type: APP_REDIRECT_LOCATION }),
})

class App extends React.Component {

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo))
      this.props.onRedirect()
    }
  }

  UNSAFE_componentWillMount() {
    Fonts()
    const token = window.localStorage.getItem('jwt')
    if (token) agent.setToken(token)
    this.props.onLoad(token ? agent.Auth.current() : null, token)
  }

  render() {

    if (this.props.appLoaded) {
      return (
        <CloudinaryContext
          className='cloudinary'
          cloudName={CLOUD_NAME}
          uploadPreset={CLOUD_PRESET}>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser}
            onClickLogout={this.props.onClickLogout} />
          <Route component={Routes} />
        </CloudinaryContext >
      )
    }

    return (
      <CloudinaryContext
        cloudName={CLOUD_NAME}
        uploadPreset={CLOUD_PRESET}>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </CloudinaryContext>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)