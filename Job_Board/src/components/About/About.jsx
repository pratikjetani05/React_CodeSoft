import React from 'react';
import { FaBriefcase, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100  mb-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Connecting <span className="text-blue-600">Talent</span> with
            <span className="text-blue-600"> Opportunity</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JobBoard is the leading platform revolutionizing how companies find great talent and how job seekers discover their next career move.
          </p>
        </section>

        

        {/* Features Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose JobBoard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg group hover:bg-blue-600 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <FaBriefcase className="text-3xl text-blue-600 group-hover:text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">
                    Smart Job Matching
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100">
                    Our AI-powered algorithm matches your skills and preferences with the perfect job opportunities, saving you time and effort.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg group hover:bg-blue-600 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <FaUsers className="text-3xl text-blue-600 group-hover:text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">
                    Verified Employers
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100">
                    All companies on our platform are thoroughly vetted to ensure legitimate and high-quality job opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg group hover:bg-blue-600 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <FaChartLine className="text-3xl text-blue-600 group-hover:text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">
                    Career Growth Tools
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100">
                    Access salary insights, company reviews, and career development resources to make informed decisions about your future.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg group hover:bg-blue-600 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <FaHandshake className="text-3xl text-blue-600 group-hover:text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-100">
                    Our team of career experts is available to help you navigate your job search and career transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default About;