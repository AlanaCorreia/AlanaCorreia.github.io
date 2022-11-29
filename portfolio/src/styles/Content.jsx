import styled from 'styled-components';
import { BROWN } from './Colors'

export const Container = styled.div`
  margin: 30vh auto;

  color: ${BROWN};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: justify;
`

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  width: 45%;
`
export const Image = styled.img`
  border-radius: 22px;
`