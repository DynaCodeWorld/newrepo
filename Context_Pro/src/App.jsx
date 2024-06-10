import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserContextProvider from './Components/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UserContextProvider>
        <Login/>
        <Profile/>
        </UserContextProvider>
       
      </div>
     
    </>
  )
}

export default App
