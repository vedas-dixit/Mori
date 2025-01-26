import React from 'react';
import Image from 'next/image';
import HeaderComponent from '../Header/HeaderComponent';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';

function HomeComponent() {
  return (
    <> 
    <HeaderComponent/>
      <div className='bg-[#412E1A] w-full h-full '>
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
      </div>
    </>
  );
}

export default HomeComponent;