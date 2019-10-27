import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import agent from '../../../agent'

import imgSizes from './images/get-sizes'
import srcUrl from './images/get-srcurl'
import srcSet from './images/get-srcset'

// import { GoHeart } from "react-icons/go"
// import { FaDollarSign } from "react-icons/fa"

import {
  POST_ITEM_FAVORITED,
  POST_ITEM_UNFAVORITED
} from '../../post/post-types'

const mapStateToProps = state => {
  return {
    token: state.app.token,
  }
}

const mapDispatchToProps = dispatch => ({
  favorite: slug =>
    dispatch({ type: POST_ITEM_FAVORITED, payload: agent.Posts.favorite(slug) }),
  unfavorite: slug =>
    dispatch({ type: POST_ITEM_UNFAVORITED, payload: agent.Posts.unfavorite(slug) }),
})

const PostPreview = props => {

  const post = props.post

  // const handleClick = ev => {
  //   ev.preventDefault()
  //   if (post.favorited) props.unfavorite(post.slug)
  //   else props.favorite(post.slug)
  // }

  return (
    <article className='dib hide-child'>

      <Link
        className=''
        to={`/post/${post.slug}`}
        title={`view the post by ${post.author.username}`}>

        <figure className=''>
          {
            post.uploads.map((upload, public_id) => {
              return (
                <img
                  className=''
                  key={public_id}
                  sizes={imgSizes}
                  srcSet={srcSet(upload)}
                  src={srcUrl(upload)}
                  alt={upload.public_id} />
              )
            })
          }
        </figure>

      </Link>

      {/* <Link
        className='child'
        to={`/@${post.author.username}`}>
        <img
          src={post.author.image}
          className='auth-image'
          alt={`go to ${post.author.username}'s profile`} />
      </Link> */}

      {/* <Link
        className=''
        to={`/@${post.author.username}`}
        title={`go to ${post.author.username}'s profile`}>
        {post.author.username}
      </Link>

      {post.purchasable ?
        <FaDollarSign
          className=''
          title='This item is purchasable'
          onClick={handleClick} />
        : null
      }

      <GoHeart
        className=''
        title='isfaved'
        onClick={handleClick}
        favorited={post.favorited ? 1 : 0} /> */}

    </article>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPreview)