import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import bgimg from './images/WhatsApp Image 2024-10-28 at 5.39.15 PM.jpeg'
import google from './images/google.png'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='relative'>
    <img src={bgimg} alt="" className='object-cover w-full h-[100vh]' />

    <div className='absolute flex flex-col items-center text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='mt-3 text-xl font-bold'>Please enter your Login and your Password</p>
        <div className='flex flex-row justify-start p-2 mt-3 border-2 border-black rounded-2xl gap-x-3 solid w-[40vh]'>
            <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-black" />
            <input type="text" placeholder='Email or Username' className="focus:outline-none focus:border-none bg-primary2" />
        </div>
        <div className='flex flex-row justify-start p-2 mt-3 border-2 border-black rounded-2xl gap-x-3 solid w-[40vh]'>
            <FontAwesomeIcon icon={faLock} className="w-6 h-6 text-black" />
            <input type="password" placeholder='Password' className="focus:outline-none focus:border-none bg-primary2" />
        </div>
        <p className='text-sm text-gray-400 ml-[27vh]'>Forgot Password?</p>
        <button className='flex flex-row justify-center font-poppins font-semibold p-2 mt-8 border-2 border-black rounded-2xl gap-x-3 solid w-[40vh]'>Login</button>
        <div className='flex flex-row justify-center bg-primary1 text-white p-2 mt-6 border-2 border-black rounded-2xl gap-x-3 solid w-[40vh]'>
            <img src={google} alt="" className='w-[3vh] h-[3vh]' />
            <button>Or, sign-in with Google</button>
        </div>
        <p className='font-bold'>Not a member yet? <span className='text-sm text-primary1'> Register! <Link to="/"><p>Back</p></Link></span></p>
    </div>
</div>


  )
}

export default Login
