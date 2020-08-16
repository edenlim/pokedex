import React, { Component } from 'react';
import styled from 'styled-components';
import constants from '../../constants/constants'
import * as utilities from '../../scripts/utilities'
import { connect } from 'react-redux';
import * as ajax from '../../scripts/ajax.js';
import api from '../../constants/endpoints';

class Display extends Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
  }

  search(res) {
    const path = this.props.path.substr(1)
    const action = this.props[`search${path}`]
    const query = `${api[path]}${document.getElementById('searchQuery').value}`
    if (!res) {
      ajax.request(query, this.search)
    } else {
      this.setState({
        ...res
      })
      action(res)
    }
  }


  render() {
    const {name} = this.props.search

    console.log('Redux: ',this.props.search)
    return (
      <DisplayDiv>
        <h1>{name}</h1>
      </DisplayDiv>
    )
  }
}

const mapStateToProps = state => ({
  search: state.dex.pokemon
})

export default connect(
  mapStateToProps
)(Display)

const DisplayDiv = styled.div`
  border: 1px solid black;
`
