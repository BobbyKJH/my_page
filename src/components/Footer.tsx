import React from "react";
import github2 from "../image/github2.png";
import { FooterStyle } from "../style/FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer">
        <a href="https://github.com/BobbyKJH" target="_blank">
          <img src={github2} alt="github" />
        </a>
        <span>Thank You For Visiting</span>
      </div>
    </FooterStyle>
  );
};

export default Footer;
