import git from '../images/git.png';
import github from '../images/github.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png';
import node from '../images/node.png';
import redux from '../images/redux.png';
import express from '../images/express.png';
import typescript from '../images/typescript.png';
import styledComponents from '../images/styledComponents.svg';
import { Container, Icon, IconContainer, Title } from '../styles/Skills';

function Skills() {
  return (
    <Container id="skills">
      <Title skill>
      Principais habilidades adquiridas ao longo da jornada:
      </Title>
      <IconContainer>
        <Icon src={git} alt="git"/>
        <Icon src={github} alt="git"/>
        <Icon src={html} alt="git"/>
        <Icon src={css} alt="git"/>
        <Icon src={js} alt="git"/>
        <Icon src={react} alt="git"/>
        <Icon src={node} alt="git"/>
        <Icon src={express} alt="git"/>
        <Icon src={redux} alt="git"/>
        <Icon src={styledComponents} alt="git"/>
        <Icon src={typescript} alt="git"/>
      </IconContainer>
    </Container>
  );
}

export default Skills;