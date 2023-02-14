import React from 'react'
import SocialContact from '../../Common/Socialcontacts'
import './about.css'
const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
       <div className='about-info'>
        My name is <br/>
        <span className='info-name'>Aarti Narendra Dixit<br/>I am Frontend Developer</span><br/> 

         I have completed my Bsc in Information Technology.
         Coming from a background in design,I like to create webpages. 
         My hobbies are reading books, travelling, coding.
         I am curious to learn more from my skills and grow from them.

       </div>
       <div className='about-photo'>
       <img src='https://plopdo.com/wp-content/uploads/2021/07/Screenshot-1-1210x642.png?crop=1' alt='photo' className='picture'></img>
       </div>
      </div>
     <SocialContact/>
    </div>
  )
}

export default About
