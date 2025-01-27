"use client"
import React, { useState } from 'react';

const features = [
  {
    title: "Customizable Templates",
    description: "Choose from a range of beautiful, responsive templates and tailor them to fit your personal style.",
    icon: "/assets/descicon1.svg"
  },
  {
    title: "AI-Powered Content",
    description: "Let AI assist you in crafting compelling content that enhances your portfolio or product showcase.",
    icon: "/assets/gemini.svg"
  },
  {
    title: "Unique URLs",
    description: "Get a personalized URL to share your work effortlessly and boost your online presence.",
    icon: "/assets/descicon2.svg"
  }
];

const SectionTwo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col w-full  items-center  bg-[#f4f4f4] z-0 h-[110vh] md:h-[50vh] mt-">
        <h2 className="text-9xl font-bold text-[#6B4A32] mb-6">Why Choose MORI?</h2>

        <div className="flex flex-col md:flex-row gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative  w-full h-36 bg-[#D9CFD9] rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-500 
            ${hoveredIndex === index ? 'h-60' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-4">
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                <h3 className="text-2xl font-semibold text-[#6B4A32]">{feature.title}</h3>
              </div>


              <p
                className={`mt-4 text-2xl text-[#412E1A] transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 h-0'
                  }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full  flex flex-col items-center space-y-6 bg-[#1b5b4e] p-10'>
        <div className='flex group items-center justify-start w-full border-t border-[#E5E5E5] py-4'>
          <img src='/assets/flower.svg' className='w-0 opacity-0 pr-1 group-hover:opacity-100 group-hover:w-14 transition-all duration-500 ease-in-out '></img>
          <g className='flex w-full justify-between'>
            <span className='text-[#E5E5E5] text-2xl font-light'>What can it do ?</span>
            <span className='text-[#E5E5E5] text-3xl font-light group-hover:opacity-100 opacity-0 h-0 transition-all ease-in-out'>MORI makes personalized websites, no coding needed.</span>
          </g>
        </div>

        <div className='flex group items-center justify-start w-full border-t border-[#E5E5E5] py-4'>
          <img src='/assets/flower.svg' className='w-0 opacity-0 pr-1 group-hover:opacity-100 group-hover:w-14 transition-all duration-500 ease-in-out '></img>
          <g className='flex w-full justify-between'>
            <span className='text-[#E5E5E5] text-2xl font-light'>What can it do ?</span>
            <span className='text-[#E5E5E5] text-3xl font-light group-hover:opacity-100 opacity-0 transition-all ease-in-out'>MORI empowers creators to build stunning portfolios effortlessly.</span>
          </g>
        </div>

        <div className='flex group items-center justify-start w-full border-t border-[#E5E5E5] py-4'>
          <img src='/assets/flower.svg' className='w-0 opacity-0 pr-1 group-hover:opacity-100 group-hover:w-14 transition-all duration-500 ease-in-out '></img>
          <g className='flex w-full justify-between'>
            <span className='text-[#E5E5E5] text-2xl font-light'>So MORI</span>
            <span className='text-[#E5E5E5] text-3xl font-light group-hover:opacity-100 opacity-0 transition-all ease-in-out'>delivers Portfolios | Products | Perfection.</span>
          </g>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;