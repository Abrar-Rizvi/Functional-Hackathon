import Button from "./Button"
import { Poppins } from 'next/font/google'
import Policy from "./Policy"

const poppins = Poppins(
  {
    subsets: ['latin'],
    weight: "400",
    display: "swap"

  }
)



const Account = () => {
  return (
    <div>
      <div>

        <div className={`${poppins.className}w-full mx-auto text-left 
          p-[50px] flex flex-col`}>
          <form action="" className=" w-full  p-[50px] flex flex-col lg:flex lg:flex-row lg:justify-between
          
          ">
            <div className="left  lg:max-w-[45%] w-full">
              {/* Login part */}
              <h2 className="text-[36px] font-semibold">Login</h2>

              <div className="margin">
                <label htmlFor="name">Username or email address</label> <br />
                <input type="text" id="name" className="w-full lg:max-w-[600px]" />
              </div>




              <div className="margin">
                <label htmlFor="email">Password</label>  <br />
                <input type="password" id="email"
                  className=" lg:max-w-[600px] h-auto  w-full"
                /></div>

              <div className="margin">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="ml-[20px]">Remember Me</label>
              </div>


              <Button content="Log In"
                classname="w-[180px] h-[55px] flex justify-center items-center border-1 border-black rounded-[15px] text-[18px] cursor-pointer" />

            </div>
            <div className="right  mt-[50px] lg:mt-0 lg:max-w-[45%] w-full">
              <h2 className="text-[36px] font-semibold">Register</h2>

              <div className="margin">
                <label htmlFor="name">Email address</label> <br />
                <input type="text" id="name"
                  className="lg:max-w-[600px] h-auto  w-full" />
              </div>


              <div className="margin max-w-[600px]  text-[16px]">
                <p className="mb-[3px]">A link to set a new password will be sent to your email address.</p>
                <p className="margin">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy.</span></p>
              </div>

              <Button content="Register"
                classname="w-[180px] h-[55px] flex justify-center items-center rounded-[15px]
                 text-[18px] mt-5 border-1 border-black cursor-pointer"  />
            </div>
          </form>

          <Policy />
        </div>

      </div>
    </div>
  )
}

export default Account




















