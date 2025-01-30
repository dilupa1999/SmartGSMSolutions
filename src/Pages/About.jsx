import React from 'react'
import img from "/assets/images/s.webp";

const About = () => {
  return (
    <>
    <section className="px-5 py-10 bg-gray-100 md:px-20">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          {/* Image Section */}
          <div className="flex justify-center mb-6 md:w-1/2 md:mb-0">
            <img
              src={img}
              alt="Sri Lankan Authentic Food"
              className="rounded-lg shadow-lg object-cover w-full h-80 md:h-[400px] border-pink-600 border-2"
            />
          </div>

          {/* Content Section */}
          <div className="text-center md:w-1/2 md:pl-10 md:text-left">
            <h2 className="mb-4 text-3xl font-bold text-pink-500 md:text-4xl">
            About Us
            </h2>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              Warm Greetings, <br />
              AVI Store offered safety and basic use training on all of its tools and equipment in addition to advanced and special interest classes and workshops. For most equipment, a safety and use class had to be completed before it could be used. It was affiliated with the maker culture and participated in annual Maker Faire events.
            </p>
            <p className="mb-4 text-base font-medium text-gray-800 md:text-lg">
              Contact me: <br />
              <a href="tel:+94773544300" className="hover:underline">+94776059293</a> <br />
           
            </p>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              Yours Sincerely, <br />
              <span className="font-semibold text-gray-800">Smart GSM Solution</span> </p>
             
      
          </div>
        </div>
      </section>
      </>
  )
}

export default About