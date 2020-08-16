import React, {Component} from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home'
import Dex from './Dex'
import HeadNav from '../components/shared/HeadNav'

// Array for nav
const paths = [
  {name: 'move'},
  {name: 'pokemon'}
]

// Switch render based on home path
class App extends Component {
  render(){
  return (
    <div className="App">
      <HeadNav
        paths={paths}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} />}
        />
        <Route
          exact
          path="/pokemon"
          render={props => <Dex {...props} />}
        />
      </Switch>
    </div>
  )};
}

export default App;
