import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Text = () => {
  const [text] = useTypewriter({
    words: [' Rated Jobs', 'In-Demand Opportunities','Featured Job Listings','Best Career Picks','Hiring Companies'],
    loop: 0, 
    typeSpeed: 150,
    deleteSpeed: 100,
  });

  return (
    <div className="flex justify-center font-light  mt-10 mb-10">
      <h1 className="text-4xl font-bold text-black">
        Top {''}
         <span className='text-blue-600'><strong className='text-justify'>{text}</strong></span>
        <span >
          <Cursor  />
        </span>
      </h1>
    </div>
  );
};

export default Text;
