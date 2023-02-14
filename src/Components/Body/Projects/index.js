import React from 'react'
import { ProjectData } from '../../Data/Project'
import "./project.css"
import ProjectCard from './ProjectCard';
import Seperator from '../../Common/Seperator/index'
const Projects = () => {
  const data = ProjectData;
  return (
    <div className='projects'>
      <Seperator/>
      <label className='section-title'>Projects</label>
      <div>
{
  data.map((project)=>{
    return<ProjectCard project={project}/>
  })
}
      </div>
    </div>
  )
}

export default Projects
