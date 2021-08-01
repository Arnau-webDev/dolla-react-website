import React, { useState } from "react";
import { Button } from "../globals/ButtonElements";
import video from "../../videos/video.mp4";
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from "./HeroElements";


const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={video} type="video/mp4" />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Virtual Banking Made Easy</HeroH1>
                    <HeroP>Sign Up for a new account today and receive $250 in credit towards your next payment</HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to="signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                        >
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    );
};

export default Hero;
