import React, {useContext}from 'react'
import UserContext from './UserContext'


function Profile() {
    const {user}=useContext(UserContext)
    // if (!user.name  && user.Email==="" && user.password ==="") return (<div>Please Login....</div>)
    if(!user) return (<div>Plesee Login...</div>)
        if(user.name==="Rudra" && user.password==="Rudra@123" && user.Email==="abc@gmail.in") return(
        <div>
         <h1>Welcome</h1>
         Continue   Name :: {user.name} and Email ::  {user.Email}
        </div>)
    return (
    <div>
        Wrong Login plese checkit again
    </div>
  )
}

export default Profile