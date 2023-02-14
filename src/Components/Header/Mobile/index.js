import React from 'react'
import './mobile.css'
const Mobile = ({isOpen, setIsOpen}) => {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
      <i class="fa fa-close"></i>
      </div>
      <div className='mobile-options'>
      <div className='mobile-option'>
        <a href='#project'>
        <i class="fa fa-external-link option-icon"></i>Projects
        </a>
      </div>
      <div className='mobile-option'>
        <a href='#skills'>
        <i class="fa fa-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className='mobile-option'>
        <a href='#contact'>
        <i class="fa fa-user option-icon"></i>Contact
        </a>
      </div>
      </div>
    </div>
  )
}

export default Mobile
