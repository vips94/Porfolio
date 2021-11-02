import React from 'react';
import ImageCarousel from './ImageCarousel';
import classes from './ProjectPopup.module.scss';


const ProjectPopup = (props)=>{
    const {projectName,projectDescription,images,imageFolder} = props.projectDetail;
    return(
        <div className={classes.projectPopup} onClick={props.handleClose}>
            <div className={classes.projectPopup__content} onClick = {(event) => event.stopPropagation()}>
                <div className={classes.projectPopup__content__close}>
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
