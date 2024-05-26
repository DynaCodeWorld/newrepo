import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password,setpassword]=useState("hello world")
  const[length,setlength]=useState()
  const[char,setchar]=useState(false)
  const[num,setnum]=useState(false)
  const[note,setnote]=useState("* Select password")

  const passwword_generator=useCallback(()=>{
    let pass=""
    let str="AZSQWXCDERFCVGTYHBNJUIKMLOPazxqwscdvefrgbthynbjuikmlop"
    if(char ) {
      str += "`~!@#$%^&*()_+}{:?><"
     
      // document.getElementById('b').innerHTML=""
      setnote("Allowing char makeit strong")
      
    }else{
      setnote("")
    }

    if(num){
      str +=1234567890
      document.getElementById("note").innerHTML="Allowing Number"
    }else{
      document.getElementById("note").innerHTML=""
    }

    if(char && num){
      document.getElementById("b").innerHTML=""
    }else{
      document.getElementById("b").innerHTML="* Give any special char or number for make your password strong"
    }
      
    
    
    // if(num){
    //   str +=1234567890
    //   document.getElementById('b').innerHTML=""
      
    // }else{
    //   document.getElementById("note").innerHTML=""
    //   document.getElementById("b").innerHTML=" * Select some special char and number to make password extrastrong"
    // }
   
    for (let i=1;i<=length;i++){
      let chr=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(chr)
    }
    setpassword(pass)

  },[num,length,char,setpassword])

//copy.......................
const passwordreference=useRef(null)

const copy=useCallback(()=>{
  passwordreference.current?.select()
  // passwordreference.current?.setSelectionRange(1,9)
  window.navigator.clipboard.writeText(password)
},[password])


useEffect(()=>{
  passwword_generator()
},[passwword_generator,length,char,num])



  return (
    <>
      <div>
        
        <div className=' text-white px-8 py-2 text-center bg-green-600'>Password Generator</div>
        <div>

  <input type="text" value={password} className='bg-pink-200 text-pink-950 px-60 py-1 mt-10' ref={passwordreference} placeholder='PASSWORD' readOnly/>
          <button className='bg-blue-700 m-2 text-white px-3 py-1'onClick={copy} >copy</button>
        </div>

        <div>
          <input type="range"  min={8} max={100}  name="" id="" onChange={(e)=>{setlength(e.target.value)}} /><label className='text-white mr-2'>Length :: {length}</label>

          <input type="checkbox" name="" className='ml-2' id="" onClick={()=>{setchar((prev)=>!prev)}}  /><label className=' text-white'>CharAlow</label>

          <input type="checkbox"  className="ml-2" name="" id="" onClick={()=>{setnum((prev)=>!prev)}}  /> <label className='text-white' >NumAlow</label>

        </div>
        <b className='text-red-600' id='b'></b>
        <b className='text-red-600' id='c'></b>
        <p className='text-yellow-200'>{note}</p>
        <p className='text-yellow-200' id='note'></p>
      </div>
    </>
  )
}

export default App
