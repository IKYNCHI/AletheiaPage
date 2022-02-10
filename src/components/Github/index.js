import React from 'react';
import Icon1 from '../../images/vince.jpg'
import Icon2 from '../../images/ej.jpg'
import Icon3 from '../../images/kynch.jpg'
import { GithubContainer,GithubH1, GithubWrapper, GithubCard, GithubIcon, GithubH2, GithubP } from './GithubElements';

const Github = () => {
  return (
      <GithubContainer id="github">
        <GithubH1>Developers</GithubH1>
        <GithubWrapper>
          <GithubCard>
            <GithubIcon src={Icon1}/>
            <GithubH2>Vince Dela Peña</GithubH2>
            <GithubP>Back-end Developer</GithubP>
          </GithubCard>
          <GithubCard>
            <GithubIcon src={Icon2}/>
            <GithubH2>Elnathan Salavarria </GithubH2>
            <GithubP>Back-end Developer</GithubP>
          </GithubCard>
          <GithubCard>
            <GithubIcon src={Icon3}/>
            <GithubH2>Kynch Silao</GithubH2>
            <GithubP>Front-end Developer</GithubP>
          </GithubCard>
        </GithubWrapper>
      </GithubContainer>
  )
};

export default Github;
