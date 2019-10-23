import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Kebab from './styles/kabob-icon'
import Gear from './styles/gear-icon'
import Logout from './styles/arrow-icon'
import Pencil from './styles/pencil-icon'
import Heart from './styles/heart-icon'
import Archive from './styles/archive-icon'
import Magnifier from './styles/search-icon'

import Title from './title'
import Search from '../search'

const Visitor = (
  <Fragment>
    <li className='nav-item'>
      <Link className='nav-link' to="/login">{`Sign in`}</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to="/register">{`Sign up`}</Link>
    </li>
  </Fragment>
)

const IsAuth = props => {
  return (
    <ul className='nav-list'>

      <Link className='icon-link' to='/'><Archive size='30px' title='Mediums' /></Link>
      <Link className='icon-link' to='/editor'><Pencil size='30px' title='Upload' /></Link>
      <Link className='icon-link' to='/'><Magnifier size='30px' title='Search' /></Link>
      <Link className='icon-link' to='/@danydodson'><Heart size='30px' title='Show some love' /></Link>
      {
        props.currentUser
          ?
          (<Link className='icon-link' to='/settings'><Gear size='30px' title='Settings' /></Link>) :
          (<Link className='icon-link' to='/login'><Gear size='30px' title='Login' /></Link>)
      }
      <li className='nav-item'>
        <Link className='nav-link' to="/">{`Mediums`}</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to="/">{`Tags`}</Link>
      </li>
      <li className='nav-item'><Kebab title='Droptions' size='20px' /></li>
      <li className='ruller' />
      {
        props.currentUser
          ?
          (<Fragment>
            <li className='nav-item'>
              <Link className='nav-link' to='/editor'>{`Create`}</Link>
            </li>
            <li className='nav-item'><Logout title='Logout' size='20px' onClick={props.onClickLogout} /></li>
            <li className='icon-image'>
              <Link className='nav-link'
                to={`/@${props.currentUser.username}`}>
                <img className='user-img' src={props.currentUser.image} alt={props.currentUser.username} />
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
      <header>
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