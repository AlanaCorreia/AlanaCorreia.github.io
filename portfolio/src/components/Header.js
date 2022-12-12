import { useDispatch } from "react-redux";
import setNav from "../store/actions";
import { HeaderContainer, Link, Logo, Row } from "../styles/Header";

function Header() {
  const dispatch = useDispatch();

  return (
    <HeaderContainer id="about">
      <Logo>AC</Logo>
      <Row>
        <Link onClick={() => dispatch(setNav('about'))} href="#about">Sobre</Link>
        <Link onClick={() => dispatch(setNav('skills'))} href="#skills">Skills</Link>
        <Link onClick={() => dispatch(setNav('projects'))} href="#projects">Projetos</Link>
      </Row>
    </HeaderContainer>
  );
}

export default Header;
