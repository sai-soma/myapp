import React, { useState } from 'react'
import './App14.css';
export default function App13() {
    const [access,setAccess] =useState({access:"",status:""});
    const f1 = () => {
        let name=document.getElementById("t1").value;
        let pass=document.getElementById("t2").value;
        console.log(name);
        console.log(pass);
        if (name=="john" && pass=="pass1234") {
            setAccess({access:"Access Granted",status:"Success"})
        } else {
            setAccess({access:"Access Denied",status:"Failed"})

        }
    };
  return (
    <>
    <p>
       <h2>LOGIN</h2> 
    </p>
        <p>
            <input
                type='text'
                id='t1'
            placeholder='Enter Name:'></input>
        </p>
        <p>
            <input
                type='text' 
                id='t2'
            placeholder='Enter Password:'></input>
        </p>
        <p>
            <input
                type='button' 
                onClick={f1} 
            value='Add'></input>
        </p>
        <p className={access.status} >{access.access}</p>
    </>
  )
}
