import { ProjectContainer } from "../styles/ProjectCard";
import { Container, Title } from "../styles/Skills";
import ProjectCard from "./ProjectCard";
import solarsystem from "../images/solarsystem.jpeg"
import wallet from "../images/trybewallet.jpeg"
import projectrecipesapp from "../images/projectrecipesapp.png"
import { GREEN, PURPLE } from "../styles/Colors";

function Projects() {
  return (
    <Container projects id="projects">
      <Title projects>
      Principais projetos:
      </Title>
      <ProjectContainer>
        <ProjectCard href="https://projectsolarsystem.netlify.app/" name="Solar System" image={ solarsystem } />
        <ProjectCard href="https://projectwallet.netlify.app/" name="Wallet" image={ wallet } color={ GREEN } />
        <ProjectCard href="https://projectrecipesapp.netlify.app/" name="App de Receitas - Versão Mobile" image={ projectrecipesapp } color={ PURPLE } mobile="mobile" />
      </ProjectContainer>
    </Container>
  );
}

export default Projects;