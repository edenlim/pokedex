import React, { Component } from 'react';
import styled from 'styled-components'
import * as ajax from '../scripts/ajax.js'
import api from '../constants/endpoints'

class Dex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myState: true
    }
    this.searchPokemon = this.searchPokemon.bind(this)
  }

  searchPokemon(res){
    const query = `${api.pokemon}${document.getElementById('pokeName').value}`
    if(!res){
      ajax.request(query, this.searchPokemon)
    } else {
      this.setState({
        ...res
      })
      console.log(this.state)
    }
  }

  render() {
    console.log(this.props)
    console.log('Dex alert')
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

export default Dex;

const H1 = styled.h1`
  color: black;
`
