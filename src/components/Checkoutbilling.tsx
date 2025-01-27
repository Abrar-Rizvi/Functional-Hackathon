import { Poppins } from "next/font/google"
import CheckoutDetails from "./CheckoutDetails"


const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: "400",
    display: "swap"

  }
)

const CheckoutForm = () => {
 
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:justify-center lg:gap-x-8  lg:max-w-[1000px] mx-auto py-12">
      <form className={`${poppins.className} max-w-[500px]  space-y-4  p-[50px]`}>
        <h2 className="text-[36px] font-semibold">Billing details</h2>

        {/* this div for first two input to arrang in row */}

        <div className="flex   gap-4 ">
          <div className="flex flex-col space-y-1 text-lg font-medium">
            <label htmlFor="name">First Name</label>
            <input
              type="text"

              id="name"
              className="flex-1 w-full px-4 py-3 border border-gray-300 rounded-md"
            />
          </div>


          <div className="flex flex-col space-y-1 text-lg font-medium">
            <label htmlFor="name2">Last Name</label>
            <input
              type="text"

              id="name2"
              className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* From here all inputs are child of form elements direcly */}

        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="company">Company Name (Optional)</label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>


        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="country">Country / Region</label>
          <input
            type="text"
            id="country"
            placeholder="Sri Lanka"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>


        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="address">Street address</label>
          <input
            type="text"
            id="address"

            className="w-full px-4 py-3 border border-gray-300 rounded-md " 
          />
        </div>


        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="city-town">Town / City</label>
          <input
            type="text"
            id="city-town"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>


        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="province">Province</label>
          <input
            type="text"
            placeholder="Western Province"
            id="province"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>


        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="code">Zip Code</label>
          <input
            type="text"
            id="code"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>


        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>


        <div className="flex flex-col space-y-1 text-lg font-medium">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>


     
         
          <input
            type="text"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
       
      </form>
      <CheckoutDetails />
      




    </div>
  )
}

export default CheckoutForm