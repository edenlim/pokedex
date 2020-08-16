import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import constants from '../constants/constants'
import * as utilities from '../scripts/utilities'

class HeadNav extends Component {
  render(){
    const {paths} = this.props
    return(
      <NavDiv>
        <StyledLink
          key={'home'}
          to={`/`}
        >
          Home
          </StyledLink>
        <NavElements>
          {paths.map(path => (
            <StyledLink
              key={path.name}
              to={`/${path.name}`}
            >
              {utilities.capitalize(path.name)}
            </StyledLink>
          ))}

        </NavElements>
      </NavDiv>
    )
  }
}

export default HeadNav

const NavDiv = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${constants.colors.grey.p30};
  margin: 0 0 ${constants.margin.medium} 0
`

const NavElements = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 80%;
`

const StyledLink = styled(Link)`
  cursor: pointer;
  width: ${constants.width.medium};
  height: ${constants.height.small};
  margin: 0 1%;
  background-color: ${constants.colors.grey.p30};
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${constants.fontSize.medium};

  &:hover {
      background-color: ${constants.colors.grey.p40};
  }
`
