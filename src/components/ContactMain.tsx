"use client"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


const ContactMain = () => {

    return (
        <>
            <div className="text-center flex flex-col justify-center items-center pt-[45px] pb-[30px] 
             px-2 sm:px-4 md:px-8">
                <h1 className=" sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold mb-1">Get In Touch With Us</h1>
                <p className="w-full lg:w-[800px] sm:text-[16px]  md:text-[18px]  lg:text-[20px] text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            {/* Address details and Form */}
            <div className="  flex flex-col-reverse lg:flex lg:flex-row lg:justify-between p-5 lg:px-[120px] lg:pt-[120px] ">
                <div className="left flex flex-col space-y-10">
                    <div className="address flex justify-start items-start">
                        <FaLocationDot />
                        <div className="ml-[20px] ">
                            <span className="text-[20px]">Address</span>
                            <p className="w-[200px]">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>

                    <div className="phone flex justify-start items-start">
                        <FaPhoneAlt />
                        <div className="ml-[20px]">
                            <span className="font-bold text-[20px]">Phone</span>
                            <p className="w-[200px]">Mobile: +(84) 546-6789
                                Hotline: +(84) 456-6789</p>
                        </div>
                    </div>

                    <div className="time flex flex-row">
                        <FaPhoneAlt />
                        <div className="ml-[20px]">
                            <span className="text-[20px]">Working Time</span>
                            <p className="w-[200px]">Monday-Friday: 9:00 - 22:00
                                Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                {/* Form */}
                <form action="" className="mb-14 ">
                    <div className="right w-full lg:w-[650px] ">

                        <div className='space-y-3 '>
                            <label htmlFor="name">Your name</label> <br />
                            <input type="text" id="name" placeholder="ABC" className='custom-placeholder w-full' /> <br />
                        </div>
                        <br />
                        <div className='space-y-3'>
                            <label htmlFor="email">Email address</label> <br />
                            <input type="text" id="email" placeholder="ABC@def.com" className='custom-placeholder w-full' /> <br />
                        </div>
                        <br />
                        <div className='space-y-3'>
                            <label htmlFor="email">Subject</label> <br />
                            <input type="text" id="email" placeholder="This is optional" className='custom-placeholder w-full' /><br />
                        </div>
                        <br />
                        <div className='space-y-3'>
                            <label htmlFor="message">Message</label><br />
                            <textarea id="message" name="message" rows={6} cols={6} placeholder="Hi! I'd like to aske about"
                                className=' custom-placeholder w-full'></textarea><br />
                        </div>
                        <div className='mt-6'>
                            <input type="submit" value="Submit" className='max-w-200px w-[200px] py-1
                            border-1 border-[#000000]
                            ' />
                        </div>
                    </div>
                </form>
            </div>
        </>













    )
}

export default ContactMain