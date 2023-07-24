import React from 'react'

function Reverie() {
  return (
    <div className="w-[80%] mx-auto ">
      <div className="text-3xl md:text-4xl lg:text-5xl text-gray-400 mt-12">Reverie / VIRTUAL REALITY</div>
      <div className="flex flex-col mt-12 mb-10">
      <div className=" cursor-pointer flex flex-col md:flex-row">
            <div className="flex-grow mr-3 ml-3 mb-3 ">
              <img src="media/L1.png" alt="L1" className="mt-3 object-cover"></img>
              <img src="media/L2.png" alt="L2" className="mt-3 object-cover"></img>
            
            </div>
            <div className="flex-grow">
            
            <img src="media/L3.png" alt="L3" className="mt-3  object-cover"></img>
            <img src="media/reverie.png" alt="L4" className="mt-3 object-cover "></img>
            <img src="media/L0.png" alt="L0" className="mt-3  object-cover"></img>
          
            </div>
          </div>
      <div className="">
            <div className="text-sm md:text-md lg:text-lg mr-8 text-gray-500 mt-8">
            Reverie - a state of being pleasantly lost in one's thoughts; a daydream
            <br />
            <br />
          <p className="italic text-lg md:text-xl">Concept</p>
            <br />
        
            Escapism and running away from our problems 
            <br />
            - Illustrated through putting on VR headsets within VR 
            <br />
            <br />
            Immersion of each world breaks apart as the user interacts with it
            <br />
            - Goal: Illustrate dissatisfaction with each world, encouraging users to “dive deeper”
            <br />
            <br />
            Problems in each world force users to go further in VR to escape
          
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reverie
