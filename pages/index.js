import Head from 'next/head';
import Image from 'next/image';
import Stars from '../components/Stars';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';


function GalaxyBackground() {
  return (
    <div className="w-full h-screen" style={{ position: 'absolute', top: 0, left: 0 }}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <radialGradient id="galaxyGradient1" cx="0%" cy="40%" r="30%">
            <stop offset="0%" stopColor="#3ABAB4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="galaxyGradient2" cx="20%" cy="70%" r="60%">
            <stop offset="0%" stopColor="#9094D1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="galaxyGradient3" cx="80%" cy="80%" r="50%">
            <stop offset="0%" stopColor="#549EE1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="galaxyGradient4" cx="30%" cy="0%" r="50%">
            <stop offset="0%" stopColor="#549EE1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="black" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient1)" opacity="0.6" />
        <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient2)" opacity="0.6" />
        <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient3)" opacity="0.3" />
        <rect x="0" y="0" width="100" height="100" fill="url(#galaxyGradient4)" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function Home() {
  
  return (
    <div>
    <div className="w-full min-h-screen relative" id="gradientBackground">
      <Stars className="w-full h-full" />
      <GalaxyBackground />
      <Navbar />
      <div className="flex flex-col h-full mt-36">
        <div className="absolute top-10 left-50 mt-4 ml-24 md:mt-24 md:ml-36">
          <img src="planets/pink.png" alt="image" className="w-[40%] h-[40%]" />
        </div>
        <h1 className="absolute font-libre font-light text-3xl md:text-4xl text-white w-[80%] mx-auto text-center leading-relaxed mt-4" style={{ lineHeight: "1.5", paddingLeft: "15%" }}>
          Zoey Chen is a developer,
          <br />
          designer, painter,
          <br />
          and teacher who embraces
          <br />
          childlike wonder.
        </h1>
        <div className="absolute right-0 ml-84 mt-56">
          <img src="planets/earth.png" alt="earth" className="w-[50%] h-[50%]" />
        </div>
      </div>
      
    </div>
    <div classname="flex flex-col text-black">
        <div className="">
        C3forMe
        </div>
        <div className="">
        Promoting independence for individuals with neurodisabilities through interactive resources that facilitate meaningful conversations about their futures
        </div>
      </div>
      </div>
  );
}






