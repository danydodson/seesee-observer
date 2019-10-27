import React from 'react'
import agent from '../../../agent'
import Loading from '../../loading'

const Tags = props => {
  const tags = props.tags

  if (tags) {
    return (
      <ul>
        {tags.map(tag => {
          const handleClick = e => {
            e.preventDefault()
            props.onClickTag(tag, page =>
              agent.Posts.byTag(tag, page),
              agent.Posts.byTag(tag)
            )
          }
          return (
            <button
              key={tag}
              onClick={handleClick}>
              {tag}
            </button>
          )
        })}
      </ul>
    )
  } else {
    return <Loading />
  }
}

export default Tags
