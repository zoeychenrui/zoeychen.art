import React from 'react'
import Image from "next/image";

function Piece(props) {
  return (
    <figure class="group cursor-pointer mt-4">
      <div class="relative overflow-hidden">
        <img
          src={props.src2}
          class="ease absolute z-0 h-full w-full object-cover
          opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          alt="Piece"
          
        />
        <img 
        src={props.src} 
        class="h-full w-full object-cover" 
        alt="Piece" 
        />
      </div>

      <figcaption className="mt-1">
        <span class=" text-gray-500">{props.text}</span>
      </figcaption>
    </figure>
  );
}

function Originals() {
  return (
    <div>
      <div class="flex flex-col md:flex-row w-[80%] lg:w-[70%] mx-auto">
        <div class="mr-5 ml-5 mb-2">
          <Piece
            src="originals/worlds.jpg"
            src2="originals/worlds-one.jpg"
            text="physical and virtual body-and-worlds"
            path="/originals"
          />
          <Piece
            src="originals/pumpkin-art.jpg"
            src2="originals/pumpkin-pic.jpg"
            text="pumpkin"
            path="/originals"
          />
           <Piece
            src="originals/toby-art.jpg"
            src2="originals/toby-pic.jpg"
            text="toby"
            path="/originals"
          />
          <Piece
            src="originals/pear-cat-art.jpg"
            src2="originals/pear-cat-pic.PNG"
            text="pear cat"
            path="/originals"
          />
          <Piece
            src="originals/cole-art.jpg"
            src2="originals/cole-pic.jpg"
            text="cole"
            path="/originals"
          />
          
          
        </div>
        <div class="mr-5 ml-5 mb-2">
        <Piece
            src="originals/benji-art.jpg"
            src2="originals/benji-pic.jpg"
            text="leila and benji"
            path="/originals"
          />
          <Piece
            src="originals/magnolias.jpeg"
            src2="originals/magnolias.jpeg"
            text="the big muddy, magnolias & mandarin chicken"
            path="/originals"
          />
           
          <Piece
            src="originals/computer-cat-art.jpg"
            src2="originals/computer-cat-pic.jpg"
            text="computer cat"
            path="/originals"
          />
          <Piece
            src="originals/clifford-art.jpg"
            src2="originals/clifford-pic.jpg"
            text="clifford"
            path="/originals"
          />
           <Piece
            src="originals/missy-art.jpg"
            src2="originals/missy-pic.jpg"
            text="missy"
            path="/originals"
          />
         
        </div>
        
       
      </div>
    </div>
  )
}

export default Originals
