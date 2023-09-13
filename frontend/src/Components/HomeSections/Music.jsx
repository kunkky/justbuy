import React from 'react'
import jam from "../../Components/Assets/speaker.png";
import days from "../../Asset/days timer.svg";
import hour from "../../Asset/hour timer.svg";
import min from "../../Asset/min timer.svg";
import sec from "../../Asset/sec timer.svg";




const Music = () => {
  return (
   
    <section className=" pt-5 bg-[#0C000F] container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 py-16">
    <div className="md:w-1/2 text-center md:text-left">
      <p className="text-xl mb-8 text-[#00FF66]">Categories</p>
      <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
        Enhance Your Music Experience
      </h1>
      <p className="text-xl mb-8 text-white">
        Explore a world of music with our premium service.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <div className="text-center">
          <img src={days} alt="Days" className="w-12 h-12 md:w-10 md:h-10" />
        </div>
        <div className="text-center">
          <img src={hour} alt="Hours" className="w-12 h-12 md:w-10 md:h-10" />
        </div>
        <div className="text-center">
          <img src={min} alt="Minutes" className="w-12 h-12 md:w-10 md:h-10" />
        </div>
        <div className="text-center">
          <img src={sec} alt="Seconds" className="w-12 h-12 md:w-10 md:h-10" />
        </div>
      </div>
      <div className="mt-8">
        <button className="text-white bg-[#00FF66] rounded shadow-sm w-32 hover:bg-purple-900 py-3 px-6 font-semibold transition duration-300 ease-in-out focus:outline-none">
          Buy Now
        </button>
      </div>
    </div>
    <div className="md:w-1/2">
      <img src={jam} alt="Music Jam" className="mx-auto max-w-full" />
    </div>
  </section>
);
};










export default Music