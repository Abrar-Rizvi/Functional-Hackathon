import AllBaners from '@/components/AllBaners'
import CheckoutForm from '@/components/Checkoutbilling'
import Policy from '@/components/Policy'
import React from 'react'

const Checkoutpage = () => {
  return (
    <div>
        <div>
            <AllBaners expectedPath='/checkout' src='/checkout.png' span='Home' p='Checkout'
          width='180' height='170' />
        </div>
       
        <CheckoutForm />
        <Policy />
       
      



    </div>
  )
}

export default Checkoutpage