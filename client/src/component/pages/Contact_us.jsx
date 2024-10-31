import React, { useState } from 'react';
import { FaEnvelope,FaFacebookF } from 'react-icons/fa6';
import '../styles/contactus.css';
import { FaPhone } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Message from '../messages/Cusmsg'
import { useNavigate } from 'react-router-dom';
import Images from '../images/girlcomminunicaion.jpg'
import { SlClose } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";

function Contact_us({onClose}) {


   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const navigate = useNavigate()

   const openPopup = () => {
     setIsPopupOpen(true);
   };
 
   const closePopup = () => {
     setIsPopupOpen(false);
     onClose(); 
     navigate('/')
   };


 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
     });

     const clear =()=>{
       setFormData({
         name: '',
         email: '',
         message: '',
       })
     }
    
     const handleInputChange = (e) => {
        setFormData({
           ...formData,
           [e.target.name]: e.target.value,
        });
     };
    
     const handleSubmit = async (e) => {
       e.preventDefault();
    
       try {
          const response = await fetch('http://localhost:4000/api/Contactus', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/json',
             },
             body: JSON.stringify(formData),
          });
    
          if (response.ok) {
             console.log('Form data submitted successfully');
             openPopup();
             clear();

          } else {
             console.error('Failed to submit form data');
          }
       } catch (error) {
          console.error('Error submitting form:', error);
       }
    };

    
      return (
        <div className="popup">
                {isPopupOpen && (
                  <Message onClose={closePopup}/>
               )}
               <div className="containner">
                   <div className="box1"></div>
                        <span className="mobile_close" onClick={onClose} id='uperclose'>
                           <IoMdClose id='close'/>
                        </span>
                   <div className="box2">
                         <span className="close" onClick={onClose} id='uperclose'>
                           <IoMdClose id='close'/>
                        </span>
                      <div className="formbox">
                          <form  onSubmit={handleSubmit} onReset={clear}>
                              <h4 id='tellp'>Connect with us now !</h4><br />
                              <div className="input-boxes">
                                 <input required name='name' placeholder='Your name'  value={formData.name} onChange={handleInputChange}></input>
                              </div>
               
                              <div className="input-boxes">
                                <input type='email'  name='email' required placeholder=' Enter Your Email'  value={formData.email} onChange={handleInputChange}></input>
                              </div>
               
                              <div className="input-boxes">
                                 <textarea required   name='message'  placeholder='Your problem'  value={formData.message} onChange={handleInputChange}></textarea>
                              </div>
               
                              <div className="btn-boxes">
                                 <button type='submit' id='submit'>Submit</button>
                              </div>                
                           </form>
                      </div>
                   </div>
               </div>
        </div>
    );
}

export default Contact_us