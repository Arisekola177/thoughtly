

'use client'
import { useState, useEffect } from 'react';
import { MdVerified, MdLeaderboard } from "react-icons/md";
import { FaCheckCircle, FaSpinner, FaSalesforce, FaHubspot, } from 'react-icons/fa';

const Business = () => {

  const contentSets = [
    ["Asked Question", "Added Sequence", "Opened Email"],
    ["Collected Data", "Logged Call", "Opportunity Won"]
  ];
  
  const [content, setContent] = useState(contentSets[0]); 
  const [index, setIndex] = useState(0);
  const [contentTop, setContentTop] = useState("New Lead");
  const [contentBottom, setContentBottom] = useState("Processing");
  const [icon, setIcon] = useState(<FaSpinner />);
  const [icon2, setIcon2] = useState(<FaSalesforce />);

  useEffect(() => {
    const interval = setInterval(() => {

      setContentTop(prev => (prev === "New Lead" ? "Updated Lead"  : "New Lead"));
      setContentBottom(prev => (prev === "Processing" ? "Completed" : "Processing"));
      setIndex((prevIndex) => (prevIndex + 1) % contentSets.length); 
      setContent(contentSets[(index + 1) % contentSets.length]); 
      setIcon(prevIcon => 
        prevIcon.type === FaSpinner ? 
        <FaCheckCircle className='text-green-400' /> : 
        <FaSpinner className='text-green-500' />
      );
      
      setIcon2(prevIcon => 
        prevIcon.type === FaSalesforce ? 
        <MdLeaderboard /> : 
        <FaSalesforce /> 
        
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-gray-100 bg-dotted-pattern lgx:w-11/12 w-full mx-auto shadow-md rounded-2xl mt-20 relative py-16">
      
      <div className="flex items-center justify-center flex-col gap-4 mb-10">
        <h1 className="xs:text-2xl sml:text-3xl text-center font-semibold text-slate-800">
         <span className='text-green-500'> Human-like agents, fully</span> <br /> integrated into your business.
        </h1>
        <p className="text-slate-500 text-center text-sm max-w-lg">
          Build powerful workflows that fully automate<br /> your entire sales funnel, customer service<br />
          routines, and more.
        </p>
      </div>
       <div className='md:hidden xs:grid grid-cols-1 gap-8 overflow-hidden'>
           <div className='grid grid-cols-2 items-center justify-center gap-6'>
           <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center relative z-10">
          <div className='flex items-center justify-center gap-2'>
            <div className='text-4xl text-blue-400'>
              <FaHubspot  className='text-2xl'/>
            </div>
            |
            <h2 className="text-slate-500 text-xs text-center">New Lead</h2>
          </div>
          </div>
          <div className='bg-white rounded-2xl shadow-lg p-6 flex flex-col mt-16 mr-[-50px]'>
              <div className='bg-gray-300 rounded-md p-2 flex items-center gap-1 mb-1'>
                 <MdVerified className='text-green-500 text-xs' />
                 <p className='text-[10px]'>Collected Data</p>
              </div>
              <div className='bg-gray-300 rounded-md p-2 flex items-center gap-1 mb-1'>
                 <MdVerified className='text-green-500 text-xs' />
                 <p className='text-[10px]' >Opportunity Won</p>
              </div>
              <div className='bg-gray-300 rounded-md p-2 flex items-center gap-1 mb-1'>
                 <MdVerified className='text-green-500 text-xs' />
                 <p className='text-[10px]'>Signature Request</p>
              </div>
          </div>
         
           </div>
           <div className='grid grid-cols-2 items-center justify-center gap-6 '>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center relative z-10">
          <div className='flex items-center justify-center gap-2'>
            <div className='text-4xl text-blue-400'>
              <FaSalesforce className='text-2xl' />
            </div>
            |
            <h2 className="text-slate-500 text-xs text-center">New Ticket</h2>
          </div>
          </div>
          <div className='bg-white rounded-2xl shadow-lg p-6  flex flex-col mt-16 mr-[-50px]  '>
              <div className='bg-gray-300 rounded-md p-2 flex items-center gap-1 mb-1'>
                 <MdVerified className='text-green-500 text-xs' />
                 <p className='text-[10px]'>Collected Data</p>
              </div>
              <div className='bg-gray-300 rounded-md p-2 flex items-center gap-1 mb-1'>
                 <MdVerified className='text-green-500 text-xs' />
                 <p className='text-[10px]' >Opportunity Won</p>
              </div>
              <div className='bg-gray-300 rounded-md p-2 flex items-center gap-1 mb-1'>
                 <MdVerified className='text-green-500 text-xs' />
                 <p className='text-[10px]'>Signature Request</p>
              </div>
          </div>
           </div>
       </div>
     
      <div className="hidden relative md:flex items-center md:px-6 xl:px-0 justify-center gap-24">
        
        {/* First box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full flex items-center justify-center animate-[moveUp_5s_ease-in-out_infinite] relative z-10">
          <div className='flex items-center justify-center gap-2'>
            <div className='text-4xl text-blue-400'>{icon2}</div>
            |
            <h2 className="text-slate-500 text-xs text-center"> {contentTop}</h2>
          </div>
        </div>

       
        
        {/* Middle box */}
        <div className="bg-white rounded-2xl shadow-lg  p-12 w-full flex flex-col items-center justify-center relative z-10">
          <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center relative">
            <div className="dot-grid">
              {[...Array(5)].map((_, row) => (
                [...Array(5)].map((_, col) => (
                  <div key={`${row}-${col}`} className="dot animate-animationDot"></div>
                ))
              ))}
            </div>
          </div>
          <h2 className="mt-4 text-center text-slate-500 flex flex-col gap-3 items-center">{icon}{contentBottom}</h2>
        </div>

     
     

        {/* Third box */}
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full flex flex-col gap-4 animate-[moveDown_5s_ease-in-out_infinite] relative z-10">
          {content.map((item, i) => (
            <h2 key={i} className="lg:text-xs md:text-[8px] flex items-center md:w-[150px] xl:w-[200px] mx-auto gap-1 font-normal bg-gray-200 py-2 px-2 lg:px-4 rounded-md text-slate-500">
              <MdVerified className="text-green-500 md:text-[14px] lg:text-sm" /> {item}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Business;


