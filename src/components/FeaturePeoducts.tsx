"use client"
import Image from 'next/image';
import { Poppins } from 'next/font/google'
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: "400",
    display: "swap"

  }
)

const FeaturePeoducts = () => {
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
  const [featureProducts, setFeatureProducts] = useState<Product[] | null>(null)
  const [error, setError] = useState('')

  //Fetched data from sanity by using GROQ

  useEffect(() => {

    const fetchDataFromSanity = async () => {
      try {
        const products: Product[] = await client.fetch(`*[_type == "product" ]{
           id,
      name,
      imagePath,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
      }`)
        setFeatureProducts(products)

      } catch (error) {
        setError('Failed to fetch Data')

      }
    }
    fetchDataFromSanity()
  }, [])

 

  return (
    <div className='main-container py-[50px] px-4 md:px-8'>
      <div className={`heading-para font-medium  text-center ${poppins.className}`} >
        <h2 className={`text-[28px] md:text-[36px] md:m-[10px]`}>Top Picks For You</h2>
        <p className='text-[14px] md:text-[16px] lg:text-[18px] text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
      </div>

      (
      <div className='main-container py-[50px] px-4 md:px-8'>
        <div className={`heading-para font-medium text-center ${poppins.className}`}>
          <h2 className='text-[28px] md:text-[36px] md:m-[10px]'>Top Picks For You</h2>
          <p className='text-[14px] md:text-[16px] lg:text-[18px] text-[#9F9F9F]'>
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
        {error ? (
          <div className='text-center text-red-500'>{error}</div>
        ) : (
          <div className='flex flex-col gap-4 justify-center flex-wrap md:p-[30px] md:flex-row'>
            {featureProducts &&
              featureProducts.map((product: Product) => (
                <Link key={product.id} href="/shop">
                  <div className='flex flex-col bg-[#faf4f4] h-[400px] md:w-[300px] items-center cursor-pointer'>
                    <div className='h-[75%] w-[90%] overflow-hidden rounded-t-lg'>
                      <Image
                        src={product.imagePath}
                        alt='top-pic'
                        width={300}
                        height={300}
                        className='w-full h-full object-cover hover:scale-105 duration-300 rounded-t-lg'
                      />
                    </div>
                    <div className={`${poppins.className} text-center pt-5`}>
                      <p className='md:text-[16px] font-normal'>{product.name}</p>
                      <p className='md:text-[24px] font-bold'>RS. {product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}

      
        <div className=' mx-auto mt-[30px] border-b-2 border-b-[#000000]  pb-[6px] w-[115px] h-[49px]  
      flex justify-center items-center
      '>
          <Link href="/shop" className={`${poppins.className} text-20px font-semibold`}>View More</Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturePeoducts