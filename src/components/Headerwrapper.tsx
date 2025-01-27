"use client"

import { usePathname } from "next/navigation";
import Header from "./Header";
import { useState } from "react";

const Headerwrapper = () => {

    const pathname = usePathname(); // Get the current pathname
    const isHomePage = pathname === '/'; // Check if it's the home page
     const [isOpenCart, setIsOpenCart] = useState(false);
    const handleCart = () => {
        setIsOpenCart(!isOpenCart)
      }
  
   
  return (
    <div>
        <>
        <Header isHomePage={isHomePage} onclick={handleCart} />
        </>
    </div>
  )
}

export default Headerwrapper