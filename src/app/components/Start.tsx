import { MdArrowCircleDown, MdCallToAction, MdChat, MdGppGood, MdPlayArrow, MdRvHookup, MdSwitchAccessShortcut } from 'react-icons/md'
import people1 from '../../../public/images/people-01.png'
import people2 from '../../../public/images/people-02.png'
import people3 from '../../../public/images/people-03.png'
import Image from 'next/image'
import ABTestComponent from './ABTestComponent'
import Action from './Action'
import Inbound from './Inbound'
import Payment from './Payment'

const Start = () => {
  return (
 <div className='bg-dotted-pattern bg-gray-100 md:w-11/12 w-full mx-auto shadow-md rounded-2xl mt-20 relative'>
        <div className="md:mt-10 xs:mt-5 absolute xs:top-[-70px] md:top-[-100px] sm:left-10 md:left-0 xs:right-5 md:right-16">
           <div className="flex justify-end gap-8">
                <div className="bg-white rounded-lg shadow-lg flex flex-col gap-4 xs:py-4 xs:px-4 md:py-8 md:px-2">
                   <div className="flex items-center gap-4 ">
                    <div className="bg-[#b6e8b7] border-[1px] rounded-lg shadow-lg  border-green-400 py-1 px-2 sm:py-2 sm:px-4">
                    <MdPlayArrow className="text-green-400 xs:text-xs sm:text-lg" />
                    </div>
                   
                    <h2 className="xs:text-sm sm:text-xl font-semibold">Start</h2>
                   </div>
                   <hr />
                   <p className="text-slate-500 text-xs w-full md:w-[350px] ">"Thank you for calling Thoughtly, this is Tessa. Who am I speaking with?"</p>
               </div>
               <div className="xs:hidden md:block">
                <div className='py-4  bg-white rounded-md shadow-lg flex items-center justify-center w-[150px] h-[100px] relative'>
                 <div className="absolute inset-0 flex items-center justify-center xs:w-[30px] h-auto mx-auto animate-fadeInOut1">
                  <Image src={people3} alt="people" width={40} height={40}  />
                   </div>
                  <div className="absolute inset-0 flex items-center justify-center xs:w-[30px] h-auto mx-auto animate-fadeInOut2">
                   <Image src={people1} alt="people" width={40} height={40} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center xs:w-[30px] h-auto mx-auto  animate-fadeInOut2">
                   <Image src={people2} alt="people" width={40} height={40}  />
                    </div>
                   </div>
                

              </div>
              </div>
       </div>

      <div className='md:w-11/12 xl:w-10/12 mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 xs:pt-28 md:pt-40 overflow-hidden '>
         <div className='flex flex-col '>
             <Inbound />
              <div className='xs:mt-10 sm:mt-0 md:hidden '>
             <div className=' xs:w-full xs:px-1 sm:px-0 sm:w-[400px] sm:ml-[-160px] sml:ml-[-90px]'>
               <div className='bg-white rounded-lg shadow-lg flex flex-col gap-4 px-4 py-4 '>
               <div className="flex items-center sm:justify-center sml:justify-start gap-4 ">
                 <div className="bg-red-100 border-[1px] rounded-lg shadow-lg  border-red-400 py-1 px-2 sm:py-2 sm:px-4">
                   <MdCallToAction className="text-red-600 xs:text-xs sm:text-lg" />
                </div>
       
        <h2 className="sm:text-lg xs:text-xs font-semibold">Action</h2>
       </div>
       <hr />
       <div className='w-full py-2 px-4 rounded-md outline outline-gray-300 flex justify-between items-center '>
            <p className="text-xs">Webhook</p>
            <MdArrowCircleDown className="text-xs" />
       </div>
       <div className='w-full flex items-center gap-3 justify-center'>
        <div className='px-2 flex items-center gap-4'> <MdGppGood className='text-green-500' /><p className='text-xs text-slate-500'>Event:</p>  </div>
        <div className='w-full py-2 px-4 rounded-md outline outline-gray-300 '>
            <p className="text-xs">POST</p>
           
       </div>
       </div>
       <div className='w-full flex items-center justify-center'>
        <div className='px-2 flex items-center gap-4'> <MdGppGood className='text-green-500' /><p className='text-xs text-slate-500'>URL:</p>  </div>
        <div className='w-full py-2 px-4 rounded-md outline outline-gray-300  '>
            <p className="text-xs">POST</p>   
       </div>
       </div>
</div>
            </div> 
            <div className='flex flex-col xs:px-2 sml:px-6 mt-16'>
           <div className='flex flex-col gap-2'>
             <p className='text-green-400 text-sm'>A data-driven approach</p>
             <h1 className='md:text-4xl sm:text-2xl font-medium text-slate-800'>Analytics  that tell your <br /> customer's story</h1>
             <p className='sml:text-sm xs:text-xs text-slate-500 w-full sml:w-[350px] leading-5'>Empower your decision-making with comprehensive analytics, detailed reports, and A/B testing. Thoughtly provides real-time data visualization and performance metrics, enabling you to optimize communication strategies, understand customer behavior, and drive conversions more effectively.</p>
           </div>
          
        <div>
        
        </div>
        </div>
             </div>
            <div className='bg-white rounded-lg md:w-full lg:w-[400px] shadow-lg py-4 px-3 xs:ml-10 xs:mr-[-100px]  sml:ml-32 md:ml-0 xs:mt-16 md:mt-36 '>
                <ABTestComponent />  
           </div>

        <div className='sm:ml-[-30px] xs:w-full sml:w-[400px] md:w-full lg:w-[400px] xs:px-1 sm:px-0 xs:mt-16 md:mt-32 mb-16 md:ml-0 lg::ml-16'>
        <Payment />
        </div>

        </div>
        <div className='flex flex-col gap-4  '>
           
            <div className='hidden md:flex bg-white rounded-lg shadow-lg  flex-col gap-4 w-full lg:w-[350px] px-2 py-4'>
                   <div className="flex items-center gap-4">
                    <div className="bg-blue-100 border-[1px] rounded-lg shadow-lg  border-blue-400 py-2 px-4">
                    <MdChat className="text-blue-600 text-lg" />
                    </div>
                   
                    <h2 className="text-lg font-semibold">Speak</h2>
                   </div>
                   <hr />
                    <p className='text-xs text-slate-500 md:text-center xs:text-start'>"hello <span className='text-blue-500'>{`{api.name}`}</span>, is your email address still <span className='text-blue-500'>{`{api.email}`}</span> "</p>
                    <div className='flex items-center justify-center gap-8 mt-5'>
                        <button className='text-slate-500 text-xs'>YES</button>
                        <button className='text-slate-500 text-xs'>NO, NEW EMAIL</button>
                    </div>
            </div>
           
            <div className='hidden md:block md:w-full xl:w-[400px] md:ml-0  xl:ml-10 mt-16'>
                <Action />
            </div> 

            <div className='hidden md:flex flex-col px-6 mt-16'>
           <div className='flex flex-col gap-2'>
             <p className='text-green-400 text-sm'>A data-driven approach</p>
             <h1 className='text-4xl font-medium text-slate-800'>Analytics <br /> that tell your <br /> customer's story</h1>
             <p className='text-sm text-slate-500 w-[350px] leading-5'>Empower your decision-making with comprehensive analytics, detailed reports, and A/B testing. Thoughtly provides real-time data visualization and performance metrics, enabling you to optimize communication strategies, understand customer behavior, and drive conversions more effectively.</p>
           </div>
          
        <div>
        
        </div>
        </div>
        </div>
      </div>
 </div>
   
  )
}

export default Start


