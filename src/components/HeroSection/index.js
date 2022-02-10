import { hover } from '@testing-library/user-event/dist/hover';
import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, HeroCopyright , ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement'

const HeroSection = () => {
  const[hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return(
    <HeroContainer>
      <HeroBg>
       <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
       <HeroCopyright>Video from Pexels</HeroCopyright>
      </HeroBg>
      <HeroContent>
        <HeroH1>Truth exists; only lies are invented</HeroH1>
        <HeroP>
        Lorem ipsum dolor sit amet. Quo aliquid rerum rem omnis saepe est voluptatem rerum. Ut quia tempora ea officiis alias et maxime voluptas ea provident tempore quo dolores dolorem qui harum autem qui quia corrupti.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="Benchmark" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Benchmark now {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
