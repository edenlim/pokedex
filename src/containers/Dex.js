import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as ajax from '../scripts/ajax.js';
import * as actions from '../action'
import api from '../constants/endpoints';
import { bindActionCreators } from 'redux'
import constants from '../constants/constants'
import * as utilities from '../scripts/utilities'


class Dex extends Component {
  constructor(props) {
    super(props)
    this.searchPokemon = this.searchPokemon.bind(this)
  }

  searchPokemon(res){
    const {searchPokemon} = this.props
    const query = `${api.pokemon}${document.getElementById('pokeName').value}`
    if(!res){
      ajax.request(query, this.searchPokemon)
    } else {
      this.setState({
        ...res
      })
      searchPokemon(res)
    }
  }

  render() {
    const { search } = this.props
    console.log('state:', search)
    return (
      <div className="dex">
        <H1>Pokedex</H1>
        <h2>Pokemon name</h2>

        <form name='form' id='form'>
          <input type='text' name='pokeName' id='pokeName' />
        </form>
        <button
          onClick={() => this.searchPokemon()}
        >
          Submit
        </button>
        <div id="demo"></div>
      </div>
    )
  };
}

const mapStateToProps = state => ({
  search: state.dex.pokemon
})

const actionCreators = actions
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dex);

const H1 = styled.h1`
  color: black;
  font-size: ${constants.fontSize.medium};
`
