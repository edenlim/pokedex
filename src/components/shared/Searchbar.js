import React, { Component } from 'react';
import styled from 'styled-components';
import constants from '../../constants/constants'
import * as utilities from '../../scripts/utilities'
import * as actions from '../../action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ajax from '../../scripts/ajax.js';
import api from '../../constants/endpoints';

class Searchbar extends Component {
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


  render(){
    return(
      <SearchDiv>
        <InputBar type='text' name='searchQuery' id='searchQuery' />
        <SearchButton
          onClick={(path) => this.search()}
        >
          Submit
        </SearchButton>
      </SearchDiv>
    )
  }
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
)(Searchbar)

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
`

const InputBar = styled.input`
  // border: 2px solid ${constants.colors.grey.p70};
  // border-radius: 0;
`
const SearchButton = styled.button`
  height: 100%;
`
