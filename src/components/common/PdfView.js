import React,{useRef,useEffect} from 'react';
import WebViewer from '@pdftron/webviewer';
import classes from './PdfView.module.scss';

const PdfView = (props)=>{
    const viewer = useRef(null)

    useEffect(()=>{
        WebViewer(
            {
                path: process.env.PUBLIC_URL+'/lib',
                initialDoc: process.env.PUBLIC_URL+'/documents/resume.pdf',
            },
            viewer.current,
            ).then((instance) => {
                console.log("showing pdf");
                //const { documentViewer } = instance.Core;
                // you can now call WebViewer APIs here...
            }).catch((err)=>console.log(err));
        }, []);

    return(
        <div className={classes.container} onClick={props.onClick}>
            <div className={classes.container__view} onClick = {(event) => event.stopPropagation()}>
                <a href= {process.env.PUBLIC_URL+"/documents/resume.pdf"} download>DOWNLOAD RESUME</a>
                <div ref={viewer} className={classes.container__view__pdf} onClick = {(event) => event.stopPropagation()}/>
            </div>
        </div>
    );
}

export default PdfView;