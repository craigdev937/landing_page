import "./Hero.css";
import { Button } from "../button/Button";
import Vid from "@public/videos/video-1.mp4";

export const Hero = () => {
    return (
        <section className="hero__container">
            <video src={Vid} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <aside className="hero__btns">
                <Button
                    buttonStyle="btn__outline"
                    buttonSize="btn__large"
                >
                    GET STARTED
                </Button>
                <Button
                    buttonStyle="btn__primary"
                    buttonSize="btn__large"
                >
                    WATCH TRAILER 
                    <i className="far fa-play-circle" />
                </Button>
            </aside>
        </section>
    );
};


