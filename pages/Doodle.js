import React from 'react'

function Doodle() {
  return (
    <div>
      <div className="flex flex-row w-[95%] md:w-[90%] lg:w-[80%] mx-auto mt-16 mb-10">
      <div className="w-3/5 pl-6 lg:pl-12">
            
            <div className="mt-4 text-xs md:text-sm lg:text-md font-light mr-8">
            The place that stood out to me most when I walked around the chapel-garden loop was the Duke Gardens South Lawn, where many families and kids were. Seeing the kids run around and scream was honestly refreshing; I haven’t had that same freeing and exhilarating feeling in a while. It brought me back to one of my favorite pastimes: playing tag. As an open area of “play”, I knew I wanted to engage with this site and address something that’s been on my mind a lot recently in this season of transition – feeling disconnected from childhood.
            <br />
            <br />
          For the content of my AR installation, I thought about the activities/things commonly associated with childhood, but that we don’t generally engage with as “adults”. My first idea was a swingset, but it didn’t seem to retain the sentiments I wanted to get across with much potency; an actual object of play felt too cut and dry. Then I remembered how often I drew in elementary school, and how I’ve stopped over the years due to the fear of making art that isn’t “good enough.” And that thought process precisely encapsulates what I hope to get across through my project – that as adults we often hold ourselves too highly to what others think, and that causes us to refrain from free self-expression. When children draw, they draw what comes to mind. Things don’t need to be extraordinary, practical, or even purposeful. Things just are.
            <br />
            <br />
          I wanted to play around with the idea of a children’s drawing, which as a broader concept, commonly contains elements such as a house, flowers, butterfly, tree, clouds, and sun that symbolize their perception of the world. When designing my models, I found inspiration in online images of children’s drawings and my own reminiscences. As a drawing is itself 2D, modeling it in the 3D space could have interesting implications. When the user first sees the AR model, all the objects seem like what they’re supposed to represent – a 2D drawing. But when the user begins to move and view the AR model installation from different perspectives, the once seemingly 2D becomes 3D, and elements actually have spatial depth and scale. For example, the sun and clouds are much higher and farther away from the rest of the drawing’s objects (not apparent at first glance), adding to the immersive aspect of the AR project. Overall, I hope users can engage with this project and gain some sense of nostalgic connection to a childhood pastime, discover it in a different dimensional space, and enjoy it, simply for what it is.
            </div>
          </div>
          
          <div className="w-2/5 cursor-pointer flex flex-col">
            <img src="media/drawing.jpg" alt="drawing" className="border border-gray-400 mb-2"></img>
            {/* <img src="media/drawingaction.jpg" alt="drawingaction" className="border border-gray-400 mb-2 rounded"></img>
            <img src="media/user2.jpg" alt="user2" className="border border-gray-400 mb-2 rounded"></img> */}
          </div>
         

          {/* <div className="w-1/3 cursor-pointer flex flex-col">
            <img src="media/map.jpg" alt="drawing" className="border border-gray-400 mb-2 rounded"></img>
            <img src="media/shoulder2.jpg" alt="drawingaction" className="border border-gray-400 mb-2 rounded"></img>
            <img src="media/shoulder3.jpg" alt="user2" className="border border-gray-400 mb-2 rounded"></img>
          </div> */}

        </div>
    </div>
  )
}

export default Doodle

