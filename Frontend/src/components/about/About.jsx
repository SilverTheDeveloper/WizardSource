import React from 'react'
import Travelanimation2 from '../animation/Travelanimation2.jsx'
function About() {
  return (
    <>
      <div className="space-y-3 max-w-screen-2xl container min-h-screen mx-auto md:px-20 px-4  mt-5 ">
        <div className='bg-slate-800 bg-opacity-80 shadow-black shadow-xl text-slate-50  p-7'>
        <h1 className="text-4xl font-bold mb-4">About Wizard Chamber</h1>
        <p className="mb-6">
          Welcome to <strong>Wizard Chamber</strong>, your ultimate destination for everything related to the magical world of Harry Potter!
        </p>

        <div className='absolute' >
          <Travelanimation2 />
        </div>
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-6">
          At Wizard Chamber, we aim to provide Harry Potter fans with comprehensive and engaging content about the beloved series. Whether you're a lifelong fan or discovering the magic for the first time, our goal is to be your go-to resource for all things Harry Potter.
        </p>

        <h2 className="text-2xl font-semibold mb-3">What You'll Find</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Movie Details</strong>: In-depth information about each Harry Potter film, including cast, crew, and behind-the-scenes insights.</li>
          <li><strong>Character Details</strong>: Profiles of your favorite characters, from Harry, Hermione, and Ron to lesser-known wizards and magical creatures.</li>
          <li><strong>Book Details</strong>: Summaries and analyses of each book in the series, along with trivia and fun facts.</li>
          <li><strong>Franchise Information</strong>: Updates on new releases, merchandise, theme parks, and more.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Our Audience</h2>
        <p className="mb-6">
          Wizard Chamber is designed for all Harry Potter enthusiasts, from devoted fans to curious newcomers. We encourage interaction and community building through our comments section, quizzes, and fan contributions.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
        <p className="mb-6">
          Wizard Chamber was created out of a deep love for the Harry Potter series. As lifelong fans, we wanted to create a space where fans can come together to celebrate and explore the wizarding world. Our passion for the series drives us to continually update and expand the site with new content.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Future Plans</h2>
        <p className="mb-6">
          We are constantly working on new features to enhance your experience. Stay tuned for more interactive content, exclusive interviews, and fan events.
        </p>

        
        </div>
      </div>
    </>
  )
}

export default About
