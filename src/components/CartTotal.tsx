import React from 'react'
import Button from './Button'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation';

const CartTotal = () => {

  const router = useRouter()
  const pushToNextPage = () => {
    router.push('/checkout')
  }



  const { totalPrice } = useCart()
  console.log(totalPrice)
  return (
    <div className='w-full lg:max-w-[25%]'>
    {/* <> */}
      {/* Cart total box sections starting......................................................... */}
      <div className=' w-full bg-[#FFF9E5]  '>
        <div className=' py-3 px-12 space-y-8 flex flex-col items-between'>
          <h2 className="text-[36px] font-semibold text-center">Cart Totals</h2>
          <ul className='space-y-5'>
            <div className='flex justify-between items-center '>
              <li className='font-bold'>Subtotal</li>
              <li className='text-[#9F9F9F]'>Rs. {totalPrice.toFixed(2)}</li>
            </div>

            <div className='flex justify-between items-center'>
              <li className='font-bold'>Total</li>
              <li className='text-[#B88E2F] font-bold'>Rs. {totalPrice.toFixed(2)}</li>
            </div>
          </ul>
          <div className=' flex justify-center'>
            <Button content="Check Out"
              classname="w-[180px] h-[55px] flex justify-center items-center border-1 border-black rounded-[15px] text-[18px] cursor-pointer"
              onClick={pushToNextPage}
            />
          </div>
        </div>
      </div>

      {/* Cart total box sections ending......................................................... */}
    </div>

  )
}

export default CartTotal