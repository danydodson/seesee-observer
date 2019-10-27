import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import agent from '../../../agent'
import PostsFeed from './posts-feed'

import { APP_VIEW_TAB } from '../../app/app-types'

const mapStateToProps = state => ({
  ...state.posts,
  tags: state.home.tags,
  token: state.app.token
})

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) =>
    dispatch({ type: APP_VIEW_TAB, tab, pager, payload })
})

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault()
      props.onTabClick('feed', agent.Posts.feed, agent.Posts.feed())
    }
    return (
      <li>
        <button href=""
          className={props.tab === 'feed' ? '' : ''}
          onClick={clickHandler}>
          {'Your Feed'}
        </button>
      </li>
    )
  }
  return null
}

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault()
    props.onTabClick('all', agent.Posts.all, agent.Posts.all())
  }
  return (
    <li>
      <button
        href=""
        className={props.tab === 'all' ? 'nav-link active' : 'nav-link'}
        onClick={clickHandler}>
        {'Global Feed'}
      </button>
    </li>
  )
}

const TagFilterTab = props => {
  if (!props.tag) return null
  return (
    <li>
      <button href="" className="nav-link active">
        <i className="ion-pound"></i> {props.tag}
      </button>
    </li>
  )
}

const MainView = props => {
  return (
    <Fragment>
      <ul>
        <YourFeedTab
          token={props.token}
          tab={props.tab}
          onTabClick={props.onTabClick} />
        <GlobalFeedTab
          tab={props.tab}
          onTabClick={props.onTabClick} />
        <TagFilterTab
          tag={props.tag} />
      </ul>
      <PostsFeed
        pager={props.pager}
        posts={props.posts}
        loading={props.loading}
        postsCount={props.postsCount}
        currentPage={props.currentPage} />
    </Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
