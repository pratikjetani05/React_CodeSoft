import React from "react";
import simple from "../../assets/simple.jpeg";
import earth from "../../assets/earth.jpeg";
import Shiled from "../../assets/Shiled.jpeg";
import customer from "../../assets/cutomer.jpeg";
import Collaboration from "../../assets/collaboration.jpeg";
import excellence from "../../assets/excellence.jpeg";
import innovation from "../../assets/innovation.jpeg";

const Value = () => {
  return (
    <>
      <div className="mb-8 mt-4 px-2 md:px-8 lg:px-12">
        <h1 className="text-black text-xl md:text-2xl lg:text-[25px] py-6 md:py-8 lg:pb-12 font-bold text-center md:text-left">
          The Value that holds us true and to account
        </h1>
        
        <div className="grid gap-4 md:gap-6 lg:gap-[5rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          {/* Simplicity Card */}
          <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-4 md:p-[1.5rem] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={simple} alt="Simplicity icon" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-base md:text-[18px]">
                Simplicity
              </span>
            </div>
            <p className="text-xs md:text-[13px] text-black opacity-[.7] py-3 md:py-[1rem] font-semibold">
              Things being made beautiful simple are at the heart of everything we do.
            </p>
          </div>

          {/* Collaboration Card */}
          <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-4 md:p-[1.5rem] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={Collaboration} alt="Collaboration icon" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-base md:text-[18px]">
                Collaboration
              </span>
            </div>
            <p className="text-xs md:text-[13px] text-black opacity-[.7] py-3 md:py-[1rem] font-semibold">
              Teamwork is at the core of our operations, ensuring everyone contributes to the company's success.
            </p>
          </div>

          {/* Innovation Card */}
          <div className="singleGrid rounded-[10px] hover:bg-blue-100 p-4 md:p-[1.5rem] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={innovation} alt="Innovation icon" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-base md:text-[18px]">
                Innovation
              </span>
            </div>
            <p className="text-xs md:text-[13px] text-black opacity-[.7] py-3 md:py-[1rem] font-semibold">
              We foster a culture of continuous improvement and encourage creativity in our team.
            </p>
          </div>

          {/* Excellence Card */}
          <div className="singleGrid rounded-[10px] hover:bg-yellow-100 p-4 md:p-[1.5rem] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={excellence} alt="Excellence icon" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-base md:text-[18px]">
                Excellence
              </span>
            </div>
            <p className="text-xs md:text-[13px] text-black opacity-[.7] py-3 md:py-[1rem] font-semibold">
              Striving for excellence in everything we do, we deliver quality and superior results.
            </p>
          </div>

          {/* Diversity Card */}
          <div className="singleGrid rounded-[10px] hover:bg-orange-100 p-4 md:p-[1.5rem] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={Shiled} alt="Diversity icon" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-base md:text-[18px]">
                Diversity
              </span>
            </div>
            <p className="text-xs md:text-[13px] text-black opacity-[.7] py-3 md:py-[1rem] font-semibold">
              Embracing diversity, we believe that different perspectives drive innovation.
            </p>
          </div>

          {/* Customer Focus Card */}
          <div className="singleGrid rounded-[10px] hover:bg-green-100 p-4 md:p-[1.5rem] transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={customer} alt="Customer focus icon" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-base md:text-[18px]">
                Customer Focus
              </span>
            </div>
            <p className="text-xs md:text-[13px] text-black opacity-[.7] py-3 md:py-[1rem] font-semibold">
              Our customers are at the center of everything we do, ensuring their satisfaction and success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Value;