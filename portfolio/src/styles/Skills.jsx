import styled from 'styled-components';
import { BROWN } from './Colors';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const IconContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  margin-bottom: 4rem;
`