import React from 'react'
import { Link } from 'react-router-dom'

const AppName = ({ appName }) => {
  return (
    <Link
      className='title-link'
      to="/" >
      {appName.toLowerCase()}
    </Link >
  )
}

export default AppName