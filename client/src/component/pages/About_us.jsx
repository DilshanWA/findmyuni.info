import React from 'react';
import Nvbar from "./navbar";
import Images2 from '../images/cover2.jpg'
import person_1 from '../images/person_1.jpg'
import person_2 from '../images/person_2.jpg'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const About_us = () => {

const [showNavbar, setShowNavbar] = React.useState(false);

React.useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY > 0) {
       setShowNavbar(true);
     } else {
       setShowNavbar(false);
     }
   };
 
   window.addEventListener('scroll', handleScroll);
 
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, []);
 

  return (
    <div className='topb'>
       <Nvbar className={showNavbar ? 'show-navbar' : ''} />
       <div className="main">
       <div className="text_box2">
               <h1>We build Platfrom <br /> to find your High <span>Studys  leaning parth</span></h1><br />
               <span className='underline'></span>
               <div className="downtext">
                  <h3 id='h3mini'>What is findmyuni.edu ?</h3>
                  <p id='p236'>We are a small software engineering teamin  Sri Lanka. <br /> 
                    We are pioneers in finding new solutions to real world <br />
                    problems using new technologies and knowledge.</p>
               </div>
            </div>
            <div className="imgbox_team">
                 <img src={Images2} alt="" srcset="" className='teamImage'/>
            </div>
            <div className="contextbox">
               <div className="mission">
                <div className="about_us">
                    <h1>Who we are?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book.</p>
                </div>
                 <h1>Our Mission</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been  the industry's standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               </div>
               <div className="our_team">
                  <h1>Our Team</h1>
                  <div className="team">
                  {/* Person one*/}
                    <div className="person">
                       <div className="circle">
                           <img src={person_1} alt="" srcset="" />
                       </div>
                       <div className="inner_text">
                            <h3>A Thusitha Gayan</h3>
                            <h5 id='h5'>Software Engineer</h5>
                            <div className="icons">
                                <FaLinkedin id='social_icons'/>
                                <FaFacebookSquare id='social_icons'/>
                                <FaSquareInstagram id='social_icons'/>
                            </div>
                       </div>
                    </div>
                   {/* Person Two*/}
                    <div className="person">
                       <div className="circle">
                         <img src={person_2} alt="" srcset="" />
                       </div>
                       <div className="inner_text">
                            <h3>D T Madushanka</h3>
                            <h5 id='h5'>Software Engineer</h5>
                            <div className="icons">
                                <FaLinkedin id='social_icons'/>
                                <FaFacebookSquare id='social_icons'/>
                                <FaSquareInstagram id='social_icons'/>
                            </div>
                       </div>
                    </div>

                  </div>
               </div>
            </div>
       </div>
    </div>
  )
}

export default About_us