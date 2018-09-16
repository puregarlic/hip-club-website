import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { NavBar } from '../Navbar'

import { Home } from '../Home'
import { About } from '../About'
import { Events } from '../Events'
import { Contact } from '../Contact'

export const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/events" exact component={Events} />
      <Route path="/contact" exact component={Contact} />
    </div>
  </Router>
)
