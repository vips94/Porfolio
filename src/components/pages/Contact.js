import React,{useState} from 'react';
import classes from './Contact.module.scss';
import {IoMdSend} from 'react-icons/io'
import emailjs from 'emailjs-com';

const Contact = ()=>{
    const [status,setStatus] = useState("");
    const [enteredUserName , setEnteredUserName ]= useState("");
    const [enteredEmail,setEnteredEmail] = useState("");
    const [enteredMessage,setEnteredMessage] = useState("");

    const userNameChangeHandler = (e)=>{
        setEnteredUserName(e.target.value);
    }

    const emailChangeHandler = (e)=>{
        setEnteredEmail(e.target.value);
    }

    const messageChangedHandler = (e) =>{
        setEnteredMessage(e.target.value);
    }

    let field = ""

    const submitHandler = async(e)=>{
        e.preventDefault();

        const a = document.forms["Form"]["userName"].value;
        const b = document.forms["Form"]["email"].value;
        const c = document.forms["Form"]["message"].value;

        if(a==null || a==="")
            field += "Name*"

        if(b==null || b==="")
            field += " Email*"

        if(c==null || c==="")
            field += " Message*"

        if(field !== ""){
            setStatus(`${field} field required!`)
            return;
        }
       
     
        emailjs.sendForm('service_u0safm4',
        'template_w7167sl',
        e.target,
        'user_IY3Of2Az7Hjk7ckxRUi3t').then((res)=>{
            setEnteredUserName("");
            setEnteredEmail("");
            setEnteredMessage("")
            setStatus("Success");
            setTimeout(()=>{
                setStatus("");
            },5000)
        }).catch((err)=>{
            setStatus("Something went wrong");
        });
      
    }
    

    return(
        <div id="contact" className={classes.contactForm}>
            <h1>Contact Me</h1>
            
            <form className={classes.contactForm__form} onSubmit={submitHandler} name="Form" >
                <p className={classes.contactForm__form__status}>{status}</p>
                <input className={classes.contactForm__form__name} value={enteredUserName} type="text" name="userName" onChange={userNameChangeHandler} id="userName" placeholder="Name *"></input>
                <input className={classes.contactForm__form__email} value={enteredEmail} onChange={emailChangeHandler} type="text" name="email" id="email" placeholder="Email *"></input>
                <textarea className={classes.contactForm__form__message} value={enteredMessage} name="message" onChange={messageChangedHandler} id="message" placeholder="Message *"></textarea>
                <button> 
                    <p>SEND</p>   
                    <IoMdSend/>
                </button>
            </form>
        </div>
    );
}
 
export default Contact;