import React from 'react'
import { FiHeart, FiSearch, FiUserCheck } from 'react-icons/fi'
import { LuShoppingCart } from 'react-icons/lu'
import { useRouter } from 'next/navigation'

const HeaderIcon = () => {
    const router = useRouter()
  return (
    <>
    <div className="design-cart flex gap-5 p-[36px] ">
    <FiUserCheck onClick={() => router.push('/my-page')}
        className="cursor-pointer"
    />
    <FiSearch className="cursor-pointer" />
    <FiHeart className="cursor-pointer" 
    onClick={() => router.push('/favorite')}
    />
    <LuShoppingCart className="cursor-pointer"
        onClick={() => router.push('/cart')}
    />
</div>
</>
  )
}

export default HeaderIcon