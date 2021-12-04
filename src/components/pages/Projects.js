import React, { useState } from "react";
import classes from "./Projects.module.scss";
import ProjectCard from "./../common/ProjectCard";
import ProjectPopup from "./../common/ProjectPopup";

const projects = [
  {
    id:"e6",
    projectName: "To-do List",
    projectIcon: "to-do",
    imageFolder: "to-do",
    images: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13],
    projectDescription : "Used React/Javascript/Html/CSS to create this project which is Responsive",
    website:true,
    github:true,
    websiteLink:"https://vips94.github.io/to-do/",
    githubLink:"https://github.com/vips94/to-do"
  },
  {
    id:"e0",
    projectName: "News-App",
    projectIcon: "news-app",
    imageFolder: "news-app",
    images: [1, 2, 3, 4, 5, 6, 7],
    projectDescription : "Used React/Javascript/Html/CSS to create this project which is Responsive and uses NEWS API to show the current news result.",
    website:true,
    github:true,
    websiteLink:"https://vips94.github.io/News-App/",
    githubLink:"https://github.com/vips94/News-App"
  },
  {
    id: "e1",
    projectName: "Brain On : Draw",
    projectIcon: "brain_on_draw",
    imageFolder: "brain_on_draw",
    images: [1, 2, 3, 4, 5, 6, 7],
    projectDescription : "Used Unity/C#(programming Language) to create this project which uses physic mechanism as its core game logic.",
    website:false,
    github:false,
    websiteLink:"",
    githubLink:""
  },
  {
    id: "e2",
    projectName: "Two Planes",
    projectIcon: "two_planes",
    imageFolder: "two_planes",
    images: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    projectDescription : "Used Unity/C#(programming Language) to create this project.",
    website:false,
    github:false,
    websiteLink:"",
    githubLink:""
  },
  {
    id: "e3",
    projectName: "The Stack",
    projectIcon: "the_stack",
    imageFolder: "the_stack",
    images: [1, 2, 3, 4, 5, 6],
    projectDescription : "Used Unity/C#(programming Language) to create this project.",
    website:false,
    github:false,
    websiteLink:"",
    githubLink:""
  },
  {
    id: "e4",
    projectName: "Save Me",
    projectIcon: "save_me",
    imageFolder: "save_me",
    images: [1, 2, 3, 4, 5],
    projectDescription : "Used Unity/C#(programming Language) to create this project.",
    website:false,
    github:false,
    websiteLink:"",
    githubLink:""
  },
  {
    id: "e5",
    projectName: "Rolling Ball",
    projectIcon: "rolling_ball",
    imageFolder: "rolling_ball",
    images: [1, 2, 3, 4, 5, 6],
    projectDescription : "Used Unity/C#(programming Language) to create this project.",
    website:false,
    github:false,
    websiteLink:"",
    githubLink:""
  },
];

const Projects = () => {
  const [isShowPopup, setisShowPopup] = useState(false);
  const [project, setProject] = useState();

  const togglePopup = (i) => {
    setisShowPopup(!isShowPopup);
    setProject(i);
  };

  return (
    <>
      <div id="projects" className={classes.projects}>
        <h1>Projects</h1>
        <ul className={classes.projects__list}>
          {
            projects.map((item,index)=>{
              return(
                <li key={index}>
                <ProjectCard
                  projectDetail={item}
                  onClick={() => {
                    togglePopup(index);
                  }}
                />
              </li>
              );
            })
          }
        </ul>
      </div>
      {isShowPopup && (
        <ProjectPopup
          projectDetail={projects[project]}
          handleClose={togglePopup}
        />
      )}
    </>
  );
};

export default Projects;
