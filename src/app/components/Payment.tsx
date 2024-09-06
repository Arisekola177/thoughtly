import { MdChat } from "react-icons/md"


const Payment = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg flex flex-col gap-4 px-2 py-4 '>
    <div className="flex items-center gap-4 ">
        <div className="bg-blue-100 border-[1px] rounded-lg shadow-lg  border-blue-400 py-1 px-2 sml:py-2 sml:px-4">
        <MdChat className="text-blue-600 xs:text-xs sml:text-lg" />
        </div>
       
        <h2 className="sml:text-lg xs:text-xs font-semibold">Speak</h2>
       </div>
       <hr />
        <p className='text-xs text-center text-slate-500'>Got it, thanks for being a customer for <span className='text-blue-500'>{`{api.num_years}`}</span>  incredible years, <span className='text-blue-500'>{`{name}`}</span>! So, what can i do for you?</p>
        <div className='flex items-center justify-center xs:gap-2 sml:gap-4 mt-5'>
            <button className='text-slate-500 xs:text-[8px] sm:text-[14px] sml:text-xs'>MAKE PAYMENT</button>
            <button className='text-slate-500 xs:text-[8px] sm:text-[14px] sml:text-xs'>PLACE ORDER</button>
            <button className='text-slate-500 xs:text-[8px] sm:text-[14px] sml:text-xs'>BOOK APPOINTMENT</button>
            <button className='text-slate-500 xs:text-[8px] sm:text-[14px] sml:text-xs'>SOMETHING ELSE</button>
        </div>
</div>
  )
}

export default Payment