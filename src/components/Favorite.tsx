"use client"
import { useCart } from '@/context/CartContext'
import React from 'react'
import Button from './Button';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

const Favorite = () => {
  const router = useRouter()
  const { favourite, addToCart } = useCart();

  return (
    <div>
      {favourite.length === 0 ? (
        <div className='h-screen flex flex-col justify-center items-center'>
          <h1 className='font-bold text-4xl text-blue-500'>Your Wishlist is Empty</h1>
          <Button content={'Continue Shopping'} classname={'bg-blue-500 text-white px-28 py-3 mt-3 curs'}
            onClick={() => router.push('/shop')}
          />
        </div>
      ) : (
        <div className=' flex gap-5 px-5 md:px-10 py-5 flex-wrap '>
          {favourite.map((item) => {
            return <div key={item.id} className='w-full md:w-[20%] space-y-2 py-4 flex flex-col items-center shadow-lg transition-shadow duration-300 hover:shadow-2xl'>
              <div className='h-[70%] rounded-t-lg'>
                <Image
                  src={item.imagePath}
                  alt='favorite-image'
                  width={600}
                  height={600}
                  className='w-full h-full object-cover' />
              </div>
              <h2 className='text-center'>{item.name}</h2>
              <p className='text-center text-2xl'>Rs. {item.price}</p>
              <button
                className=" text-black w-[120px] py-1  shadow-md hover:bg-[#9f9f9f] hover:text-white transition duration-300"
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    imagePath: item.imagePath,
                    price: item.price,
                    quantity: 1,
                  })
                }
              >
                Add To Cart
              </button>


            </div>
          })}
        </div>
      )}

    </div>
  )
}

export default Favorite