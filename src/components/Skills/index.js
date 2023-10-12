import React from 'react'
import styled from 'styled-components';
import {Skills} from "../../Data/constants";

function skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>Here are some of my skills on which I have been working on for the past 3 years.</Description>
        <Skillcontainer>
          {Skills.map((item)=>(
            <Skill>
              <SkillTitle>{item.title}</SkillTitle>
              <SkilssList>
                {
                  item.skills.map((skill)=>(
                    <SkillItem>
                      <SkillImg src={skill.image}/>
                      {skill.name}
                    </SkillItem>
                  ))
                }
              </SkilssList>
            </Skill>
          ))}
        </Skillcontainer>
      </Wrapper>
    </Container>
  )
}

export default skills;
