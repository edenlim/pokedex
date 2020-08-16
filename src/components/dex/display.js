import React, { Component } from 'react';
import styled from 'styled-components';
import constants from '../../constants/constants'
import * as utilities from '../../scripts/utilities'
import Name from '../shared/Name'
import { connect } from 'react-redux';
import * as ajax from '../../scripts/ajax.js';
import api from '../../constants/endpoints';

class Display extends Component {
  render() {
    const {name, types} = this.props.search;
    return (
      <DisplayDiv
        types={types}
      >
        <Components
          types={types}
        >
          <Info>
            <Name
              name={utilities.capitalize(name)}
            />
          </Info>
        </Components>
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

const Shared = styled.div`
  border-radius: ${constants.borderRadius.medium};
  padding: ${constants.padding.medium};
`

const DisplayDiv = styled(Shared)`
  border: 4px solid ${props => !!props.types[1] ? constants.type[props.types[1].type.name].colorDark : constants.type[props.types[0].type.name].colorDark};
  margin: ${constants.margin.large};
  background-color: ${props => constants.type[props.types[0].type.name].color}
`
const Components = styled(Shared)`
  margin: ${constants.margin.medium};
  background-color: ${props => constants.type[props.types[0].type.name].colorLight}
`
const Info = styled(Shared)`
  background-color: white;
  display: inline-block;
`
