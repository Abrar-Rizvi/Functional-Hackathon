"use client"
import Image from "next/image";
import Link from "next/link";
import { Poppins } from 'next/font/google'
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";



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
  quantity: number;
}
interface Props {
  search: string;
  filter: string
}



const Shopcards = ({ search, filter }: Props) => {
  const { products, setProducts } = useCart()
 
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  //defining useeffect hook to fetch data from sanity
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
        setProducts(products)

      } catch (error) {
        setError('Failed to fetch Data')

      } finally {
        setLoading(false);
      }
    }
    fetchDataFromSanity()
  }, [setProducts])
  console.log(products)

  if (loading) {
    return <p className="flex justify-center items-center font-bold text-4xl">Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }



  return (


    <>
      <div className='flex  gap-4 flex-col flex-wrap md:p-[30px] md:flex md:flex-row '>

        {products &&
          products.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
            .filter((item) => {
              return item.category.toLowerCase().includes(filter.toLowerCase())
            })
            .map((product: Product) => {
              return <Link
                key={product.id}
                href={`/shop/${product.id}`}>
                <div className='flex flex-col cursor-pointer md:w-[287px]
        h-[450px] bg-[#FFF9E5] hover:scale-105 duration-300 rounded-t-lg hover:shadow-2xl
        mt-5
        '>
                  <div className="h-[70%] rounded-t-lg overflow-hidden">
                    <Image
                      src={product.imagePath} alt='top-pic' width={300} height={300}
                      className="w-full h-full object-cover hover:scale-105 duration-300 rounded-t-lg"

                    />
                  </div>

                  <div className={`${poppins.className} p-5 text-center`}>
                    <p className='md:text-[20px] font-bold'>{product.name}</p>

                    <p className='md:text-[16px] '>{`RS. ${product.price}`}</p>



                    <p>{`Stock ${product.stockLevel}`}</p>
                  </div>

                </div>
              </Link>

            })}
      </div>



      <div className="flex justify-center mt-[50px] gap-10 items-center">
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">1</div>
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
        <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
        <div className="w-[78px] md:w-[98px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">Next</div>
      </div>
    </>
  )
}

export default Shopcards



















