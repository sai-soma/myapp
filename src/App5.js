import React from 'react'

export default function App5() {
    let names=["john","cathy","trevor","aaron"]
  return (<ul>
        {names.map((e,i)=>(
         <li key={i}>{e}</li>
        ))}
    </ul>
  );
}
