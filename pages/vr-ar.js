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
          <div className="flex flex-row mt-4 cursor-pointer relative overflow-hidden"
          onClick={() => handleNavLinkClick("/Doodle")}
          >
            <div className="w-1/2 mr-2 flex">
              <img
                src="media/drawing.jpg"
                alt="drawing"
                className="w-full object-cover transition-all duration-500 ease-in-out"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
            <div className="w-1/2 flex">
              <img
                src="media/drawingaction.jpg"
                alt="drawing action"
                className="w-full object-cover transition-all duration-500 ease-in-out"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
            
        </div>

          <div className="mt-12">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium cursor-pointer nav-item"
              onClick={() => handleNavLinkClick("/Aletheia")}
              >
            Aletheia / VIRTUAL REALITY
            </div>
            <div className="mt-4 text-sm md:text-lg lg:text-xl font-light">
            Experience of the world and reality coming apart before you
            </div>
          </div>
          <div className="mt-4">
          <div className="cursor-pointer relative overflow-hidden"
            onClick={() => handleNavLinkClick("/Aletheia")}
            >
              <img src="media/aletheia.png" alt="reverie" 
              className="w-full transition-all duration-500 ease-in-out"></img>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>

          <div className="mt-12 ">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium cursor-pointer nav-item"
              onClick={() => handleNavLinkClick("/Reverie")}
              >
              Reverie / VIRTUAL REALITY
            </div>
            <div className="mt-4 text-sm md:text-lg lg:text-xl font-light">
            Problems in each world force users to go further in VR to escape
            </div>
          </div>
          <div className="mt-4 mb-12">
          <div className="cursor-pointer relative overflow-hidden"
            onClick={() => handleNavLinkClick("/Reverie")}
            >
              <img src="media/reverie.png" alt="reverie" 
              className="w-full object-cover transition-all duration-500 ease-in-out"></img>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
            </div>
          </div>
          

          
          
          
        </div>
        </div>
    </div>
  )
}

export default media

