import React from 'react'

function Doodle() {
  return (
    <div className="w-[80%] mx-auto ">
      <div className="text-3xl md:text-4xl lg:text-5xl text-gray-400 mt-12 ml-2 text-center">
      Doodle / AUGMENTED REALITY
      </div>
      <div className="flex flex-col mt-12 mb-10">
      <div className="flex flex-col md:flex-row">
            <div className="mr-3 ml-3 mb-3 ">
            <img src="media/drawing.jpg" alt="drawing" className="mt-3 object-cover"></img>
              <img src="media/drawingaction.jpg" alt="drawingaction" className="mt-3 object-cover"></img>
              <img src="media/shoulder3.jpg" alt="shoulder3" className="mt-3  object-cover"></img>
            </div>
            <div className="">
            <img src="media/shoulder2.jpg" alt="shoulder2" className="mt-3 object-cover"></img>
            <img src="media/user2.jpg" alt="user2" className="mt-3 object-cover"></img>
            <img src="media/map.jpg" alt="map" className="mt-3  object-cover"></img>
            </div>
          </div>
      <div className="">
      <div className="mt-20 text-gray-800 font-light text-lg md:text-xl lg:text-xl">
            The place that stood out to me most when I walked around the chapel-garden loop was the Duke Gardens South Lawn, where many families and kids were. Seeing the kids run around and scream was honestly refreshing; I haven’t had that same freeing and exhilarating feeling in a while. It brought me back to one of my favorite pastimes: playing tag. As an open area of “play”, I knew I wanted to engage with this site and address something that’s been on my mind a lot recently in this season of transition – feeling disconnected from childhood.
            <br />
            <br />
          For the content of my AR installation, I thought about the activities/things commonly associated with childhood, but that we don’t generally engage with as “adults”. My first idea was a swingset, but it didn’t seem to retain the sentiments I wanted to get across with much potency; an actual object of play felt too cut and dry. Then I remembered how often I drew in elementary school, and how I’ve stopped over the years due to the fear of making art that isn’t “good enough.” And that thought process precisely encapsulates what I hope to get across through my project – that as adults we often hold ourselves too highly to what others think, and that causes us to refrain from free self-expression. When children draw, they draw what comes to mind. Things don’t need to be extraordinary, practical, or even purposeful. Things just are.
            <br />
            <br />
          I wanted to play around with the idea of a children’s drawing, which as a broader concept, commonly contains elements such as a house, flowers, butterfly, tree, clouds, and sun that symbolize their perception of the world. When designing my models, I found inspiration in online images of children’s drawings and my own reminiscences. As a drawing is itself 2D, modeling it in the 3D space could have interesting implications. When the user first sees the AR model, all the objects seem like what they’re supposed to represent – a 2D drawing. But when the user begins to move and view the AR model installation from different perspectives, the once seemingly 2D becomes 3D, and elements actually have spatial depth and scale. For example, the sun and clouds are much higher and farther away from the rest of the drawing’s objects (not apparent at first glance), adding to the immersive aspect of the AR project. Overall, I hope users can engage with this project and gain some sense of nostalgic connection to a childhood pastime, discover it in a different dimensional space, and enjoy it, simply for what it is.
            </div>
          </div>
        </div>
        <div className="h-20">
    </div>
    </div>
  )
}

export default Doodle

