import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import main from './images/images-removebg-preview.png'
import img1 from './images/IMG-20240723-WA0024.jpg'
import img2 from './images/IMG-20240723-WA0025.jpg'
import img4 from './images/images (5).jpeg'
import img5 from './images/images (4).jpeg'
import img6 from './images/images (3).jpeg'
import img7 from './images/images (1).jpeg'
import img8 from './images/images (2).jpeg'
import img9 from './images/HOMEPAGE_BOTTOM_LEFT.e316e95e.png'
import img10 from './images/istockphoto-1425640652-612x612.jpg'
import img11 from './images/istockphoto-912700154-612x612.jpg'
import img12 from './images/HOMEPAGE_page-0001__2_-removebg-preview.png'
import { Link } from 'react-router-dom';

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
                <Link to="/"><li className='hover:underline underline-offset-4'>Home</li></Link>
                <Link to="/products"><li className='hover:underline underline-offset-4'>Shop</li></Link>
                <Link to="productspage"><li className='hover:underline underline-offset-4'>Feature</li></Link>
                <Link to="/about"><li className='hover:underline underline-offset-4'>Contact</li></Link>
            </ul>
           <FontAwesomeIcon icon={faShoppingBag} className="text-2xl text-gray-600 hover:text-gray-800" />
            <Link to="/login"><button className='text-black border-2 border-primary3 solid px-3 rounded-lg'>LOGIN</button></Link>
            </div>
        </div>
        {/*after navbar text and image*/}
        <div className='flex flex-row w-full mt-20'>
            <div className='w-1/2 justify-center items-center px-20 '>
                <h1 className='text-5xl font-bold italic tracking-wider	 text-primary1 mb-10'>Uncover And  Cultivate Your Distinctive Style</h1>
                <p className='text-xl mb-10'> Lorem ipsum dolor sit amet consectetur. Faucibus odio gravida amet tellus adipiscing donec adipiscing dignissim</p>
                <button className='text-white bg-primary1 px-8 py-4 rounded-xl'>Explore Now</button>
            </div>

            <div className="relative bg-primary1 mx-20 w-1/2 rounded-tl-[10vh] rounded-tr-[10vh]">

  {/* First Dot Grid: Positioned on the right side of the image */}
  <div className="absolute right-0 pt-10 pr-4 top-32 transform -translate-y-1/2">
    <div className="grid grid-cols-4 gap-8 w-max">
      {Array.from({ length: rows * columns }, (_, index) => (
        <div key={index} className="w-2 h-2 bg-black rounded-full"></div>
      ))}
    </div>
  </div>

  {/* Image */}
  <img src={main} alt="" className="w-[100vh] h-[60vh] object-contain mx-auto" />

  {/* Second Dot Grid: Positioned on the left side of the image */}
  <div className="absolute left-0 pb-10 pl-4 bottom-0">
    <div className="grid grid-cols-4 gap-8 w-max">
      {Array.from({ length: rows * columns }, (_, index) => (
        <div key={index} className="w-2 h-2 bg-black rounded-full"></div>
      ))}
    </div>
  </div>
