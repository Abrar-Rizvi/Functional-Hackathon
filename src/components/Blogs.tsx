import { Poppins } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { LuClock5 } from "react-icons/lu";
import { AiOutlineCalendar } from "react-icons/ai";



const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: "400",
        display: "swap"

    }
)


const Blogs = () => {
    interface Blogs {
        src: string; // URL or path of the image
        description: string; // Description of the product
        link: string; // Hyperlink associated with the product
        time: string; // Time related to the product (e.g., duration, reading time)
        date: string; // Date associated with the product
        id: number;   // id for key
    }
    //creating array of object for blogs

    const blogs: Blogs[] = [
        {
            src: "/pic1.png",
            description: "Going all-in with millennial design",
            link: "#",
            time: "5 min",
            date: "12 Oct 2022",
            id: 1,


        },
        {
            src: "/pic2.png",
            description: "Going all-in with millennial design",
            link: "#",
            time: "5 min",
            date: "12 Oct 2022",
            id: 1,


        },
        {
            src: "/pic3.png",
            description: "Going all-in with millennial design",
            link: "#",
            time: "5 min",
            date: "12 Oct 2022",
            id: 1,


        },


    ]
    return (
        <div className={`${poppins.className} py-[30px] `}>
            <h2 className={` text-[36px] m-[5px] text-center`}>Our Blogs</h2>
            <p className='text-[16px] text-[#9F9F9F] mb-[20px] text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className='flex flex-col justify-center items-center md:p-[30px] md:flex md:flex-row md:justify-center md:items-center space-y-10 md:space-y-0 md:space-x-5'>
                {blogs.map((blog) => {
                    return <div key={blog.id} className=' w-[80%] md:w-[393px]'>
                        <Image src={blog.src} alt='blog-images' width={300} height={300}
                            className='mb-[20px] w-full'
                        />
                        <div className='text-center'>
                            <p className='md:text-[16px] font-normal mb-[5px]'>{blog.description}</p>
                            <div className='mb-[10px] '>
                                <Link href="/blog" className={`text-[20px] font-semibold border-b-2 border-b-[#000000]`}>Read More</Link>
                            </div>
                            <div className='icons space-x-2 flex justify-center items-center '>

                                {/* For time */}
                                <div className='flex space-x-2 items-center'>
                                    <LuClock5 />
                                    <span className='text-[16px]'>{blog.time}</span>
                                </div>

                                {/* For date */}
                                <div className='flex space-x-2 items-center'>
                                    <AiOutlineCalendar className='' />
                                    <span className='text-[16px]'>{blog.date}</span>
                                </div>



                            </div>
                        </div>
                    </div>
                })}
            </div>
            {/* link */}
            <div className=' mx-auto mt-[30px] border-b-2 border-b-[#000000]  pb-[6px] w-[115px] h-[49px]  
      flex justify-center items-center
      '>
                <Link
                    href="/blog"
                    className={`${poppins.className} text-20px font-semibold`}
                >
                    View All Post
                </Link>
            </div>
        </div>
    )
}

export default Blogs