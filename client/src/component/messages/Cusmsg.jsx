import React from 'react';
import '../styles/modal.css'
import Image from '../images/success.png'
import { IoIosClose } from "react-icons/io";


export default function Cusmsg({onClose}) {

  const handleContinue = () => {
    onClose()
  };

  return (
    <div className='modal'>
       <div className="box">
         <img src={Image} alt="Logo" className='SuccessImage'/>
          <h2>Success !</h2>
          <p>form submited</p>
           <button onClick={handleContinue} className='btn-ok'>Continue</button>
       </div>
    </div>
  )
}
