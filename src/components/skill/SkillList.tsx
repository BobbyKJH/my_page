import React from "react";
// Front-End
import html from "../../image/htmljscss.jpeg";
import react from "../../image/react.png";
import redux from "../../image/reduxtoolkit.png";
import styledcomponenet from "../../image/styledcomponent.png";
import ts from "../../image/ts.png";
// Version Control
import git from "../../image/git.png";
import github from "../../image/github.png";
// Communication
import slack from "../../image/slack.png";
import figma from "../../image/figma.png";
// Style
import { SkillListStyle } from "../../style/common/ListStyle";

const SkillList = () => {
  return (
    <SkillListStyle>
      <div className="detail-skill">
        <div>
          <span className="skill-title">Front-End</span>
          <hr />
          <img src={html} alt="html" />
          <img src={ts} alt="ts" />
          <img src={react} alt="react" />
          <img src={styledcomponenet} alt="styled-components" />
          <img src={redux} alt="redux-toolkit" />
        </div>
      </div>

      <div className="detail-skill">
        <div>
          <span className="skill-title">Version Control</span>
          <hr />
          <img src={git} alt="git" />
          <img src={github} alt="github" />
        </div>

        <div>
          <span className="skill-title">Communication</span>
          <hr />
          <img src={slack} alt="slack" />
          <img src={figma} alt="figma" />
        </div>
      </div>
    </SkillListStyle>
  );
};

export default SkillList;
