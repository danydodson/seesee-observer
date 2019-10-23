import React from 'react'
import agent from '../../../agent'
import Loading from '../../shared/loading'

const Mediums = props => {
  const mediums = props.mediums
  if (mediums) {
    return (
      <nav className='mediums-list'>
        {mediums.map(medium => {
          const handleClick = e => {
            e.preventDefault()
            props.onClickMedium(medium, page =>
              agent.Posts.byMedium(medium, page),
              agent.Posts.byMedium(medium)
            )
          }
          return (
            <button
              key={medium}
              className='medium-link'
              onClick={handleClick}>
              {medium}
            </button>
          )
        })}
      </nav>
    )
  } else {
    return <Loading />
  }
}

export default Mediums
