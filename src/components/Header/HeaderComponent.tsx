import Image from 'next/image'
import React from 'react'

function HeaderComponent() {
    return (
        <div className='w-full h-full fixed'>
            <g className='flex items-center'>
                <Image src={"/assets/MoriLogo_S.png"} width={50} height={20} alt='MORI'></Image>
                <div className='bg-[#D9D9D9] w-[97%] h-1 rounded-full'></div>
            </g>

            <div className='relative rounded-full h-screen w-full items-center justify-center'>
                <g className='border border-[#BF9665] w-16 h-56 rounded-full fixed left-3 top-1/2 transform -translate-y-1/2'>
                </g>
            </div>
        </div>

    )
}

export default HeaderComponent