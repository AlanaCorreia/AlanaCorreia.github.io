import { Card, ProjectImage, ProjectName } from "../styles/ProjectCard";

function ProjectCard({href, name, image, color, mobile}) {
  return (
    <Card href={ href } target="_blank">
      <ProjectName>{ name }</ProjectName>
      <ProjectImage src={ image } alt="project image" color={ color } mobile={ mobile } />
    </Card>
  );
}

export default ProjectCard;