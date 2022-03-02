import React from 'react';
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroCopyright } from './HeroElements';

const HeroSection = () => {
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
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
