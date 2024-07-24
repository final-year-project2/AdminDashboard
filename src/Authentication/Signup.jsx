import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [Phone_no,setPhoneNo] = useState('')
    const[Password,setPassword]= useState('')
    const [error,setError] = useState()
    const navigate = useNavigate()
const signIn = ()=>{
    axios.post("http://127.0.0.1:8000/user/login/",{
        "Phone_no":`${Phone_no}`,
        "password":`${Password}`
    })
    .then(function (response) {
        const data = { isAutenticated: true};
        const jsonString = JSON.stringify(data);
        localStorage.setItem("AutenticationData", jsonString);
        window.location.reload();
    })
    .catch(function (error) {
        setError("incorrect phone_No or password try again")
    });
}

return (
<div className=' text-gray-800 font-bold w-full h-screen flex justify-center bg-gray-100 '>
    <div className='bg-white rounded-md mt-16 h-3/5 text-center  w-1/4 p-10  '>
        <div className=' text-xl'>Sign In</div>
        <div className='text-start mt-10'>
            <div>Phone Number:</div>
            <input onChange={(e)=>setPhoneNo(e.target.value)} className='border-2 w-full h-10 rounded-md' type="text" />
            <div className='mt-5'>Password:</div>
            <input  onChange={(e)=>setPassword(e.target.value)}  className='border-2 w-full h-10 rounded-md'  type="text" />
            <div className='text-sm text-red-500 font-bold'>{error}</div>
            <button onClick={()=>signIn()} className='bg-blue-500 text-white w-full text-center rounded-md mt-10 py-3'>Sign In</button>
        </div>
    </div>
</div>
)
}

export default Signup
