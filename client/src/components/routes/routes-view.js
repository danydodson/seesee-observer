import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import Post from '../post'
import Editor from '../editor'
import Profile from '../profile'
import Favorites from '../favorites'
import Settings from '../settings'
import Login from '../login'
import Register from '../register'

import Private from './routes-private'

const Routes = () => {
  return (
    <main className='main-routes'>
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
    </main>
  )
}

export default Routes
