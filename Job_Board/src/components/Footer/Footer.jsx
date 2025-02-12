import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer p-4 md:p-8 lg:p-[5rem] mb-4 bg-blue-600 rounded-[10px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-auto'>
      {/* Company Info */}
      <div className="mb-6 md:mb-0">
        <div className='logoDiv'>
          <h1 className='logo text-xl md:text-[25px] text-white pb-4 md:pb-[1.5rem]'>
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className='text-white text-sm md:text-base pb-[13px] opacity-70 leading-7'>
          We always make our seekers and companies find the best jobs and employers find the best candidates.
        </p>
      </div>

      {/* Company Links */}
      <div className='grid'>
        <span className='divTitle text-base md:text-[18px] font-semibold pb-4 md:pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-2 md:gap-3'>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            About Us
          </li>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            Features
          </li>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            News
          </li>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            FAQ
          </li>
        </div>
      </div>

      {/* Resources Links */}
      <div className='grid'>
        <span className='divTitle text-base md:text-[18px] font-semibold pb-4 md:pb-[1.5rem] text-white'>
          Resources
        </span>
        <div className='grid gap-2 md:gap-3'>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            Account
          </li>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            Support Center
          </li>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            Feedback
          </li>
          <li className='text-white text-sm md:text-base opacity-[.7] hover:opacity-[1] cursor-pointer transition-all duration-300'>
            Contact Us
          </li>
        </div>
      </div>

      {/* Contact Info */}
      <div className='grid lg:items-end lg:justify-end'>
        <span className='divTitle text-base md:text-[18px] font-semibold pb-4 md:pb-[1.5rem] text-white'>
          Contact Info
        </span>
        <div id='contact'>
          <small className='text-xs md:text-[14px] text-white block mb-2'>
            pratikjetani14@gmail.com
          </small>
          <small className='text-xs md:text-[14px] text-white block mb-4'>
            +91 99798 **442
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[6px] md:p-[8px] h-[30px] w-[30px] md:h-[35px] md:w-[35px] rounded-full icon text-blue-600 hover:bg-gray-100 cursor-pointer transition-all duration-300'/>
            <BsFacebook className='bg-white p-[6px] md:p-[8px] h-[30px] w-[30px] md:h-[35px] md:w-[35px] rounded-full icon text-blue-600 hover:bg-gray-100 cursor-pointer transition-all duration-300'/>
            <AiOutlineTwitter className='bg-white p-[6px] md:p-[8px] h-[30px] w-[30px] md:h-[35px] md:w-[35px] rounded-full icon text-blue-600 hover:bg-gray-100 cursor-pointer transition-all duration-300'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer