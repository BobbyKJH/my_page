// Component
import ProjectCard from "../common/ProjectCard";
// Style
import { PageStyle } from "../../style/common/PageStyle";
import { ProjectCardStyle } from "../../style/common/CardStyle";
// Json
import { projectData } from "../../json/projectData";

const Project = () => {
  return (
    <PageStyle bgc="#f3e5ab">
      <span className="name">PROJECT</span>

      <>
        {projectData.map((item) => (
          <ProjectCardStyle key={item.title}>
            <ProjectCard
              image={item.image}
              title={item.title}
              explanation={item.explanation}
              skill={item.skill}
              github={item.github}
              url={item.url}
              tech={item.tech}
            />
          </ProjectCardStyle>
        ))}
      </>
    </PageStyle>
  );
};

export default Project;
