import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import img1 from './images/IMG-20240723-WA0024.jpg'
import img2 from './images/shrits.jpeg'
import img3 from './images/Premium Photo _ Business team working on laptop to check the results of their work_.jpeg'
import img4 from './images/4 essential lessons in AI governance.jpeg'
import img5 from './images/team person.jpeg'
import img6 from './images/download (3).jpeg'
import { Link } from 'react-router-dom';
const Aboutus = () => {
  return (
    <div>
        {/*Navbar section*/}
        <div className='flex flex-row justify-around py-5'>
            <h1 className='text-3xl font-bold text-primary3'>LOGO</h1>
            <div className='flex flex-row gap-20 mt-2 text-lg font-semibold text-primary3'>
            <ul className='flex flex-row gap-10'>
            <Link to="/"><li className='hover:underline underline-offset-4'>Home</li></Link>
                <Link to="/products"><li className='hover:underline underline-offset-4'>Shop</li></Link>
                <Link to="/productspage"><li className='hover:underline underline-offset-4'>Feature</li></Link>
                <Link to="/about"><li className='hover:underline underline-offset-4'>Contact</li></Link>
            </ul>
           <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-600 hover:text-gray-800" />
            <Link to="/login"><button className='px-3 text-black border-2 rounded-lg border-primary3 solid'>LOGIN</button></Link>
            </div>
        </div>

        {/*after navbar*/}
        <div className='flex flex-row justify-between mx-20 my-20'> 
            <div className='w-1/2 px-3 '>
                <h1 className='text-4xl text-primary1'><span className='font-bold '>About</span> Us</h1>
                <p className='mt-6 text-2xl'>Welcome to Logo – your ultimate destination for
cool and trendy fashion! At Logo, we are
dedicated to providing the latest styles that
resonate with the vibrant and dynamic spirit of
today's youth. Our collection is carefully curated
to ensure that every piece embodies the
cutting-edge trends and timeless coolness that
define your unique style.</p>
            </div>
            <div className='w-1/2'>
                <img src={img1} alt="" className='w-[70vh] h-[40vh] object-cover rounded-lg shadow-black shadow-lg'/>
            </div>
        </div>

        {/*mission section*/}
        <div className='bg-gray-100 '>
            <h1 className='py-10 text-3xl font-bold text-center text-primary1'>Our Missions</h1>
            <div className='flex flex-row items-center justify-start'>
                <div className='w-1/3'>
                    <img src={img2} alt="" className='w-[50vh] h-[40vh] object-cover' />
                </div>
                <div className='w-[100vh] mx-10'>
                    <p className='text-lg font-poppins'>Our mission is simple: to inspire and empower youngsters to express
themselves through fashion. Whether you're looking for the perfect outfit for a
night out, a casual day at school, or anything in between, Logo has you
covered. We believe in fashion as a form of self-expression, and our diverse
range of clothing is designed to cater to every mood and moment.</p>
                </div>
            </div>
        </div>

        <h1 className='my-20 text-3xl font-bold text-center text-primary1'>Our Team</h1>

        {/*team section*/}
        <div className='flex flex-row justify-between ' >
            <img src={img3} alt="" className='w-[30vh] h-[30vh] object-cover' />
            <img src={img6} alt="" className='w-[30vh] h-[30vh] object-cover' />
            <img src={img5} alt="" className='w-[30vh] h-[30vh] object-cover' />
            <img src={img4} alt="" className='w-[30vh] h-[30vh] object-cover ' />
        </div>


        {/*after team section*/}

        <div className=''>
            <div className='mx-32 my-20'>
            <h1 className='text-2xl font-bold text-primary1'>Lorem Ipsum</h1>
            <p className='text-sm text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
            industry. </p>
            </div>
             
             {/*last section*/}
            <div className='flex flex-row items-center justify-between px-8 py-10 mx-32 my-20 text-white rounded-lg bg-primary1'>

                <div className='w-1/2'>
                    <h1 className='text-2xl font-poppins'>Stay in the loop</h1>
                    <p className='mt-2 text-sm'>Subscribe to receive the latest news and updates about TDA. We promise not to spam you!</p>
                </div>

                <div className='w-[40vh] bg-white rounded-lg'>
                <input type="email"  className='px-5 py-3 rounded-lg w-[30vh] ' placeholder='Enter your Email'/>
                <button className='p-2 text-sm rounded-lg bg-primary1' >Continue</button>
                </div>
                
            </div>

        </div>
        {/*footer*/}
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
    </div>
  )
}

export default Aboutus
