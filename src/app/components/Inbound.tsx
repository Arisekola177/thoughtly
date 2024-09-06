import { MdChat } from "react-icons/md"


const Inbound = () => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-center sm:justify-center overflow-hidden">
           <div className='flex px-2 flex-col gap-2 sm:col-span-2 '>
             <p className='text-green-400 xs:text-xs sm:text-sm  whitespace-nowrap  '>Inbound and outbound phone calls</p>
             <h1 className='md:text-4xl sm:text-2xl font-medium text-slate-800 w-[300px]'>From "Hello"  to <br /> handled in a  few clicks</h1>
             <p className='sml:text-sm xs:text-xs text-slate-500  whitespace-nowrap  leading-5'>Thoughtly agents expertly handle  <br /> inbound  and outbound calls related to <br /> customer service, sales, and marketing. <br /> Build your agent yourself or let us assist  <br /> you in creating the perfect agent to <br /> meet your needs.</p>
           </div>
           <div className='bg-white col-span-1 xs:ml-16 sm:ml-8 sml:ml-4 xs:mt-10 sm:mt-40 sml:mt-32 rounded-lg shadow-lg flex flex-col gap-4 xs:w-full sm:w-[350px] px-2 py-4 md:hidden'>
<div className="flex items-center gap-4">
 <div className="bg-blue-100 border-[1px] rounded-lg shadow-lg  border-blue-400 py-1 px-2 sm:py-2 sm:px-4">
 <MdChat className="text-blue-600 xs:text-xs sm:text-lg" />
 </div>

 <h2 className="sm:text-lg xs:text-xs font-semibold">Speak</h2>
</div>
<hr />
 <p className='text-xs text-slate-500 md:text-center xs:text-start'>"hello <span className='text-blue-500'>{`{api.name}`}</span>, is your email address still <span className='text-blue-500'>{`{api.email}`}</span> "</p>
 <div className='flex items-center justify-center gap-8 xs:mt-2 sm:mt-5'>
     <button className='text-slate-500 xs:text-xs sm:text-sm'>YES</button>
     <button className='text-slate-500 xs:text-xs sm:text-sm'>NO, NEW EMAIL</button>
 </div>
          </div>
  </div>
  )
}

export default Inbound