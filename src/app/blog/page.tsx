import AllBaners from "@/components/AllBaners"
import CatogoryBlog from "@/components/CatogoryBlog"
import Istpost from "@/components/Istpost"
import Policy from "@/components/Policy";
import Recentpost from "@/components/Recentpost";
import { FiSearch } from "react-icons/fi";



const Blogpage = () => {
  return (
    <div>
      <AllBaners expectedPath='/blog' src='/blogpage.png' span='Home' p='Blog'
        width='100' height='112'
      />

      {/* main container................................................................. */}
      <div className="pt-14 px-6 flex flex-col  justify-around lg:flex-row  ">

        {/* left side for blog images and detail container*/}
        <div className="lg:max-w-[55%] w-full space-y-14  mb-16 lg:mb-0">
          <Istpost src="/pic-one.jpg" span="Wood" h1Text="Going all-in with millennial design" />
          <Istpost src="/pic2.jpg" span="Handmode" h1Text="Going all-in with millennial design" />
          <Istpost src="/pic3.jpg" span="Wood" h1Text="Going all-in with millennial design" />

          {/* pagination button */}
          {/* <div className=" flex justify-end">
            <div className="flex justify-center mt-[50px] gap-10 items-center">
              <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#fbebb5] flex justify-center items-center">1</div>
              <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
              <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
              <div className="w-[78px] md:w-[98px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">Next</div>
            </div>
          </div> */}
        </div>

        {/* right side */}
        <div className="lg:max-w-[30%] w-full flex flex-col ">

          <div className="flex items-center border-1 border-[#9f9f9f] rounded-lg mb-4 max-w-[350px] ">

            <input
              type="text"

              className="border-none outline-none flex-1 text-sm"
            />
            <div className="text-[#000] mr-2">
              <FiSearch />
            </div>
          </div>

          <div className=" max-w-full w-full px-[30px]">
            <CatogoryBlog />
          </div>

          <div className='space-y-10 mt-24'>
            <h2 className='font-semibold text-[20px]'>RecentPosts</h2>
            <Recentpost src="/b1.jpg" detail="Going all-in with millennial design" />
            <Recentpost src="/b2.jpg" detail="Exploring new ways of decorating" />
            <Recentpost src="/b3.jpg" detail="Modern home in Milan"/>
            <Recentpost src="/b4.jpg" detail="Going all-in with millennial design" />
            <Recentpost src="/b5.jpg" detail="Going all-in with millennial design" />

          </div>

        </div>

      </div>
      <div className=" ">
            <div className="flex justify-center mt-[50px] gap-10 items-center">
              <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#fbebb5] flex justify-center items-center">1</div>
              <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
              <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">2</div>
              <div className="w-[78px] md:w-[98px] h-[40px] md:h-[60px] bg-[#FFF9E5] flex justify-center items-center">Next</div>
            </div>
          </div>
      <Policy />

    </div>
  )
}

export default Blogpage















































