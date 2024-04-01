import "./Carousel.css";
import StackIcon from "tech-stack-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export default function MyCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
    };

    return (
        <>
            <Carousel
                centerMode
                infiniteLoop
                showArrows={false}
                showIndicators={false}
                autoPlay
                emulateTouch={true}
                showStatus={false}
                showThumbs={false}
            >
                <>
                    <StackIcon className="icon" name="html5" />
                    <StackIcon className="icon" name="css3" />
                    <StackIcon className="icon" name="js" />
                    <StackIcon className="icon" name="reactjs" />
                    <StackIcon className="icon" name="nodejs" />
                    <StackIcon className="icon" name="mongodb" />
                </>
                <>
                    <StackIcon className="icon" name="redux" />
                    <StackIcon className="icon" name="json" />
                    <StackIcon className="icon" name="vscode" />
                    <StackIcon className="icon" name="babel" />
                    <StackIcon className="icon" name="materialui" />
                    <StackIcon className="icon" name="mochajs" />
                </>
                <>
                    <StackIcon className="icon" name="bash" />
                    <StackIcon className="icon" name="chrome" />
                    <StackIcon className="icon" name="cloudinary" />
                    <StackIcon className="icon" name="eslint" />
                    <StackIcon className="icon" name="firebase" />
                    <StackIcon className="icon" name="git" />
                </>
                <>
                    <StackIcon className="icon" name="netlify2" />
                    <StackIcon className="icon" name="npm" />
                    <StackIcon className="icon" name="openai" />
                    <StackIcon className="icon" name="postman" />
                    <StackIcon className="icon" name="python" />
                    <StackIcon className="icon" name="pytorch" />
                </>
                <>
                    <StackIcon className="icon" name="reactrouter" />
                    <StackIcon className="icon" name="render" />
                    <StackIcon className="icon" name="vitejs" />
                    <StackIcon className="icon" name="webpack" />
                    <StackIcon className="icon" name="wordpress" />
                </>
            </Carousel>
            {/* <Slider {...settings}>
            <StackIcon className="icon" name="html5" />
            <StackIcon className="icon" name="css3" />
            <StackIcon className="icon" name="js" />
            <StackIcon className="icon" name="reactjs" />
            <StackIcon className="icon" name="nodejs" />
            <StackIcon className="icon" name="mongodb" />
            <StackIcon className="icon" name="redux" />
            <StackIcon className="icon" name="json" />
            <StackIcon className="icon" name="vscode" />
            <StackIcon className="icon" name="babel" />
            <StackIcon className="icon" name="bash" />
            <StackIcon className="icon" name="chrome" />
            <StackIcon className="icon" name="cloudinary" />
            <StackIcon className="icon" name="eslint" />
            <StackIcon className="icon" name="firebase" />
            <StackIcon className="icon" name="git" />
            <StackIcon className="icon" name="materialui" />
            <StackIcon className="icon" name="mochajs" />
            <StackIcon className="icon" name="netlify2" />
            <StackIcon className="icon" name="npm" />
            <StackIcon className="icon" name="openai" />
            <StackIcon className="icon" name="postman" />
            <StackIcon className="icon" name="python" />
            <StackIcon className="icon" name="pytorch" />
            <StackIcon className="icon" name="reactrouter" />
            <StackIcon className="icon" name="render" />
            <StackIcon className="icon" name="vitejs" />
            <StackIcon className="icon" name="webpack" />
            <StackIcon className="icon" name="wordpress" />
        </Slider> */}
        </>
    );
}
