import React from 'react';
import classes from './ProjectCard.module.scss';


const ProjectCard = (props)=>{
    const {projectName,projectIcon} = props.projectDetail
    return(
        <div className={classes.projectCard} onClick={props.onClick}>
            <img src={`${process.env.PUBLIC_URL}/images/${projectIcon}.png`} alt="oh!"/>
            <span>{projectName}</span>
        </div>
    );
}

export default ProjectCard;