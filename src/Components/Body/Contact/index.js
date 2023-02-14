import React from 'react'
import Seperator from '../../Common/Seperator'
import './contact.css'
import SocialContact from '../../Common/Socialcontacts'
const Contact = () => {
  return (
    <div className='contact'>
      <Seperator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact/>
        </div>
        <div className='download'>
          <a download href ={require('../../../assets/resume1.pdf')}><i className="fa fa-download download-icon"></i>Download Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
