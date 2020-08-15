import React, { Component } from 'react';
import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <H1>Home page</H1>
      </div>
    )
  };
}

export default Home;

const H1 = styled.h1`
  color: black;
`
