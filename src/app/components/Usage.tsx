import { MdAnalytics, MdCalendarMonth, MdCode, MdOutbound, MdPhone, MdRecentActors, MdSdCard, MdVerifiedUser } from "react-icons/md"
import people1 from '../../../public/images/people-01.png'
import people2 from '../../../public/images/people-02.png'
import people3 from '../../../public/images/people-03.png'
import map from '../../../public/images/map.png'
import Image from "next/image"

const Usage = () => {
  return (
    <div className="mt-20 md:w-11/12 lg:w-10/12 w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md py-4 ">
                  <div className="grid grid-cols-3 overflow-hidden gap-3">
                     <div className="flex col-span-2 px-4 flex-col items-center gap-2 ">
                        <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 p-6 rounded-md ">
                           <div className="xl:p-6 xs:p-3 bg-blue-500 text-white xs:text-[10px] sml:text-xs xs:w-full xl:w-[250px] rounded-2xl rounded-br-none xs:ml-4 md:ml-8 lgl:ml-14 xl:ml-20">
                            Thursday at 12:30 PM is  best for me!
                           </div>
                           <div className="xl:p-6 xs:p-3 bg-gray-400 text-white xs:text-[10px] sml:text-xs xs:w-full xl:w-[250px] rounded-2xl rounded-bl-none">
                            Perfect I will get that  meeting on John's schedule! Talk to you then!
                           </div>
                          
                     </div>
                     <div className=" md:mt-20 xs:mt-10 px-2 flex flex-col gap-2 w-full bg-white">
                              <MdCalendarMonth className="text-lg" />
                              <h3 className="sml:text-2xl xs:text-lg font-semibold text-slate-800">Appointment Scheduling</h3>
                              <p className="sml:text-sm xs:text-[10px] md:text-xs sm:text-[13px] text-slate-500 whitespace-nowrap">Your Thoughtly agent synces with your calender,<br /> working alongside callers to pinpoint the<br /> perfect meeting time. Coordinate effortlessly.</p>
                        </div>
                     </div>
                     <div className="border-[1px] col-span-1 border-gray-300 w-[300px] md:h-[300px] xs:h-[200px] rounded-2xl border-r-0">
                          <h2 className="text-slate-500 text-xs p-4">John's Thursday </h2>
                          <hr  />
                          <div className="md:p-4 xs:p-2 flex flex-col gap-4">
                             <div className="flex items-center gap-2">
                                <div className="w-[10px] h-[10px] rounded-full bg-yellow-500" /> 
                                <div className="flex flex-col gap-2">
                                    <h3 className="sml:text-sm xs:text-[10px] font-semibold">Team Discussion</h3>
                                    <h4 className="text-slate-500 xs:text-[8px] sml:text-xs">9:30am</h4>
                                </div>
                             </div>
                             <div className="flex items-center gap-2">
                                <div className="w-[10px] h-[10px] rounded-full bg-blue-500" /> 
                                <div className="flex flex-col gap-2">
                                    <h3 className="sml:text-sm xs:text-[10px] font-semibold">Demo Walk Thru //</h3>
                                    <h4 className="text-slate-500 xs:text-[8px] sml:text-xs">9:45am</h4>
                                </div>
                             </div>
                             <div className="flex items-center gap-2">
                                <div className="w-[10px] h-[10px] rounded-full bg-green-500" /> 
                                <div className="flex flex-col gap-2">
                                    <h3 className="sml:text-sm xs:text-[10px] font-semibold">Sales Meeting</h3>
                                    <h4 className="text-slate-500 xs:text-[8px] sml:text-xs">10:00am</h4>
                                </div>
                             </div>
                          </div>
                    </div>
                  
                  </div>
            </div>
              <div className="bg-white rounded-lg shadow-md px-4 flex flex-col overflow-hidden">
                 <div className="grid grid-cols-3 md:gap-6 lg:gap-2">
                 <div className="flex flex-col items-start justify-start gap-4">
                           <div className="border-[1px] xs:mt-[-50px] sm:mt-[-55px] md:mt-[-50px] lg:mt-[-70px] lgl:mt-[-55px] xl:mt-[-100px] border-gray-300 p-6 rounded-2xl">
                          <div className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px]  mx-auto ">
                        <Image src={people2} alt="people"  />
                        </div>
                          </div>   
                      </div>
                       <div className="flex flex-col items-start justify-start gap-4">
                           <div className="border-[1px] xs:mt-[-50px] sm:mt-[-55px] md:mt-[-40px] lg:mt-[-70px] lgl:mt-[-55px]  xl:mt-[-100px] border-gray-300 p-6 rounded-2xl">
                          <div className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px]  mx-auto ">
                        <Image src={people2} alt="people"  />
                        </div>
                          </div>
                          <div className="border-[1px] border-gray-300 p-6 rounded-2xl">
                          <div className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px] mx-auto rounded-full">
                        <Image src={people3} alt="people"  />
                        </div>
                          </div>
                      </div>
                    <div className=" flex flex-col items-start justify-start gap-4 ">
                     <div className="border-[1px] mt-[-20px] border-gray-300 p-6 rounded-2xl">
                        <div className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px] xs:w-full xs:h-full mx-auto rounded-full">
                        <Image src={people1} alt="people" className="w-full object-contain" />
                        </div>
                       </div>
                       <div className="border-[1px]  border-gray-300 p-6 rounded-2xl">
                        <div className="xl:w-[120px] xl:h-[120px] md:w-[60px] md:h-[60px] xs:w-full xs:h-full mx-auto rounded-full">
                        <Image src={people2} alt="people"  className="w-full object-contain" />
                        </div>
                       </div>
                 </div>
                 </div>
                
                 <div className="flex pb-4 md:mt-20 lg:mt-0 lgl:mt-10 flex-col gap-2">
                        <MdVerifiedUser className="text-slate-500 text-lg" />
                        <h2 className="sml:text-2xl xs:text-lg font-semibold text-slate-800">Lead  Qualification</h2>
                          <p className=" text-slate-500 xs:text-[10px] md:text-xs sm:text-[14px]">Every incoming call is an oppotunity. Your <br className="xs:block md:hidden lg:block" /> Thoughtly agent will never miss a call from a<br className="xs:block md:hidden lg:block" /> potential lead, intuitively
                             directing them to the<br className="xs:block md:hidden lg:block" /> ideal point of contact. Perfect routing, every<br className="xs:block md:hidden lg:block" /> time, ready to convert.</p>
                    </div>
           </div>
         </div> 
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 mt-5">
             <div className="col-span-2 flex flex-col gap-4">
               <div className="bg-white rounded-lg shadow-lg flex items-center justify-between xs:flex-col-reverse md:flex-row gap-2 relative">
                    <div className="md:w-[40%] xs:w-full flex flex-col items-start gap-2 mt-0 xs:pb-4 md:pb-0 md:mt-32 justify-end px-3">
                        <MdAnalytics className="text-slate-500 text-lg" />
                        <h3 className="sml:text-2xl xs:text-lg font-semibold text-slate-800">Analytics & Reporting</h3>
                        <p className="text-slate-500 xs:text-[10px] md:text-xs sm:text-[14px]">Optimize your communication strategies  by leveraging industry-leading analytics and data collection.</p>
                    </div>
                    <div className="md:w-[60%] xs:w-full py-16 bg-gray-50">
                        <Image src={map} alt="map" />
                        <div className="absolute xs:top-20 xs:ml-1 sm:ml-4 md:ml-0 md:top-8 border-[1px] border-gray-300 rounded-xl shadow-lg py-4 xs:px-2 sml:px-8 md:px-4 flex xs:gap-2 sml:gap-6 justify-between">
                             <div className="border-[20px] border-green-500 rounded-full ">
                                 <div className="sml:w-[80px] sml:h-[80px] xs:w-[60px] xs:h-[60px] md:w-[70px] md:h-[70px]  bg-white rounded-full" />
                             </div>
       
                             <div className="flex flex-col gap-12">
                                  <div className="flex justify-between gap-6 items-center">
                                     <h2 className="sml:text-lg xs:text-xs md:text-xs font-semibold text-slate-500">Usage</h2>
                                     <p className="text-slate-500 xs:text-[10px] md:text-[10px] sml:text-xs ">Reports</p>
                                  </div>
                                  <div className="flex gap-1">
                                    <h1 className="font-bold xs:text-xl md:text-sm sml:text-4xl text-slate-800">971</h1>
                                    <p className="font-semibold sml:text-xs md:text-[10px] xs:text-[10px] xs:mt-2 md:mt-2 sml:mt-4">Mins</p>
                                  </div>
                             </div>
                        </div>
                        <div className="absolute border-[1px] xs:ml-10 md:ml-0 flex bg-white flex-col gap-1 border-gray-300 z-50 xs:top-[200px] md:top-[150px] lg:top-[165px] xl:top-[180px] rounded-xl xs:p-1 sml:p-3 shadow-md">
                             <div className="flex items-center xs:gap-2 sml:gap-4">
                                 <div className="sml:w-4 sml:h-4 xs:w-2 xs:h-2 bg-green-500 rounded-full" />
                                 <p className="text-slate-500 font-semibold xs:text-[10px] sml:text-xs md:text-[10px]">Denver Area</p>
                             </div>
                             <p className="text-slate-500 font-semibold text-center  xs:text-[10px] sml:text-xs md:text-[10px]">598.67</p>
                        </div>
                    </div>
                </div>
                
                <div className="border-[1px] bg-white border-gray-300 rounded-lg p-2 md:p-4 shadow-md" >
                    <div className=" grid grid-cols-1 md:grid-cols-3 bg-[#f7f9f7] rounded-md gap-2 overflow-hidden">
                     <div className="md:hidden flex flex-col gap-4">
                           <div className="grid grid-cols-2 pt-1 gap-3">
                                <div className="flex flex-col gap-8 items-center justify-center">
                                <div className="border-[1px] bg-white rounded-lg border-gray-300 flex items-center flex-col gap-3 px-3 py-1 sm:px-6 sm:py-3">
                                       <MdPhone className="text-xl text-green-500" />
                                       <p className="text-slate-500 xs:text-[10px] sm:text-xs font-semibold">555-555-3211</p>
                                       <p className="text-[8px] text-gray-300 uppercase">Incoming call</p>
                                </div>
                                <div className="border-[1px] border-b-0 ml-12 bg-white border-gray-300 rounded-lg flex items-center justify-center flex-col px-5 mt-5 py-3">
                                 <div className="w-[50px]  mx-auto rounded-full">
                                <Image src={people1} alt="people" className="w-full object-contain" />
                              </div>
                              <h2 className="text-center font-semibold text-xs text-slate-800 mt-2">John</h2>
                              <p className="text-gray-400  text-[8px] uppercase">555-555-6471</p>
                             </div>
                                </div>
                                <div className="flex flex-col items-center gap-3 justify-center mt-8">
                                <div className="border-[1px] bg-white rounded-lg border-gray-300 flex flex-col items-center justify-center gap-3 px-3 py-1 sm:px-6 sm:py-3 ">
                                     <p className="text-slate-500 xs:text-[10px] text-center sm:text-xs">Hello! Who are you looking to get hold of today?</p>
                                     <div className="flex items-center xs:gap-4 sm:gap-8">
                                          <button className="text-slate-500 uppercase xs:text-[10px] sm:text-xs">Bella</button>
                                          <button className="text-slate-500 uppercase xs:text-[10px] sm:text-xs">John</button>
                                     </div>
                                </div>
                                <div className="border-[1px] border-b-0 bg-white border-gray-300 rounded-lg flex flex-col items-center justify-center px-5 py-3 mt-10 ml-16  ">
                                 <div className="w-[50px] mx-auto rounded-full">
                                <Image src={people2} alt="people"  className="w-full object-contain" />
                              </div>
                              <h2 className="text-center font-semibold text-xs  text-slate-800 mt-2 ">Bella</h2>
                              <p className="text-gray-400 text-[8px] uppercase">555-555-6471</p>
                             </div>
                                </div>
                           </div>
                           <div className="flex flex-col gap-4 py-6 bg-white">
                                <MdOutbound className="text-lg text-slate-500" />
                                <h2 className="md:text-3xl xs:text-xl font-semibold text-slate-800">Call  Routing</h2>
                                <p className="text-xs sm:text-[14px] text-slate-500">Build a human-like receptionist to route  calls based on natural requests from your customers- all with zero hold time.</p>
                             </div>
                     </div>
                       <div className="hidden md:flex flex-col gap-6 col-span-2">
                             <div className="grid grid-cols-2 gap-4 px-4">
                              <div className="">
                                <div className="border-[1px] border-t-0 bg-white py-6  rounded-lg border-gray-300 flex items-center flex-col gap-3 ">
                                       <MdPhone className="xl:text-2xl md:text-sm text-green-500" />
                                       <p className="text-slate-500 font-semibold text-xs">555-555-3211</p>
                                </div>
                                </div>
                                <div className="border-[1px] bg-white rounded-lg border-gray-300 md:mr-0 xl:mr-6 md:mt-12 xl:mt-24 flex flex-col gap-4 md:p-2 xl:p-6">
                                     <p className="text-slate-500 md:text-[10px] text-center font-medium xl:text-xs">Hello! Who are you looking to get hold of today?</p>
                                     <div className="flex items-center justify-center md:gap-4 xl:gap-8">
                                          <button className="text-slate-500 font-semibold uppercase md:text-[12px] ">Bella</button>
                                          <button className="text-slate-500 font-semibold uppercase md:text-[12px] ">John</button>
                                     </div>
                                </div>
                             </div>
                             <div className="flex flex-col gap-4 py-6 bg-white">
                                <MdOutbound className="text-lg text-slate-500" />
                                <h2 className="lg:text-2xl md:text-xl font-semibold text-slate-800">Call  Routing</h2>
                                <p className="lg:text-sm md:text-xs text-slate-500">Build a human-like receptionist to route <br /> calls based on natural requests from your<br /> customers- all with zero hold time.</p>
                             </div>
                          </div>
                         <div className="hidden md:flex col-span-1 flex-col gap-8 p-4">
                             <div className="border-[1px] bg-white py-4 border-gray-300 rounded-lg ">
                             <div className="xl:w-[50px] md:w-[30px] mx-auto ">
                                <Image src={people1} alt="people"  className="w-full object-contain" />
                              </div>
                              <h2 className="text-center md:text-xs font-semibold text-slate-800 md:mt-2 xl:mt-4">John</h2>
                             </div>
                             <div className="border-[1px] bg-white py-4 mt-16 border-gray-300 rounded-lg   ">
                             <div className="xl:w-[50px] md:w-[30px] mx-auto ">
                                <Image src={people2} alt="people"  className="w-full object-contain" />
                              </div>
                              <h2 className="text-center md:text-xs  font-semibold text-slate-800 md:mt-2 xl:mt-4">Bella</h2>
                             </div>
                         </div>
                    </div>
                </div>
             </div>
             <div className="col-span-1 rounded-lg shadow-lg bg-white">
                  <div className="grid grid-cols-3 p-4 gap-2">
                     <div className="col-span-2 border-gray-300 border-[1px] rounded-md ">
                         <div className="flex items-start justify-start p-3 gap-2">
                            <MdCode className="text-red-700 xs:text-xl " />
                            <div className="flex flex-col gap-2">
                                <h2 className="xl:text-sm xs:text-xs md:text-[8px]  font-semibold text-slate-500">Sales Genius</h2>
                                <p className="xl:text-xs xs:text-[10px] text-slate-500">16 data sources</p>
                           </div>
                         </div>
                      </div>
                      <div className="border-gray-300 flex items-start justify-start border-[1px] p-3 border-r-0 rounded-md col-span-1 overflow-hidden">
                        <MdCode className="text-gray-600 xs:text-xl" />
                        <div className="flex flex-col gap-2">
                                <h2 className="xl:text-sm xs:text-xs md:text-[8px]  font-semibold md:ml-10 lg:ml-0 text-slate-500">Customer</h2>
                                <p className="xl:text-xs xs:text-[10px] text-slate-500 md:ml-10 lg:ml-0 whitespace-nowrap">28 data sources</p>
                           </div>
                      </div> 
                  </div>
                  <div className="flex flex-col md:gap-2 gap-4 px-4">
                     <div className="grid grid-cols-3 bg-gray-300 p-1 lg:p-2 rounded-md">
                        <p className="xl:text-xs xs:text-[14px] text-slate-500">File</p>
                        <p className="xl:text-xs xs:text-[14px] text-slate-500">Type</p>
                        <p className="xl:text-xs xs:text-[14px] text-slate-500">Status</p>
                     </div>
                     <div className="grid grid-cols-3 xs:p-1 xl:p-2 rounded-md">
                        <p className="text-[10px] flex items-center gap-2 text-slate-500"><MdSdCard className="md:hidden xl:block" /> Corporate Directory</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Text Document</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Active</p>
                     </div>
                     <div className="grid bg-gray-100 grid-cols-3 xs:p-1 xl:p-2 rounded-md">
                        <p className="text-[10px] flex items-center gap-2 text-slate-500"><MdSdCard className="md:hidden xl:block" /> Corporate Directory</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Text Document</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Active</p>
                     </div>
                     <div className="grid grid-cols-3 xs:p-1 xl:p-2 rounded-md">
                        <p className="text-[10px] flex items-center gap-2 text-slate-500"><MdSdCard className="md:hidden xl:block" /> Corporate Directory</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Text Document</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Active</p>
                     </div>
                     <div className="grid bg-gray-100 grid-cols-3 xs:p-1 xl:p-2 rounded-md">
                        <p className="text-[10px] flex items-center gap-2 text-slate-500"><MdSdCard className="md:hidden xl:block" /> Corporate Directory</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Text Document</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Active</p>
                     </div>
                     <div className="grid grid-cols-3 xs:p-1 xl:p-2 rounded-md">
                        <p className="text-[10px] flex items-center gap-2 text-slate-500"><MdSdCard className="md:hidden xl:block" /> Corporate Directory</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Text Document</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Active</p>
                     </div>
                     <div className="grid grid-cols-3 bg-gray-100 xs:p-1 xl:p-2 rounded-md">
                        <p className="text-[10px] flex items-center gap-2 text-slate-500"><MdSdCard className="md:hidden xl:block" /> Corporate Directory</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Text Document</p>
                        <p className="xl:text-xs xs:text-[10px] text-slate-500">Active</p>
                     </div>
                 
                 
                  </div>
                  <div className="xl:mt-14 xs:mt-2 p-2 xl:p-4 flex items-center justify-center xs:gap-1 xl:gap-3">
                    <div className="border-gray-300 border-[1px] py-4 xs:px-3 xl:px-6 rounded-md">
                        <h2 className="text-slate-500 text-[12px] md:text-[8px] xl:text-sm">Add Data Sources</h2>
                    </div>
                    <div className="border-gray-300 border-[1px] py-4 xs:px-3 xl:px-6 rounded-md">
                      <h2 className="text-slate-500 text-[12px] md:text-[8px]  xl:text-sm">Add to a Thoughtly</h2>
                    </div>
                  </div>
                  <div className="xl:mt-20 xs:mt-1 flex flex-col gap-4 px-4 py-4">
                         <MdCode className="xl:text-2xl text-xl font-semibold" />
                         <h2 className="lg:text-2xl xs:text-xl font-semibold text-slate-800">Customer Knowledge Base</h2>
                         <p className="text-sm md:text-xs text-slate-500 ">Train your agent on hours of call recordings, unstructured text, and even your website. Your agent will learn from your data and improve over time.</p>
                  </div>
            </div>
            
        </div>
    </div>
  )
}

export default Usage