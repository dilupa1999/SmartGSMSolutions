
import { Footer } from "flowbite-react";
import NavbarTopBar from "../Components/Navbar/Navbar";
import img from "/assets/images/s.webp";


const About = () => {
  return (
    <>
  

    <section className="px-5 py-10 bg-black md:px-20">
      
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
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            About Us
            </h2>
            <p className="mb-4 text-base text-white md:text-lg">
              Warm Greetings, <br />
             offered safety and basic use training on all of its tools and equipment in addition to advanced and special interest classes and workshops. For most equipment, a safety and use class had to be completed before it could be used. It was affiliated with the maker culture and participated in annual Maker Faire events.
            </p>
            <p className="mb-4 text-base font-medium text-white md:text-lg">
              Contact me: <br />
              <a href="tel:+94773544300" className="hover:underline">+94 77 777 4277</a> <br />
           
            </p>
            <p className="mb-4 text-base text-white md:text-lg">
              Yours Sincerely, <br />
              <span className="font-semibold text-white">Smart GSM Solution</span> </p>
             
      
          </div>
        </div>
      
      </section>

      </>
  )
}

export default About