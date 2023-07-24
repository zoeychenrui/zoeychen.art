import React from 'react'
import { useRouter } from "next/router";

function media() {
  const router = useRouter();

  const handleNavLinkClick = (path) => {
    router.push(path);
  };

  return (
    <div>
     
      <div className="relative flex flex-col mt-10">
      <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-16">
        <div className="">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium cursor-pointer nav-item"
            onClick={() => handleNavLinkClick("/Doodle")}
            >
              Doodle / AUGMENTED REALITY
            </div>
            <div className="mt-4 text-sm md:text-lg lg:text-xl font-light">
            A nostalgic connection to a childhood pastime
            </div>
          </div>
          <div className="flex flex-row mt-4 cursor-pointer">
            <div className="w-1/2 mr-2 flex">
              <img
                src="media/drawing.jpg"
                alt="drawing"
                className="w-full object-cover"
              />
            </div>
            <div className="w-1/2 flex">
              <img
                src="media/drawingaction.jpg"
                alt="drawing action"
                className="w-full object-cover"
              />
            </div>
        </div>

          <div className="mt-12">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium cursor-pointer nav-item"
              onClick={() => handleNavLinkClick("/Αλήθεια")}
              >
            Αλήθεια / VIRTUAL REALITY
            </div>
            <div className="mt-4 text-sm md:text-lg lg:text-xl font-light">
            Experience of the world and reality coming apart before you
            </div>
          </div>
          <div className="mt-4">
            <div className="cursor-pointer">
              <img src="media/aletheia.png" alt="reverie" 
              className="w-full border border-gray-400"></img>
            </div>
          </div>

          <div className="mt-12">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium cursor-pointer nav-item"
              onClick={() => handleNavLinkClick("/Reverie")}
              >
              Reverie / VIRTUAL REALITY
            </div>
            <div className="mt-4 text-sm md:text-lg lg:text-xl font-light">
            Problems in each world force users to go further in VR to escape
            </div>
          </div>
          <div className="mt-4">
            <div className="cursor-pointer">
              <img src="media/reverie.png" alt="reverie" 
              className="w-full border border-gray-400"></img>
            </div>
          </div>
          

          
          
          
        </div>
        </div>
    </div>
  )
}

export default media

