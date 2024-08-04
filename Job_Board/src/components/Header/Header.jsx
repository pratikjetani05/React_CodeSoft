import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import { useSelector ,useDispatch} from 'react-redux'
import {Dropdown,Avatar} from 'flowbite-react'
import { signoutSuccess } from '../../Redux/UserSlice'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo_preview.png'

const Header = () => {

  const navigate = useNavigate
const dispatch = useDispatch()
const {currentuser} = useSelector(state=>state.user);

const handleSignout = ()=>{
  dispatch(signoutSuccess());
  navigate('/login');
}

    return (
      <>
        <div className='navBar flex justify-between  bg-gray-300 rounded-lg shadow-xl mx-auto items-center '>
          <Link >
          <div className='logoDiv w-[130px] px-2 bg-transparent  ' >
           <img src={logo} alt="logo" className='bg-gray-300' />
          </div>
          </Link >
          <div className='menu flex gap-8'>
            <Link to="#job" smooth>
            <li className='menuList text-black hover:text-blue-500'>Job</li>
            </Link>
            <Link to="#about" smooth>
            <li className='menuList text-black hover:text-blue-500'>About</li>
            </Link>
            <Link to="#contact" smooth>
            <li className='menuList text-black hover:text-blue-500'>Contacts</li>
            </Link>
          
            
          </div>
          <div className='flex gap-8'>
          {currentuser  ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar className='h-16 w-16' alt='user' img="https://tse4.mm.bing.net/th?id=OIP.PMhANanxddOBObcYxcYOcwHaGy&pid=Api&P=0&h=220" rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>{currentuser.existingUser.email}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown> )
          :(
          <Link to="/login" smooth>
            <button className='menuList text-white px-5 rounded-lg py-3 bg-blue-500 hover:bg-blue-700'>LogIn</button>
            </Link>
)}
          </div>
        </div>
        
      </>
    )
  }
  
  export default Header
