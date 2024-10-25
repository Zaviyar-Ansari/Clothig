import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import main from './images/Mens-portrait-fashion-photography-menswear-nyc-2-removebg-preview.png'

const Home = () => {
        const rows = 4;
        const columns = 4;
  return (
    <div>
      <div className='bg-primary2'>
        {/*Navbar section*/}
        <div className='flex flex-row justify-around py-5'>
            <h1 className='text-3xl text-primary3 font-bold'>LOGO</h1>
            <div className='flex flex-row gap-20 mt-2 text-primary3 text-lg font-semibold'>
            <ul className='flex flex-row gap-10'>
                <li className='hover:underline underline-offset-4'>Home</li>
                <li className='hover:underline underline-offset-4'>Shop</li>
                <li className='hover:underline underline-offset-4'>Feature</li>
                <li className='hover:underline underline-offset-4'>Contact</li>
            </ul>
           <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-600 hover:text-gray-800" />
            <button className='text-black border-2 border-primary3 solid px-3 rounded-lg'>LOGIN</button>
            </div>
        </div>
        {/*after navbar text and image*/}
        <div className='flex flex-row w-full mt-20'>
            <div className='w-1/2 justify-center items-center'>
                <h1>Uncover and cultivate your distinctive style</h1>
                <p> Lorem ipsum dolor sit amet consectetur. Faucibus odio gravida amet tellus adipiscing donec adipiscing dignissim</p>
                <button></button>
            </div>
            <div className='bg-primary1 mx-10 w-1/2 rounded-tl-[10vh] rounded-tr-[10vh]'>
            <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: rows * columns }, (_, index) => (
        <div key={index} className="w-2 h-2 bg-black rounded-full"></div>
      ))}
    </div>
                <img src={main} alt=""  className='w-[100vh] h-[60vh] object-contain items-center' />
                <div className="grid grid-cols-4 gap-2">
      {Array.from({ length: rows * columns }, (_, index) => (
        <div key={index} className="w-2 h-2 bg-black rounded-full"></div>
      ))}
    </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Home
