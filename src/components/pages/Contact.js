import React from 'react';
import classes from './Contact.module.scss';
import {IoMdSend} from 'react-icons/io'

const Contact = ()=>{
    return(
        <div id="contact" className={classes.contactForm}>
            <h1>Contact Me</h1>
            <div className={classes.contactForm__form}>
                <input className={classes.contactForm__form__name} type="text" name="name" placeholder="Name"></input>
                <input className={classes.contactForm__form__email} type="text" name="email" placeholder="Email"></input>
                <textarea className={classes.contactForm__form__message} name="message" placeholder="Message"></textarea>
                <button> 
                    <p>SEND</p>   
                    <IoMdSend/>
                </button>
                   
                {/* <div className={classes.contactForm__form__button}>
                    <button>Send</button>
                    <IoMdSend/>
                </div> */}
            </div>
        </div>
    );
}
 
export default Contact;