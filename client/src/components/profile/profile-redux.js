import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import agent from '../../agent'
import Posts from '../home/posts/posts-feed'

import {
  PROFILE_FOLLOW_USER,
  PROFILE_UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../../actions'

const EditProfileSettings = props => {
  if (props.isUser) {
    return (
      <Link
        to="/settings"
        className="btn btn-sm btn-outline-secondary action-btn">
        <i className="ion-gear-a"></i> Edit Profile Settings
      </Link>
    )
  }
  return null
}

const FollowUserButton = props => {
  if (props.isUser) {
    return null
  }

  let classes = 'btn btn-sm action-btn'

  if (props.user.following) {
    classes += ' btn-secondary'
  } else {
    classes += ' btn-outline-secondary'
  }

  const handleClick = ev => {
    ev.preventDefault()
    if (props.user.following) {
      props.unfollow(props.user.username)
    } else {
      props.follow(props.user.username)
    }
  }

  return (
    <button
      className={classes}
      onClick={handleClick}>
      <i className="ion-plus-round"></i>&nbsp;
      {props.user.following ? 'Unfollow' : 'Follow'} {props.user.username}
    </button>
  )
}

const mapStateToProps = state => ({
  ...state.posts,
  currentUser: state.app.currentUser,
  profile: state.profile
})

const mapDispatchToProps = dispatch => ({
  onFollow: username =>
    dispatch({
      type: PROFILE_FOLLOW_USER,
      payload: agent.Profile.follow(username)
    }),
  onLoad: payload =>
    dispatch({
      type: PROFILE_PAGE_LOADED, payload
    }),
  onUnfollow: username =>
    dispatch({
      type: PROFILE_UNFOLLOW_USER,
      payload: agent.Profile.unfollow(username)
    }),
  onUnload: () =>
    dispatch({ type: PROFILE_PAGE_UNLOADED })
})

class Profile extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Profile.get(this.props.match.params.username),
      agent.Posts.byAuthor(this.props.match.params.username)
    ]))
  }

  componentWillUnmount() {
    this.props.onUnload()
  }

  renderTabs() {
    return (
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${this.props.profile.username}`}>
            My Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            to={`/@${this.props.profile.username}/favorites`}>
            Favorited Posts
          </Link>
        </li>
      </ul>
    )
  }

  render() {
    const profile = this.props.profile
    if (!profile) { return null }
    const isUser =
      this.props.currentUser &&
      this.props.profile.username ===
      this.props.currentUser.username
    return (
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={profile.image} className="user-img" alt={profile.username} />
                <h4>{profile.username}</h4>
                <p>{profile.bio}</p>
                <EditProfileSettings isUser={isUser} />
                <FollowUserButton
                  isUser={isUser}
                  user={profile}
                  follow={this.props.onFollow}
                  unfollow={this.props.onUnfollow} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                {this.renderTabs()}
              </div>
              <Posts
                pager={this.props.pager}
                posts={this.props.posts}
                postsCount={this.props.postsCount}
                state={this.props.currentPage} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

export { Profile, mapStateToProps }
