import React,{useEffect} from 'react'
import { useState } from 'react'

export default function App7() {
    const[count, setCount]= useState(0);
    console.log("Component loaded");
  return (
    <>
    <button onClick={() => setCount((prevState)=> prevState+1)}>
        Click
    </button>
    <span>{count}</span>
    </>
  )
}
