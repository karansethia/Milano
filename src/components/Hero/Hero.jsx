import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../UI/ButtonElement'
import video from '../../video/video.mp4'

const Hero = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    // <Overlay>
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Virtual Banking Made Easy
        </HeroH1>
        <HeroP>
          Sign up for new account today and recieve exciting rewards
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Get Started {hover ? <ArrowRight /> : <ArrowForward />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
    // </Overlay>
  )
}

export default Hero