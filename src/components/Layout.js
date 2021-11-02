import React from 'react';
import Header from './common/Header';
import classes from './Layout.module.scss';

const Layout = ({children})=>{

    return(
        <div className={classes.layout}>
            <Header/>
            <div>{children}</div>
        </div>
    );
}
 
export default Layout;