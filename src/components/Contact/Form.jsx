import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
    const [showErrMsg, setShowErrMsg] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const form = useRef();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.name.value.trim();
        const email = form.current.email.value.trim();
        const message = form.current.message.value.trim();

        // Validation checks
        if (!name || !email || !message) {
            setFormSubmitted(false);
            setErrorMessage("Must fill all fields!");
            setShowErrMsg(true);
            return;
        }

        if (!validateEmail(email)) {
            setFormSubmitted(false);
            setErrorMessage("Please enter a valid email address!");
            setShowErrMsg(true);
            return;
        }

        // Check if environment variables are set
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setFormSubmitted(false);
            setErrorMessage("Email service is not properly configured!");
            setShowErrMsg(true);
            console.error("Missing EmailJS configuration variables");
            return;
        }

        emailjs.sendForm(
            serviceId,
            templateId,
            form.current,
            publicKey
        )
        .then((result) => {
            console.log('SUCCESS!', result.text);
            setShowErrMsg(false);
            setFormSubmitted(true);
            setErrorMessage("");
            form.current.reset();
            // Auto-hide success message after 5 seconds
            setTimeout(() => setFormSubmitted(false), 5000);
        }, (error) => {
            console.log('FAILED...', error.text);
            setErrorMessage("Failed to send message. Please try again!");
            setShowErrMsg(true);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                />
            </div>
            <button type="submit">Send</button>
            {showErrMsg ? <p className="err-msg">{errorMessage}</p> : ""}
            {formSubmitted ? (
                <p className="success-submission">
                    Form was sent Successfully!
                </p>
            ) : (
                ""
            )}
        </form>
    );
}