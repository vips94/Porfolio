import React from 'react';
import classes from './ProjectCard.module.scss';


const ProjectCard = (props)=>{
    const {projectName,projectIcon,backgroundColor} = props.projectDetail
    console.log(backgroundColor)
    return(
        <div className={classes.projectCard} onClick={props.onClick}>
            <img src={`${process.env.PUBLIC_URL}/images/${projectIcon}.png`} style={{
                background: `${backgroundColor}`
            }} alt="oh!"/>
            <span>{projectName}</span>
        </div>
    );
}

export default ProjectCard;