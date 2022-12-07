import { ProjectContainer } from "../styles/ProjectCard";
import { Container, Title } from "../styles/Skills";
import ProjectCard from "./ProjectCard";
import solarsystem from "../images/solarsystem.jpeg"
import wallet from "../images/trybewallet.jpeg"

function Projects() {
  return (
    <Container id="projects">
      <Title>
      Principais projetos:
      </Title>
      <ProjectContainer>
        <ProjectCard name="Solar System" image={ solarsystem } />
        <ProjectCard name="Wallet" image={ wallet }/>
        <ProjectCard />
        <ProjectCard />
      </ProjectContainer>
    </Container>
  );
}

export default Projects;