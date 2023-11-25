import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <p class="animate__animated animate__zoomInDown">Feel free to reach out! Whether you have a question, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you. Your feedback and inquiries are valuable to me. Please use the form below to drop me a message, and I'll get back to you as soon as possible. Alternatively, you can connect with me through the social media icons provided. Looking forward to hearing from you and exploring new opportunities together!</p>
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
