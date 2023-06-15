import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'
import video from '../../video/video.mp4'

const Hero = () => {


  return (
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
          <Button to='signup'>Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero