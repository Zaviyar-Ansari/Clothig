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
     <div className='flex flex-row items-center justify-between mx-20'>
  {/* navbar */}
  <h1 className='mt-5 text-lg text-primary3'>LOGO</h1>
  
  <div className='flex items-center space-x-5'>
    <div className='flex items-center border-b-2 border-gray-300'>
      <svg className="w-4 h-4 mx-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <input 
        type="search" 
        placeholder='Search for an Item...' 
        className='py-2 text-gray-400 outline-none'
      />
    </div>
    
    <ul className='flex mt-4 text-primary3 space-x-14'>
      <li className='hover:underline underline-offset-4'>HOME</li>
      <li className='hover:underline underline-offset-4'>SHOP</li>
      <li className='hover:underline underline-offset-4'>ABOUT US</li>
      <li className='hover:underline underline-offset-4'>CONTACT</li>
    </ul>
  </div>
  
  <div className='flex items-center space-x-10'>
    <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-600 hover:text-gray-800" />
    <button className='px-5 py-2 border-2 border-primary3 rounded-xl'>LOGIN</button>
  </div>
</div>
      {/*product details section*/}
      <div className='flex flex-row justify-between w-full mt-10' >
        <div className='flex w-1/2 mx-7'>
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
            <h1 className='mb-3 text-3xl font-semibold text-gray-700 font-Libre'>Womens Denim Jacket (Blue)</h1>
            <p className='mb-3 text-lg font-poppin'>Brand Name</p>
            <p className='mb-3 text-sm'>Sold By : Sellers Name</p>
            

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
    <p className='text-gray-500'>4.4 <span className='text-black font-Libre'>36 Reviews</span> </p>
</div>
      <p className='mb-3'><span className='text-xl font-bold '>Rs. 700</span> <span className='text-sm text-gray-400 line-through font-Libre'>Rs. 1000</span>   <span className='text-lg font-bold font-Libre text-primary5'>(30% off)</span></p>
      <p className='mb-2 text-xl font-semibold font-Libre'>Select Size</p>
      <p className='mb-2 text-sm text-blue-900 font-Libre'>Size Chart <FontAwesomeIcon icon={faChevronRight} className='text-sm text-blue-900' /></p>
      <div className='flex flex-row mb-3 space-x-8 font-Libre'>
        <p className='p-3 border-2 border-gray-300 rounded-full solid'>XS</p>
        <p className='px-5 py-3 border-2 border-gray-300 rounded-full solid'>S</p>
        <p className='px-5 py-3 border-2 border-gray-300 rounded-full solid'>M</p>
        <p className='px-5 py-3 border-2 border-gray-300 rounded-full solid'>L</p>
        <p className='p-3 border-2 border-gray-300 rounded-full solid'>XL</p>
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
      <p className='font-Libre'><span className='text-xl font-bold'>Best Offers</span> <br />
<span className='text-sm font-bold '>Special offer</span> <span className='text-sm text-gray-500 '>get 25% off</span> <span className='text-sm text-blue-600 '>T&C</span> <br />
<span className='text-sm font-bold '>Special offer</span> <span className='text-sm text-gray-500 '>get 25% off</span>  <span className='text-sm text-blue-600'>T&C</span> <br />
<span className='text-sm font-bold '>Bank offer</span> <span className='text-sm text-gray-500 '>get 30% off on Axis Bank Credit card</span> <span className='text-sm text-blue-600'>T&C</span> <br />
<span className='text-sm font-bold '>Wallet offer</span> <span className='text-sm text-gray-500 '> get 40% cashback via Paytm wallet on first transaction</span> <span className='text-sm text-blue-600'>T&C</span></p>
<div className='flex flex-row justify-start gap-10 mt-3'>
    <button className='px-6 py-1 text-white rounded-lg bg-primary1'>Add to cart</button>
    <FontAwesomeIcon 
    icon={faHeart} 
    className="text-2xl text-black cursor-pointer hover:text-red-700" 
  />
</div>
        </div>
      </div>

      {/*product details */}
      <div className='flex justify-center mt-20 mb-5 space-x-20 flex-center font-Libre'>
        <p className='text-blue-600 hover:underline underline-offset-4'>Product Details</p>
        <p className='text-gray-500 hover:underline underline-offset-4'>Specification</p>
        <p className='text-gray-500 hover:underline underline-offset-4'>Ratings & Reviews</p>
      </div>
      <div className='flex flex-row justify-center w-full ' >
      <hr className="border-2 border-black solid w-[120vh]" />
      </div>
      <div  className='mt-6 mx-28'>
        <h1 className='text-lg font-bold'> Product Details</h1>
        <p className='text-sm'>Blue washed jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem</p>
        <h1 className='text-lg font-bold'>Size & Fit</h1>
        <p className='text-sm font-Libre '>The model (height 5'8") is wearing a size S</p>
        <h1 className='text-lg font-bold'> Product Details</h1>
        <p className='text-sm font-Libre'>100% cotton <br /> Machine Wash</p>
      </div>


      {/*simillar products section*/}
      <div className='mt-10 mx-7' >
        <h1 className='mb-5 text-2xl font-bold'>Similar Products</h1>
        {/*1 simillar*/}
        <div className='flex flex-row justify-between'>
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
          {/*2 */}
          
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
          
          {/*3 */}
          
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
          
          {/*4 */}
          
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
        </div>
      </div>

      
      {/*customer also like products section*/}
      <div className='mt-10 mb-32 mx-7'>
        <h1 className='mb-5 text-2xl font-bold'>Customer Also like </h1>
        {/*1 like*/}
        <div className='flex flex-row justify-between'>
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
          {/*2 */}
          
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
          
          {/*3 */}
          
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
          
          {/*4 */}
          
          <div className=''>
            <img src={img1} alt="" className='w-[30vh] h-[20vh] object-cover'/>
            <div className='font-Libre'>
              <p className='text-xl font-bold '>Womens Denim Jacket</p>
              <p className='flex text-sm'>Brand Name  <span className='text-sm'>   4.4</span> <span>
    <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg></span> </p>
              <p><span className='text-lg font-bold '>Rs. 700</span> <span className='text-sm text-gray-500 line-through'>Rs. 1000</span> <span className='text-primary5'>(30% off)</span></p>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Products
