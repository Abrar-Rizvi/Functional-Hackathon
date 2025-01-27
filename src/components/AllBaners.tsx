"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Poppins } from 'next/font/google'

const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"

    }
)

interface BreadcrumbProps
{ expectedPath: string;
   src: string;
   span: string;
   p: string;
   width: string;
   height: string
 }

const AllBaners = ({src, expectedPath, span, p, width, height}: BreadcrumbProps) => {
   
    const pathName = usePathname()
  return (
    <div className={`${poppins.className} md:h-[313px] bg-[url('/Rectangle-shop.png')] bg-cover bg-center
    flex justify-center items-center
    `}>
      <div className='flex flex-col justify-center items-center'>
        <Image src={src} alt='image' width={200} height={200} 
        className={`w-[${width}px] h-[${height}px]`}
        />
        
       
       {pathName === expectedPath  && (
        <p><span className='font-bold'>{span}  {'>'}</span>{p}</p>
       )}


      </div>

    </div>
  )
}

export default AllBaners