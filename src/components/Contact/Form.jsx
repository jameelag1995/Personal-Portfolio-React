import React, { useRef, useState } from "react";

export default function Form() {
    const [showErrMsg, setShowErrMsg] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const usrname = useRef();
    const email = useRef();
    const message = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        if (
            !usrname.current.value ||
            !email.current.value ||
            !message.current.value
        ) {
            setFormSubmitted(false);
            setShowErrMsg(true);
            return;
        } else {
            setShowErrMsg(false);
            setContactForm({
                ...contactForm,
                [usrname.current.name]: usrname.current.value,
                [email.current.name]: email.current.value,
                [message.current.name]: message.current.value,
            });
            setFormSubmitted(true);
        }

        // Do somthing with Contact form details
    }

    return (
        <form id="usrform" onSubmit={handleSubmit}>
            <input ref={usrname} type="text" name="name" placeholder="Name" />
            <input ref={email} type="email" name="email" placeholder="Email" />
            <textarea
                ref={message}
                name="message"
                form="usrform"
                placeholder="Enter your text here..."
            />

            <input type="submit" value="Submit Form" />
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
