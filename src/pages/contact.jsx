import React from 'react'
import './contact.css'

export default function Contact() {
    const handleForm =(event) => {
        event.preventDefault();
        let form = event.target;

        let formData = new FormData(form);
        let formDataObj = Object.fromEntries(formData)

        if(formDataObj.Name === ""){
            //
        }
    }
    return (
    <div className="contact-container">
        <h1>Contact Us</h1>
        <form action="" onSubmit={handleForm} className="form-container">
            <label>First Name:
            <input type="text"
            name="first-name" className="contact-input"></input>
            </label>

            <label>Last Name:
            <input type="text"
            name="last-name" className="contact-input"></input>
            </label>

            <label>Email:
            <input type="email"
            name="email" className="contact-input"></input>
            </label>

            <label>Comments:
            <input type="text"
            name="comments" className="comment-input"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
