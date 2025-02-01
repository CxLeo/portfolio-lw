import React from 'react'
import HeroSwiper from './HeroSwiper'
import Image from 'next/image'
// import { Spotlight } from './ui/Spotlight'

function Hero() {
  return (
    <div id="home" className='pb-20 lg:pt-[210px] pt-[40px] h-screen'>
        <div className="h-screen w-full bg-white bg-dot-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        </div>

        <div className='flex relative my-10 bg-blue-40 lg:my-20 z-10 lg:flex-row flex-col-reverse justify-between'>
            <div className='flex flex-col'>            
                <div className='text-[40px] font-code font-medium'>
                    I am{' '}
                    <span className=''>
                        Leo Wang, a
                    </span>
                    <HeroSwiper/>
                </div>
                
                <p className='max-w-[50vw] text-[23px] font-semibold text-gray-600'>
                    {`Hey, it's Leo here! I'm a programmer with a passion for developing full-stack applications. I love creating websites and apps that are both dynamic and user-friendly. Based in Canada, feel free to reach out to me anytime!`}
                </p>
            </div>

           <div className=''>
                {/* {selfile} */}
                <div className="flex-1 transition duration-500 transform ease-in-out border-[6px] border-secondary lg:w-[420px] w-[62vw] rounded-full aspect-square flex jusitfy-center items-center">
                    <Image src="/selfile.jpg" alt="Leo Wang Selfile" width={5523} height={3682} className="aspect-square lg:w-[400px] w-[60vw] mx-auto rounded-full"/>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Hero