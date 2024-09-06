

const Footer = () => {
  return (
    <div className="bg-dotted-pattern w-full bg-gray-100  py-6 ">
      <div className="md:hidden flex flex-col w-10/12 mx-auto gap-4">
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-2xl">Thoughtly</h1>
           <p className="text-xs font-normal text-slate-500">41 E 11th St, 11th Floor <br /> New York, NY 10003</p>
           </div>
           <hr className="mt-6 " />
            <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-slate-500 text-lg">Product</h1>
           <p className="text-xs font-medium ">Platform</p>
           <p className="text-xs font-medium ">Agent Accelerator</p>
           <p className="text-xs font-medium ">Industries</p>
           </div>
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-slate-500 text-lg">Company</h1>
           <p className="text-xs font-medium ">Media Inquiries</p>
           <p className="text-xs font-medium ">Careers</p>
           <p className="text-xs font-medium ">Blog</p>
           </div>
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-slate-500 text-lg">Support</h1>
           <p className="text-xs font-medium ">Help Center</p>
           <p className="text-xs font-medium ">API Docs</p>
           <p className="text-xs font-medium ">Contact Us</p>
           </div>
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-slate-500 text-lg">Socials</h1>
           <p className="text-xs font-medium ">Instagram</p>
           <p className="text-xs font-medium ">Linkedin</p>
           <p className="text-xs font-medium ">X(Twitter)</p>
           </div>
           <div className="col-span-2">
                <div className="bg-white rounded-md flex items-center">
              <input placeholder="What is your work email?" type="text" className="text-xs w-full p-2 outline-none" />
              <div className="bg-gradient-to-r from-[#6fd870] to-[#4fbf50] w-1/2 text-center shadow-lg rounded-md">
              <button className='py-3 px-2 font-semibold text-xs '>Get Started</button>
              </div>
 
           </div>  
          </div>
            </div>
           
      </div>
         <div className="hidden w-10/12 mx-auto md:grid grid-cols-4 gap-3 mt-5">
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-2xl">Thoughtly</h1>
           <p className="text-xs font-normal text-slate-500">41 E 11th St, 11th Floor <br /> New York, NY 10003</p>
           </div>
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-slate-500 text-lg">Product</h1>
           <p className="text-xs font-medium ">Platform</p>
           <p className="text-xs font-medium ">Agent Accelerator</p>
           <p className="text-xs font-medium ">Industries</p>
           </div>
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-slate-500 text-lg">Company</h1>
           <p className="text-xs font-medium ">Media Inquiries</p>
           <p className="text-xs font-medium ">Careers</p>
           <p className="text-xs font-medium ">Blog</p>
           </div>
           <div className="flex flex-col gap-2">
           <h1 className="font-semibold text-slate-500 text-lg">Support</h1>
           <p className="text-xs font-medium ">Help Center</p>
           <p className="text-xs font-medium ">API Docs</p>
           <p className="text-xs font-medium ">Contact Us</p>
           </div>
        </div>
        <div className="hidden md:flex w-10/12 mx-auto items-center justify-between pt-32 pb-10">
             <div className="flex items-center gap-8 ">
                 <p className="text-xs font-medium">Instagram</p>
                 <p  className="text-xs font-medium">LinkedIn</p>
                 < p  className="text-xs font-medium">X(Twitter)</p>
             </div>
             
             <div className="bg-white w-[350px] rounded-md flex items-center">
              <input placeholder="What is your work email?" type="text" className="text-xs w-full p-2 outline-none" />
              <div className="bg-gradient-to-r from-[#6fd870] to-[#4fbf50] w-1/2 text-center shadow-lg rounded-md">
              <button className='py-3 px-2 font-semibold text-xs '>Get Started</button>
              </div>
 
           </div>
            
        </div>
          <div className="mt-2 w-10/12 mx-auto border-t-[2px] border-gray-300 flex justify-between items-center py-3">
             <div className="flex flex-col gap-3">
                <p className="text-gray-400 font-extralight">Copyright @ 2024 Thoughtly</p>
                <p className="text-gray-400 font-extralight">Inc All rights reserved</p>
             </div>
             <div className="flex flex-col gap-3">
                <p className="text-gray-400 font-extralight">Terms</p>
                <p className="text-gray-400 font-extralight">Privacy Policy</p>
             </div>
        </div>
    </div>
  )
}

export default Footer