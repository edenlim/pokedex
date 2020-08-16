import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import constants from '../constants/constants'
import Searchbar from '../components/shared/Searchbar'
import Display from '../components/dex/display'

class Dex extends Component {
  render() {
    const { search } = this.props
    const { match } = this.props
    return (
      <div className="dex">
        <H1>Pokemon</H1>
        <Searchbar
          path={match.path}
        />
        {search.name && <Display/>}
      </div>
    )
  };
}

const mapStateToProps = state => ({
  search: state.dex.pokemon
})

export default connect(
  mapStateToProps
)(Dex);

const H1 = styled.h1`
  color: black;
  font-size: ${constants.fontSize.large};
  text-align: center;
`
