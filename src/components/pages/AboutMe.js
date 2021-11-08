import React from 'react';
import classes from './AboutMe.module.scss';

const AboutMe = ({children})=>{
    return(
        <div id="aboutMe" className={classes.aboutMe}>
            <div className={classes.aboutMe__grid}>
                <h1 className={classes.aboutMe__grid__title}>About Me</h1>
                <div className={classes.aboutMe__grid__content}>
                    <h3>Just a simple dude who wants to create awesome stuff -</h3>
                    <br/>
                    <p>That pretty much sums it up.
                        whether it's soloving a coding problems or creating games
                        i aim for simple, intuitve solutions. I studied <span>computer science</span> at 
                        Bundelkhand University, Jhansi and recieved my <span>B.tech</span> degree in 2018.
                        Oh, and i love teaching myself HTML/CSS/JS/REACT, so i have developed 
                        this site myself, with code.</p>

                </div>
                <div className={classes.aboutMe__grid__photo}>
                    <img  src="/images/profilePhoto.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;