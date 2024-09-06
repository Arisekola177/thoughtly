import Image from 'next/image'
import house from '../../../../public/images/office.webp'
import people1 from '../../../../public/images/people-01.png'
import flag from '../../../../public/images/flag.png'
import { MdPlayArrow } from 'react-icons/md'


const Estate = () => {
  return (
    <div className="flex xs:flex-col-reverse justify-between gap-4 xs:border-[1px] border-gray-300 rounded-xl xs:p-4 xl:p-8 md:border-none items-center relative md:flex-row ">
        <div className='xs:mt-16 md:mt-0 w-full'>
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Real Estate </h2>
            <p className="text-slate-500 text-sm xs:w-full xl:w-[400px]">Selling your customers that dream condo or beach <br /> home has never been easier. Our AI agents instantly <br /> respond to every inquiry, 
                re-engage with previous<br /> leads, and schedule showings at a scale previously<br /> unimaginable. With Thoughtly, you'll connect your<br /> buyers to the most powerful
                and human-like<br /> conversational technology on the market.
            </p>
        </div>
        <div className='relative w-full'>
             <Image src={house} alt='real estate' width={600} height={600} className='rounded-lg' />
                <div className="hidden xl:flex absolute bg-white top-[-50px] left-[-250px] w-[400px] rounded-lg shadow-lg flex-col gap-6 py-8 px-4">
                   <div className="flex items-center gap-4 ">
                    <div className="bg-[#b6e8b7] border-[1px] rounded-lg shadow-lg  border-green-400 py-2 px-4">
                    <MdPlayArrow className="text-green-400 text-lg" />
                    </div>
                   
                    <h2 className="text-xl font-semibold">Start</h2>
                   </div>
                   <hr />
                   <p className="text-slate-500 text-xs w-[350px]">"Hello! This is Monica from Chandler Bing Brokerages. I saw you requested information about our listing in Beverly Hills. Are you looking to schedule an appointment?"</p>
               </div>

                <div className="bg-white absolute xs:bottom-[-60px] xl:bottom-10 md:bottom-[-120px] md:right-[-25px] xs:right-[-10px] xl:right-[-15px] lg:w-[300px] xs:w-[300px] md:w-full rounded-lg shadow-lg flex flex-col gap-4 xs:py-4 xs:px-2 md:py-8 md:px-4">
                    <div className='flex flex-col gap-2 xs:px-4 md:px-0'>
                          <h4 className='text-sm text-slate-800 font-medium'>Assertiveness</h4>
                          <div className="h-[12px] w-full bg-gray-200  border-gray-300 rounded-md">
                            <div className='w-[82%] flex items-end justify-end'>
                            <p className="bg-green-400 rounded-full w-3 h-3 " />
                            </div>
                        
                           </div>
                          
                          <p className='text-slate-500 text-xs'>Assertive yet kind</p>
                    </div>
                    <div className='flex flex-col gap-2 xs:px-4 md:px-0'>
                          <h4 className='text-sm text-slate-800 font-medium'>Humor Level</h4>
                          <div className="h-[12px] w-full bg-gray-200  border-gray-300 rounded-md">
                            <div className='w-[50%] flex items-end justify-end'>
                            <p className="bg-green-400 rounded-full w-3 h-3 " />
                            </div>
                        
                           </div>
                          <p className='text-slate-500 text-xs'>Humor in every response</p>
                    </div>
               </div>
               <div className='xs:hidden xl:flex bg-white absolute bottom-[-30px] right-[-15px] w-[300px] rounded-lg shadow-lg items-center justify-center gap-6 py-4 px-4'>
                    <Image src={people1} alt='people' width={20} height={20} />
                    <Image src={flag} alt='people' width={20} height={20} />
                    <p className='text-sm font-semibold'>Stacey</p>
               </div>
               <div className='flex bg-white absolute xs:top-[-10px] xs:left-[-10px] rounded-lg shadow-lg items-center justify-center gap-6 py-4 px-4 xl:hidden'>
                    <Image src={people1} alt='people' width={20} height={20} />
                    <Image src={flag} alt='people' width={20} height={20} />
                    <p className='text-sm font-semibold'>Stacey</p>
               </div>
        </div>
    </div>
  )
}
 
export default Estate