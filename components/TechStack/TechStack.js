import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import cpp from "../../images/techStack/c++.png";
import css from "../../images/techStack/css.png";
import html from "../../images/techStack/html.png";
import github from "../../images/techStack/github.png";
import linkedin from "../../images/techStack/linkedin.png";
import javascript from "../../images/techStack/javascript.png";
import TechStackIcon from "./TechStackIcon/TechStackIcon";
import facebook from "../../images/techStack/facebook.jpg";

function TechStack() {

    const techstackData = [
        {
          iconImage: react,
          iconAltProperty: "reactImage",
          iconName: "React",
        },

        {
            iconImage: css,
            iconAltProperty: "cssImage",
            iconName: "css",
          },
        {

          iconImage: javascript,
          iconAltProperty: "jsImage",
          iconName: "Javascript",
        },
        {
          iconImage: html,
          iconAltProperty: "htmlImage",
          iconName: "HTML",
        },
      ];

  const techstackData2 = [
    {
      iconImage: cpp,
      iconAltProperty: "cppImage",
      iconName: "C++",
    },
    
    {
        iconImage: github,
        iconAltProperty: "githubImage",
        iconName: "Github",
      },
      
      {
        iconImage: linkedin,
        iconAltProperty: "linkedinImage",
        iconName: "Linkedin",
      },

      {
        iconImage: facebook,
        iconAltProperty: " facebookImage",
        iconName: "Facebook",
      },
  ];

  function showIcon(value) {
    return (
      <div className="techstack_image_element_container">
        <img src={value.iconImage} alt={value.iconAltProperty} />
        <p>{value.iconName}</p>
      </div> 
    );
  }

  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_image_rows_container">
        {/* Tech Stack Row 1 */}
        <div className="techstack_image_container_row1">
          {techstackData.map((value, key) => (
            <TechStackIcon data={value} />
          ))}
        </div>

        {/* Tech Stack Row 2 (which is exactly same as Row 1 but have different icon name, image  and alt property) */}
        <div className="techstack_image_container_row1">
          {techstackData2.map((value, key) => (
            // 1. Make a function and return html from it
            // showIcon(value)
            // 2. Create component, pass props to make it work according to out needs
            <TechStackIcon data={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;