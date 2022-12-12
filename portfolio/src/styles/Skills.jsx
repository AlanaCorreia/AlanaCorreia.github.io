import styled from 'styled-components';
import { BROWN } from './Colors';
import background from '../images/background.jpg';

export const Container = styled.div`
  height: 100vh;
  background-image: url(${background});
  display: flex;
  flex-direction: column;
  justify-content: ${({projects}) => projects ? `flex-start` : 'space-evenly'};
  align-items: center;
`
export const IconContainer = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

export const Icon = styled.img`
  width: 80px;
  height: 80px;
  margin: 1.5rem;
`
export const Title = styled.p`
  color: ${BROWN};
  font-size: 2rem;
  text-align: justify;
  margin: ${({projects}) => projects ? `5rem auto` : 'none'};
`