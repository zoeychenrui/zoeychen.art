import React from 'react'

function Gabriel() {
    return (
        <div>
      <div className="mt-20 flex flex-col justify-center w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
      <div className=" text-gray-400 text-3xl md:text-4xl lg:text-5xl text-center">
      Website for a data research tool powered by LLMs
      </div>
      <div className="mt-10 text-gray-800 text-center font-light text-lg md:text-xl lg:text-2xl ">
      Gabriel  &nbsp;•  &nbsp;Designer and Developer  &nbsp;•  &nbsp;June - August 2023
      </div>
      <div className="mt-6 text-gray-800 text-center font-light text-lg md:text-xl lg:text-2xl ">
      Tools: React.js, Axios, Google Cloud Run
      </div>
      <img src="gabriel/fillable.png" alt="c3forme" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
          PROJECT OVERVIEW
      </div>
      <div className="mt-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      Introducing Gabriel: Your Textual Analysis Assistant
      <br/><br/>
      Gabriel leverages large language models (LLMs) to reveal meaningful connections through textual analysis and feature recognition. With Gabriel, users can:
<br/><br/>
1. Evaluate Categories: Rate a group of items, like 'Thanksgiving foods', on attributes such as 'flavors' (e.g. 'sour', 'savory', 'sweet').
<br/><br/>
2. Personalized Analysis: Users can upload their own texts, like a set of newspaper articles, and have Gabriel assess them on attributes based on the content, like how much it references certain financial assets (e.g. oil, tech, healthcare).
<br/><br/>
3. Tailored Video Suggestions: Provide context, and Gabriel will curate a list of video recommendations. This is achieved by cross-referencing video transcripts with a synthesized transcript that matches the user's input.
<img src="gabriel/learn.png" alt="tailored video suggestions" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
<div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        Tailored Video Suggestions
      </div>
<br/><br/>
Originally, Gabriel started as a Flask API. Recognizing the need for a GUI that doesn't require algorithm expertise, I built the Gabriel website. Such platforms that employ generative processing foster greater user interaction and contribution. The goal is to empower users to generate ratings on topics they'd like to explore further.
      </div>
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
DEVELOPING THE RATING FEATURE
      </div>
      <div className="my-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      Gabriel's rating feature is designed to accommodate a wide range of inputs and controls. To ensure that all parameters are accessible on the website, the initial version of the rating feature displayed every parameter on a single page.
      <br/><br/>
      <img src="gabriel/mockup.jpg" alt="gabriel mockup" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        Mockup
      </div>
      <br/><br/>
      <img src="gabriel/basic.png" alt="gabriel basic" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        Basic Mode
      </div>
      <br/><br/>
      <img src="gabriel/manual.png" alt="gabriel manual" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        Manual Mode
      </div>
      <br/><br/>
      In the second version, we broke the process into steps to make it simpler. We started by separating ‘What do you want to rate’ and ‘What attributes would you like to rate’ to help users focus and reduce overwhelm.
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
RATING FEATURE WORKFLOW
      </div>
      <div className="mt-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      Step 1: Objects & Attributes: We've pre-loaded some samples for you. Simply click to populate the fields.
      <br/><br/>
      Step 2: Custom Data Upload (Optional): Got your own data? Upload a spreadsheet for Gabriel to process.
<br/><br/>
Step 3: Input Overview: Click 'Next' to view your selections in a tabular format.
<br/><br/>
Step 4: Edit as Needed: Modify your selections right in the table as required.
<br/><br/>
Step 5: Get Your Ratings: Click 'Generate Ratings' and watch the magic happen.
<br/><br/>
Step 6: Finalize & Download: Once your ratings are ready, review, adjust if necessary, and download your results.
<br/><br/>
Here's a preview of the second version (still in development):
      <img src="gabriel/fillable.png" alt="second version" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        First Step
      </div>
      <br/><br/>
      <img src="gabriel/generated.png" alt="generated" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        Second Step
      </div>
      </div>
      </div>
      <div className="mt-6 text-gray-800 text-center font-light text-lg md:text-xl lg:text-2xl ">
      These examples were generated by Gabriel - some food for thought!
      </div>
      <img src="gabriel/thanksgiving.png" alt="thanksgiving-foods" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        Rating thanksgiving foods
      </div>
      <img src="gabriel/colleges.png" alt="colleges" className="mt-10 rounded-md shadow-lg shadow-gray-200"/>
      <div className="mt-6 text-gray-800 font-light text-md md:text-lg flex flex-col items-center ">
        Rating colleges
      </div>
      <div className="mt-12 text-gray-400 text-lg md:text-xl lg:text-2xl font-medium">
CHALLENGES DURING DEVELOPMENT
      </div>
      <div className="my-6 text-gray-800 font-light text-lg md:text-xl lg:text-xl ">
      1. Transitioning the site into a container for hosting on Google Cloud Run
      <br/><br/>
      2. Resolving cross-origin errors while calling the Flask API using Axios
<br/><br/>
3. Managing timeouts with the OpenAI API
<br/><br/>

      </div>
      </div>
    </div>
    )
}
export default Gabriel