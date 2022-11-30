import { HeaderContainer, Link, Logo, Row } from "../styles/Header";

function Header() {

  return (
    <HeaderContainer id="about">
      <Logo>AC</Logo>
      <Row>
        <Link href="#about">Sobre</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projetos</Link>
      </Row>
    </HeaderContainer>
  );
}

export default Header;
