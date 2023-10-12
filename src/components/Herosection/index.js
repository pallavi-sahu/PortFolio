import React from 'react'
import styled from 'styled-components';
import Bio from '../../Data/constants';
import Typewriter from 'typewriter-effect'; 
import Pallavi from '../../image/Pallavi.jpg';
import HeroBgAnimation from '../../HeroBgAnimation';

const HeroContainer = styled.div`
background-color:${({theme}) => theme.card_light};
display: flex;
justify-content:conter;
position:relative;
padding: 80px 30px;

@media (max-width: 960px){
  padding: 66px 16px;
}

@media (max-width: 640px){
  padding: 32px 16px;
}
z-index:1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
display: flex;
justify-content:end;
position:absolute;
top: 0;
right:0;
left:0;
bottom:0;
width:100%;
height:100%;
max-width:1360%;
overflow:hidden;
padding:0 30px;
top:50%;
left:50%;
-webkit-transform: translateX(-50%) translateY(-50%);
transform:translateX(-50%) translateY(-50%);

@media (max-width: 960px){
  padding: 0 0px;
  justify-content:center;
}
`;

const HeroInnerContainer = styled.div`
position:relative;
display: flex;
justify-content:space-between;
align-item:center;
width:100%;
max-width:1100px;

@media (max-width: 960px){
  flex-direction:column;
}
`;

const Heroleftcontainer = styled.div`
width:100%;
order:1;

@media (max-width: 960px){
  order:2;
  margin-bottom:30px;
  display:flex;
  align-items:center;
  flex-direction:column
}

@media (max-width: 640px){
  order:2;
  margin-bottom:30px;
  display:flex;
  align-items:center;
  flex-direction:column;
}
`;

const Herorightcontainer = styled.div`
width:100%;
order:2;
display:flex;
justify-content: end;
gap: 12px;

@media (max-width: 960px){
  order:1;
  justify-content: center;
  align-items:center;
  margin-bottom: 80px;
}

@media (max-width: 640px){
  order:1;
  margin-bottom: 30px;
}
`;

const Title = styled.div`
font-size:50px;
font-weight:700;
color:${({theme}) => theme.text_primary};
line-height: 68px;

@media (max-width: 960px){
  text-align:center;
}

@media (max-width: 640px){
  margin-bottom: 8px;
  font-size:40px;
  line-height:48px;
}
`;

const TextLoop = styled.div`
font-size:32px;
font-weight:600px;
color:${({theme}) => theme.text_primary};
line-height:68px;
gap:12px;
display:flex;

@media (max-width: 960px){
  text-align:center;
}

@media screen and (max-width: 640px){
  margin-bottom: 16px;
  font-size:22px;
  line-height:48px;
}
`;

const Subtitle = styled.div`
font-size: 20px;
color:${({theme}) => theme.text_primary};
line-height:32px;
margin-bottom: 42px;
@media screen and (max-width: 960px){
  text-align:center;
}
@media screen and (max-width: 640px){
  font-size:16px;
  line-height:32px;
}
`;
const Span = styled.div`
color:${({theme}) => theme.primary};
cursor:pointer;
`;

const ResumeButton = styled.a`
 -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

function Intro() {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation/>
        </HeroBg>

        <HeroInnerContainer>
          <Heroleftcontainer>
              <Title>Hi, I am <br/>
              {Bio.name}
              </Title>
              <TextLoop>
                I am a
                 <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    
                    }}
                  />
                 </Span>
              </TextLoop>

              <Subtitle>{Bio.description}</Subtitle>
              <ResumeButton href={Bio.resume} target='display'>check Resume</ResumeButton>

          </Heroleftcontainer>
          <Herorightcontainer>
                    <Img src={Pallavi} alt="Hero" />
          </Herorightcontainer>
        </HeroInnerContainer>

      </HeroContainer>
    </div>
  )
}

export default Intro;
