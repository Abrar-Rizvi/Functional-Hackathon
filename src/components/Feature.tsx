import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins(
  {
      subsets: ['latin'],
      weight: "400",
      display: "swap"
    
    }
)

const Feature = () => {
  interface Features {
    name: string;
    href: string;
    id: number;
    src: string;
    secondName: string
  }
  const img1 = "/feature-1.png"
  const img2 = "/feature-2.png"
  const featureItem: Features[] = [
    {
      name: "Side table",
      secondName: "View More",
      href: "/shop",
       src: img1,
      id: 1
      
    },
    {
      name: "Side table",
      secondName: "View More",
      href: "/shop",
      src: img2,
      id: 2
    }
  ]


  return (
    <div className='bg-[#FAF4F4] md:flex md:flex-row-reverse md:justify-around md:pt-[50px]'>
      {featureItem.map((item) => {
        return <div key={item.id} className="relative">
          <div className=" h-[80%] flex justify-center items-center"> 
          <Image src={item.src} alt="feature-image" width={300} height={300} 
          className="w-full h-full object-cover object-center"
          />
          </div>
         <div className=" text-left   absolute top-[70%] left-[10%] md:top-[60%] md:left-[7%]">
         <h4 className={`${poppins.className} text-[25px] font-medium`}>{item.name}</h4>
          <Link href={item.href}
          className="underline "
          >{item.secondName}</Link>
         </div>

        </div>
      })}
    </div>
  )
}


export default Feature