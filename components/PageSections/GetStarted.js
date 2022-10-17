import React from "react";
import { SectionWrapper } from "./Products";
import getStarted from "../../assets/Images/get-started.jpg";
import getstarted from "../../constant/getstarted";
import Image from "next/image";

const GetStarted = () => {
  return (
    <SectionWrapper className="flex justify-center">
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto overflow-hidden rounded-lg getstarted-card">
        <div className=" md:w-[50%] p-12 getstarted-bg">
          {/* <div className="relative w-full h-full">
            <Image
              src={"/Images/get-started.jpg"}
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition={"left"}
            />
          </div> */}
          <div className="flex flex-col p-12 text-white h-full justify-center z-40 ">
            <h2 className="title lg:w-16 font-bold leading-tight">
              Get Started
            </h2>
            <h4 className="uppercase font-bold">in three easy steps</h4>
            <p className="text-base mt-9 max-w-[300px]">
              Begin your journey to financial freedom. Make your money work for
              you.
            </p>
          </div>
        </div>
        <div className="p-12 flex md:w-[50%] flex-col bg-white ">
          {getstarted.map(item => (
            <div key={item.title} className="flex items-center py-10 gap-4">
              <div className="w-16 h-16 bg-[#A2A6A8] bg-opacity-10 p-3 flex justify-center items-center rounded-[50%] ">
                <div className="relative w-12 h-12 flex-shrink-0 ">
                  <Image src={item.avatar} alt={item.title} layout="fill" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-2xl">{item.title}</h2>
                <p className="text-primary text-opacity-80">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GetStarted;