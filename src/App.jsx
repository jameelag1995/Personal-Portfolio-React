import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Card/Cards";
import About from "./components/About/About";
import Social from "./components/Social/Social";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import 'animate.css';
function App() {
    return (
        <>
            <Header />
            <Hero />
            <Cards />
            <About />
            <Social />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
