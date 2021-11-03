import React,{ useState} from "react";
import classes from "./Home.module.scss";
import { useTypewriter,Cursor} from 'react-simple-typewriter';
import PdfView from './../common/PdfView';

const Home = () => {
    const[showPdf,setShowPdf] = useState(false);

    const {text} = useTypewriter({
        words: ['Game Developer', 'Frontend Developer'],
        loop: 0,
        delaySpeed : 2000,
        typeSpeed : 100,
        deleteSpeed : 100
    });

    const showPdfHandler = ()=>{
        setShowPdf((p)=>!p);
    }

    return (
        <div id="home" className={classes.home}>
            <img src="/images/profile.png" alt=""/>
            <h1>VIPIN KUMAR</h1>
            <p>I Am <span>{text}<Cursor cursorStyle="|"/></span></p>
            <button className={classes.home__btnResume} onClick={showPdfHandler}>SHOW RESUME</button>
            {
                showPdf && <PdfView onClick={showPdfHandler}/>
            }
            
        </div>
    );
};

export default Home;
