import Image from "next/image"


import { TbShoppingBagX } from "react-icons/tb";

interface  Prop {
    condition: boolean
}
const ShopingCart = (props: Prop ) => {

  
    return (

        <div className={`${props.condition ? 'block' : 'hidden'} absolute right-0 top-[100px] w-[400px]  bg-white border border-gray-200 rounded-lg shadow-lg p-10 z-20`}>
           <div className="flex justify-between items-center border-b border-[#D9D9D9] pb-5">
           <h2 className="text-lg font-bold mb-2">Shopping Cart</h2>
           <TbShoppingBagX  className="w-[20px] h-[20px]"/>
           </div>
            <div className="space-y-2 mt-10">
                <div className="flex justify-between items-center ">
                  <div className="w-[100px] h-[105px] bg-[#FBEBB5] rounded-lg ">
                  <Image src="/Asgaard-sofa.png" alt="cart-items-image" width={200} height={200}
                        className="w-[100px] h-[95px]"
                    />
                  </div>
                    <div className="flex flex-col ">
                        <h1 className="font-semibold text-[16px]">Asgaard sofa</h1>
                        <p>1  X   Rs. <span className="text-[#B88E2F]">250,000.00</span> </p>
                    </div>
                    <div className="w-[20px] h-[20px] bg-[#9F9F9F] rounded-full flex justify-center items-center "><span className="text-white">x</span></div>
                   
                       
                       
                </div>
              
            </div>
            <div className="mt-56 border-t">
                <div className="flex justify-between">
                    <span>subtotal</span>
                    <span className="text-[#B88E2F]">250,000.00</span>
                </div>
            </div>
            <div className="flex justify-around">
            <button className="mt-4 w-[145px] text-[12px]  text-[#000000] border-1 border-black py-2 px-2 rounded-full hover:bg-opacity-90 transition-colors">
                view Cart
            </button>
            <button className="mt-4 w-[145px] text-[12px]  text-[#000000] border-1 border-black py-2 px-2 rounded-full hover:bg-opacity-90 transition-colors">
                Checkout
            </button>
            </div>
           
        </div>
    )
}

export default ShopingCart








