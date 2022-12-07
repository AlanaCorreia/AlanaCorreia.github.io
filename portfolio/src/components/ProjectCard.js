import { Card, ProjectImage, ProjectName } from "../styles/ProjectCard";

function ProjectCard({name, image}) {
  return (
    <Card>
      <ProjectName>{ name }</ProjectName>
      <ProjectImage src={ image } alt="project image"/>
    </Card>
  );
}

export default ProjectCard;