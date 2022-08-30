import React from "react";
import github from "../image/github.png";
import { FooterStyle } from "../style/FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer">
        <a href="https://github.com/BobbyKJH" target="_blank">
          <img src={github} alt="github" />
        </a>
        <span>Thank You For Visiting</span>
      </div>
    </FooterStyle>
  );
};

export default Footer;
