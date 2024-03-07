import React from 'react';

export default function App1(props){
  return( <div style={{color:'blue', backgroundColor:'lightskyblue'}}>Hello {props.name} You are {props.age}</div>);

}
App1.defaultProps = {name:"Cathy", age:34};
