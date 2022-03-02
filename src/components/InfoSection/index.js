import React from 'react';
import { InfoContainter, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, primary, dark, dark2}) => {
  return (
      <>
      <InfoContainter lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                  <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText={lightText}>{headline}</Heading>
                      <Subtitle darkText={darkText}>{description}</Subtitle>
                  </TextWrapper>
                  </Column1>
                  <Column2>
                  <ImgWrap>
                  <Img src={img} alt={alt}/>
                  </ImgWrap>
                  </Column2>
              </InfoRow>
          </InfoWrapper>
      </InfoContainter>
      </>
  )
};

export default InfoSection;
