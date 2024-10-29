import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import img1 from './images/download.jpeg'
import { Link } from 'react-router-dom';
const Productpage = () => {
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
      <Link to="/"><li className='hover:underline underline-offset-4'>Home</li></Link>
      <Link to="/products"><li className='hover:underline underline-offset-4'>Shop</li></Link>
      <Link to="/productspage"><li className='hover:underline underline-offset-4'>Feature</li></Link>
      <Link to="/about"><li className='hover:underline underline-offset-4'>Contact</li></Link>
    </ul>
  </div>
  
  <div className='flex items-center space-x-10'>
    <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-600 hover:text-gray-800" />
    <Link to='/login'><button className='px-5 py-2 border-2 border-primary3 rounded-xl'>LOGIN</button>
    </Link>
  </div>
</div>

    {/*after navbar section*/}
    <div className='px-4 py-2 my-6 ml-20 text-white mr-36 bg-primary1'>
      <p className='mb-4 font-semibold'>Ladies Top</p>
      <p className='text-gray-300'>Slash Sales begins in August. Get up to 80% Discount on all products <span className='font-semibold text-white'> Read More</span></p>
    </div>

    {/*some items*/}
    <div className='flex flex-row justify-between mb-10 ml-20 text-sm mr-36'>
      <p>Showing 1 - 20 <span className='text-gray-500'>out of 2,356 Products</span></p>
      <p>Sort by: <span className='font-bold'>New Arrivals </span><FontAwesomeIcon icon={faChevronDown} className="mr-2" /></p>
      </div>

    {/**/}
    <div className='flex flex-row justify-start ml-20 mr-36'>
      <div className='w-1/3 p-3 bg-gray-100'>
        <h1 className='mb-2 font-semibold font-poppins'>Price</h1>
          <div className='flex flex-row justify-between mb-5 text-sm'>
            <p className='text-gray-600'>Range</p>
            <p className='font-semibold'>$120 - $300</p>
          </div>
          {/*first filter*/}
          <div className='mb-5'>
            <h1 className='mb-5 font-semibold font-poppins'>Filters</h1>
          <div class="flex items-center text-sm">
  <input type="radio" id="radio1" name="radio" class="hidden peer" />
  <label for="radio1" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Women</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio2" name="radio" class="hidden peer" />
  <label for="radio2" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Men</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio3" name="radio" class="hidden peer" />
  <label for="radio3" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Girls</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio4" name="radio" class="hidden peer" />
  <label for="radio4" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Babies</span>
</div>
          </div>
          {/*second filter*/}
          
          <div  className='mb-5'>
            <h1 className='mb-5 font-semibold font-poppins'>Brands</h1>
          <div class="flex items-center  text-sm">
  <input type="radio" id="radio1" name="radio" class="hidden peer" />
  <label for="radio1" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Victoria’s Secret</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio2" name="radio" class="hidden peer" />
  <label for="radio2" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Dior</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio3" name="radio" class="hidden peer" />
  <label for="radio3" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Gucci</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio4" name="radio" class="hidden peer" />
  <label for="radio4" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Fendi</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio5" name="radio" class="hidden peer" />
  <label for="radio5" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Prada</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio6" name="radio" class="hidden peer" />
  <label for="radio6" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Dolce & Gabbana</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio7" name="radio" class="hidden peer" />
  <label for="radio7" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Versace</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio8" name="radio" class="hidden peer" />
  <label for="radio8" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Zara</span>
</div>

<div class="flex items-center mt-4  text-sm">
  <input type="radio" id="radio9" name="radio" class="hidden peer" />
  <label for="radio9" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Chanel</span>
</div>
<p className='text-sm text-red-600 ml-7 mt-5'>+ 234 more</p>

          </div>
          {/*Third filter*/}
          
          <div className='mb-5'>
            <h1 className='mb-5 font-semibold font-poppins'>Categories</h1>
          <div class="flex items-center text-sm">
  <input type="radio" id="radio1" name="radio" class="hidden peer" />
  <label for="radio1" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Dresses</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio2" name="radio" class="hidden peer" />
  <label for="radio2" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Top</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio3" name="radio" class="hidden peer" />
  <label for="radio3" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Lingerie & Lounge Wear</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio4" name="radio" class="hidden peer" />
  <label for="radio4" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Blouse</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio5" name="radio" class="hidden peer" />
  <label for="radio5" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Vintage</span>
</div>

<p className='text-sm text-red-600 ml-7 mt-5'>+ 4 more</p>
          </div>
           {/*forth filter*/}
           <div>
            <h1 className='mb-5 font-semibold font-poppins'>Size</h1>
          <div class="flex items-center text-sm">
  <input type="radio" id="radio1" name="radio" class="hidden peer" />
  <label for="radio1" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Medium</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio2" name="radio" class="hidden peer" />
  <label for="radio2" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Large</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio3" name="radio" class="hidden peer" />
  <label for="radio3" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2">Plus Size</span>
</div>

<div class="flex items-center mt-4 text-sm">
  <input type="radio" id="radio4" name="radio" class="hidden peer" />
  <label for="radio4" class="flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded-none cursor-pointer peer-checked:bg-blue-600 peer-checked:border-blue-600">
    <span class="hidden peer-checked:block w-3 h-3 bg-white rounded-none"></span>
  </label>
  <span class="ml-2 ">Sexy Plus Size</span>
</div>
          </div>

        
      </div>
      <div className='w-full ml-5 '>

        <div className='grid justify-between grid-cols-3 mx-3 mb-40 gap-y-32 gap-x-16'>

         {/*1 img*/}
        <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
      <p className='p-1 text-sm text-white bg-black'>New Arrivals</p>
    </div>
  </div>
</div>

         {/*2 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
    </div>
  </div>
</div>

         {/*3 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>

    </div>
  </div>
</div>

         {/*3 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
    </div>
  </div>
</div>

         {/*3 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
      <p className='p-1 text-sm text-white bg-black'>New Arrivals</p>
    </div>
  </div>
</div>

         {/*3 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
    </div>
  </div>
</div>

         {/*3 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
    </div>
  </div>
</div>

         {/*3 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
      <p className='p-1 text-sm text-white bg-black'>New Arrivals</p>
    </div>
  </div>
</div>

         {/*3 img*/}
         <div className='h-[30vh] w-[25vh] relative'>
  <img src={img1} alt="" className='object-cover w-full h-full' />
  <div className='absolute top-2 right-2'>
    <FontAwesomeIcon icon={faHeart} className="p-2 text-2xl text-gray-100 bg-gray-700 opacity-50 cursor-pointer hover:text-red-700" />
  </div>
  <div className='px-2 border-b-2 border-l-2 border-r-2 border-gray-400'>
    <p className='text-sm'>Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
    <div className='flex flex-row justify-between'>
      <p className='text-lg font-semibold'>$120.23</p>
      <p>22 Orders</p>
    </div>
    <div className='flex flex-row justify-between mb-4'>
      <p className='text-gray-400 line-through'>$120.23</p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>


    {/*pages nubmer*/}
    <div className='text-gray-400 mx-52 mb-72'>
      <ul className='flex flex-row items-center justify-end gap-x-5'>
      <FontAwesomeIcon icon={faChevronLeft} className='p-2 text-xl text-black bg-gray-400 ' />
        <li className='px-2 py-1 border-2 border-gray-400 solid'>1</li>
        <li className='px-2 py-1 border-2 border-gray-400 solid'>2</li>
        <li className='px-2 py-1 border-2 border-gray-400 solid'>3</li>
        <li className='px-2 py-1 border-2 border-gray-400 solid'>...</li>
        <li className='px-2 py-1 border-2 border-gray-400 solid'>13</li>
        <FontAwesomeIcon icon={faChevronRight} className='p-2 text-xl text-white bg-black ' />
      </ul>
      
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

export default Productpage
