import "./Contact.css";
import Form from "./Form";

export default function Contact() {
    return (
        <main id="contact" className="contact-container">
            <h1 id="title">Contact Me</h1>
            <section className="contact">
                <p className="animate__animated animate__zoomInDown">
                    Feel free to reach out! Whether you have a question, want to
                    discuss a potential collaboration, or just want to say
                    hello, I'd love to hear from you. Your feedback and
                    inquiries are valuable to me. Please use the form below to
                    drop me a message, and I'll get back to you as soon as
                    possible. Alternatively, you can connect with me through the
                    social media icons provided. Looking forward to hearing from
                    you and exploring new opportunities together!
                </p>
                <Form />
            </section>
        </main>
    );
}
