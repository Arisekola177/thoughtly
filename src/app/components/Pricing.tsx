import { MdDeliveryDining, MdGppGood } from "react-icons/md"


const Pricing = () => {
  return (
    <div className="w-full">
         <div className="md:w-10/12 mx-auto w-full flex flex-col items-center justify-center gap-3 xs:mt-10 md:mt-32">
               <h2 className="lg:text-5xl md:text-3xl xs:text-xl sm:text-2xl sml:text-3xl text-slate-800 font-medium text-center xs:mr-0 md:mr-52">Sounds like a <span className="text-green-500">human,</span> <br /> scales like a <span className="text-green-500">machine.</span></h2>
               <div className="flex flex-col">
                    <p className="text-slate-500 text-center xs:text-[8px] w-full md:w-[300px] sm:text-[14px] sml:text-sm">10¢ per minute of your Thoughtly Agent talking on  the phone. No hidden vendor fees, just one simple price.</p>
                    <div className="bg-white w-full sml:w-[350px] border-[1px] p-1 border-gray-300 rounded-md flex items-center mt-4">
              <input placeholder="What is your work email?" type="text" className="text-xs w-full p-2 outline-none" />
              <div className="bg-gradient-to-r from-[#6fd870] to-[#4fbf50] w-1/2 text-center shadow-lg rounded-md">
              <button className='py-3 px-2 font-semibold xs:text-[8px] sm:text-xs '>Get Started</button>
              </div>
             </div>
               </div>
              <div className="bg-white shadow-md rounded-2xl w-full md:w-[500px] mt-10 flex flex-col xs:px-2 sml:px-4 py-5 gap-6">
                  <div className="flex items-center justify-between" >
                      <div className="flex flex-col gap-2">
                        <h3 className="sml:text-lg xs:text-xs sm:text-[14px] md:text-xl font-semibold">Free</h3>
                        <p className="text-slate-500 xs:text-[10px] sm:text-[14px] sml:text-xs md:text-sm">Get started building Thoughtly <br /> agents for free.</p>
                      </div>
                      <div className="border-[1px] border-gray-300 rounded-lg xs:p-1 flex items-center justify-center  sm:py-2 sm:px-3">
                        <button className=" xs:text-[8px] sml:text-xs font-medium">
                            Get Started
                        </button>
                      </div>
                  </div>
                  <h2 className="font-medium xs:text-xl sml:text-3xl mt-5">Free<span className="text-xs text-slate-500">/mo</span></h2>
                  <hr />
                  <div className="flex  items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md xs:p-1 sm:py-2 sm:px-3 shadow-md">
                        <MdGppGood className="text-green-500" />
                        <p className="sm:text-xs xs:text-[8px] text-slate-500">10 minutes per month</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md xs:p-1 sm:py-2 sm:px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className=" sm:text-xs xs:text-[8px] text-slate-500">Great for testing</p>
                    </div>
                  </div>
              </div>
              <div className="bg-white shadow-md rounded-2xl w-full md:w-[500px] mt-5 flex flex-col px-4 py-5 gap-6">
                  <div className="flex items-center justify-between" >
                      <div className="flex flex-col gap-2">
                        <h3 className="sml:text-lg md:text-xl xs:text-xs sm:text-[14px] font-semibold">Starter Plan</h3>
                        <p className="text-slate-500 xs:text-[10px] sm:text-[14px] md:text-sm sml:text-xs">Find a plan that fits your needs and  <br /> budget.</p>
                      </div>
                      <div className="border-[1px] border-gray-300 rounded-lg xs:p-1 flex items-center justify-center  sm:py-2 sm:px-3">
                        <button className="xs:text-[8px] sml:text-xs font-medium">
                            Get Started
                        </button>
                      </div>
                  </div>
                  <div>
                  <h2 className="font-medium xs:text-2xl sml:text-3xl xs:mt-3 sml:mt-5">$30<span className="text-xs text-slate-500">/mo</span></h2>
                 
                  </div>
                  <div className="flex justify-between items-center">
                  <p className="uppercase text-slate-500 xs:text-[10px] sml:text-xs mt-2">minutes per month</p>
                  <p className="uppercase text-black xs:text-[10px] sml:text-xs mt-2">0</p>
                  </div>
                  
                  <div className="h-[13px] bg-gray-200 border-[1px] border-gray-300 rounded-md">
                    <p className="bg-green-400 rounded-full w-3 h-3 flex items-start justify-start" />
                   </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                        <MdGppGood className="text-green-500" />
                        <p className="sml:text-xs xs:text-[8px] text-slate-500">Industry-leading agent builder</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Inbound calling</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Outbound calling</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Genius knowledge database</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">No hidden vendor fees</p>
                    </div>
                  </div>
              </div>
              <div className="bg-white shadow-md rounded-2xl w-full md:w-[500px] mt-5 flex flex-col px-4 py-5 gap-6">
                  <div className="flex items-center justify-between" >
                      <div className="flex flex-col gap-2">
                        <h3 className="sml:text-lg md:text-xl xs:text-xs sm:text-[14px] font-semibold">Enterprise</h3>
                        <p className="text-slate-500 xs:text-[10px] sm:text-[14px] md:text-sm sml:text-xs">Human-like automation for high-  <br /> volume contact centers.</p>
                      </div>
                      <div className="border-[1px] border-gray-300 rounded-lg xs:p-1 flex items-center justify-center  sm:py-2 sm:px-3">
                        <button className="xs:text-[8px] sml:text-xs font-medium">
                            Book a Demo
                        </button>
                      </div>
                  </div>
                  <div>
                  <h2 className="font-medium xs:text-2xl sml:text-3xl xs:mt-3 sml:mt-5">Talk to us</h2>
             
                  </div>
                
                  <hr  />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                        <MdGppGood className="text-green-500" />
                        <p className="sml:text-xs xs:text-[8px] text-slate-500">Industry-leading agent builder</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Inbound calling</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Outbound calling</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Genius knowledge database</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Whitelabel support</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Executive coaching</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Managed services</p>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-md py-2 px-3 shadow-md">
                    <MdGppGood className="text-green-500" />
                    <p className="sml:text-xs xs:text-[8px] text-slate-500">Priority support</p>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Pricing