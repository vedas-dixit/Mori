"use client";
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useMoriRouter } from "@/utils/MoriRouter";
export default function LoginPage() {
  const MoriRouter = useMoriRouter();
  return (
    <div className="text-[#DEBFA1] w-screen h-screen bg-[#412E1A] bg-[url('/assets/MoriLogo_F.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="md:w-96 md:h-60 w-full h-full bg-[#412E1A]/60 backdrop-blur-xl shadow-lg rounded-3xl p-6 flex flex-col items-center justify-center">
          <div className='flex items-center justify-center gap-1'>
            <h2 className="text-4xl font-bold text-[#DEBFA1]">Sign in to</h2>
            <Image src={"/assets/MoriLogo_F.png"} width={100} height={40} alt='MORI LOGO' />
          </div>

          <div className='flex w-full items-center justify-center gap-3'>
            <button
              onClick={() => signIn('google')}
              className='px-5 py-2 border border-[#DEBFA1] hover:bg-[#EDD1D1] transition-colors rounded-full'
            >
              <Image src={"/assets/googlelogo.svg"} width={20} height={40} alt='Google Logo' />
            </button>

            <button
              onClick={() => signIn('github')}
              className='px-5 py-2 border border-[#DEBFA1] hover:bg-[#EDD1D1] transition-colors rounded-full'
            >
              <Image src={"/assets/githublogo.svg"} width={20} height={40} alt='GitHub Logo' />
            </button>

            <button
              onClick={() => signIn('facebook')}
              className='px-5 py-2 border border-[#DEBFA1] hover:bg-[#EDD1D1] transition-colors rounded-full'
            >
              <Image src={"/assets/facebooklogo.svg"} width={20} height={40} alt='Facebook Logo' />
            </button>
          </div>
        <g className='absolute bottom-2 right-2'>
          <button
            className="relative group px-5 py-1 border border-[#DEBFA1] hover:bg-[#EDD1D1] transition-all duration-200 ease-in-out rounded-full overflow-hidden items-center justify-center"
          onClick={MoriRouter.Home}
          >
            <span className="inline-block transition-transform duration-300 font-semibold group-hover:text-[#412E1A]">
              Skip
            </span>
            <span
              className="group-hover:text-[#412E1A] absolute left-full opacity-0 group-hover:left-auto group-hover:translate-x-5 group-hover:right-4 group-hover:top-1 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              <svg width="61" height="50" viewBox="0 0 61 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.9462 48.5087C34.9921 48.5551 36.4039 48.9128 38.0832 49.3033C39.7627 49.6937 41.1551 49.9542 41.1777 49.8826C41.2001 49.8107 41.3769 48.6448 41.5705 47.2916C41.9593 44.5741 42.8921 41.4025 43.8853 39.42C46.981 33.2414 52.5174 29.1592 59.2224 28.1116L60.9298 27.8448L60.9367 25.1119L60.9437 22.3789L59.3974 22.1154C49.267 20.3893 42.679 12.7947 41.4718 1.45134C41.3931 0.71063 41.2982 0.104711 41.261 0.104617C40.9192 0.103747 35.2521 1.45425 35.1448 1.5621C35.0671 1.64009 35.123 2.33444 35.2691 3.10483C36.8862 11.6356 41.5612 18.5858 47.6433 21.5024L49.1022 22.202L19.0643 22.1801L0.0702854 22.1664L0.0562125 27.6973L19.0989 27.7803L49.0657 27.9113L47.2192 28.841C42.4289 31.2526 38.6291 35.9974 36.3824 42.3735C35.7421 44.19 34.7725 48.3325 34.9462 48.5087Z" fill="white" />
              </svg>
            </span>
          </button>
          </g>
        </div>

      </div>
    </div>
  );
}