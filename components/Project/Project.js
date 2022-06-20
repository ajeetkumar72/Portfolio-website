import React from "react"
import "./Project.css"
import ProjectBox from "./ProjectBox/ProjectBox"
//import auto from "../../images/Project/auto.jpg"
//import image1 from "../../images/Project/image1.jpg"
//import ss1 from "../../images/Project/ss1.jpg"
//import cv from "../../images/Project/cv.jpg"


function Project() {
    const projectData = [
        {
            //image: [image1],
            title: "Student Report Management System",
            description: ["  Through this project, created a program which collects student details like name, roll number, marks in each subject, and calculates their grade. This is a simple console app created with the help of C++ language. It covers cocepts like loops and statements. Moreover file handling has used."
            ],
            link: " https://github.com/ajeetkumar72",
        },
        {
           // image: [auto],
            title: " IMDb Movie Data Analysis",
            description: [" Aim of the project: Prepared a dashboard with the use of different types of charts to show the working of project. Used basic concepts of excel and developed a scenario where movies review, the revenue earned and name of movie directors have depicted and compared with others with the help of graphs."
            ],
            link: " https://github.com/ajeetkumar72",
        },
        {
           // image: [ss1],
            title: "Blog Website",
            description: ["  Aim of project: Created a webpage about blog where tools like HTML, CSS, JavaScript are used. The page has created with designs and styling using different CSS properties. The blog is based on an english writer and has been described with various domains."
            
                
            ],
            link: " https://github.com/ajeetkumar72",
        },
        {
            //image: [cv],
            title: "Portfolio Website",
            description: [" Aim of project: Developed and built a landing page having different categories including personal details, resume, experience, technologies learned and projects . Creative ideas have been used to enhance a look to website using different JavaScript functions and libraries. Along with ReactJS and redux are combinely used to create a user interface."

                
            ],
            link: " https://github.com/ajeetkumar72",
        },



    ];

    return (

        <div>
            <p className="projects_title">Projects</p>
            <div className="Block1">
                {projectData.map((value, key) => (
                    <ProjectBox image={value.image}
                        title={value.title}
                        description={value.description}
                        link={value.link} />

                ))}
            </div>
        </div>
    )
}
export default Project;