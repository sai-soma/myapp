import React from 'react'

export default function App6() {
    const handleClick=(msg)=>{
        alert(msg)
    };
  return (
    <div><button onClick={()=>handleClick('Hi John')}>Click</button></div>
  )
}
/* export default function App6() {
    const handleClick=()=>{
        alert("handleClick is called")
    };
  return (
    <div><button onClick={handleClick}>Click</button></div>
  )
}
*/