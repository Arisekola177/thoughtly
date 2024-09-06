'use client'
import { useState } from "react";
import Healthcare from "./Healthcare";
import Estate from "./Estate";
import Government from "./Government";
import Insurance from "./Insurance";
import Legal from "./Legal";
import Service from "./Service";
import Retail from "./Retail";
import Travel from "./Travel";


const Interaction = () => {
    const [healthcare, setHealthcare] = useState<boolean>(true);
    const [estate, setEstate] = useState<boolean>(false);
    const [govt, setGovt] = useState<boolean>(false);
    const [insure, setInsure] = useState<boolean>(false);
    const [legal, setLegal] = useState<boolean>(false);
    const [service, setService] = useState<boolean>(false);
    const [retail, setRetail] = useState<boolean>(false);
    const [travel, setTravel] = useState<boolean>(false);
  return (
    <div className="w-full xs:mt-10 md:mt-20">
           <div className="lg:w-10/12 md:w-11/12 w-full mx-auto md:py-8 lg:py-16">
                <h2 className="xl:text-8xl md:text-6xl xs:text-4xl xs:font-semibold md:font-normal text-slate-800 xs:pl-4 md:pl-0">The future of <br />  customer<br />  <span className="text-green-500">interaction</span> </h2>
                <div className="hidden md:grid lg:w-[600px] w-full grid-cols-1 md:grid-cols-3 mt-8 items-center justify-between gap-8">
                            <div 
                              onClick={() =>{
                                setHealthcare(true);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ healthcare ? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Healthcare</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ healthcare ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(true); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ estate ? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Real Estate</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ estate ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(true); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ govt ? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Government</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ govt ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(true); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ insure ? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Insurance</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ insure ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(true); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ legal ? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Legal</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ legal ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(true); 
                                setRetail(false); 
                                setTravel(false); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ service ? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Services/Utilities</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ service ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(true); 
                                setTravel(false); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ retail ? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Retail</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ retail ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(true); 
                              }}
                              className={`bg-white cursor-pointer rounded-lg ${ travel? "border-[2px] border-green-500" : "" }`}>
                            <div className="flex items-center justify-around py-2 px-3">
                                <p className="font-medium text-xs">Travel/Hospitality</p>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ travel ? "bg-green-500" : "" } ` } />
                            </div>
                            
                           </div>        
                 
            </div>
            <div className="mt-20">
            {healthcare && <Healthcare />}
            {estate && <Estate />}
            {govt && <Government />}
            {insure && <Insurance />}
            {legal && <Legal/>}
            {service && <Service />}
            {retail && <Retail />}
            {travel && <Travel />}
            </div>
            <div className="flex md:hidden items-center bg-white w-full p-8 rounded-xl shadow-lg mt-8 justify-between gap-2">
                            <div 
                              onClick={() =>{
                                setHealthcare(true);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}
                              >
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ healthcare ? "bg-green-500" : "" } ` } />
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(true); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}>
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ estate ? "bg-green-500" : "" } ` } />
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(true); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}>
                            
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ govt ? "bg-green-500" : "" } ` } />
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(true); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }} >
                            <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ insure ? "bg-green-500" : "" } ` } />
                          
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(true); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(false); 
                              }}>
                           
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ legal ? "bg-green-500" : "" } ` } />
                          
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(true); 
                                setRetail(false); 
                                setTravel(false); 
                              }}>
                           
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ service ? "bg-green-500" : "" } ` } />
                           
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(true); 
                                setTravel(false); 
                              }}>
                          
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ retail ? "bg-green-500" : "" } ` } />
                         
                            
                           </div>
                           <div 
                              onClick={() =>{
                                setHealthcare(false);
                                setEstate(false); 
                                setGovt(false); 
                                setInsure(false); 
                                setLegal(false); 
                                setService(false); 
                                setRetail(false); 
                                setTravel(true); 
                              }}>
                           
                                <p className={`w-4 h-4 rounded-full bg-gray-50 shadow-inner ${ travel ? "bg-green-500" : "" } ` } />
                        
                            
                           </div>        
                 
            </div>
        </div>
    </div>
  )
}

export default Interaction