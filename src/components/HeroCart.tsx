"use client"
import React from 'react'
import Image from 'next/image'
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "@/context/CartContext";
import CartTotal from './CartTotal';
import Button from './Button';
import { useRouter } from 'next/navigation';





const HeroCart = () => {

  const {  removeFromCart, cart, clearCart  } = useCart();
  console.log(clearCart )
  console.log("Cart Items:", cart.length);
  const router = useRouter();
  
  return (
    <div>
      {cart.length === 0 ? ( 
        <div className='h-screen flex justify-center items-center '>
         <div className='flex flex-col justify-center items-center space-y-2'>
         <h2 className='font-bold text-3xl md:text-4xl text-[#b99236]'>No items in your cart</h2>
          <p className='text-[18px] md:text-xl'>No items have been added to your cart so far.</p>
          <Button content={'Continue Shopping'} classname={'text-2xl text-white rounded-lg px-12 py-3  bg-[#b99236]'} 
          onClick={() => router.push('/shop')}
          />
         </div>
        </div>
      ) : (
        <div className='px-16 py-12 flex justify-between '>
        {/* product details section starting..........................................................*/}
        <div className='max-w-[65%] pb-14  w-full  relative'>
          <div className='h-[50px] bg-[#FFF9E5] flex items-center justify-center'>
            <ul className='flex gap-20 font-bold'>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
  
          </div>
          {/* product details section ending.......................................................... */}
  
  
  
          {/* bottom part of products detail starting.................................. */}
          {cart.map((item) => {
            return <div key={item.id} className='flex justify-between items-center relative mt-[40px] '>
              <div className="w-[100px]  bg-[#FBEBB5] rounded-lg ">
                <Image src={item.imagePath} alt="cart-items-image" width={200} height={200}
                  className="w-full h-full object-cover "
                />
              </div>
  
  
              <h1 className="font-semibold text-[16px] relative -left-7">{item.name}</h1>
              <p> <span className="text-[#B88E2F] relative -left-[47px]">{item.price}</span></p>
              <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center
          relative -left-[50px]
          '>{item.quantity}</div>
              <p className='relative -left-5'>{item.price * item.quantity}</p>
              <AiFillDelete className='w-10 h-10 text-[#FBEBB5] relative -left-8 cursor-pointer'
                onClick={() => removeFromCart(
                  item.id
                )}
              />
              
            </div>
          })}
          <Button content={'Clear'} classname={'px-6 rounded-md py-2 bg-[#FBEBB5] absolute bottom-0 right-0 mb-4 mr-4'}
          onClick={() => clearCart()}
          />
        </div>
       
      
  
        {/* bottom part of products detailending.................................. */}
  
  
        <CartTotal />
      </div>
      )}
    </div>

    // <div className='px-16 py-12 flex justify-between bg-yellow-500'>
    //   {/* product details section starting..........................................................*/}
    //   <div className='max-w-[65%]  w-full bg-blue-600'>
    //     <div className='h-[50px] bg-[#FFF9E5] flex items-center justify-center'>
    //       <ul className='flex gap-20 font-bold'>
    //         <li>Product</li>
    //         <li>Price</li>
    //         <li>Quantity</li>
    //         <li>Subtotal</li>
    //       </ul>

    //     </div>
    //     {/* product details section ending.......................................................... */}



    //     {/* bottom part of products detail starting.................................. */}
    //     {cart.map((item) => {
    //       return <div key={item.id} className='flex justify-between items-center relative mt-[40px] '>
    //         <div className="w-[100px]  bg-[#FBEBB5] rounded-lg ">
    //           <Image src={item.imagePath} alt="cart-items-image" width={200} height={200}
    //             className="w-full h-full object-cover "
    //           />
    //         </div>


    //         <h1 className="font-semibold text-[16px] relative -left-7">{item.name}</h1>
    //         <p> <span className="text-[#B88E2F] relative -left-[47px]">{item.price}</span></p>
    //         <div className='w-[50px] h-[50px] rounded-lg flex justify-center items-center
    //     relative -left-[50px]
    //     '>{item.quantity}</div>
    //         <p className='relative -left-5'>{item.price * item.quantity}</p>
    //         <AiFillDelete className='w-10 h-10 text-[#FBEBB5] relative -left-8 cursor-pointer'
    //           onClick={() => removeFromCart(
    //             item.id
    //           )}
    //         />
            
    //       </div>
    //     })}
    //     <Button content={'Clear'} classname={'px-4 py-2 bg-[#FBEBB5] '}
    //     onClick={() => clearCart()}
    //     />
    //   </div>
     
    

    //   {/* bottom part of products detailending.................................. */}


    //   <CartTotal />
    // </div>
  )
}

export default HeroCart