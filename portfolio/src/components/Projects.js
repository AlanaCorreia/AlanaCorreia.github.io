import { ProjectContainer } from "../styles/ProjectCard";
import { Container, Title } from "../styles/Skills";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <Container>
      <Title>
      Principais projetos:
      </Title>
      <ProjectContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectContainer>
    </Container>
  );
}

export default Projects;