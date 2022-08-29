// React
import React from "react";
// Style
import { HeaderStyle } from "../style/HeaderStyle";

const Header = () => {
  // Scroll Button
  const scrollValue = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    switch (id) {
      case "about-btn":
        return document
          .querySelector("#about")
          ?.scrollIntoView({ behavior: "smooth" });
      case "skill-btn":
        return document
          .querySelector("#skill")
          ?.scrollIntoView({ behavior: "smooth" });
      case "project-btn":
        return document
          .querySelector("#project")
          ?.scrollIntoView({ behavior: "smooth" });
      case "archiving-btn":
        return document
          .querySelector("#archiving")
          ?.scrollIntoView({ behavior: "smooth" });
      default:
        return window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <HeaderStyle>
      <div id="header">
        <div id="title" onClick={scrollValue}>
          Bobby's Diary
        </div>

        <div className="scroll">
          <div onClick={scrollValue} id="about-btn" className="menu">
            About
          </div>
          <hr />
          <div onClick={scrollValue} id="skill-btn" className="menu">
            Skill
          </div>
          <hr />

          <div onClick={scrollValue} id="archiving-btn" className="menu">
            Archiving
          </div>
          <hr />

          <div onClick={scrollValue} id="project-btn" className="menu">
            Project
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
