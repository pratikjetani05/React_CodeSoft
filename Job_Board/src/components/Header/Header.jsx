import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Avatar } from 'flowbite-react';
import { signoutSuccess } from '../../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Info, Phone, LogOut } from 'lucide-react';
import logo from '../../assets/logo_preview.png';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentuser } = useSelector(state => state.user);

  const handleSignout = () => {
    dispatch(signoutSuccess());
    navigate('/login');
  };

  const menuItems = [
    { label: 'Jobs', href: '#job', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'About', href: '#about', icon: <Info className="w-4 h-4" /> },
    { label: 'Contact', href: '#contact', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/75 border-b border-gray-200">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="w-[130px] transition-transform hover:scale-105">
              <img 
                src={logo} 
                alt="logo" 
                className="w-full h-auto object-contain"
              />
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                smooth
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {currentuser ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <div className="flex items-center space-x-2 cursor-pointer">
                     <Avatar className='h-16 w-16' alt='user' img="https://tse4.mm.bing.net/th?id=OIP.PMhANanxddOBObcYxcYOcwHaGy&pid=Api&P=0&h=220" rounded />
                    <span className="hidden lg:block text-sm font-medium text-gray-700">
                      {currentuser.existingUser.email.split('@')[0]}
                    </span>
                  </div>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm font-medium text-gray-900">
                    {currentuser.existingUser.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item 
                  onClick={handleSignout}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Link to="/login">
                <button className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;