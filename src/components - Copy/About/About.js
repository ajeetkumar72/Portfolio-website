import React from "react";
import "./About.css";
import githubImage from "../../images/github.png";
import linkedinImage from "../../images/linkedin.png";


function About() {
  return (
    <div className="about_container">
      <p className="about_text1">
        <span className="highlighted_text">Hello,</span> my name is
      </p>
      <p className="about_text2">Ajeet Kumar</p>
      <p className="about_text3">
        I am a student of <span className="highlighted_text">Lovely Professional University</span>
      </p>
      <p className="about_description">
      Passionate full stack engineer in developing websites and applications using wide range of front-end and back-end skills like HTML, CSS, JavaScript, jQuery, React-redux, etc. Further looking to enhance my skills in web development field as a full stck developer.

      </p>
      <div>
        <a
          href="  https://www.linkedin.com/in/ajeetkumarray/  "
          target="_blank"
        >
          <img src={linkedinImage} alt="linkedinImage" />
        </a>
        <a href="  https://github.com/ajeetkumar72" target="_blank">
          <img src={githubImage} alt="githubImage" />
        </a>
      </div>
      <a href="mailto: ajeetkumar841421@gmail.com.com">
        <button className="about_button">Meet me</button>
      </a>
    </div>
  );
}

export default About;
