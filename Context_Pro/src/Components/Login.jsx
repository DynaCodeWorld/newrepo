import React, { useContext, useState } from 'react'
import UserContext from './UserContext'
function Login() {
    const [name,setname]=useState()
    const [password,setpassword]=useState()
    const [Email,setEmail]=useState()

    const {setuser}=useContext(UserContext)

    function HandelSubmit(e){
        e.preventDefault()
        setuser({name,password,Email})
    }
  return (
    <div>
        <h1>Context api Project </h1>
        <br/>
        <br/>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}  placeholder='Name.....'/> <label>Name</label><br/>
        <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email....' />  <label>Email</label>  <br/>
        <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  placeholder='Password..'/>  <label>Password</label><br/>
        <button onClick={HandelSubmit}>submit</button>

    </div>
  )
}

export default Login