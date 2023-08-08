import React from 'react'

function C3forMe() {
  return (
    <div>
    <div className="mt-20 flex flex-col justify-center w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
      <div className=" text-gray-400 text-3xl md:text-4xl lg:text-5xl text-center">
          Promoting equity in education, one conversation at a time!
      </div>
      <div className="mt-10 text-gray-800 text-center font-light text-lg md:text-xl lg:text-2xl ">
      C3forMe  &nbsp;•  &nbsp;Designer and Developer  &nbsp;•  &nbsp;May - June 2023
      </div>
      <div className="mt-6 text-gray-800 text-center font-light text-lg md:text-xl lg:text-2xl ">
      Tools: Figma, Next.js, Tailwind CSS, Firebase Authentication, Firestore
      </div>
      <img src="covers/c3forme.png" alt="c3forme" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
          PROJECT OVERVIEW
      </div>
      <div className="mt-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      Conversation Cue Cards (C3 For Me) is a platform designed for students with neurodisabilities to engage meaningfully in conversations. C3forMe encourages students to have a say in their futures by articulating their preferences, strengths, and interests to set attainable goals and prepare for a successful transition from high school to continued education and employment settings. 
      <br/><br/>
Tasked with the challenge of translating this concept into a tangible digital experience, I spearheaded the software development phase. Collaborating closely with the Founder and CEO of C3forMe, Dr. Janae Duclos, and special education professionals, we created an intuitive application tailored for its unique audience.
<br/><br/>
In a focused development cycle, we rolled out a web application that not only offers a diverse range of prompts and cues but also allows students to record and revisit their dialogues. 
      </div>
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
          USER RESEARCH 
      </div>
      <div className="mt-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      C3forMe helps teens and adults with neurodisabilities preparing for the next steps in their lives, many of whom are assisted and guided by educators, mentors, and parents. Informed by my personal experiences tutoring a student with Autism and insights from special education professionals, we identified key user needs:
      <br/><br/>
      <div className="rounded-md shadow-lg shadow-gray-200 flex flex-col md:flex-row p-6 px-12 md:px-4 items-center">
        <div className="md:w-1/2 flex flex-col text-center items-center md:mr-6">
          <img src="c3forme/speech.png" alt="power imbalance" className="h-36 w-36"/>
          <div className="text-lg mb-2">Rethinking Transition Planning</div>
          <div className="text-sm">How might we address existing power imbalances?</div>
        </div>
        <div className="md:w-1/2 flex flex-col text-center items-center">
          <img src="c3forme/destination.png" alt="clarity" className="h-40 w-40"/>
          <div className="text-lg mb-2">Clarity, Consistency, and Routine</div>
          <div className="text-sm">How can we create an environment that aligns with the preference for structure and predictability?</div>
        </div>
      </div>
      <br/><br/>
      <i className="text-gray-500">Rethinking Transition Planning</i>: Existing transition planning models spotlight a significant power dynamic. For instance, long-form surveys, which lack genuine dialogue, often place teachers or mentors in a dominant role, with students largely relegated to passive listening. Recognizing this imbalance, there is an evident need to transition from this one-sided approach to a more equitable dialogue-driven framework.
      <br/><br/>
      <i className="text-gray-500">Clarity, Consistency, and Routine</i>: Students with neurodisabilities often thrive on consistency and predictability. Their preference for routine highlights the importance of intuitive and reliable environments.
      </div>
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
        GOALS
      </div>
      <div className="mt-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      Understanding the unique challenges and needs of our audience shaped our primary objectives for the C3forMe web application. To ensure that the platform would be both impactful and user-friendly, our goals included:
      <br/><br/>
      <div className="rounded-md shadow-lg shadow-gray-200 flex flex-col md:flex-row p-6 px-12 md:px-4 items-center">
        <div className="md:w-1/2 flex flex-col text-center items-center">
          <img src="c3forme/interface.png" alt="interface" className="h-36 w-36"/>
          <div className="text-lg mb-2">Intuitive Interactions</div> 
        </div>
        <div className="md:w-1/2 flex flex-col text-center items-center">
          <img src="c3forme/dialogue.png" alt="dialogue" className="h-36 w-36"/>
          <div className="text-lg mb-2">Facilitating Forward-looking Dialogues</div>
        </div>
        <div className="md:w-1/2 flex flex-col text-center items-center">
          <img src="c3forme/independence.png" alt="independence" className="h-36 w-36"/>
          <div className="text-lg mb-2">Cultivate Independence</div>
        </div>
        <div className="md:w-1/2 flex flex-col text-center items-center">
          <img src="c3forme/achievement.png" alt="achievement" className="h-36 w-36"/>
          <div className="text-lg mb-2">Celebrate Achievements</div>
        </div>
      </div>
      <br/><br/>
      <i className="text-gray-500">Intuitive Interactions:</i> The application should feel natural to use, with functionalities that are easily understood and executed.
      <br/><br/>
      <i className="text-gray-500">Facilitating Forward-looking Dialogues:</i> The platform is designed to stimulate discussions about the students’ futures, enabling them to envision and plan for what lies ahead. The aim is to ensure students aren’t merely following directions but actively participating in shaping their paths, all within a supportive and structured framework.
      <br/><br/>
      <i className="text-gray-500">Cultivate Independence:</i> More than just promoting it, the platform aims to be a tool through which students can actively obtain a higher degree of independence.
      <br/><br/>
      <i className="text-gray-500">Celebrate Achievements:</i> The journey through the application should make users feel a sense of accomplishment, marking their progress on their road to success.
      </div>
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
        IDEATION AND DESIGN
      </div>
      <div className="mt-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      The Ideation Process: Determining our direction through "aha" moments and strategic shifts. Our creative journey was extensively mapped and discussed within a dedicated Trello workspace, ensuring collaborative progress and organized brainstorming. 
      <br/><br/>
      <div className="rounded-md shadow-lg shadow-gray-200 flex flex-col md:flex-row p-4 items-center">
        <div className="md:w-1/3 flex flex-col text-center items-center">
          <img src="c3forme/moodboard.png" alt="moodboard" className="h-48 w-48 shadow-lg shadow-gray-200 "/>
          <div className="text-lg mb-2 mt-4">Moodboard</div>
          <div className="text-sm mb-4 md:mb-2">Scoping out successful features from other platforms </div>
        </div>
        <div className="md:w-1/3 flex flex-col text-center items-center">
          <img src="c3forme/brainstorm.png" alt="brainstorm" className="h-48 w-48 shadow-lg shadow-gray-200"/>
          <div className="text-lg mb-2 mt-4">Discussion</div>
          <div className="text-sm mb-4 md:mb-2">What are your thoughts?</div>
        </div>
        <div className="md:w-1/3 flex flex-col text-center items-center">
          <img src="c3forme/figma.png" alt="figma" className="h-48 w-48 shadow-lg shadow-gray-200"/>
          <div className="text-lg mb-2 mt-4">Wireframing</div>
          <div className="text-sm mb-4 md:mb-2">Figma Fun</div>
        </div>
      </div>
      <br/><br/>

      </div>

    </div>
    <div className="h-20">
    </div>
    </div>
  )
}

export default C3forMe

