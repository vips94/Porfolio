import React,{useState,useRef,useEffect} from 'react';
import WebViewer from '@pdftron/webviewer';
import classes from './PdfView.module.scss';

const PdfView = (props)=>{
    const [isLoaded,setIsloaded] = useState(false);
    const viewer = useRef(null)

    useEffect(()=>{
        WebViewer(
            {
                path: process.env.PUBLIC_URL+'/lib',
                initialDoc: process.env.PUBLIC_URL+'/documents/resume.pdf',
            },
            viewer.current,
            ).then((instance) => {
                setIsloaded(true);
                console.log(isLoaded);
            }).catch((err)=>console.log(err));
        }, [isLoaded]);

    return(
        <div className={classes.container} onClick={props.onClick}>
            <div className={classes.container__view} onClick = {(event) => event.stopPropagation()}>
                <a href= {process.env.PUBLIC_URL+"/documents/resume.pdf"} download>DOWNLOAD RESUME</a>
                <div ref={viewer} className={classes.container__view__pdf} onClick = {(event) => event.stopPropagation()}>
                {
                    !isLoaded && <p>Loading...</p> 
                }
                </div>
            </div>
        </div>
    );
}

export default PdfView;