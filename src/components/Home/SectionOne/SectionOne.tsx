import Image from 'next/image';
import React from 'react';

function SectionOne() {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[30vh] w-full flex flex-col md:flex-row items-center">
        <div className="w-full p-6 relative ">
          <div className="w-full h-36 lg:h-48 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center relative">
            <img src="/flowers.svg" className="-translate-x-3" alt="Flowers" />
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">PORTFOLIOS</h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 pt-0 md:pt-6 ">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">MORI</h2>
          <p className="text-gray-600">
            MORI is a platform for effortlessly creating stunning portfolios and product showcases with a personal touch.
          </p>
        </div>
      </div>
      <div className="p-6 overflow-hidden mb-9 mt-9 md:mt-0">
        <div className="relative h-[70vh] w-full rounded-3xl overflow-hidden">
          <Image
            src="/image.png"
            alt="Description"
            fill
            className="object-cover rounded-3xl"
            priority
          />
          <div className="relative bg-[#D9CFD9] rounded-full h-24 w-64 flex items-center px-4 mt-5 ml-5 scale-75 md:scale-75 lg:scale-100">
            <div className="absolute left-4 w-20 h-20 bg-[#B6FF9B] rounded-full"></div>
            <div className="absolute left-16 w-20 h-20 bg-[#FF8585] rounded-full"></div>
            <div className="absolute left-28 w-20 h-20 bg-[#93AF93] rounded-full"></div>
            <div className="absolute left-40 w-20 h-20 bg-[#995050] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;