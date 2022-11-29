import styled from 'styled-components';
import { BROWN } from './Colors';
import { IconContainer } from './Skills';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1.5rem;
  padding: 1rem;
`
export const ProjectContainer = styled(IconContainer)`
  justify-content: space-between;
  width: 60%;
`

export const ProjectName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`
export const ProjectImage = styled.p`
  border: solid ${BROWN};
  padding: 1rem;
  width: 240px;
  height: 120px;
`