import Image from 'next/image';
import React from 'react';

function SectionOne() {
  return (
    <div className="w-full flex justify-center px-4 overflow-hidden">
      <div className="flex flex-col space-y-6 max-w-full">
        <div className="text-[#D9CFD9] flex items-center font-semibold 
                        text-5xl sm:text-6xl md:text-7xl lg:text-[250px] 
                        break-words w-full">
          CREATE.
          <Image
            src="/assets/create.svg"
            width={80}
            height={80}
            className="sm:w-24 sm:h-24 md:w-32 md:h-32"
            alt="Create"
          />
        </div>

        <div className="text-[#93AF93] flex items-center font-semibold 
                        text-6xl sm:text-7xl md:text-8xl lg:text-[300px] 
                        break-words w-full">
          CUSTOMIZE.
          <Image
            src="/assets/customize.svg"
            width={100}
            height={100}
            className="sm:w-28 sm:h-28 md:w-36 md:h-36"
            alt="Customize"
          />
        </div>

        <div className="text-[#BF9665] flex items-center font-semibold 
                        text-7xl sm:text-8xl md:text-9xl lg:text-[350px] 
                        break-words w-full">
          <span>&</span> BUILD.
          <Image
            src="/assets/flower.svg"
            width={100}
            height={100}
            className="sm:w-28 sm:h-28 md:w-36 md:h-36"
            alt="Build"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
