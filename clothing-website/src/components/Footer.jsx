import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-primary1'>

         {/*starting part of the footer*/}
        <div className=' text-white flex flex-row justify-evenly py-10 mb-20'>
            <div>
                <h1 className='text-3xl font-semibold font-poppins mb-10'>LOGO</h1>
                <p className='mb-6'>SOCIAL MEDIA</p>
                <div className='space-x-4'>
                <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl hover:text-primary2" />
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-primary2" />
                <FontAwesomeIcon icon={faFacebookF} className="text-primary2 text-2xl" />
                </div>

            </div>
            <div className=' font-poppins'>  
                <p className='mb-5'>SHOP</p>
                <ul className='space-y-4'>
                    <li>Products</li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                </ul>
            </div>
            <div className=' font-poppins'>
                <p className='mb-5'>COMPANY</p>
                <ul className='space-y-4'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>News</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className=' font-poppins'>
                <h1 className='mb-6'>Stay up to date</h1>
                <div>
                <input type="email"  className='py-1 bg-transparent border-white border-2 solid px-3 text-white' placeholder='Enter your Email'/>
                <button className='bg-primary2 text-sm py-2 px-3 text-center text-black '>SUBMIT</button>
                </div>
            </div>
        </div>
        {/*last part of the footer*/}
        <div className='w-full flex flex-row justify-center space-x-10' >
        <hr className="border-2 border-white solid w-[85vh]" />
        <ul className='text-white font-semibold flex flex-row gap-10 -mt-3 mb-20'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer