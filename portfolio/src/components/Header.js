import { HeaderContainer, Logo, Row } from "../styles/Header";

function Header() {
  return (
    <HeaderContainer>
      <Logo>AC</Logo>
      <Row>
        <p>Sobre</p>
        <p>Skills</p>
        <p>Projetos</p>
      </Row>
    </HeaderContainer>
  );
}

export default Header;
