import Image from 'next/image'
import React from 'react'

function HeaderComponent() {
    return (
        <>
            <div className='w-full h-full bg-[#412E1A]'>
                <g className='flex items-center'>
                    <Image src={"/assets/MoriLogo_S.png"} width={50} height={20} alt='MORI'></Image>
                    <div className='bg-[#D9D9D9] w-[97%] h-1 rounded-full'></div>
                </g>
            </div>
            <div className='
  w-36 h-36 flex group bg-[#A4B494] 
  fixed bottom-3 right-3 
  rounded-full items-center justify-center 
  z-[9999] shadow-xl cursor-pointer'
            >
                <svg width="66" height="62" viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:translate-x-1 group-hover:rotate-90 transition-all duration-500 ease-in-out'>
                    <path d="M27.1519 8.12387L34.8536 0.50518L65.3284 31.3121L34.5214 61.7869L26.9027 54.0851L44.562 36.6163L0.29996 36.3764L0.358681 25.5432L44.6208 25.7832L27.1519 8.12387Z" fill="white" />
                </svg>

            </div>
        </>
    )
}

export default HeaderComponent