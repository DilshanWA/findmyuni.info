import React, { useState } from 'react';
import { FaUser, FaLock, FaBullseye } from "react-icons/fa";
import '../styles/serverdlogin.css';
import { useNavigate } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import Loading from '../messages/Loadingm'

const ServerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const[erros,seterros] = useState(false);
  const[loading,setLoading]  = useState(false)
  const[isEmpt,setEmptyerror] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();

    if(username === '' || password === ''){
      setEmptyerror(true)
    }else{
      try {
        const response = await fetch('http://localhost:4000/Serverlogin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
    
        if (response.ok) {
          console.log('Data sent...');
          const data = await response.json();
          const newdata = data
          if (Array.isArray(newdata) && newdata.length !== 0) {
            setLoading(true)
            setEmptyerror(false)
            seterros(false)
            setTimeout(() => {
              setLoading(false)
              navigate("/Datafill")
            }, 1000);
          }else{
            seterros(true)
            setUsername('')
            setPassword('')
          }
        } else {
          console.error('Request failed:', response.statusText);
        }
      } catch (error) {
        console.log(`All sending operations failed... ${error}`);
      }
    }
    
  }
  
  const closemodal = ()=>{
    seterros(false)
    setEmptyerror(false)
  }

  const givemessage =()=>{
    alert("You're Trying to Login  our platfrom.... Then Fuck you 😂")
  }

  return (
    <div className='bodybox'>
      <div className="form">
        <h2>Login</h2>
        {erros ?(
          <div className='error'><p>Invalid username or password</p><IoIosClose className='closeicon' onClick={closemodal}/></div>
        ):loading ?(
           <Loading/>
        ):isEmpt?(
          <div className='error'><p>Please enter username and password</p><IoIosClose className='closeicon' onClick={closemodal}/></div>
        ):null}
        <form className="down" onSubmit={handleLogin}>
          <div className="inputboxs">
            <FaUser className='icon0' />
            <input  style={erros ? {border: '1px solid red'} : isEmpt ? {border: '1px solid red'}:null}
              type="text"
              placeholder='username'
              value={username}
              onChange={(e) =>{ setUsername(e.target.value);
                setEmptyerror(false)
                seterros(false)
              }}
            />
          </div>
          <div className="inputboxs">
            <FaLock className='icon0' />
            <input style={erros ? {border: '1px solid red'} : isEmpt ? {border: '1px solid red'}:null}
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) =>{ setPassword(e.target.value);
                setEmptyerror(false)
                seterros(false)
              }}
            />
          </div>

          <div className="button-box">
            <button type="submit">
               {loading ? "LOGING..." : "LOGIN"}  
            </button>
          </div>
          <p id='link' onClick={givemessage}>forgotten username or password?</p>
        </form>
      </div>
    </div>
  );
}

export default ServerLogin;
