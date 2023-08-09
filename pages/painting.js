import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import GalaxyBackground from '../components/Galaxy';
import Originals from '../components/Originals';
import Teaching from '../components/Teaching';
import About from '../components/About';

function painting() {
  const [toggleState, setToggleState] = useState("Originals");
  const [aboutToggleState, setAboutToggleState] = useState(false);

  const handleToggle = (e, tab) => {
    e.preventDefault();
    setToggleState(tab);
    setAboutToggleState(false); // Reset the About toggle when toggling between Originals and Teaching
  };

  const handleAboutToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAboutToggleState(!aboutToggleState);
    setToggleState("About"); // Set the toggle to "About" when clicking on the "About" tab
  };

  return (
    <div>
      <div className="mt-10 relative mx-auto w-[50%] md:w-[30%] lg:w-[20%]">
        <button
          className="mb-12 border-dark-gray border-b transition-transform"
        >
          <div className="flex text-left font-light text-xl">
            <div className={`w-[30%] py-2 mr-6 transition-colors duration-300 ${toggleState === "Originals" ? "text-gray-800" : "text-gray-400"}`} onClick={(e) => handleToggle(e, "Originals")}>Originals</div>
            <div className={`w-[30%] py-2 mr-6 transition-colors duration-300 ${toggleState === "Teaching" ? "text-gray-800" : "text-gray-400"}`} onClick={(e) => handleToggle(e, "Teaching")}>Teaching</div>
            <div className={`w-[30%] py-2 transition-colors duration-300 ${aboutToggleState ? "text-gray-800" : "text-gray-400"}`} onClick={handleAboutToggle}>About</div>
          </div>
        </button>
      </div>
      <div>
        {toggleState === "Originals" && <Originals />}
        {toggleState === "Teaching" && <Teaching />}
        {aboutToggleState && <About />}
      </div>
      <div className="h-20">
    </div>
    </div>
  )
}

export default painting
