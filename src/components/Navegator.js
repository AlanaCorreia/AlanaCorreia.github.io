import { BtnNav, Column, Nav } from '../styles/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setNav } from '../store/actions';
import { useEffect } from 'react';

function Navegator() {
  const dispatch = useDispatch();
  const route = useSelector(({ navReducer }) => navReducer.section);
  const perc = useSelector(({ navReducer }) => navReducer.percentage);

  useEffect(() => {
    if (perc < 25) dispatch(setNav('about'));
    if (perc >= 25 && perc < 65) dispatch(setNav('skills'));
    if (perc >= 65) dispatch(setNav('projects'));
  }, [dispatch, perc]);

  return (
    <Column>
      <Nav href="#about">
        <BtnNav onClick={() => dispatch(setNav('about'))}>{route === 'about' ? '◉' : '●'}</BtnNav>
      </Nav>
      <Nav href="#skills">
        <BtnNav onClick={() => dispatch(setNav('skills'))}>{route === 'skills' ? '◉' : '●'}</BtnNav>
      </Nav>
      <Nav href="#projects">
        <BtnNav onClick={() => dispatch(setNav('projects'))}>{route === 'projects' ? '◉' : '●'}</BtnNav>
      </Nav>
    </Column>
  );
}

export default Navegator;