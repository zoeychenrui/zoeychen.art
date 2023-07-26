import React from 'react'

function OpenDesignStudio() {
  return (
    <div className="w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
      <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 mt-12 mb-4 ml-2 font-light">
      Logo Explorations
      </div>
      <img
          src="opendesign/logos.png"
          alt="logos"
          className="w-full object-cover"
          />
      <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 mt-8 mb-4 ml-2 font-light">
      Final Logo
      </div>
      <div className="mt-8 flex flex-row">
      <div className="mr-2 flex">
              <img
                src="opendesign/logo.png"
                alt="logo"
                className=""
              />
            </div>
            <div className="flex">
              <img
                src="opendesign/phases.png"
                alt="phases"
                className=""
              />
            </div>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 mt-12 mb-4 ml-2 font-light">
      Slide Deck
      </div>
      <img
          src="opendesign/slides.png"
          alt="slides"
          className="w-full object-cover"
          />
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 mt-12 mb-4 ml-2 font-light">
      Docs 
      </div>
      <img
          src="opendesign/docs.png"
          alt="docs"
          className="w-full object-cover"
          />
    </div>
  )
}

export default OpenDesignStudio
