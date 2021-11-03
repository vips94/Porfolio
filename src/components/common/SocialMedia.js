import React from 'react';
import classes from './SocialMedia.module.scss';
import {FaFacebook,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa';

const SocialMedia = (props)=>{
    return(
        <div className={classes.socialMedia}>
            <a href="https://www.facebook.com/profile.php?id=100005212578916" target="_blank" rel="noreferrer"><FaFacebook className={classes.fb}/></a>
            <a href="https://www.instagram.com/_vipin_kumar/" target="_blank" rel="noreferrer"><FaInstagram className={classes.insta}/></a>
            <a href="https://github.com/vips94" target="_blank" rel="noreferrer"><FaGithub className={classes.git}/></a>
            <a href="https://linkedin.com/in/vipin-kumar-878971158" target="_blank" rel="noreferrer"><FaLinkedin className={classes.li}/></a>
            {/* <ul className={classes.socialMedia__ul}>
                <li>
                    
                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
            </ul> */}
        </div>
    );
}

export default SocialMedia;