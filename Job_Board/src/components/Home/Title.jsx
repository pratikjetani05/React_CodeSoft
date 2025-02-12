import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';


function Title() {
  return (
    <div className="relative h-[620px] bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Discover Your Next
                <span className="block text-blue-600">Career Move</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Connect with over 10,000+ top companies hiring today. Your dream job is just one click away.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Start Your Journey
                </button>
              </Link>
             
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150K+</div>
                <div className="text-gray-600">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">85K+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12M+</div>
                <div className="text-gray-600">Job Seekers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="./src/assets/job.webp" 
                alt="Professional workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default Title;