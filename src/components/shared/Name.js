import React, { Component } from 'react';
import styled from 'styled-components';
import constants from '../../constants/constants'

class Name extends Component {
  render(){
    const { name } = this.props
    return(
      <Div>
        {name}
      </Div>
    )
  }
}

export default Name

const Div = styled.div`
  font-size: ${constants.fontSize.large};
  font-weight: bold;
  display: inline-block;
`
