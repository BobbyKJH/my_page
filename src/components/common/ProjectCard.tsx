// Image
import git from "../../image/github.png";
import link from "../../image/link.png";

interface ProjectType {
  [key: string]: string;
}

const ProjectCard = ({
  image,
  title,
  explanation,
  skill,
  github,
  url,
  tech,
}: ProjectType) => {
  return (
    <>
      <span className="title">{title}</span>
      <hr />
      <div className="content">
        <img src={image} alt={title} className="image" />

        <div className="content-detail">
          <span className="explanation fc">{explanation}</span>

          <div>
            <p className="tech-name">주요기능</p>
            <br />
            <p>: {skill}</p>
          </div>

          <div>
            <p className="tech-name">사용 기술</p>
            <br />
            <p>: {tech}</p>
          </div>

          <div className="link">
            <a href={github} target="_blank">
              <img src={git} className="github" />
            </a>

            <a href={url} target="_blank">
              <img src={link} className="url" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
