import React, { useContext } from 'react'
import './Register.css'
import { UserContext } from './App13a'

export default function Register() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>
    <div className='Register-model'>
    <div className='Register-model-content'>
    <div className="Register-header">
          <div className="Register-signup-title">Register</div>
          <div onClick={() => setFlag(() => 0)} className="close">
            &times;
          </div>
        </div>
    <input type='text'></input><br></br>
    <input type='text'></input><br></br>
    <input type='text'></input><br></br>
    <button onClick={() => setFlag((prevState) => 2)}>Submit</button>
    </div>
    </div>
    </>
  )
}