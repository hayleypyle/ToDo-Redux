import React, { useRef, useState, useEffect } from 'react';
import './contact.css'
import { updateForm } from '../actions/action_creators';
import { useDispatch, useSelector} from 'react-redux';


export default function Contact(props) {
    // const [input, setInput] = useState({}); 
    const formData = useSelector((state) => state.contact);
        console.log('Form Data:', formData);

    const fnameInput = useRef(null);
    const lnameInput = useRef(null);
    const emailInput = useRef(null);
    const commentsInput = useRef(null);
    
    const dispatch = useDispatch();

    const handleForm = (event) => {
        event.preventDefault();
        

        dispatch(updateForm({
            firstName: fnameInput.current.value,
            lastName: lnameInput.current.value,
            email: emailInput.current.value,
            comments: commentsInput.current.value,

            }));
            
            fnameInput.current.value = '';
            lnameInput.current.value = '';
            emailInput.current.value = '';
            commentsInput.current.value = '';

        ;
        

    }
    return (
    <div className="contact-container">
        <h1>Contact Us</h1>
        <form action="" onSubmit={handleForm} className="form-container">
            <label>First Name:
            <input type="text"
            name="first-name" className="contact-input" ref={fnameInput}></input>
            </label>

            <label>Last Name:
            <input type="text"
            name="last-name" className="contact-input" ref={lnameInput}></input>
            </label>

            <label>Email:
            <input type="email"
            name="email" className="contact-input" ref={emailInput}></input>
            </label>

            <label>Comments:
            <textarea className="comment-input" ref={commentsInput}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
