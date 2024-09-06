import { MdArrowCircleDown, MdCallToAction, MdGppGood } from "react-icons/md"


const Action = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg flex flex-col gap-4 px-4 py-4 '>
    <div className="flex items-center gap-4 ">
        <div className="bg-red-100 border-[1px] rounded-lg shadow-lg  border-red-400 py-2 px-4">
        <MdCallToAction className="text-red-600 text-lg" />
        </div>
       
        <h2 className="text-lg font-semibold">Action</h2>
       </div>
       <hr />
       <div className='w-full py-2 px-4 rounded-md outline outline-gray-300 flex justify-between items-center '>
            <p className="text-xs">Webhook</p>
            <MdArrowCircleDown className="text-xs" />
       </div>
       <div className='w-full flex items-center gap-3 justify-center'>
        <div className='px-2 flex items-center gap-4'> <MdGppGood className='text-green-500' /><p className='text-sm text-slate-500'>Event:</p>  </div>
        <div className='w-full py-2 px-4 rounded-md outline outline-gray-300 '>
            <p className="text-xs">POST</p>
           
       </div>
       </div>
       <div className='w-full flex items-center justify-center'>
        <div className='px-2 flex items-center gap-4'> <MdGppGood className='text-green-500' /><p className='text-sm text-slate-500'>URL:</p>  </div>
        <div className='w-full py-2 px-4 rounded-md outline outline-gray-300  '>
            <p className="text-xs">POST</p>   
       </div>
       </div>
</div>
  )
}

export default Action