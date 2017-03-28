import React, { Component } from 'react'
import { BrowserRouter as Router, Match, Miss } from 'react-router'
import normalize from 'normalize-css'

import Header from '../Header'
import Home from '../Home'
import Post from '../Post'
import Profile from '../Profile'
import Error404 from '../Error404'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        name: 'Giancarlo Vera',
        email: 'gianverab@gmail.com',
        picture: 'https://pbs.twimg.com/profile_images/1189582996/photo2-CV_400x400.jpg',
        location: 'Buenos Aires',
        url: 'classpoint.com'
      }
    }
  }
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Match exactly pattern='/' render={() => {
            return (
              <Home />
            )
          }} />
          <Match pattern='/post/:id' component={Post} />
          <Match pattern='/profile' render={() => {
            return (
              <Profile user={this.state.user} />
            )
          }} />
          <Match pattern='/user/:username' render={({ params }) => {
            return (
              <Profile user={params.user} />
            )
          }} />
          <Miss component={Error404} />
        </div>
      </Router>
    )
  }
}

export default App
