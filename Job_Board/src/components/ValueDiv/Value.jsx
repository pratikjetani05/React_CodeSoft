import React from "react";
import simple from "../../assets/simple.jpeg";
import earth from "../../assets/earth.jpeg";
import Shiled from "../../assets/Shiled.jpeg";
import customer from "../../assets/cutomer.jpeg"
import Collaboration from "../../assets/collaboration.jpeg"
import excellence from "../../assets/excellence.jpeg"
import innovation from "../../assets/innovation.jpeg"

const Value = () => {
  return (
    <>
      <div className="mb-[2rem] mt-[1rem]">
        <h1 className="text-black text-[25px] py-[2rem] pb-[3rem] font-bold  block">
          The Value that holds us true and to account
        </h1>
        <div className="grid gap-[5rem] grid-cols-3 items-center">
          <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={simple} alt="photo" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
                Simplicity
              </span>
            </div>

            <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
              Things being made beautiful simple are at the heart of everthing
              we do.
            </p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={Collaboration} alt="photo" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
              Collaboration
              </span>
            </div>

            <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
            Teamwork is at the core of our operations, ensuring everyone contributes to the company's success.
            </p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-blue-100 p-[1rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={innovation} alt="photo" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
              Innovation
              </span>
            </div>

            <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
            We foster a culture of continuous improvement and encourage creativity in our team.
            </p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-yellow-100 p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={excellence} alt="photo" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
              Excellence
              </span>
            </div>

            <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
            Striving for excellence in everything we do, we deliver quality and superior results.
            </p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-orange-100 p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={Shiled} alt="photo" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
              Diversity
              </span>
            </div>

            <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
            Embracing diversity, we believe that different perspectives drive innovation.
            </p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-green-100 p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
                <img src={customer} alt="photo" className="w-[70%]" />
              </div>
              <span className="font-semibold text-black text-[18px]">
              Customer Focus
              </span>
            </div>

            <p className="text-[13px] text-black opacity-[.7] py-[1rem] font-semibold">
            Our customers are at the center of everything we do, ensuring their satisfaction and success.
            </p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Value;
