
import FAQSection from "@/components/FAQSection";
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { FaWhatsapp } from "react-icons/fa";


export default function Index() {

    const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

const openWhatsApp = () => {
  window.open(
    "https://wa.me/2347058905062?text=Please%20share%20your%20Stream%20receipt",
    "_blank"
  );
};

  return (

<div>
      {/* HOME SECTION */}
      <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Blurred background layer */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover blur-2xl opacity-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        {/* Main video with full content visible */}
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
        
        </div>
        
        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20 bg-black bg-opacity-80 p-3 sm:p-4 rounded-full hover:bg-opacity-80 transition"
        >
          <span className="text-xl sm:text-2xl">
            {isMuted ? '🔇' : '🔊'}
          </span>
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen bg-gray-900 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Text Content */}
            <div className='text-gray-400 flex-1'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] text-white mb-4 sm:mb-6'>
                The idea Behind <span className="text-[#B8E68C]">STREAM</span>
              </h1>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                 Stream is built on one powerful vision:
to turn entertainment into income for everyday Africans and digital creators around the world.
                </p>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Through strategic partnerships with record labels, movie studios, streaming platforms, and content distribution companies, we create a system where people don’t just watch, listen, or engage, they collaborate and earn from it.
                </p>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                 Stream is not just a platform.
It’s a new economic pathway where creativity, attention, and community convert into real, sustainable wealth..
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center w-full lg:w-auto flex-shrink-0">
              <Image
                src="/images/image7.jpg"
                alt="strem Logo"
                width={1000}
                height={200}
                className='rounded w-full max-w-md lg:max-w-lg'
              /> 
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="min-h-screen bg-gray-900 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-center mb-4 sm:mb-6 md:mb-8">
            Stream Africa <span className="text-[#B8E68C]">Features</span>
          </h1>
          
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-[1.1rem] px-4">
              Discover the key parts of the Stream Africa ecosystem, built to guide you toward personal progress and meaningful financial success.
            </p>
          </div>

          <div>
            <FeaturesSection />
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="packages" className="min-h-screen bg-gray-900 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center mb-3 sm:mb-4 md:mb-6">
            Stream Africa <span className="text-[#B8E68C]"> Plan</span>
          </h1>
          
          <div className="text-center mb-6 sm:mb-4 md:mb-10">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
             Register for Stream now and open the door to the full Stream Africa Networking Platform experience.
            </p>
          </div>

          <div>
            <PricingSection />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="min-h-screen bg-gray-900 px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-center mb-3 sm:mb-4 md:mb-6">
            How to Activated <span className="text-[#B8E68C]">Your Account</span>
          </h1>




          {/* <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-400 text-sm sm:text-base px-4">
              Have questions? We've got answers. Below are some of the most common inquiries people have about Animo.
            </p>
          </div> */}

          {/* FAQ ACCORDION */}
          <FAQSection className="mt-6 sm:mt-8" />
          <button
            onClick={openWhatsApp}
            //  className="flex items-center justify-center mt-10 ml-[17rem] gap-2 bg-[#B8E68C] hover:bg-[#B8E68C] transition p-3 sm:p-3.5 rounded-lg font-bold text-sm sm:text-base"
            className="flex items-center justify-center mt-10 mx-auto w-full sm:w-auto gap-2 bg-[#B8E68C] p-3 sm:p-3.5 rounded-lg font-bold text-sm sm:text-base"
          >
            <FaWhatsapp  size={18} className="sm:w-5 sm:h-5" />
           Contact Support to Activate Account
          </button>

        </div>
      </section>
    </div>
  )
}