import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";
import {useState} from 'react';
import './Header.css'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
<img src="https://static.vecteezy.com/system/resources/previews/004/753/030/original/portfolio-icon-shadowed-detailed-portfolio-logo-free-vector.jpg"/>

      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=> setIsOpen(!isOpen)}>
            <i class="fa fa-bars menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
};

export default Header;
