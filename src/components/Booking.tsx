import Image from "next/image"

import { Poppins } from 'next/font/google'
const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: "400",
    display: "swap"

  }
)




const Booking = () => {

  return (
    <div className={`${poppins.className} main-container py-[50px] bg-[#FBEBB5] text-[#000000] flex flex-col justify-center item center
    md:flex md:flex-row md:justify-between md:items-center`}

    >
      <div className='   center md:w-[70%] flex 
      justify-between items-center
      '>
        <Image src="/Asgaard-sofa.png" alt="booking img" width={300} height={300}
          className="w-full h-full"
        />
      </div>
      <div className=" md:w-[30%]  text-center px-[20px] ">
        <p className="md:text-[24px] text-[15px] font-medium ">New Arrivals</p>
        <h1 className="font-bold text-[20px] md:text-[48px] md:mb-[20px]">Asgaard sofa</h1>

        <button className="text-[20px] font-normal mt-[15px] px-8 py-2  md:w-[255px] md:h-[64px] border-1 border-[#000000]
      transform transition-transform duration-300 hover:scale-110
      ">Order Now</button>
      </div>
    </div>
  )
}

export default Booking