import styled from 'styled-components';
import { LIGHT_BROWN, WHITE, BROWN } from './Colors'

export const HeaderContainer = styled.header`
  height: 2.9rem;
  width: 100%;
  margin: 0 auto;


  background-color: ${LIGHT_BROWN};
  color: ${WHITE};
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Link = styled.a`
  color: ${WHITE};
  text-decoration: none;
`

export const Row = styled.div`
  padding: 0 1rem;
  width: calc(100% / 3);

  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    transition: color 0.7s;

    :hover {
      color: ${BROWN};
      cursor: pointer;
    }
  }
`

export const Logo = styled.p`
  padding: 0 2rem;
`