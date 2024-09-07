

const Newsletter = () => {
  return (
    <div className="md:mt-20 mt-10 md:w-10/12 w-full mx-auto py-16 flex flex-col xs:pl-4 md:pl-0 gap-4">
        <div className="bg-white w-48 xs:mr-6 md:mr-0 text-center py-3 px-6 text-slate-500 text-xs rounded-lg">
             Scale with Ease
        </div>
        <div>
            <h2 className="text-4xl font-semibold text-slate-800">Join the <br /> communication <br /> revolution.</h2>
        </div>
        <div className="bg-white w-full md:w-[350px] border-[1px] p-1 border-gray-300 rounded-md flex items-center">
              <input placeholder="What is your work email?" type="text" className="text-xs w-full p-2 outline-none" />
              <div className="bg-gradient-to-r from-[#6fd870] to-[#4fbf50] sm:w-1/2 xs:w-3/4 text-center shadow-lg rounded-md">
              <button className='sm:py-3 xs:p-2 sm:px-2 font-semibold text-xs '>Get Started</button>
             </div>
         </div>
         <div>
                <p className="text-slate-500 text-xs">Slach your costs and transform your customer <br /> experience. The generative AI revolutionis here. Don't <br /> get left behind.</p>
        </div>
    </div>
  )
}

export default Newsletter