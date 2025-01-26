import React from 'react';
import Image from 'next/image';
import HeaderComponent from '../Header/HeaderComponent';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';

function HomeComponent() {
  return (
    <> 
    <HeaderComponent/>
      <div className='bg-[#412E1A] w-full h-full '>
        <SectionOne />
        <SectionTwo/>
      </div>
    </>
  );
}

export default HomeComponent;