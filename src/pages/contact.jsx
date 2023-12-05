import React from 'react'

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
    <div>
        <h1>Contact Us</h1>
        <form action="" onSubmit={handleForm}>
            <label>First Name:
            <input type="text"
            name="first-name"></input>
            </label>

            <label>Last Name:
            <input type="text"
            name="last-name"></input>
            </label>

            <label>Email:
            <input type="email"
            name="email"></input>
            </label>

            <label>Comments:
            <input type="text"
            name="comments"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
