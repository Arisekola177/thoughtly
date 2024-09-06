

import { MdPhone } from "react-icons/md";

const Calls = () => {
  return (
    <div className="bg-dotted-pattern bg-gray-100 md:w-11/12 w-full mx-auto shadow-md rounded-2xl xs:py-8 md:py-16 mt-20 relative overflow-hidden">
      <div className="flex flex-col items-center gap-3">
      <div className="flex items-center whitespace-nowrap gap-0 animate-slideLeft">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-0">
            <div className="flex items-center justify-center gap-2 min-w-max px-5">
              <div className="bg-green-500 rounded-full p-3">
                <MdPhone className="text-white text-sm" />
              </div>
              <p className="sml:text-4xl xs:text-2xl font-semibold">+1(855) 717-0250</p>
            </div>
            <div className="flex items-center justify-center gap-2 min-w-max px-5">
              <div className="bg-green-500 rounded-full p-3">
                <MdPhone className="text-white text-sm" />
              </div>
              <p className="sml:text-4xl xs:text-2xl  font-semibold">+1(855) 717-0250</p>
            </div>
            <div className="flex items-center justify-center gap-2 min-w-max px-5">
              <div className="bg-green-500 rounded-full p-3">
                <MdPhone className="text-white text-sm" />
              </div>
              <p className="sml:text-4xl xs:text-2xl  font-semibold">+1(855) 717-0250</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex items-center whitespace-nowrap gap-0 animate-slideRight">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-0">
            <div className="flex items-center justify-center gap-2 min-w-max px-5">
              <div className="bg-green-500 rounded-full p-3">
                <MdPhone className="text-white text-sm" />
              </div>
              <p className="sml:text-4xl xs:text-2xl  font-semibold">+1(855) 717-0250</p>
            </div>
            <div className="flex items-center justify-center gap-2 min-w-max px-5">
              <div className="bg-green-500 rounded-full p-3">
                <MdPhone className="text-white text-sm" />
              </div>
              <p className="sml:text-4xl xs:text-2xl  font-semibold">+1(855) 717-0250</p>
            </div>

            <div className="flex items-center justify-center gap-2 min-w-max px-5">
              <div className="bg-green-500 rounded-full p-3">
                <MdPhone className="text-white text-sm" />
              </div>
              <p className="sml:text-4xl xs:text-2xl  font-semibold">+1(855) 717-0250</p>
            </div>
          </div>
        ))}
      </div>
      </div> 
    </div>
  );
};

export default Calls;



