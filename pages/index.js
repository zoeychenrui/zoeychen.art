import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import GalaxyBackground from '../components/Galaxy';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function Home() {
  
  return (
    <div>
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <GalaxyBackground />
      </div>
      <Navbar />
      <div className="relative flex flex-col mt-24">

        <div className="flex flex-row">
          <div className="w-1/2">
          <h1 className="font-libre font-light text-xl md:text-2xl lg:text-3xl text-gray-800 mx-auto leading-relaxed ml-[20%] md:ml-[30%]" style={{ lineHeight: "1.5"}}>
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


        <div className="flex flex-row w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-20">
          <div className="w-1/2">
            <img src="covers/c3forme.png" alt="c3forme" className="border border-gray-400"></img>
          </div>
          <div className="w-1/2 pl-6 lg:pl-12 justify-center">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium">
              C3forMe
            </div>
            <div className="mt-4 text-sm md:text-lg lg:text-xl font-light">
            Promoting independence for individuals with neurodisabilities through conversation and self-reflection
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-16">
          <div className="w-1/2">
            <img src="covers/opendesign.png" alt="opendesign" className="border border-gray-400"></img>
          </div>
          <div className="w-1/2 pl-6 lg:pl-12  justify-center">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium">
              Open Design Studio
            </div>
            <div className="mt-4 text-sm md:text-lg lg:text-xl font-light">
            Refreshing the visual identity of Open Design, an equity-focused design and innovation methodology
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-16 mb-10">
          <div className="w-1/2">
            <img src="covers/gabriel.png" alt="gabriel" className="border border-gray-400"></img>
          </div>
          <div className="w-1/2 pl-6 lg:pl-12 justify-center">
            <div className="text-md md:text-lg lg:text-xl text-gray-500 font-medium">
              GABRIEL
            </div>
            <div className="mt-4 text-xs md:text-lg lg:text-xl font-light">
            Developing the client and web interface for a data research tool 
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}






