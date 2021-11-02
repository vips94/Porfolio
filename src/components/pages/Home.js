//import classes from '*.module.css';
import React from "react";
import classes from "./Home.module.scss";
import { useTypewriter,Cursor} from 'react-simple-typewriter'

const Home = () => {

    const {text} = useTypewriter({
        words: ['Game Developer', 'Frontend Developer'],
        loop: 0,
        delaySpeed : 2000,
        typeSpeed : 100,
        deleteSpeed : 100
    });

    return (
        <div id="home" className={classes.home}>
            <img src="/images/profile.png" alt=""/>
            <h1>VIPIN KUMAR</h1>
            <p>I Am <span>{text}<Cursor cursorStyle="|"/></span></p>
        </div>
    );
};

export default Home;
