import React, { useState } from 'react'
import './App14.css';
export default function App13() {
    const [access,setAccess] =useState({msg:"",status:""});
    const f1 = () => {
        let name=document.getElementById("t1").value;
        let pass=document.getElementById("t2").value;
        console.log(name);
        console.log(pass);
        if (name=="john" && pass=="pass1234") {
            setAccess({msg:"Access Granted",status:"Success"})
        } else {
            setAccess({msg:"Access Denied",status:"Failed"})

        }
    };
  return (
    <form>
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
        <p className={access.status} >{access.msg}</p>
    </form>
  )
}
