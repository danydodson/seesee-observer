import React from 'react'
// import { Fragment } from 'react'
// import { connect } from "react-redux"
// import { toast } from "react-toastify"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// import {
//   TOAST_ADD,
// } from '../../actions'

// const mapStateToProps = state => ({ toast: state.toast })

// const mapDispatchToProps = dispatch => ({
//   onError: payload =>
//     dispatch({ type: TOAST_ADD, payload })
// })

class Errors extends React.Component {

  render() {

    const errors = this.props.errors

    if (errors) {
      return (
        // <Fragment>
        // <ToastContainer autoClose={2000} />
        <ul className="error-messages">
          {
            Object.keys(errors).map(key => {
              // return this.props.onError(`${key} ${errors[key]}`)
              // return toast(`${key} ${errors[key]}`)
              return (
                <li key={key}>
                  {key} {errors[key]}
                </li>
              )
            })
          }
        </ul>
        // </Fragment>
      )
    } else {
      return null
    }
  }
}

export default Errors
// export default connect(mapStateToProps, mapDispatchToProps)(Errors)
