"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'



const Heroshop = () => {
  const pathName = usePathname()

  
  return (
   
    <div className="md:h-[313px] bg-[url('/Rectangle-shop.png')] bg-cover bg-center
    flex justify-center items-center
    ">
      <div className=''>
        <Image src="/ractangle-shop2.png" alt='image' width={200} height={200} 
        className='w-[100px] h-[112px]'
        />
       {pathName === '/shop' && (
        <p><span className='font-bold'>Home {'>'}</span>  shop</p>
       )}


      </div>

    </div>
  )
}

export default Heroshop