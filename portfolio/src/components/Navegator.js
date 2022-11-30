import { useState } from 'react';
import { BtnNav, Column, Nav } from '../styles/Header';

function Navegator() {
  const [route, setRoute] = useState('about');

  return (
    <Column>
      <Nav href="#about">
        <BtnNav onClick={() => setRoute('about')}>{route === 'about' ? '◉' : '●'}</BtnNav>
      </Nav>
      <Nav href="#skills">
        <BtnNav onClick={() => setRoute('skills')}>{route === 'skills' ? '◉' : '●'}</BtnNav>
      </Nav>
      <Nav href="#projects">
        <BtnNav onClick={() => setRoute('projects')}>{route === 'projects' ? '◉' : '●'}</BtnNav>
      </Nav>
    </Column>
  );
}

export default Navegator;