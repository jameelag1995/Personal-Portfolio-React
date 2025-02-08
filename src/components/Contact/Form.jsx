import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
    const [showErrMsg, setShowErrMsg] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current.name.value || !form.current.email.value || !form.current.message.value) {
            setFormSubmitted(false);
            setShowErrMsg(true);
            return;
        }

        emailjs.sendForm(
            // get service id and template id from .env file
            import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your Service ID
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID , // Replace with your Template ID
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your Public Key
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setShowErrMsg(false);
            setFormSubmitted(true);
            form.current.reset();
        }, (error) => {
            console.log('FAILED...', error.text);
            setShowErrMsg(true);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea
                name="message"
                placeholder="Enter your text here..."
            />
            <button type="submit">Submit Form</button>
            {showErrMsg ? <p className="err-msg">Must Fill All Fields!</p> : ""}
            {formSubmitted ? (
                <p className="success-submission">
                    Form Submitted Successfully!
                </p>
            ) : (
                ""
            )}
        </form>
    );
}