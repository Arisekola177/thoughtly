'use client'
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose, MdPhone, MdPlayArrow, MdSupportAgent } from "react-icons/md";
import people from '../../../public/images/download.jpg'
import people1 from '../../../public/images/people-01.png'
import people2 from '../../../public/images/people-02.png'
import people3 from '../../../public/images/people-03.png'
import insurance from '../../../public/images/insurance.webp'
import Image from "next/image";
import { IoMdBriefcase } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";

const HomeBanner = () => {


    const [open, setOpen] = useState<boolean>(false)

    const handleNav = () => {
        setOpen(!open)
    }

  return (
    <div className="w-full relative">
       {open && (
       <div className="fixed inset-0 z-40 bg-white bg-opacity-50 backdrop-blur-md transition-opacity duration-500"></div> )}

          <div className="md:w-10/12 mx-auto">
           <div className="flex items-center justify-between py-4">
            <h1 className="font-semibold text-xl">Thoughtly</h1>
            <div className="flex items-center gap-4">
                <div className="hidden md:block bg-gradient-to-r from-[#6fd870] to-[#4fbf50]  rounded-md py-2 px-20 text-sm">
                  <button className="font-semibold">Book a Demo</button>
                </div>
                <div onClick={handleNav} className="bg-white shadow-lg rounded-md py-2 px-4 cursor-pointer z-50 relative">
              {open ? (
                <MdOutlineClose className="text-lg" />
              ) : (
                <LuMenu className="text-lg" />
              )}

              {/* Menu Drawer */}
              <div
                className={`fixed z-50 top-20 left-0 xs:w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto bg-white shadow-lg rounded-lg transition-all duration-500 ease-in-out py-4 ${
                  open ? 'right-0' : 'right-[-20000px]'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center border-b-[1px] border-gray-300 py-6 justify-between gap-8">
                    <div className="border-[1px] rounded-lg border-gray-300 flex items-center justify-center shadow-md py-3 px-5">
                      <p className="font-medium text-sm text-slate-800">Sign In</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#6fd870] to-[#4fbf50] flex rounded-md items-center justify-center py-3 px-8">
                      <p className="font-medium text-sm text-slate-800">Book a Demo</p>
                    </div>
                  </div>
                  <div className="flex border-b-[1px] border-gray-300 py-6 items-center gap-8 justify-between">
                    <div className="flex items-center gap-2">
                      <IoMdBriefcase className="text-gray-300" />
                      <p className="font-medium text-sm text-slate-800">Platform</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdSupportAgent className="text-gray-300" />
                      <p className="font-medium text-sm text-slate-800">Agent Accelerator</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 border-b-[1px] border-gray-300 py-2">
                    <h4 className="text-gray-300 mt-0 text-xs">COMPANY</h4>
                    <div className="flex items-center gap-32 justify-between">
                      <div className="flex items-center gap-2">
                        <FaBlog className="text-gray-300" />
                        <p className="font-medium text-sm text-slate-800">Blog</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-gray-300" />
                        <p className="font-medium text-sm text-slate-800">Careers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdPhone className="text-gray-300" />
                      <p className="font-medium text-sm text-slate-800">Contact</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 py-2">
                    <h4 className="text-gray-300 mt-0 text-xs">FEATURED</h4>
                    <div className="rounded-md w-[250px] h-[200px] mx-auto">
                      <Image src={insurance} alt="insurance" className="rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            
            
           <div className="grid xs:grid-cols-1 md:grid-cols-6 xs:mt-10 md:mt-24">
           <div className="md:col-span-4 flex flex-col xs:text-center md:text-start gap-3 ">
              <h1 className="xl:text-8xl xs:text-2xl sm:text-4xl lg:text-6xl font-semibold text-slate-800">Your phone <br /> calls, handled <br /> beautifully.</h1>
              <p className="md:w-[350px] w-full xs:text-xs sm:text-sm md:text-lg text-slate-500">Thoughtly helps businesses build and deploy human-like AI voice agents in just 17 minutes. Welcome to the future of calling.</p>
              <div className="bg-white w-full md:w-[350px] xs:mt-6 md:mt-0 rounded-md flex items-center">
              <input placeholder="What is your work email?" type="text" className="text-xs w-full p-2 outline-none" />
              <div className="bg-gradient-to-r from-[#6fd870] to-[#4fbf50] sm:w-1/2 xs:w-3/4 text-center shadow-lg rounded-md">
              <button className='sm:py-3 xs:p-2 sm:px-2 font-semibold text-xs '>Get Started</button>
              </div>
 
           </div>
           </div>
           <div className="md:col-span-2 xs:mt-10 sm:gap-0 sm:mt-24 md:mt-0 sm:grid sm:grid-cols-3 items-end justify-end">
           <div className="sm:col-span-2 md:col-span-3 flex xs:items-center xs:justify-center md:items-end md:justify-end">
            <div className="bg-white rounded-md shadow-md flex gap-4 justify-between p-2">
                <div className="xs:w-[80px] sm:w-[100px] h-auto">
                <Image src={people} alt="people" width={150} height={150} className="rounded-md"  />
                </div>
                <div className="flex flex-col gap-2 mt-2 items-center">
                  <div className="bg-green-500 rounded-full xs:p-1 xs:mb-2 sml:p-3 sml:mb-4" >
                  <MdPhone className="text-white xs:text-[8px] lg:text-xl" />
                  </div>
                    
                     <p className="xl:text-xl xs:text-[8px] md:text-[8px] lg:text-sm sml:text-sm font-semibold">+1(855) 717-0250</p>
                     <p className="text-slate-500 uppercase xs:text-[8px] sml:text-[10px] lg:text-xs">Incoming call</p>
                   
                </div>
            </div>

           </div>
           <div className="col-span-1 w-full h-[100px] flex items-end justify-end xs:hidden sm:block md:hidden">
           <div className='py-4  bg-white w-full h-full rounded-md shadow-lg flex items-center justify-center relative'>
                 <div className="absolute inset-0 flex items-center justify-center xs:w-[30px] h-auto mx-auto ">
                  <Image src={people3} alt="people" width={40} height={40} className="animate-fadeIn" />
                   </div>
                  <div className="absolute inset-0 flex items-center justify-center xs:w-[30px] h-auto mx-auto">
                   <Image src={people1} alt="people" width={40} height={40} className="animate-fadeIn" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center xs:w-[30px] h-auto mx-auto ">
                   <Image src={people2} alt="people" width={40} height={40} className="animate-fadeIn" />
                    </div>
            </div>
           </div>
           </div>
       </div>

   
      
         </div>
    </div>
  )
}

export default HomeBanner


