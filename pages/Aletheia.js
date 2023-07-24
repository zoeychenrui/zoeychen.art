import React from 'react'

function Aletheia() {
  return (
    <div className="w-[80%] mx-auto ">
      <div className="text-3xl md:text-4xl lg:text-5xl text-gray-400 mt-12 ml-2">Aletheia / VIRTUAL REALITY</div>
      <div className="flex flex-col mt-12 mb-10">
      <div className="flex flex-col md:flex-row">
            <div className="mr-3 ml-3 mb-3 ">
              <img src="media/aletheia.png" alt="aletheia" className="mt-3 object-cover"></img>
              <img src="media/VR2.png" alt="aletheia" className="mt-3 object-cover"></img>
              <img src="media/VR3.png" alt="aletheia" className="mt-3  object-cover"></img>
              <img src="media/VR7.png" alt="aletheia" className="mt-3 object-cover"></img>
              <img src="media/VR8.png" alt="aletheia" className="mt-3  object-cover"></img>
            </div>
            <div className="">
            <img src="media/VR4.png" alt="aletheia" className="mt-3 object-cover"></img>
            <img src="media/VR5.png" alt="aletheia" className="mt-3 object-cover"></img>
            <img src="media/VR6.png" alt="aletheia" className="mt-3  object-cover"></img>
            <img src="media/VR9.png" alt="aletheia" className="mt-3 object-cover"></img>
              <img src="media/VR10.png" alt="aletheia" className="mt-3  object-cover"></img>
            </div>
          </div>
      <div className="">
            <div className="mt-8 text-sm md:text-md lg:text-lg mr-8 text-gray-500">
            We as humans are shaped by our lived experiences. We are the product of every one of our decisions, adventures, mistakes, encounters, trials, and errors.
The inconvenience of forgetting. The forgetting of who you are.
This was the inspiration for Aletheia, a virtual reality experience uses space as a physical manifestation of dementia.
            <br />
            <br />
            The intentions of this project were not explicitly set on dementia as an illness, but the experience of the world and reality coming apart before you. The user didn’t need to come out of the experience understanding our initial inspiration in a literal sense, but to understand –in a glimpse– the horror of identifying, experiencing, and accepting that reality and who you are is peeling away before your very eyes.
            <br />
            <br />
            In preparing for our project, we researched the illness itself and the experiences of those with dementia. William Utermohlen, an American figurative artist who lived with and ultimately passed from Alzheimer's disease, heavily inspired this project. Utermohlen was most famous for his self-portraits, which documented with heart-breaking intensity the artist's disintegrating sense of self over the years the disease took his life. What we drew most inspiration from, however, were the paintings he drew before his life changing diagnosis. The Conversation Pieces were mostly biographical pieces of art celebrating his life with his family and friends. Yet, you can see –with hindsight– the early signs of the disease that would later destroy him; the geometry of the rooms seems ever so slightly uncooperative, the colors are just a bit too stark, and the perspective and layers seem to overlap in disconcerting ways. In spite of the extremely normal scene, there’s an undeniable sense of distortion.
            <br />
            <br />
            Once we’d finished researching the context and inspiration for our project, we iterated through numerous sketches and ideas for what would be included in the room, how we would lay it out,
and how parts would shift and change through user interaction (aka the mechanics). The audio, we decided, was best fitted and most impactful as a more subtle, nondistinct feature. We ultimately selected a clock ticking subtly in the background in order to add sense of passing time within the experience while simultaneously adding to the feeling of normalicy. The objects and room itself are intentionally cozy and homey. Alzeimer’s and dementia are shockingly common, impacting numerous normal, everyday people in horrific, terrifying ways.
            <br />
            <br />
            We ultimately decided Aletheia would be a seated experiences, with the primary interaction mechanism taking place through sight. This interaction is cued to the user implicitly through a subtle spotlight that follows where the person is looking directionally. The primary mechanic was the distortion of the models through interaction, which was done using code in Unity with the help of Dave Zelensky.
            <br />
            <br />
            Depth is the fight between the past and present world for what something might signify is not necessarily separate understandings of something, but specific instances distinct by the memory it is associated with. In this sense, depth is not only the way the mind shuffles meaning, but how meanings are stored. With dementia, as memory is lost, as is depth. This inspired the more subtle mechanic of the array of various shades and tones of different colors of the room and models being “generalized” (or, more literally, changed) into their primary forms.
            <br />
            <br />
            Aletheia is set in a simple apartment. The room is cozy and you experience it from the comfort of a chair you sit in in the room and in the physical world. There’s a spotlight that signifies to you that you’re supposed to look around at things. There is a quick realization that as you do, the world –your little world of comfortable homey things– distorts around you as you look at them. Users / testers expressed the feeling of almost helplessness at stopping the destruction from looking at objects, a feeling we were intending to provoke from the mechanics.
            <br />
            <br />
            Given more time to further develop the project, we would be interested in adding a more distinct variety of colors to make the generalization of the colors more clear, more models / more details to models, more distinct shifts to the room itself, and continue to consider the placement of the user in the space.
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aletheia
