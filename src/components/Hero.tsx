import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'

const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"
      
      }
)

const Hero = () => {
    const image = '/hero.png'
   
  return (
    <div className=' bg-[#FBEBB5] text-heroTextColor flex flex-col-reverse justify-center items-center md:flex md:flex-row md-justify-center md:items-center
    px-[30px]  pb-[50px] md:pb-[0px]
    '>
        <div className="text px-8 md:pl-[70px]">
            <h1 className={`${poppins.className} text-[38px] md:text-[64px] md:font-medium `}>Rocket single seater</h1>
            <Link href="#" className='underline leading-[13px]'>Shop Now</Link>
        </div>
        <div className="sofa md:w-[800px] md:h-[600px] leading-[35px]  ">
            <Image src={image} alt='hero-image' width={300} height={300} 
            className='w-full h-full object-cover object-center '
            />
        </div>
    </div>
  )
}

export default Hero