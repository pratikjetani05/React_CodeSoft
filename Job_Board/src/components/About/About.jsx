import React from 'react';

const About = () => {
  return (
    <div id='about' className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 rounded-md mb-14">
      <div className="max-w-7xl mx-auto">
       
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to <span className="text-blue-500 font-semibold cursor-pointer">JobBoard</span>, your one-stop platform for finding your dream job and discovering top talent.
          </p>
        </section>

       
        <section className="bg-white rounded-lg shadow-md mb-12 p-8 group hover:bg-blue-600 hover:text-white ">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 group-hover:text-white">Our Mission</h2>
          <p className="text-lg text-gray-700 group-hover:text-white">
            At JobBoard, our mission is to connect job seekers with exceptional career opportunities and help employers find the right talent for their teams. We strive to simplify the job search process with our user-friendly platform and provide resources to help both job seekers and employers succeed.
          </p>
        </section>

        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
            <div className="bg-white rounded-lg shadow-md p-6 group hover:bg-blue-600 hover:text-white ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-white">For Job Seekers</h3>
              <p className="text-gray-700 group-hover:text-white">
                Find your ideal job with ease. Our platform offers a variety of job listings across multiple industries, along with tools to manage your applications and track your progress.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 group hover:bg-blue-600 hover:text-white ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-white">For Employers</h3>
              <p className="text-gray-700 group-hover:text-white">
                Reach top talent with our targeted job postings and advanced recruitment tools. We offer a range of solutions to help you find the perfect candidates for your open positions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 group hover:bg-blue-600 hover:text-white  ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-white">Career Resources</h3>
              <p className="text-gray-700 group-hover:text-white">
                Access a wealth of resources designed to support your career growth, including resume tips, interview advice, and industry insights.
              </p>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default About;