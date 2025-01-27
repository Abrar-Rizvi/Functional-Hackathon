"use client"
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/navigation'

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: "400",
    display: "swap"

  }
)

const Follow = () => {
  const router = useRouter()
  // console.log(router)
  return (
    <div className={`${poppins.className} relativ mt-[10px] h-[450px]  flex justify-center items-center
    bg-[url('/instagram-sec.png')] bg-cover bg-center
    `}>

      <div className='text-center'>
       
       <h1 className='text-[40px] md:text-[60px] font-bold mb-[3px]'>Our Instagram</h1>
        <p className='text-[15px] md:text-[20px] font-normal mb-[6px]'>Follow our store on Instagram</p>
        <button onClick={() => router.push('https://www.instagram.com/m.abrar.rizvi/')}
          className='bg-[rgba(250,244,244,0.5)] w-[255px] h-[64px] shadow-lg hover:shadow-xl rounded-full'>
          Follow Us
        </button>
       </div>
  

    </div>
  )
}

export default Follow
