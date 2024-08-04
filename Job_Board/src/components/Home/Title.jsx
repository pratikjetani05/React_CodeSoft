import React from 'react';
import { Link } from 'react-router-dom';


function Title() {
  return (
    <div className="bg-white  flex flex-col items-center justify-center px-4 py-8">
      <div className="flex flex-row mt-10 items-start justify-center l">
        
        <div className="ml-8 text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Get Your <span className="text-blue-500">Dream Job</span>
          </h1>
          <h2 className="text-xl font-medium text-gray-600 mb-8">Today!</h2>
          <p className="text-gray-500  text-base mb-8">
          Welcome to Job Finder Web, your ultimate destination for finding the perfect job match. Our platform connects job seekers with top employers across various industries, offering a seamless and efficient job search experience.we are dedicated to helping you achieve your career goals and land your dream job.
          </p>
          <Link to="/apply">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              console.log("Apply Now button clicked");
            }}
          >
            Apply Now
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Title;
