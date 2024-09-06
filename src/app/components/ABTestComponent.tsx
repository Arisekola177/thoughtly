'use client'

import React, { useState, useEffect, useRef } from 'react';
import { MdArrowCircleDown, MdCallToAction, MdGppGood } from 'react-icons/md';


const ABTestComponent: React.FC = () => {
  
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
 
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current!);
          }
        },
        {
          threshold: 0.5, 
        }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    < >
        <div  ref={ref}className='flex flex-col gap-2' >
      <div className="flex items-center gap-2 mb-2">
        <div className="bg-yellow-100 border-[1px] border-yellow-500 p-1 rounded-lg">
          <span className="text-yellow-500 xs:text-xs sml:text-sm">A/B</span>
        </div>
        <h2 className="sml:text-lg xs:text-xs font-semibold">A/B Test</h2>
     
      </div>
      <hr /> 
      <p className="text-gray-700 xs:text-xs sml:text-sm mb-2">
        Great <span className='text-blue-500'>{`{name}`} ,</span> let's get you in the system and I'll route you to the right place!
      </p>
      <div className="bg-gray-100 p-4 flex flex-col gap-3 rounded-md">
        <h3 className="sml:text-sm  xs:text-xs font-medium text-gray-800 mb-2">Conversion Analytics </h3>
        <div className="mb-2 flex items-center gap-4">
          <div className="text-xs w-14 uppercase text-gray-500">FLOW 1</div>
          <div className="w-full bg-gray-300 rounded-lg h-6 overflow-hidden">
            <div
              className={`bg-green-500 h-6 rounded-lg transition-all text-white duration-1000 flex items-center justify-end ease-out  ${isVisible ? 'w-[82%]' : 'w-0'}`}
            > <p className='flex items-center px-2 font-medium justify-end text-xs'>82%</p></div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className="text-xs w-14 uppercase text-gray-500">FLOW 2</div>
          <div className="w-full bg-gray-300 rounded-lg h-6 overflow-hidden">
            <div
              className={`bg-blue-500 h-6 rounded-lg transition-all flex items-center justify-end duration-1000 ease-out ${isVisible ? 'w-[34%]' : 'w-0'}`}
            > <p className='flex items-center text-white font-medium px-2 justify-end text-xs'>34%</p></div>
          </div>
        </div>
      </div>
        </div>
      
    </>
  );
};

export default ABTestComponent;
