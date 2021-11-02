import React, { useState } from "react";
import classes from "./Projects.module.scss";
import ProjectCard from "./../common/ProjectCard";
import ProjectPopup from "./../common/ProjectPopup";

const projects = [
  {
    id: "e1",
    projectName: "Brain On : Draw",
    projectIcon: "brain_on_draw",
    imageFolder: "brain_on_draw",
    images: [1, 2, 3, 4, 5, 6, 7],
    projectDescription : "Used Unity & C#(programming Language) to create this project which uses physic mechanism as its core game logic."
   
  },
  {
    id: "e2",
    projectName: "Two Planes",
    projectIcon: "two_planes",
    imageFolder: "two_planes",
    images: [1, 2, 3, 4, 5, 6, 8, 9, 10],
    projectDescription : "Used Unity & C#(programming Language) to create this project which uses physic mechanism as its core game logic."
  },
  {
    id: "e3",
    projectName: "The Stack",
    projectIcon: "the_stack",
    imageFolder: "the_stack",
    images: [1, 2, 3, 4, 5, 6],
  },
  {
    id: "e4",
    projectName: "Save Me",
    projectIcon: "save_me",
    imageFolder: "save_me",
    images: [1, 2, 3, 4, 5],
  },
  {
    id: "e5",
    projectName: "Rolling Ball",
    projectIcon: "rolling_ball",
    imageFolder: "rolling_ball",
    images: [1, 2, 3, 4, 5, 6],
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
          <li>
            <ProjectCard
              projectDetail={projects[0]}
              onClick={() => {
                togglePopup(0);
              }}
            />
          </li>
          <li>
            <ProjectCard
              projectDetail={projects[1]}
              onClick={() => {
                togglePopup(1);
              }}
            />
          </li>
          <li>
            <ProjectCard
              projectDetail={projects[2]}
              onClick={() => {
                togglePopup(2);
              }}
            />
          </li>
          {/* <li>
                <ProjectCard projectIcon="blog" projectName="Blog" images={[...imageList]} onClick={togglePopup}/>
            </li> */}
          <li>
            <ProjectCard
              projectDetail={projects[4]}
              onClick={() => {
                togglePopup(4);
              }}
            />
          </li>
          <li>
            <ProjectCard
              projectDetail={projects[3]}
              onClick={() => {
                togglePopup(3);
              }}
            />
          </li>
        </ul>
      </div>
      {isShowPopup && (
        <ProjectPopup
          projectDetail={projects[project]}
          // content={<>
          // <b>Design your Popup</b>
          // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          // <button>Test button</button>
          // </>}
          handleClose={togglePopup}
        />
      )}
    </>
  );
};

export default Projects;
