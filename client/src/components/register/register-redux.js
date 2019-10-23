import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { ToastContainer } from 'react-toastify'
// import { toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

import Errors from '../toast'

import agent from '../../agent'

import {
  REGISTER_FORM_LOADED,
  REGISTER_UPDATE_FIELD,
  AUTH_USER_REGISTER,
  REGISTER_FORM_UNLOADED
} from '../../actions/constants'

const mapStateToProps = state => ({ ...state.register })

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: REGISTER_FORM_LOADED }),
  onChangeUsername: value =>
    dispatch({ type: REGISTER_UPDATE_FIELD, key: 'username', value }),
  onChangeEmail: value =>
    dispatch({ type: REGISTER_UPDATE_FIELD, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: REGISTER_UPDATE_FIELD, key: 'password', value }),
  onChangeConfirm: value =>
    dispatch({ type: REGISTER_UPDATE_FIELD, key: 'confirm', value }),
  onUnload: () =>
    dispatch({ type: REGISTER_FORM_UNLOADED }),
  onSubmit: (username, email, password, confirm) => {
    const payload = agent.Auth.register(username, email, password, confirm)
    dispatch({ type: AUTH_USER_REGISTER, payload })
  },
})

class Register extends React.Component {
  constructor() {
    super()

    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value)
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value)
    this.changePassword = ev => this.props.onChangePassword(ev.target.value)
    this.changeConfirm = ev => this.props.onChangeConfirm(ev.target.value)
    this.submitForm = (username, email, password, confirm) => ev => {
      ev.preventDefault()
      this.props.onSubmit(username, email, password, confirm)
    }
  }

  UNSAFE_componentWillMount() {
    this.props.onLoad()
  }

  componentWillUnmount() {
    this.props.onUnload()
  }

  render() {
    const username = this.props.username
    const email = this.props.email
    const password = this.props.password
    const confirm = this.props.confirm

    return (
      <div className='register-page'>

        {/* {this.checkErrors
          ? <ToastContainer />
          : null
        } */}
        {/* <ToastContainer /> */}
        <Errors errors={this.props.errors} />

        <h1>{'Sign Up'}</h1>

        <Link to="/login">{'Have an account?'}</Link>

        <form onSubmit={this.submitForm(username, email, password, confirm)}>
          <fieldset>

            <fieldset>
              <input
                className=''
                type="text"
                placeholder="Username"
                value={this.props.username}
                onChange={this.changeUsername} />
            </fieldset>

            <fieldset>
              <input
                className=''
                type="email"
                placeholder="Email"
                value={this.props.email}
                onChange={this.changeEmail} />
            </fieldset>

            <fieldset>
              <input
                className=''
                type="password"
                placeholder="Password"
                value={this.props.password}
                onChange={this.changePassword} />
            </fieldset>

            <fieldset>
              <input
                className=''
                type="password"
                placeholder="Confirm Password"
                value={this.props.confirm}
                onChange={this.changeConfirm} />
            </fieldset>

            <button
              // onClick={this.notifyError}
              className=''
              type='submit'
              disabled={this.props.inProgress}>
              {'Sign up'}
            </button>

          </fieldset>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
