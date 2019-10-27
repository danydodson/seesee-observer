import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Private from './routes-private'

import styled from 'styled-components'
import { maxWidthContent } from '../../styles/utils'

import Home from '../home'
import Post from '../post'
import Editor from '../editor'
import Profile from '../profile'
import Favorites from '../favorites'
import Settings from '../settings'
import Login from '../login'
import Register from '../register'

const Main = styled.div`
  max-width: ${`${maxWidthContent}px`};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  top: 0;
`;

const Routes = () => {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/post/:id" component={Post} />
        <Route path="/@:username/favorites" component={Favorites} />
        <Route path="/@:username" component={Profile} />
        <Private path="/editor" component={Editor} />
        <Private path="/settings" component={Settings} />
        <Private path="/editor/:slug" component={Editor} />
      </Switch>
    </Main>
  )
}

export default Routes
