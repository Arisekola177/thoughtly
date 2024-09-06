'use client'
import React, { useEffect, useState } from 'react'
import HomeBanner from '../components/HomeBanner'
import Start from '../components/Start'
import Future from '../components/Future'
import Calls from '../components/Calls'
import Usage from '../components/Usage'
import Pricing from '../components/Pricing'
import Interaction from "../components/Interaction/Interaction";
import Trusted from '../components/Trusted'
import Business from '../components/Business'
import Newsletter from '../components/Newsletter'


const Loader = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showThoughtly, setShowThoughtly] = useState<boolean>(false);

  useEffect(() => {
    
    const spinnerTimer = setTimeout(() => {
      setIsLoading(false); 
      setShowThoughtly(true);
    }, 2000); 
    const thoughtlyTimer = setTimeout(() => {
      setShowThoughtly(false);
    }, 3000); 
    return () => {
      clearTimeout(spinnerTimer);
      clearTimeout(thoughtlyTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (showThoughtly) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h2 className="text-slate-800 font-semibold text-2xl opacity-0 animate-fadeIn">
          Thoughtly
        </h2>
      </div>
    );
  }
  return (
    <main className="w-full overflow-hidden px-2">
    <HomeBanner />
    <Start />
    <Future />
    <Calls />
    <Pricing />
    <Usage />
    <Interaction />
    <Trusted />
    <Business />
    <Newsletter />
  </main>
  )
}

export default Loader
