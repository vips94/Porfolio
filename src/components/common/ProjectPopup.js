import React from 'react';
import ImageCarousel from './ImageCarousel';
import classes from './ProjectPopup.module.scss';


const ProjectPopup = (props)=>{
    const {projectName,projectDescription,images,imageFolder,website,github,websiteLink,githubLink} = props.projectDetail;
    return(
        <div className={classes.projectPopup} onClick={props.handleClose}>
            <div className={classes.projectPopup__content} onClick = {(event) => event.stopPropagation()}>
                <div className={classes.projectPopup__content__close}>
                    <div>
                    {website && <a href={websiteLink} target="_blank" rel="noreferrer" >Visit Website</a>}
                    {github && <a href={githubLink} target="_blank" rel="noreferrer" >Visit Project</a>}
                    </div>
                    <button onClick={props.handleClose}>X</button>
                </div>
                <ImageCarousel images={images} imageFolder={imageFolder}/>
                <div className={classes.projectPopup__content__description}>
                    <h3>{projectName}</h3>
                    <span>{projectDescription}</span>
                </div>
                
            </div>
            
        </div>
    );
}

export default ProjectPopup;
