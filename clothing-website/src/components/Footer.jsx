import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-primary1 text-white flex flex-row justify-evenly py-10'>
            <div>
                <h1 className='text-4xl font-extrabold font-poppins mb-10'>LOGO</h1>
                <p>SOCIAL MEDIA</p>

            </div>
            <div>
                <p className='mb-10'>SHOP</p>
                <ul>
                    <li>Products</li>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Releases</li>
                </ul>
            </div>
            <div>
                <p className='mb-10'>COMPANY</p>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>News</li>
                    <li>Support</li>
                </ul>
            </div>
            <div>
                <h1 className='mb-8'>Stay up to date</h1>
                <input type="email" />
            </div>
        </div>
    </div>
  )
}

export default Footer