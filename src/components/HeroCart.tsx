"use client"
import React from 'react'
import Image from 'next/image'
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "@/context/CartContext";
import CartTotal from './CartTotal';



const HeroCart = () => {

  const { addToCart, removeFromCart, cart } = useCart();
  console.log(addToCart)
  console.log("Cart Items:", cart.length);
  return (

    <div className='px-16 py-12 flex justify-between '>
      {/* product details section starting..........................................................*/}
      <div className='max-w-[65%] h-[350px] w-full '>
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
      </div>

      {/* bottom part of products detailending.................................. */}


      <CartTotal />
    </div>
  )
}

export default HeroCart