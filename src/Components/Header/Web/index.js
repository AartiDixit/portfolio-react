import React from 'react'
import'./web.css'
const Web = () => {
  return (
    <div className='web'>
      <div className='web-option'>
        <a href='#project'>
        <i class="fa fa-external-link option-icon"></i>Projects
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills'>
        <i class="fa fa-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact'>
        <i class="fa fa-user option-icon"></i>Contact
        </a>
      </div>
    </div>
  )
}

export default Web
