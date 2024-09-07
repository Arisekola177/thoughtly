import Image from 'next/image'
import legal from '../../../../public/images/legal.jpg'
import people1 from '../../../../public/images/people-01.png'
import flag from '../../../../public/images/flag.png'
import { MdFlag, MdPlayArrow } from 'react-icons/md'

const Legal = () => {
  return (
    <div className="flex xs:flex-col-reverse justify-between gap-4 xs:border-[1px] border-gray-300 rounded-xl xs:p-4 xl:p-8  md:border-none items-center relative md:flex-row">
        <div  className='xs:mt-16 md:mt-0 w-full'>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Legal</h2>
            <p className="text-slate-500 text-sm xs:w-full xl:w-[400px] ">Elevate your law practice with our AI-driven  communication tool. Tailored for legal professionals, 
             our AI agents screen leads, welcome new clients, pencil in appointments, handle payments, pass along  your messages with outbound calls, and do so much 
              more! Boost productivity and client satisfaction.
               
            </p>
        </div>
        <div className='relative w-full'>
             <Image src={legal} alt='real estate' width={600} height={600} className='rounded-lg' />
                <div className="hidden xl:flex bg-white absolute top-[-50px] left-[-250px] w-[400px] rounded-lg shadow-lg  flex-col gap-6 py-8 px-4">
                   <div className="flex items-center gap-4 ">
                    <div className="bg-[#b6e8b7] border-[1px] rounded-lg shadow-lg  border-green-400 py-2 px-4">
                    <MdPlayArrow className="text-green-400 text-lg" />
                    </div>
                   
                    <h2 className="text-xl font-semibold">Start</h2>
                   </div>
                   <hr />
                   <p className="text-slate-500 text-xs w-[350px]">"Hello <span className='text-blue-500'>{`{name}`}</span>, thank you for calling T&C Legal. Please wait while i put up your account details "</p>
               </div>

                <div className="bg-white absolute xs:bottom-[-60px] xl:bottom-10 md:bottom-[-120px] md:right-[-25px] xs:right-[-10px] xl:right-[-15px] lg:w-[300px] xs:w-[200px] md:w-[250px] rounded-lg shadow-lg flex flex-col gap-4 xs:py-4 xs:px-2 md:py-8 md:px-4">
                    <div className='flex flex-col gap-2 xs:px-4 md:px-0'>
                          <h4 className='text-sm text-slate-800 font-medium'>Assertiveness</h4>
                          <div className="h-[12px] w-full bg-gray-200  border-gray-300 rounded-md">
                            <div className='w-[32%] flex items-end justify-end'>
                            <p className="bg-green-400 rounded-full w-3 h-3 " />
                            </div>
                        
                           </div>
                          
                          <p className='text-slate-500 text-xs'>Assertive yet kind</p>
                    </div>
                    <div className='flex flex-col gap-2 xs:px-4 md:px-0'>
                          <h4 className='text-sm text-slate-800 font-medium'>Humor Level</h4>
                          <div className="h-[12px] w-full bg-gray-200  border-gray-300 rounded-md">
                            <div className='w-[45%] flex items-end justify-end'>
                            <p className="bg-green-400 rounded-full w-3 h-3 " />
                            </div>
                        
                           </div>
                          <p className='text-slate-500 text-xs'>Serious, minimal humor</p>
                    </div>
               </div>
               <div className='xs:hidden xl:flex bg-white absolute lg:bottom-[-30px] md:bottom-[-180px] md:right-[-25px] lg:right-[-15px] lg:w-[300px] md:w-full rounded-lg shadow-lg items-center justify-center gap-6 py-4 px-4'>
                    <Image src={people1} alt='people' width={20} height={20} />
                    <Image src={flag} alt='people' width={20} height={20} /> 
                    <p className='text-sm font-semibold'>Sanjay</p>
               </div>
               <div className='flex bg-white absolute xs:top-[-10px] xs:left-[-10px] rounded-lg shadow-lg items-center justify-center gap-6 py-4 px-4 xl:hidden'>
                    <Image src={people1} alt='people' width={20} height={20} />
                    <Image src={flag} alt='people' width={20} height={20} /> 
                    <p className='text-sm font-semibold'>Sanjay</p>
               </div>
        </div>
    </div>
  )
}

export default Legal