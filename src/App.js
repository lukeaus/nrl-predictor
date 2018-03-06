import React, { Component } from 'react'
import { Button } from 'reactstrap'
import shuffle from 'lodash/shuffle'

import Ladder from './components/Ladder'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import { COMMENTS, TEAMS } from './content'

class App extends Component {
  state = {
    hasRun: false,
    ladder: [],
    comments: []
  }

  generateLadder = () => {
    return shuffle(Object.keys(TEAMS))
  }

  generateComments = () => {
    return shuffle(COMMENTS)
  }

  handleClick = () => {
    const ladder = this.generateLadder()
    const comments = this.generateComments()

    this.setState({ ladder, comments, hasRun: true })
  }

  render() {
    const { ladder, comments, hasRun } = this.state
    const year = new Date().getFullYear()

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{year} NRL Ladder Predictor</h1>
          <Button
            style={{ margin: '1rem' }}
            onClick={this.handleClick}
            color="primary"
          >
            {hasRun ? "I'm Not Happy, Make It Better" : 'Predict The Ladder'}
          </Button>
        </header>
        <div stle={{ textAlign: 'center' }} />
        <Ladder ladder={ladder} teams={TEAMS} comments={comments} />
      </div>
    )
  }
}

export default App
