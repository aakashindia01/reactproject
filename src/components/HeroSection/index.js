import React,{useState} from 'react'
import Video from '../../videos/data.mp4';
import { HeroContainer, HeroBlog, VideoBlog,HeroBtnWrapper, HeroContent, HeroH1, HeroP,ArrowForward,ArrowRight} from './HeroElement';
import {Button} from '../ButtonElement';

export const HeroSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <HeroBlog>
                    <VideoBlog autoPlay loop muted  src={Video} type='video/mp4'/>
                </HeroBlog>
                <HeroContent>
                    <HeroH1>This Is My First WebSite Made In React</HeroH1>
                    <HeroP>
                        Sign Up for new account and explore more about this website for more detail contact me.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        >
                            Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
                
                
            </HeroContainer>
        </>
    )
}
export default HeroSection;
