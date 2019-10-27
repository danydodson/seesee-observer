import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Title from './title'
import Search from '../search'

const Visitor = (
  <Fragment>
    <li className=''>
      <Link className='link mid-gray hover-near-black' to="/login">{`Sign in`}</Link>
    </li>

    <li className=''>
      <Link className='link mid-gray hover-near-black' to="/register">{`Sign up`}</Link>
    </li>
  </Fragment>
)

const IsAuth = props => {
  return (
    <ul className='flex list pl0 items-center justify-between'>
      {
        props.currentUser
          ?
          (<Link className='f5 link mid-gray hover-near-black' to='/settings'>{'Settings'}</Link>)
          :
          (<Link className='f5 link mid-gray hover-near-black' to='/login'>{'Login'}</Link>)
      }

      <li className=''>
        <Link className='f5 link mid-gray hover-near-black' to="/">{`Mediums`}</Link>
      </li>

      <li className=''>
        <Link className='f5 link mid-gray hover-near-black' to="/">{`Tags`}</Link>
      </li>

      <li className='ruller' />

      {
        props.currentUser
          ?
          (<Fragment>
            <li className=''>
              <Link
                className='f5 link mid-gray hover-near-black'
                to='/editor'>
                {`Create`}
              </Link>
            </li>

            <li className=''>
              <button
                title='Logout'
                onClick={props.onClickLogout} >
                {'logout'}
              </button>
            </li>

            <li className=''>
              <Link
                className='f5 link mid-gray hover-near-black'
                to={`/@${props.currentUser.username}`}>
                <img
                  width='30'
                  height='30'
                  className=''
                  src={props.currentUser.image}
                  alt={props.currentUser.username} />
              </Link>
            </li>

          </Fragment>
          ) : Visitor
      }
    </ul>
  )
}

class Header extends React.Component {
  onSearchChange = (ev) => {
    console.log(ev.target.value)
  }

  render() {
    return (
      <header className='flex items-center justify-between'>
        <Title
          appName={this.props.appName} />
        <Search
          searchChange={this.onSearchChange} />
        <IsAuth
          currentUser={this.props.currentUser}
          onClickLogout={this.props.onClickLogout} />
      </header>
    )
  }
}

export default Header