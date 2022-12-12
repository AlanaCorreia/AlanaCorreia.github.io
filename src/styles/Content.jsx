import styled from 'styled-components';
import { BROWN } from './Colors'
import background from '../images/background.jpg';

export const Container = styled.div`
  /* margin: 30vh auto; */
  height: calc(100vh - 2rem);

  background-image: url(${background});
  /* background-size: 100% calc(100% - 2rem); */
  color: ${BROWN};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: justify;
`

export const Text = styled.p`
  font-size: 1.3rem;
  line-height: 1.5rem;
  width: 40%;
`
export const Image = styled.img`
  border-radius: 22px;

`