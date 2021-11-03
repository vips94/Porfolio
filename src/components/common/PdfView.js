import React,{useRef,useEffect} from 'react';
import WebViewer from '@pdftron/webviewer';
import classes from './PdfView.module.scss';

const PdfView = (props)=>{
    const viewer = useRef(null)

    useEffect(()=>{
        WebViewer(
            {
                path: 'lib',
                initialDoc: '/documents/resume.pdf',
            },
            viewer.current,
            ).then((instance) => {
                const { documentViewer } = instance.Core;
                // you can now call WebViewer APIs here...
            });
        }, []);

    return(
        <div className={classes.container} onClick={props.onClick}>
            <div className={classes.container__view} onClick = {(event) => event.stopPropagation()}>
                <a href="/documents/resume.pdf" download>DOWNLOAD RESUME</a>
                <div ref={viewer} className={classes.container__view__pdf} onClick = {(event) => event.stopPropagation()}/>
            </div>
        </div>
    );
}

export default PdfView;