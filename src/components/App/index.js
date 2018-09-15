import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { NavBar } from '../Navbar'

import { Home } from '../Home'
import { About } from '../About'
import { Events } from '../Events'
import { Contact } from '../Contact'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/events" exact component={Events} />
          <Route path="/contact" exact component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
