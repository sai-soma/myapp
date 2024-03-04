import React from 'react'
import Login from "./Login";
import Home from "./Home";

export default function App2(props) {
 
    return (props.user==="" && (<div><h2>Login</h2><br></br><p><input type="text" placeholder='Enter username:'></input></p>
    <p><input type="password" placeholder='Enter Password:'></input></p>
    <button>Login</button>
    </div>))
}
// :(<h2>Hello {props.user}</h2>);



// if (props.user ==="") {
//     return <Login />
//  } else {
//    return <Home username={props.user}/>
//  }