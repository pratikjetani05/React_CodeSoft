



import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div  className=' footer p-[5rem] mb-4 bg-blue-600 rounded-[10px] gap-8 grid grid-cols-4 m-auto items-center justify-center'>
      <div>
          <div className='logoDiv '>
           <h1 className='logo text-[25px] text-white pb-[1.5rem]'><strong>Job</strong>Search</h1> 
          </div>
          <p className='text-white pb-[13px] opacity-70 leading-7'>
            We always make our seekers and companies find the best jobs and employers find the best candidates.

          </p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </div>
      </div>
      
      <div className='grid items-end justify-end'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
         Contact Info
        </span>
        <div id='contact'>
          <small className='text-[14px] text-white'>
            pratikjetani14@gmail.com
          </small>
          <br />
          <small className='text-[14px] text-white'>
            +91 99798 **442
          </small>
          <div className='icons flex gap-4 py-[1rem] cursor-pointer'>
          <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600'/>
          <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600'/>
          <AiOutlineTwitter  className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blue-600'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
