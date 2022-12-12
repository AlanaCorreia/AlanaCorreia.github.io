import { BtnNav, Column, Nav } from '../styles/Header';
import { useDispatch, useSelector } from 'react-redux';
import setNav from '../store/actions';

function Navegator() {
  const dispatch = useDispatch();
  const route = useSelector(({ navReducer }) => navReducer);
  console.log('route: ', route);

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