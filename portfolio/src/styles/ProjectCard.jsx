import styled from 'styled-components';
import { BROWN } from './Colors';
import { IconContainer } from './Skills';

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

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
  border: ${({color}) => color ? `1px solid ${color}` : 'none'};
  border-radius: 12px;
  width: ${({mobile}) => mobile ? `200px` : `360px`};
  height: ${({mobile}) => mobile ? `300px` : `210px`};
  margin: 1rem auto;

  :hover {
    transform: scale(1.1);
  }
`

