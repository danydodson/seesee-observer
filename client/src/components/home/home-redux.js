import React from 'react'
import { connect } from 'react-redux'
import Agent from '../../agent'
import Mediums from './mediums'
import Posts from './posts'

import { APP_MEDIUM_FILTER, } from '../app/app-types'

import { HOME_PAGE_LOADED, HOME_PAGE_UNLOADED, } from './home-types'

const Promise = global.Promise

const mapStateToProps = state => ({
  ...state.home,
  appName: state.app.appName,
  token: state.app.token
})

const mapDispatchToProps = dispatch => ({
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onClickMedium: (medium, pager, payload) =>
    dispatch({ type: APP_MEDIUM_FILTER, medium, pager, payload }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED }),
})

class Home extends React.Component {

  UNSAFE_componentWillMount() {
    const tab = this.props.token
      ? 'feed'
      : 'all'

    const postsPromise = this.props.token
      ? Agent.Posts.feed
      : Agent.Posts.all

    this.props.onLoad(
      tab,
      postsPromise,
      Promise.all([Agent.Mediums.getAll(),
      postsPromise()]))
  }

  componentWillUnmount() {
    this.props.onUnload()
  }

  render() {

    return (

      <div className="home-page">
        {/* <Banner
          token={this.props.token}
          appName={this.props.appName} /> */}

        {/* <Tags
          tags={this.props.tags}
          onClickTag={this.props.onClickTag} /> */}

        <Mediums
          mediums={this.props.mediums}
          onClickMedium={this.props.onClickMedium} />

        <Posts />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
