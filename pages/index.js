import Head from 'next/head';
import Image from 'next/image';

import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const handleNavLinkClick = (path) => {
    router.push(path);
  };
  
  return (
    <div>
      <div className="relative flex flex-col mt-24">

        <div className="flex flex-row">
          <div className="w-1/2">
          <h1 className="font-libre font-light text-2xl md:text-3xl lg:text-4xl text-gray-800 mx-auto leading-relaxed ml-[20%] md:ml-[30%]" style={{ lineHeight: "1.5"}}>
            Zoey Chen is a developer,
            <br />
            designer, painter,
            <br />
            and teacher who embraces
            <br />
            childlike wonder.
          </h1>
          </div>
      
          <div className="w-1/2 ml-10">
            <div className="">
              <img src="planets/pink.png" alt="pink" className="w-[30%] h-[30%] md:w-[20%] md:h-[20%]" />
            </div>
            <div className="mt-4 ml-2 md:mt-2 md:ml-36">
              <img src="planets/earth.png" alt="earth" className="w-[50%] h-[50%] md:w-[40%] md:h-[40%]" />
            </div>
          </div>
        </div>


        <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-20">
        <div className="block md:hidden">
            <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                <div>WEB APPLICATION</div>
                <div>2023</div>
            </div>
        </div>
        <div className="md:w-1/2 cursor-pointer relative overflow-hidden"
            onClick={() => handleNavLinkClick("/C3forMe")}>
          <img src="covers/c3forme.png" alt="c3forme" className="transition-all duration-500 ease-in-out"/>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
        </div>
        <div className="md:w-1/2 md:pl-6 lg:pl-12 md:justify-center md">
          <div className="hidden md:block">
              <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                  <div>WEB APPLICATION</div>
                  <div>2023</div>
              </div>
          </div>
          <div className="mt-6 text-2xl md:text-2xl lg:text-3xl text-gray-500 cursor-pointer nav-item"
              onClick={() => handleNavLinkClick("/C3forMe")}>
            C3forMe
          </div>
          <div className="mt-4 text-lg md:text-xl font-light">
          Promoting equity in education, one conversation at a time!
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-20">
        <div className="block md:hidden">
            <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                <div>WEB APPLICATION</div>
                <div>2023</div>
            </div>
        </div>
        <div className="md:w-1/2 cursor-pointer relative overflow-hidden"
           onClick={() => handleNavLinkClick("/Gabriel-web")}
          >
            <img src="gabriel/fillable.png" alt="gabriel" className="transition-all duration-500 ease-in-out"></img>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="md:w-1/2 md:pl-6 lg:pl-12 justify-center">
          <div className="hidden md:block">
              <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                  <div>WEB APPLICATION</div>
                  <div>2023</div>
              </div>
          </div>
            <div className="mt-6 text-2xl md:text-2xl lg:text-3xl text-gray-500 cursor-pointer nav-item"
            onClick={() => handleNavLinkClick("/Gabriel-web")}
            >
              Gabriel
            </div>
            <div className="mt-4 text-lg md:text-xl font-light">
            Website for a data research tool powered by large language models
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-20">
        <div className="block md:hidden">
            <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                <div>UI/UX DESIGN</div>
                <div>2023</div>
            </div>
        </div>
        <div className="md:w-1/2 cursor-pointer relative overflow-hidden"
            onClick={() => handleNavLinkClick("/InsightEngine")}>
          <img src="covers/insightEngine.png" alt="insight engine" className="transition-all duration-500 ease-in-out"/>
          <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
        </div>
        <div className="md:w-1/2 md:pl-6 lg:pl-12 md:justify-center md">
          <div className="hidden md:block">
              <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                  <div>UI/UX DESIGN</div>
                  <div>2023</div>
              </div>
          </div>
          <div className="mt-6 text-2xl md:text-2xl lg:text-3xl text-gray-500 cursor-pointer nav-item"
              onClick={() => handleNavLinkClick("/InsightEngine")}>
            Insight Engine 2.0
          </div>
          <div className="mt-4 text-lg md:text-xl font-light">
          Imagining interfaces for a knowledge integration platform 
          </div>
        </div>
      </div>

        <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-20">
        <div className="block md:hidden">
            <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                <div>GRAPHIC DESIGN</div>
                <div>2023</div>
            </div>
        </div>
          <div className="md:w-1/2 cursor-pointer relative overflow-hidden"
          onClick={() => handleNavLinkClick("/OpenDesignStudio")}
          >
            <img src="covers/opendesign.png" alt="opendesign" className="transition-all duration-500 ease-in-out"></img>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="md:w-1/2 md:pl-6 lg:pl-12 justify-center">
          <div className="hidden md:block">
              <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                  <div>GRAPHIC DESIGN</div>
                  <div>2023</div>
              </div>
          </div>
            <div className="mt-6 text-2xl md:text-2xl lg:text-3xl text-gray-500 cursor-pointer nav-item"
            onClick={() => handleNavLinkClick("/OpenDesignStudio")}
            >
              Open Design Studio
            </div>
            <div className="mt-4 text-lg md:text-xl font-light">
            Refreshing the visual identity of Open Design's equity focused innovation methodology
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-20 mb-20">
        <div className="block md:hidden">
            <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                <div>GRAPHIC DESIGN</div>
                <div>2023</div>
            </div>
        </div>
        <div className="md:w-1/2 cursor-pointer relative overflow-hidden"
           onClick={() => handleNavLinkClick("/RMC-Academy")}
          >
            <img src="covers/rmc.jpg" alt="rmc" className="transition-all duration-500 ease-in-out"></img>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
          </div>
          <div className="md:w-1/2 md:pl-6 lg:pl-12 justify-center">
          <div className="hidden md:block">
              <div className="flex flex-row justify-between text-gray-400 font-medium mb-6">
                  <div>GRAPHIC DESIGN</div>
                  <div>2021 - 23</div>
              </div>
          </div>
            <div className="mt-6 text-2xl md:text-2xl lg:text-3xl text-gray-500 cursor-pointer nav-item"
            onClick={() => handleNavLinkClick("/RMC-Academy")}
            >
              RMC Academy
            </div>
            <div className="mt-4 text-md md:text-lg lg:text-xl font-light">
            
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}






