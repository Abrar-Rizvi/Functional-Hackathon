import Contact from "@/components/Contact"
import Policy from "@/components/Policy"
import AllBaners from "@/components/AllBaners"


const Contactpage = () => {
  return (
    <div>
       <AllBaners expectedPath='/contact' src='/contact-rectangle.png' span='Home' p='Contact'
          width='180' height='170'
          />
        <Contact />
        <Policy />
    </div>
  )
}

export default Contactpage