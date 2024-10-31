import React from "react";
import { useState} from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Contactus from './Contact_us'
import { TiThMenu } from "react-icons/ti";
import logo from '../images/logo2.png'
import { IoCloseSharp } from "react-icons/io5";



function Mnavbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
    

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsNavOpen(false);
    document.body.style.overflow = '';

  };



  return (
    <div className="header" >
      <div class="nav">
        <div class="logo">
          <img src={logo} alt="" srcset="" />
          <Link to={"/"}><h2 id="logo1">findmy<span>uni</span>.edu</h2></Link>
        </div>
        <ul className={`menu ${isNavOpen ? 'open' : ''}`} >
          <li className="active">
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/Aboutus"}>ABOUT US</Link>
          </li>
          <li>
           <button onClick={openPopup}>Contact Us</button>
            {isPopupOpen && <Contactus onClose={closePopup}/>}
          </li>
          <IoCloseSharp id="closemenu" onClick={toggleNav}/>
        </ul>
        <TiThMenu className="sidemenu" onClick={toggleNav}/>
      </div>
    </div>
  );
}

export default Mnavbar;
