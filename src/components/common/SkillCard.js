import React from 'react';
import classes from './SkillCard.module.scss';

const SkillCard = (props)=>{
    return(
        <div className={classes.skillCard}>
            <props.logo/>
            <span>{props.skillName}</span>
        </div>
    );
}

export default SkillCard;