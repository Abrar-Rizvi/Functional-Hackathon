"use client"
import { useCart } from '@/context/CartContext'
import React from 'react'
import Button from './Button';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

const Favorite = () => {
    const router = useRouter()
    const {favourite, addToCart} = useCart();
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
            <div className=' flex gap-5  '>
{favourite.map((item) => {
return <div key={item.id} className='w-full md:w-[20%] h-[400px] bg-blue-500'>
 <div className='h-[70%] rounded-t-lg'>
 <Image 
  src={item.imagePath} 
  alt='favorite-image'
  width={600}
  height={600}
  className='w-full h-full object-cover' />
 </div>
 <p className='text-center text-2xl'>Rs. {item.price}</p>
 {/* <button
                  className="px-[40px] text-black py-[10px] rounded-md border-2 border-[#000000] rounded-2"
              onClick={() =>
               addToCart({
                  id: favourite.id,
                    name: product.name,
                   imagePath: product.imagePath,
                   price: product.price,
                    quantity: 1,
               })
                }
               >
               Add To Cart
               </button>  */}

      
</div>
})}
            </div>
        )}

    </div>
  )
}

export default Favorite