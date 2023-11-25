import React from "react";
import "./Contact.css";
export default function Contact() {
    return (
        <section className="contact" id="contact">
            <form id="usrform">
                <h1>Contact Us</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea name="comment" form="usrform">
                    Enter text here...
                </textarea>
                <input type="submit" value="Submit Form" />
            </form>
        </section>
    );
}
