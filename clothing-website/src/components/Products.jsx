import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import img1 from './images/IMG-20240723-WA0024.jpg'
import img2 from './images/IMG-20240723-WA0025.jpg'
const Products = () => {
  return (
    <div>
     <div className='flex flex-row justify-between items-center mx-20'>
  {/* navbar */}
  <h1 className='text-primary3 text-lg mt-5'>LOGO</h1>
  
  <div className='flex items-center space-x-5'>
    <div className='flex items-center border-b-2 border-gray-300'>
      <svg className="w-4 h-4 text-gray-500 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <input 
        type="search" 
        placeholder='Search for an Item...' 
        className='text-gray-400 outline-none py-2'
      />
    </div>
    
    <ul className='flex text-primary3 space-x-14 mt-4'>
      <li className='hover:underline underline-offset-4'>HOME</li>
      <li className='hover:underline underline-offset-4'>SHOP</li>
      <li className='hover:underline underline-offset-4'>ABOUT US</li>
      <li className='hover:underline underline-offset-4'>CONTACT</li>
    </ul>
  </div>
  
  <div className='flex items-center space-x-10'>
    <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-600 hover:text-gray-800" />
    <button className='border-2 border-primary3 px-5 py-2 rounded-xl'>LOGIN</button>
  </div>
</div>
      {/*product details section*/}
      <div className='flex flex-row justify-between w-full mt-10' >
        <div className='w-1/2 flex mx-7'>
        <div className='flex flex-col mx-3 space-y-2'>
        <img src={img2} alt=""  className='w-[13vh] h-[13vh] object-cover  rounded-xl'/>
        <img src={img2} alt=""  className='w-[13vh] h-[13vh] object-cover  rounded-xl'/>
        <img src={img2} alt=""  className='w-[13vh] h-[13vh] object-cover  rounded-xl'/>
        <img src={img2} alt=""  className='w-[13vh] h-[13vh] object-cover  rounded-xl'/>
        <img src={img2} alt=""  className='w-[13vh] h-[13vh] object-cover  rounded-xl'/>
        </div>
            <img src={img2} alt=""  className='w-[55vh] h-[70vh] object-cover rounded-xl'/> 

        </div>
        <div className='w-1/2 ml-10'>
            <h1 className='text-3xl font-Libre text-gray-700 font-semibold mb-3'>Womens Denim Jacket (Blue)</h1>
            <p className='font-poppin text-lg mb-3'>Brand Name</p>
            <p className='text-sm mb-3'>Sold By : Sellers Name</p>
            

<div class="flex items-center mb-3">
    <svg class="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-black ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p className='text-gray-500'>4.4 <span className='font-Libre text-black'>36 Reviews</span> </p>
</div>
      <p className='mb-3'><span className='text-xl font-bold '>Rs. 700</span> <span className='line-through font-Libre text-gray-400 text-sm'>Rs. 1000</span>   <span className='text-lg font-Libre font-bold text-primary5'>(30% off)</span></p>
      <p className='font-Libre text-xl font-semibold mb-2'>Select Size</p>
      <p className='text-blue-900 text-sm font-Libre mb-2'>Size Chart <FontAwesomeIcon icon={faChevronRight} className='text-blue-900 text-sm' /></p>
      <div className='flex flex-row font-Libre space-x-8 mb-3'>
        <p className='border-2 border-gray-300 solid rounded-full p-3'>XS</p>
        <p className='border-2 border-gray-300 solid rounded-full py-3 px-5'>S</p>
        <p className='border-2 border-gray-300 solid rounded-full py-3 px-5'>M</p>
        <p className='border-2 border-gray-300 solid rounded-full py-3 px-5'>L</p>
        <p className='border-2 border-gray-300 solid rounded-full p-3'>XL</p>
      </div>
      <div class="mb-4">
          <h3 class="text-lg font-semibold font-Libre mb-3">Select Color:</h3>
          <div class="flex space-x-2">
            <button
                            class="w-8 h-8 bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button
                            class="w-8 h-8 bg-red-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            <button
                            class="w-8 h-8 bg-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          </div>
        </div>
      <p className='font-Libre'><span className='font-bold  text-xl'>Best Offers</span> <br />
<span className='text-sm font-bold '>Special offer</span> <span className='text-sm text-gray-500 '>get 25% off</span> <span className='text-sm text-blue-600 '>T&C</span> <br />
<span className='text-sm font-bold '>Special offer</span> <span className='text-sm text-gray-500 '>get 25% off</span>  <span className='text-sm text-blue-600'>T&C</span> <br />
<span className='text-sm font-bold '>Bank offer</span> <span className='text-sm text-gray-500 '>get 30% off on Axis Bank Credit card</span> <span className='text-sm text-blue-600'>T&C</span> <br />
<span className='text-sm font-bold '>Wallet offer</span> <span className='text-sm text-gray-500 '> get 40% cashback via Paytm wallet on first transaction</span> <span className='text-sm text-blue-600'>T&C</span></p>
<div className='flex flex-row justify-start gap-10 mt-3'>
    <button className='bg-primary1 rounded-lg text-white px-6 py-1'>Add to cart</button>
    <FontAwesomeIcon 
    icon={faHeart} 
    className="text-black hover:text-red-700 text-2xl cursor-pointer" 
  />
</div>
        </div>
      </div>

      {/*product details */}
      <div>
        <p>Product Details</p>
        <p>Specification</p>
        <p>Ratings & Reviews</p>
      </div>
      <div className='w-full flex flex-row justify-center ' >
      <hr className="border-2 border-black solid w-[100vh]" />
      </div>


    </div>
  )
}

export default Products
