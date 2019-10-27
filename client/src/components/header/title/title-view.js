import React from 'react'
import { Link } from 'react-router-dom'

const AppName = ({ appName }) => {
  return (
    <Link
      to="/"
      className='avenir f3 fw6 tracked-tight link mid-gray hover-near-black'>
      {appName}
    </Link>
  )
}

export default AppName