import React from "react";
import classes from "./contactForm.module.css";
import Contact from "../schema/Contact";
import {postContact,updateContact} from "../api";

interface props {
    refresh:Function;
    contact:Contact;
}

const ini: Contact = {first_name:"", last_name:"",email:"",mobile:""}; 

const ContactForm = (props:props) => {
    const [state,setState] = React.useState(props.contact);

    const reset = (event: any) => {
        event.preventDefault();
        setState(ini);
    }

    React.useEffect(() => {
        setState(props.contact);
    },[props.contact]);


    const save = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(state.id){
            updateContact(state);
        } else {
            postContact(state);
        }
        reset(event);
        props.refresh();
    }

    const handleChange =(event:React.ChangeEvent<HTMLInputElement>) => {
        setState({
                ...state,
                [event.target.id] : event.target.value
        });
    }


    return ( 
        <div>
            <div className={classes.bar}>
                <p>Contacts</p>
            </div>

            <p className={classes.title}>Contact Form</p>
            <div className={classes.form}>
                <form>
                    <p><strong>First Name</strong></p>
                    <input type="text" value={state.first_name} id="first_name" placeholder="John" onChange={handleChange}/>

                    <p><strong>Last Name</strong></p>
                    <input type="text" id="last_name" value={state.last_name} placeholder="Lee" onChange={handleChange}/>

                    <p><strong>Email</strong></p>
                    <input type="email" id="email" value={state.email} placeholder="lee@gmail.com" onChange={handleChange}/>

                    <p><strong>Mobile</strong></p>
                    <input type="text" id="mobile" value={state.mobile} placeholder="233-23333" onChange={handleChange}/>

                    <div className={classes.buttonGroup}>
                        <button className={classes.b1} onClick={reset}>Cancel</button>
                        <button className={classes.b2} onClick={save}>Save </button>
                        <button className={classes.b3} onClick={reset}>Delete</button>
                    </div>
                </form>
            </div>
        </div>
   );
}

export default ContactForm;
