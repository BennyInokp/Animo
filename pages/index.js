
import FAQSection from "@/components/FAQSection";
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Index() {

    const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
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
          <source src="/video.mp4" type="video/mp4" />
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
          <source src="/video.mp4" type="video/mp4" />
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
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6'>
                WHAT IS<span className="text-[#B8E68C]"> ANIMO?</span>
              </h1>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  ANIMO Network is an A.I integrated platform that is innovative, people driven, and globally connected ecosystem built to provide new avenues for personal and financial growth. The purpose of animo earning platform is to merge technology, community, and opportunity into one seamless network where individuals can thrive.
                </p>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  With Animo Earning App, you gain access to a dynamic multi-earnings system, premium skill acquisition programs, and animo platform groundbreaking walk-and-earn technology that transforms your daily steps into real income. Beyond this, we open doors to sustainable real estate opportunities and cutting-edge tech solutions designed to help you work towards long-term financial goals.
                </p>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                  Animo Website is a platform where innovation meets opportunity, helping you take steps toward your goals.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center w-full lg:w-auto flex-shrink-0">
              <Image
                src="/images/image1.jpg"
                alt="Animo Logo"
                width={600}
                height={500}
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
            Animo Network <span className="text-[#B8E68C]">Features</span>
          </h1>
          
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-[1.1rem] px-4">
              Discover the key parts of the Animo ecosystem, built to guide you toward personal progress and meaningful financial success.
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
            Choose Your <span className="text-[#B8E68C]">Animo App Plan</span>
          </h1>
          
          <div className="text-center mb-6 sm:mb-4 md:mb-10">
            <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
              Find the plan that works best for you and open the door to the full Animo Networking Platform experience.
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
            Frequently Asked <span className="text-[#B8E68C]">Questions</span>
          </h1>

          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-400 text-sm sm:text-base px-4">
              Have questions? We've got answers. Below are some of the most common inquiries people have about Animo.
            </p>
          </div>

          {/* FAQ ACCORDION */}
          <FAQSection className="mt-6 sm:mt-8" />
        </div>
      </section>
    </div>
  )
}