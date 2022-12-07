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
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${BROWN};
`
export const ProjectImage = styled.img`
  padding: 1rem;
  width: 360px;
  height: 210px;

  :hover {
    transform: scale(1.1);
  }
`

