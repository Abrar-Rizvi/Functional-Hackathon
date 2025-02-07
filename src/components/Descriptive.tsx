import Link from "next/link"
import { Poppins } from 'next/font/google'
import Image from "next/image";

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: "400",
    display: "swap"

  }
)
interface Product {
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}
interface DescriptiveProps {
  pics: string;
  relatedProData: Product[];
}


const Descriptive = ({ pics, relatedProData }: DescriptiveProps) => {


  return (
    <div className={`main-container ${poppins.className} `}>
      {/* for nevigating links */}
      <div className="mt-[30px] flex justify-center items-center gap-10 mb-[40px]">
        <Link href={''} className="md:text-[24px]">Description</Link>
        <Link href={''} className="md:text-[24px] text-[#9F9F9F]">Additional Information</Link>
        <Link href={''} className="md:text-[24px] text-[#9F9F9F]">Reviews [5]</Link>
      </div>
      {/* paragraph */}
      <div className="para text-left px-[10px] sm:px-[30px] lg:px-[150px] text-[#9F9F9F]">
        <p className="mb-[20px] ">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className="mb-[30px]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>
      <div className=" flex flex-col items-center sm:flex sm:flex-row sm:justify-around sm:items-center px-[30px] space-y-4  lg:space-y-0">
        <Image src={pics} alt="image" width={300} height={300} className=" sm:w-[30%] sm:h-[150px] md:w-[40%]
         md-[350px] lg:w-[45%] lg:h-[300px] object-contain lg:object-cover" />

        <Image src={pics} alt="image" width={300} height={300} className=" sm:w-[30%] sm:h-[150px] md:w-[40%] 
        md-[350px] lg:w-[45%] lg:h-[300px] object-contain lg:object-cover"/>
      </div>

      <div className='main-container py-[50px]'>
        <div className={`heading-para font-medium  text-center ${poppins.className}`} >
          <h2 className={` text-[36px] m-[10px] `}>Related Products</h2>

        </div>
        <div className='flex flex-col items-center justify-center  md:p-[30px] md:flex md:flex-row  space-y-7 md:space-y-0 md:space-x-7  '>
          {relatedProData.map((pic: Product) => {
            return <Link key={pic.id} href="/shop" >
              <div className='w-full px-[30px] md:px-0 md:w-[200px] md:h-[300px] flex   flex-col justify-center items-center cursor-pointer transform transition-transform duration-300 hover:scale-110'>
                <Image
                  src={pic.imagePath} alt='top-pic' width={600} height={600}
                  className="w-full h-[70%] object-cover"

                />
                <div className={`${poppins.className} text-center`}>
                  <p className='md:text-[16px] font-normal'>{pic.description}</p>
                  <p className='md:text-[24px] '>RS. {pic.price}</p>
                </div>

              </div>
            </Link>

          })}
        </div>
        <div className=' mx-auto mt-[30px] border-b-2 border-b-[#000000]  pb-[6px] w-[115px] h-[49px]  
      flex justify-center items-center
      '>
          <Link href="/shop" className={`${poppins.className} text-20px font-semibold`}>View More</Link>
        </div>
      </div>
    </div>
  )
}

export default Descriptive