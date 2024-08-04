import React from 'react';
import Title from './Title';
import Header from '../Header/Header';
import Job from '../JobDiv/Job';

import Value from '../ValueDiv/Value';
import Footer from '../Footer/Footer';
import AutoSwiper from '../Swiper/AutoSwiper';

import About from '../About/About';




function Home() {
  return (
   <>
   <div className='w-[90%] m-auto ' id='home'>
    
   <Header/>
   <Title/>
   
   <Job/>
   <AutoSwiper/>
   <Value/>
   <About/>
   <Footer/>
   </div>
   </>
  );
}

export default Home;
