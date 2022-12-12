import { Card, ProjectImage, ProjectName } from "../styles/ProjectCard";

function ProjectCard({name, image, color, mobile}) {
  return (
    <Card>
      <ProjectName>{ name }</ProjectName>
      <ProjectImage src={ image } alt="project image" color={ color } mobile={ mobile } />
    </Card>
  );
}

export default ProjectCard;