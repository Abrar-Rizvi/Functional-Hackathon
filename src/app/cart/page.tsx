import AllBaners from '@/components/AllBaners'
import HeroCart from '@/components/HeroCart'
import Policy from '@/components/Policy'

import React from 'react'

const Cartpage = () => {
  return (
    <div>
        <AllBaners  expectedPath='/cart' src='/cart.png' span='Home' p='Cart'
          width='180' height='170' />
          <div>
          <HeroCart />
          <Policy />
         
          </div>

    </div>

  )
}

export default Cartpage