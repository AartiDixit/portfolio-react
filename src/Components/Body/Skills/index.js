import React from 'react'
import Seperator from '../../Common/Seperator'
import { SkillsData } from '../../Data/Skills'
import SkillCard from './Skill-card'
import './skills.css'
const Skills = () => {
  const data = SkillsData;
  return (
    <div className='skills'>
      <Seperator/>
      <label className='section-title'>Skills</label>
      <div className='skills-container'>
        {data.map((item,index)=>{
          return(
            <div className='skills-section' key={index}>
             <label className='skills-section-title'>{item.type}</label>
             <div className='skills-list'>
              {item.list.map((skill)=>{
                return(
                  <SkillCard  skill={skill}/>
                )
              })}
             </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
