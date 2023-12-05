import React from 'react'

export default function Contact() {
    return (
    <div>
        <h1>Contact Us</h1>
        <form>
            <label>First Name:
            <input type="text"></input>
            </label>

            <label>Last Name:
            <input type="text"></input>
            </label>

            <label>Email:
            <input type="email"></input>
            </label>

            <label>Comments:
            <input type="text"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}
