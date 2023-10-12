import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components';
import {Link as LinkR} from "react-router-dom";
import {DiCssdeck} from "react-icons/di";
import {FaBars} from "react-icons/fa"

const Nav = styled.div`
background-color: ${({theme}) => theme.card_light};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top:0;
z-index:10;
@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`;

const Navcontainer = styled.div`
height: 60px;
z-index:1;
display: flex;
justify-content: space-between;
width: 100%;
max-width: 1200px;
padding: 0 24px;
`;

const NavLogo = styled(LinkR)`
width: 80%;
padding: 0 6px;
display: flex;
justify-content: flex-start;
cursor: pointer;
text-decoration: none;
align-items: center;
@media screen and (max-width: 648px) {
  padding: 0 0px;
}
`;

const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 768px) {
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-100%, 75%);
  font-size: 1.5rem;
  cursor:pointer;
  color: ${({theme}) => theme.text_primary};
}
`;

const NavItems = styled.ul`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 32px;
list-style: none;

@media screen and (max-width: 768px) {
  display:none;
}
`;

const NavLink = styled.a`
 font-wieght: 500;
  cursor:pointer;
  color: ${({theme}) => theme.text_primary};
  text-decoration:none;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: ${({theme})=> theme.primary};
  }
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: end;
align-items: center;
width: 80%;
height: 100%;
padding: 0 6px;
@media screen and (max-width: 648px) {
  display:none;
}
`;

const GithubButton = styled.button`
background-color:transparent;
color:${({theme})=> theme.primary};
border: 1.8px solid ${({theme})=> theme.primary};
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center;
padding: 0 20px;
font-size: 1rem;
font-weight: 500;
cursor:pointer;
height:70%;
:hover {
  background-color: ${({theme})=> theme.primary};
  color: ${({theme})=> theme.white};
}
@media screen and (max-width: 648px) {
  font-size:0.8rem;
}
`;

const MobileMenu = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:16px;
position:absolute;
top:80;
right:0;
width:100%;
padding:12px 40px 24px 40px;
background:${({theme})=>theme.card_light+99};
transition: all 0.3s ease-in-out;
transform:${({open})=> (open? "translate(0)":"translate(100%)")};
border-radius: 0 0 20 20px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
opacity: ${({open})=> (open? "1":"0")};
z-index: ${({open})=> (open? "1":".1")};
`;

const MobileMenuLinks = styled.div`
color: ${({theme})=> theme.text_primary};
font-weight: 500;
cursor:pointer;
transition: all 0.3s ease-in-out;
text-decoration:none;
&:hover{
  color: ${({theme})=> theme.primary};
}
`;
function Navbar() {
  const [open, setopen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <Navcontainer>
        <NavLogo to="/">
        <a
          style={{
            display:"flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
            cursor: "pointer",
          }}
          >
          <DiCssdeck size="3rem"/> <span>Portfolio</span>
        </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() =>setopen(!open)}/>
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>Github Profile</GithubButton>
        </ButtonContainer>
      </Navcontainer>
      {
        open && <MobileMenu open={open}>
         
          <MobileMenuLinks
          href="#about"
          onClick={()=>setopen(!open)}
          >
            About
          </MobileMenuLinks>

          <MobileMenuLinks
          href="#skill"
          onClick={()=>setopen(!open)}
          >
            Skill
          </MobileMenuLinks>

          <MobileMenuLinks
          href="#experience"
          onClick={()=>setopen(!open)}
          >
            Experience
          </MobileMenuLinks>

          <MobileMenuLinks
          href="#project"
          onClick={()=>setopen(!open)}
          >
            Project
          </MobileMenuLinks>

          <MobileMenuLinks
          href="#Education"
          onClick={()=>setopen(!open)}
          >
            Education
          </MobileMenuLinks>

          <GithubButton
          style={
            {
              padding:"10px 16px",
              background:`${theme.primary}`,
              color:"white",
              width:"max-content",
            }
          }
          href='/'
          target = "blank"
          >
            Github Profile
          </GithubButton>

        </MobileMenu>
      }
    </Nav>
  )
}

export default Navbar;