</div>
</div>
</div>   
         {/*images section*/}
   <div>
  {/*text section*/}
   <div className='text-center my-24'>
      <h1 className='text-5xl font-bold text-primary1 mb-10'>Best Selling</h1>
      <p className='text-xl'>Get in on the trend with our curated selection of best-selling stle</p>
    </div>
    {/*iamges and price  section*/}
    <div className='flex flex-row justify-between mx-3'>
     {/*images section 1*/}
      <div>
        <img src={img2} alt="" className='w-[30vh] h-[35vh] object-cover' />
        <div className='text-center font-bold'>
          <p className='mb-2'>Name of the product</p>
        <div className='flex flex-row justify-center'>
          <p>$38.99   |   5.0  </p>
        <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
        </div>
        </div>
      </div>
      
     {/*images section 1*/}
     <div>
        <img src={img1} alt="" className='w-[30vh] h-[35vh] object-cover' />
        <div className='text-center font-bold'>
          <p className='mb-2'>Name of the product</p>
        <div className='flex flex-row justify-center'>
          <p>$38.99   |   5.0  </p>
        <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
        </div>
        </div>
      </div>
      
     {/*images section 1*/}
     <div>
        <img src={img2} alt="" className='w-[30vh] h-[35vh] object-cover' />
        <div className='text-center font-bold'>
          <p className='mb-2'>Name of the product</p>
        <div className='flex flex-row justify-center'>
          <p>$38.99   |   5.0  </p>
        <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
        </div>
        </div>
      </div>
      
     {/*images section 1*/}
     <div>
        <img src={img1} alt="" className='w-[30vh] h-[35vh] object-cover' />
        <div className='text-center font-bold'>
          <p className='mb-2'>Name of the product</p>
        <div className='flex flex-row justify-center'>
          <p>$38.99   |   5.0  </p>
        <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
        </div>
        </div>
      </div>
    </div>

    <div className='flex justify-center my-20'>
      <button className='border-2 justify-center border-primary3 solid text-black py-3 px-5'> See More  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" /></button>
    </div>
   </div> 
   {/*next section of products*/}

   <div>
  {/*text section*/}
   <div className='text-center'>
      <h1 className='text-5xl font-bold text-primary1 mb-10'>Best Selling</h1>
      <ul className='flex flex-row justify-center gap-12 font-bold '>
        <li className='hover:underline underline-offset-8 underline-primary1'>SALE</li>
        <li className='hover:underline underline-offset-8 underline-primary1'>HOT</li>
        <li className='hover:underline underline-offset-8 underline-primary1'>NEW ARRIVALS</li>
        <li className='hover:underline underline-offset-8 underline-primary1'>ACCESORIES</li>
      </ul>
    </div>
      {/*images*/}
      <div className='flex justify-center items-center min-h-screen '>
  <div className='grid grid-cols-4 gap-x-5 gap-y-20 '>
    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh] ">
  {/* Image */}
  <img src={img4} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto ">
    <p className="mb-2">Summer Wind T-shirt </p>
    <div className="flex items-center justify-center">
      <p>$31.99 | 4.2</p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>

    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh]">
  {/* Image */}
  <img src={img5} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto">
    <p className="mb-2">Tailored Jacket</p>
    <div className="flex items-center justify-center">
      <p>$38.99 | 4.5</p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>


    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh]">
  {/* Image */}
  <img src={img11} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto">
    <p className="mb-2">Formal Classic suit
    </p>
    <div className="flex items-center justify-center">
      <p>$50.00 | 5.0</p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>
    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh]">
  {/* Image */}
  <img src={img6} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto">
    <p className="mb-2">White Solid Formal T-shirt </p>
    <div className="flex items-center justify-center">
      <p>$42.09 | 5.0</p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>

    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh]">
  {/* Image */}
  <img src={img7} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto">
    <p className="mb-2">Tailored Jacket
    </p>
    <div className="flex items-center justify-center">
      <p>$41.03 | 5.0</p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>

    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh]">
  {/* Image */}
  <img src={img8} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto">
    <p className="mb-2">Solid White Summer T-shirt</p>
    <div className="flex items-center justify-center">
      <p>$29.99 | 4.5</p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>

    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh]">
  {/* Image */}
  <img src={img9} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto">
    <p className="mb-2">Classic Top
    </p>
    <div className="flex items-center justify-center">
      <p>$24.54 | 3.8
      </p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>

    {/* Image 4 */}
    <div className="flex flex-col justify-between items-center w-[30vh] h-[40vh]">
  {/* Image */}
  <img src={img10} alt="" className="w-full h-[35vh] object-cover" />

  {/* Text at the bottom */}
  <div className="text-center font-bold mt-auto">
    <p className="mb-2">Formal Jeans </p>
    <div className="flex items-center justify-center">
      <p>$38.99 | 5.0</p>
      <svg
        className="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  </div>
</div>
  </div>
</div>
   </div>
   
    {/*Countdown section*/}
    <div className='flex flex-row justify-between bg-primary2'>
    <div className='w-1/2 flex justify-center relative'>
  <div className="absolute left-0 bottom-10 pt-10 pl-4 transform">
    <div className="grid grid-cols-4 gap-5 w-max">
      {Array.from({ length: rows * columns }, (_, index) => (
        <div key={index} className="w-2 h-2 bg-primary3 rounded-full"></div>
      ))}
    </div>
  </div>
  <img src={img12} alt="" className='h-[60vh] w-[50vh] object-cover -mb-14' />
</div>

      <div className='w-1/2'>
        <h1 className='text-6xl font-semibold mt-10 text-primary1'>Exclusive Offer</h1>
        <p  className='text-xl font-bold mt-6 text-primary1 '>Unlock the unlimited style upgrade with our exclusive <br />
