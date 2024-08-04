

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
    <div id='job'>
      <Text />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <div className="jobcontainer w-[90%] mx-auto flex gap-10 justify-center flex-wrap  items-center py-10">
        {filteredJobs.map(({ id, image, title, time, location, desc, company }) => (
          <div
            key={id}
            className="group group/item singleJob w-[40vh] h-[40vh] p-[20px] bg-white rounded-[10px] hover:bg-blue-600 shadow-lg shadow-gray-400/700 hover:shadow-2xl"
          >
            <span className="flex justify-between items-center gap-4">
              <h1 className="text-[16px] mb-2 font-semibold text-black group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center text-black gap-1 group-hover:text-white">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-black group-hover:text-white">{location}</h6>
            <p className="text-[13px] text-black pt-[20px] h-[12vh] border-t-[2px] mt-[20px] group-hover:text-white">
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="company_logo" className="w-[20%]" />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>
           <Link to="/apply">
           <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-gray-700 hover:bg-white group-hover/item:text-gray-700 group-hover:text-black">
              Apply Now
            </button>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
