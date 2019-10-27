import React, { Fragment } from 'react'
import PostPreview from './posts-preview'
import ListPagination from './posts-pagination'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { sizes } from '../../../styles/utils'

const Posts = props => {

  if (!props.posts) {
    return <article className='posts'>Loading...</article>
  }

  if (props.posts.length === 0) {
    return <article className='posts'>No posts... yet.</article>
  }

  return (
    <Fragment>
      <div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{
            [sizes.tablet - 34]: 1,
            [sizes.tablet - 33]: 2,
            '900': 3,
          }}>
          <Masonry>
            {/* {Object.keys(items).map(key => (
            <PhotoComponent key={items[key].id} photo={items[key]} />
          ))} */}
            {
              props.posts.map(post => {
                return (
                  <PostPreview
                    key={post.slug}
                    post={post} />
                )
              })
            }

          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* {
        props.posts.map(post => {
          return (
            <PostPreview
              key={post.slug}
              post={post} />
          )
        })
      } */}
      <ListPagination
        pager={props.pager}
        postsCount={props.postsCount}
        currentPage={props.currentPage} />
    </Fragment>
  )
}

export default Posts