offer Enjoy savings of up to 40% off on your latest <br />
New Arrivals</p>
       <div className='flex gap-10 mt-6'>
        <p className='bg-white px-6 py-4 text-3xl font-bold text-center text-primary3 rounded-3xl'>05 <br /> Days</p>
        <p className='bg-white p-4 text-3xl font-bold text-center text-primary3 rounded-3xl'>17 <br /> Hours</p>
        <p className='bg-white px-7 py-4 text-3xl font-bold text-center text-primary3 rounded-3xl'>20 <br /> Min</p>
       </div>
      <button className='bg-primary1 mt-10 px-6 py-4 rounded-3xl text-white text-xl'>SHOP NOW</button>    
      </div>
    </div>

    {/*another iamges and text section*/}
     <div>

     </div>
     {/*text section*/}
   <div className='text-center my-24'>
      <h1 className='text-5xl font-bold text-primary1 mb-10'>Cool & Trendy Clothes For You</h1>
      <p className='text-xl'>Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>

    <div className='flex flex-row justify-center gap-10'>
      
      {/*img1*/}
      <div>
        <img src={img2} alt="" className='w-[40vh] h-[50vh] object-cover' />
        <div className='text-center text-gray-700 font-bold'><p className='text-3xl mt-5'>Accessories </p>
        <p className='text-lg mt-4'>Lorem ipsum dolor sit amet <br />
consectetur. Mi enim a curabitur <br /> odio
risus donec quis donec vel.</p></div>
      </div>
      
      {/*img1*/}
      <div>
        <img src={img4} alt="" className='w-[40vh] h-[50vh] object-cover' />
        <div className='text-center text-gray-700 font-bold'><p className='text-3xl mt-5'>Accessories </p>
        <p className='text-lg mt-4'>Lorem ipsum dolor sit amet <br />
consectetur. Mi enim a curabitur <br /> odio
risus donec quis donec vel.</p></div>
      </div>
      
      {/*img1*/}
      <div>
        <img src={img1} alt="" className='w-[40vh] h-[50vh] object-cover' />
        <div className='text-center text-gray-700 font-bold'><p className='text-3xl mt-5'>Accessories </p>
        <p className='text-lg mt-4'>Lorem ipsum dolor sit amet <br />
consectetur. Mi enim a curabitur <br /> odio
risus donec quis donec vel.</p></div>
      </div>
    </div>



    {/*last part of the home page testemonial section*/}

    <div>
      <div>
        <h1 className='mt-32 text-center text-4xl font-bold text-primary1'>Clients Feedback</h1>
      </div>
      <div className='flex flex-row justify-center gap-5 mx-32 mb-20 mt-10'>
        {/*first section*/}
        <div  className='bg-white shadow-lg p-3'>
          <p className='font-bold text-3xl'>"</p>
          <h1 className='text-xl font-bold'>Maria Shabbir</h1>
          <p className='text-sm mt-4'>The customer experience was exceptional from
start to finish. The website is user friendly, the
checkout process was smooth and the clothes I
ordered fit prefectly. I’m beyond satified!</p>
        </div>
        
        {/*second section*/}
        <div className='bg-primary2 shadow-lg p-3'>
          <p className='font-bold text-3xl'>"</p>
          <h1 className='text-xl font-bold'>Beenish Mumtaz</h1>
          <p className='text-sm mt-4'>I absolutely love the quality and style of the
clothing I purchased from this website. customer
service was outstanding, and I received my order
quickly. Highly recommended !</p>
        </div>
        
        {/*third section*/}
        <div className='bg-white shadow-lg p-3'>
          <p className='font-bold text-3xl'>"</p>
          <h1 className='text-xl font-bold'>Ayra Khan</h1>
          <p className='text-sm mt-4'>I had a great experience shopping on this
website. The clothes I brought are fashionable
and comfortable. Highly satisfied!jasjdlfajs  falsj jdsjdf lkjuwio  oweur </p>
        </div>
      </div>
    </div>
    <div className='text-center space-x-10 mb-24'>
    <FontAwesomeIcon icon={faChevronLeft}  className='bg-white p-3'/>
    <FontAwesomeIcon icon={faChevronRight} className='bg-primary2 p-3' />
    </div>
    </div>
  )
}

export default Home
