import React, {Component} from 'react';
import styled from 'styled-components';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './Home'
import Dex from './Dex'

const paths = [
  {name: 'home'},
  {name: 'dex'}
]

class App extends Component {
  render(){
  return (
    <div className="App">
      <H1>Hi</H1>
      <div>
        {paths.map(path => (
          <Link
            key={path.name}
            to={`/${path.name}`}
          >
            <div>{path.name}</div>
          </Link>
        ))}
      </div>
      <Switch>
        <Route
          exact
          path="/home"
          render={props => <Home {...props} />}
        />
        <Route
          exact
          path="/dex"
          render={props => <Dex {...props} />}
        />
      </Switch>
    </div>
  )};
}

export default App;

const H1 = styled.h1`
  color: black;
`
