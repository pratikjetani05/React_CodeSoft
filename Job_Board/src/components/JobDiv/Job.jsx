import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';
import Text from './Text';
import google from '../../assets/google.png';
import amazon from '../../assets/amazon.png';
import boat from '../../assets/boat.png';
import flipkart from '../../assets/flipkart.jpeg';
import microsoft from '../../assets/microsoft.png';
import intel from '../../assets/intel.png';
import nvidia from '../../assets/nvidia.png';
import tcs from '../../assets/tcs.png';
import Search from '../SearchDiv/Search';

const Data = [
  { id: 1, image: google, title: 'Web Developer', time: 'Now', location: 'Canada', desc: 'Design, develop, and maintain functional and visually appealing websites and web applications.', company: 'Google' },
  { id: 2, image: amazon, title: 'Software Engineer', time: '7Days', location: 'USA', desc: 'Develop high-quality software solutions and collaborate with cross-functional teams.', company: 'Amazon' },
  { id: 3, image: microsoft, title: 'Marketing Manager', time: '12Days', location: 'Mumbai', desc: 'Lead and execute marketing strategies to drive brand awareness and growth.', company: 'Microsoft' },
  { id: 4, image: tcs, title: 'UI Designer', time: 'Now', location: 'Gujrat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae enim sit dolorem vero accusantium hic reprehenderit, blanditiis', company: 'TCS' },
  { id: 5, image: flipkart, title: 'Customer Support', time: '7Days', location: 'Mumbai', desc: 'Provide exceptional support and resolve customer inquiries efficiently.', company: 'Flipkart' },
  { id: 6, image: nvidia, title: 'Data Analyst', time: '14Days', location: 'Mumbai', desc: 'Analyze and interpret complex data sets to support decision-making and strategy.', company: 'Nvidia' },
  { id: 7, image: boat, title: 'Product Manager', time: 'Now', location: 'Canada', desc: 'Oversee product development and manage cross-functional teams to deliver innovative products.', company: 'Boat' },
  { id: 8, image: intel, title: 'Graphic Designer', time: '5Days', location: 'Europe', desc: 'Create visually compelling graphics and designs for various media platforms.', company: 'Intel' },
  { id: 9, image: google, title: 'Financial Analyst', time: 'Now', location: 'Canada', desc: 'Evaluate financial data to provide insights and recommendations for business planning.', company: 'Google' },
  { id: 10, image: tcs, title: 'Project Manager', time: 'Now', location: 'India', desc: 'Plan, execute, and finalize projects within scope, budget, and timeline constraints.', company: 'TCS' },
  { id: 11, image: microsoft, title: 'Content Writer', time: 'Now', location: 'Delhi', desc: 'Produce engaging and informative content for websites, blogs, and social media.', company: 'Microsoft' },
  { id: 12, image: nvidia, title: 'IT Support Specialist', time: 'Now', location: 'China', desc: 'Provide technical support and troubleshooting for hardware and software issues.', company: 'Nvidia' },
];

const Job = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredJobs = Data.filter(
    job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id='job items-center justify-center'>
      <Text />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <div className="jobcontainer w-[90%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {filteredJobs.map(({ id, image, title, time, location, desc, company }) => (
          <div
            key={id}
            className="group singleJob w-[90%] h-[350px] bg-white rounded-[10px] p-5 hover:bg-blue-600 shadow-lg shadow-gray-400/700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Header Section */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold text-black group-hover:text-white line-clamp-1">
                  {title}
                </h1>
                <span className="flex items-center text-black gap-1 group-hover:text-white whitespace-nowrap">
                  <BiTimeFive />
                  {time}
                </span>
              </div>
              <h6 className="text-black group-hover:text-white text-sm">{location}</h6>
            </div>

            {/* Description Section */}
            <p className="text-sm text-black group-hover:text-white border-t border-gray-200 py-4 line-clamp-3">
              {desc}
            </p>

            {/* Company Section */}
            <div className="space-y-4">
              <div className="company flex items-center gap-3">
                <img src={image} alt="company_logo" className="w-12 h-12 object-contain" />
                <span className="text-sm font-medium group-hover:text-white">
                  {company}
                </span>
              </div>

              <Link to="/apply" className="block">
                <button className="w-full py-3 px-4 rounded-lg border-2 text-sm font-semibold bg-transparent text-gray-700 group-hover:bg-white group-hover:text-gray-700 transition-colors duration-300">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;