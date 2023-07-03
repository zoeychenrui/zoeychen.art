import Head from 'next/head'
import Image from 'next/image'
import Stars from "../components/Stars";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function Home() {
  return (

      <div className="w-full h-screen bg-dark-blue">
        <Stars>
        </Stars>
    
      </div>
  )
}
