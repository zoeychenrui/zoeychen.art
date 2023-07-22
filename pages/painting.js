import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import GalaxyBackground from '../components/Galaxy';
import Originals from '../components/Originals';
import Teaching from '../components/Teaching';

function painting() {
    const [toggleState, setToggleState] = useState(true);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggleState(!toggleState);
  };

  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <GalaxyBackground />
      </div>
      <Navbar />
      <div className="mt-10 relative mx-auto w-[40%] md:w-[20%] lg:w-[15%]">
      <button
        className="mb-12 border-dark-gray border-b transition-transform"
        onClick={handleToggle}
        >
        <div className="flex text-left font-light text-xl">
            <div className={`w-[45%] py-2 mr-6 transition-colors duration-300 ${toggleState ? "text-gray-800" : "text-gray-400"}`}>Originals</div>
            <div className={`w-[45%] py-2 transition-colors duration-300 ${toggleState ? "text-gray-400" : "text-gray-800"}`}>Teaching</div>
        </div>
        </button>
    </div>
        <div>
        {toggleState ? <Originals /> : <Teaching />}
        </div>

    </div>
  )
}

export default painting
