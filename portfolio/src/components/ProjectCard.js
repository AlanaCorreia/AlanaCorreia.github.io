import { Card, ProjectImage, ProjectName } from "../styles/ProjectCard";

function ProjectCard() {
  return (
    <Card>
      <ProjectName>Nome do projeto</ProjectName>
      <ProjectImage>imagem do projeto</ProjectImage>
    </Card>
  );
}

export default ProjectCard;