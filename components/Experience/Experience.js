import React from "react";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox/ExperienceBox";
//import react from "../../images/techStack/react.png";
import javascript from "../../images/techStack/javascript.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import cpp from "../../images/techStack/c++.png";
import c from "../..//images/techStack/c.png";
 

function Experience() {
  const experienceData = [
    {
      title: "Board Infinity",
      sentences: [" Enrolled for one and half month of summer training where i learnt about the basic concepts of HTML, CSS, JavaScript. In first week tutor taught the basics of HTML and its syntax as well as various tags, anchors and other important concepts which is essential for creating a web page. Furthermore, in the upcoming weeks they taught about the uses of CSS and its properties. Moreover, in the fourth and fifth weeks, concepts of JavaScript were used to create different projects. Projects like Stopwatch, Hex-color change, Food delivery system and many more projects were added in the course. At the end of the course, Warm-up exercises, activities related to course and MCQs test were provided by the tutor. After completion of course, certificate was provided. "
         ],
      subtitle: "Tech Used",
      images: [  html, css, javascript],
    },
    {
      title: "InternShala",
      sentences: [" Enrolled in the course called C++ for a month where i learnt about the language from scratch and started building projects like student report management system and used to deploy the concepts of C++ and the OOPS concepts. Furthermore, other concepts like STL, Vectors and Iterators were learnt from basics to advance level. Alongside, the course tutor use to provide the resources and practice materials. After completion of the course, got certificate of completion. " ],
      subtitle: "Tech Used",
      images: [   cpp, c],
    },
    {
      title: "NGO ",
      sentences: [" Worked in the non-government organization for two months during the harsh crisis happened in 2020. COVID-19 time was very difficult for the people to survive without food and other neccessary items of daily use. Under this program, 15 membered team was helping people of the village areas to make them aware about the crisis and the prevention and protection from COVID-19. Soaps, Masks, Hand-sanitizers were distributed and camps were organized for the people to spread awareness about the unknown disease which was spreading rapidly throughout India. At the end, the organisation provided certificate of participation to all the team members and appreciated for their contribution and dedication throughout the entire session. "
            ],
      subtitle: " ",
      images: [    ],
    },
  ];

  return (
    <div className="ex_container">
      <p className="ex_title">Experience</p>
      <div className="ex_experiencebox_container">
        {experienceData.map((value, key) => (
          <ExperienceBox
            title={value.title}
            sentences={value.sentences}
            subtitle={value.subtitle}
            images={value.images}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;