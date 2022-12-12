import { ProjectContainer } from "../styles/ProjectCard";
import { Container, Title } from "../styles/Skills";
import ProjectCard from "./ProjectCard";
import solarsystem from "../images/solarsystem.jpeg"
import wallet from "../images/trybewallet.jpeg"
import projectrecipesapp from "../images/projectrecipesapp.png"
import { GREEN, PURPLE } from "../styles/Colors";

function Projects() {
  return (
    <Container id="projects">
      <Title>
      Principais projetos:
      </Title>
      <ProjectContainer>
        <ProjectCard name="Solar System" image={ solarsystem } />
        <ProjectCard name="Wallet" image={ wallet } color={ GREEN } />
        <ProjectCard name="App de Receitas - Versão Mobile" image={ projectrecipesapp } color={ PURPLE } mobile="mobile" />
        <ProjectCard />
        <ProjectCard />
      </ProjectContainer>
    </Container>
  );
}

export default Projects;