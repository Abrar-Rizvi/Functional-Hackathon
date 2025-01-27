import Link from "next/link";


const Footer = () => {


    return (
        <>
            <div className='md:h-[330px]  pt-[10px] pb-[60px] px-[70px] md:px-[20px]
         
        '>

                <div className=" w-full h-full  pb-[10px] lg:px-20
             md:flex md:flex-row md:justify-between  border-b-2 border-b-[#D9D9D9]
            ">
                    <div className=" text-[#9F9F9F] pt-[70px]  md:max-w-[200px] md:w-full 
                
                ">400 University Drive Suite 200 Coral <br />
                        Gables, <br />
                        FL 33134 USA</div>
                    <div className="">
                        <h3 className="text-[#9F9F9F] pt-[30px]">Links</h3>
                        <ul className="md:h-[312] space-y-5 text-[16px] font-medium pt-[10px]">

                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">Shop</Link>
                            </li>
                            <li>
                                <Link href="/">About</Link>
                            </li>
                            <li>
                                <Link href="/">Contact</Link>
                            </li>


                        </ul>
                    </div>
                    <div className=" md:h-[242px]  ">
                        <h3 className="text-[#9F9F9F] pt-[30px]">Help</h3>
                        <ul className="space-y-5 text-[16px] font-medium  pt-[10px]">
                            <li>
                                <Link href="/">Payment Options</Link>
                            </li>

                            <li>
                                <Link href="/">Returns</Link>
                            </li>

                            <li>
                                <Link href="/">Privacy Policies</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" md:h-[101px] mt-[40px]">
                        <h3 className="text-[#9F9F9F]  ">Newsletter</h3>
                        <div className="flex flex-col items-start justify-center lg:flex-row  mt-[20px]  ">
                            <label htmlFor="email"></label>
                            <input type="text" id="email" placeholder="Enter Your Email Address"
                                className="focus:outline-none border-1 border-b border-[#000000]
                                transition duration-300
                                
                                "/>

                            <Link href="/" className="text-[#000000] border-b-2 lg:ml-[25px] py-[15px]  border-b-[#000000]  ">SUBSCRIBE</Link>
                        </div>
                    </div>
                </div>
                <div className="px-[40px] pt-[20px]">
                    <p className="text-[12px]   md:text-[16px]  ">2022 Meubel House. All rights reverved</p>
                </div>
            </div>


        </>
    )
}

export default Footer