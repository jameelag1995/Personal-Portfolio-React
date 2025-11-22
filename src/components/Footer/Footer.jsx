import "./Footer.css";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="footer" id="footer">
            <h2>JEEM LABS &#169; {currentYear}</h2>
            <h3>Location: Haifa</h3>
            <h3>Phone Number: +972526389960</h3>
        </section>
    );
}
