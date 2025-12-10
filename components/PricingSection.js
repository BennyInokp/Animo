import Link from 'next/link'
import Image from 'next/image'

export default function PricingSection() {
  const plans = [
    {
      title: "1-Year Plan",
      price: "15,000",
      duration: "Full access for 12 months.",
      recommended: true,
      features: [
        "Full Access to Walk-and-Earn System",
        "Entry into Animo Affiliate Network",
        "Access to All Premium Skill Courses",
        "Eligibility for Real Estate Opportunities",
        "Opportunities to generate income"
      ]
    },
    {
      title: "6-Month Plan",
      price: "10,000",
      duration: "Full access for 6 months.",
      recommended: false,
      features: [
        "Full Access to Walk-and-Earn System",
        "Entry into Animo Affiliate Network",
        "Access to All Premium Skill Courses",
        "Eligibility for Real Estate Opportunities",
        "Opportunities to generate income"
      ]
    }
  ];

  return (
    <section className="bg-gray-900 py-6 sm:py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#1a1f3a] to-[#0f1329] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#2a3154] hover:border-[#B8E68C] transition-all duration-300"
            >
              {/* Recommended Ribbon */}
              {plan.recommended && (
                <div className="absolute -top-0 -right-0 bg-[#B8E68C] text-[#0A0E27] font-bold text-xs sm:text-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-bl-2xl rounded-tr-2xl sm:rounded-tr-3xl">
                  RECOMMENDED
                </div>
              )}

              {/* Plan Title */}
              <h3 className="text-white text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 mt-2 sm:mt-0">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="text-center mb-3 sm:mb-4">
                <span className="text-[#B8E68C] text-4xl sm:text-5xl md:text-6xl font-bold">
                  ₦{plan.price}
                </span>
              </div>

              {/* Duration */}
              <p className="text-gray-300 text-sm sm:text-base text-center mb-6 sm:mb-8">
                {plan.duration}
              </p>

              {/* Features List */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#B8E68C] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        fill="#0A0E27"
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link href="/dashboard">
                <button className="w-full bg-[#B8E68C] hover:bg-[#a3d477] text-[#0A0E27] font-bold text-base sm:text-lg py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#B8E68C]/30">
                  Join Animo Network Today
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Platform Disclaimer */}
        {/* <div className="mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4">  
          <p className="text-gray-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-center">
            DISCLAIMER
          </p>
          <p className="text-[#B8E68C] text-xs sm:text-sm leading-relaxed text-center max-w-4xl mx-auto px-2">
            The earnings, claims, and promises discussed in this training are personal results and results of constant practice. These results are not typical. They don't imply that you can duplicate them, you may get little or no results from it as they are all references for example purposes only. Every results vary and depends on many factors including but not limited to your background, experience, and work ethic. All business involves risk as well as effort and action. If you're not willing to accept that, please DO NOT REGISTER
          </p>
        </div> */}

        {/* Testimonials Section */}
        <div className="mb-6 sm:mb-8">
          <p className='text-[#B8E68C] text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-center font-semibold'>
           Animo Platform Testimonials
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-lg">
              <Image
                src="/images/image5.jpeg"
                alt="Animo Testimonial 1"
                fill
                className='object-cover'
              /> 
            </div>

            <div className="h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-lg">
              <Image
                src="/images/image6.jpeg"
                alt="Animo Testimonial 2"
                fill
                className='object-cover'
              /> 
            </div>

            <div className="h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/image4.jpeg"
                alt="Animo Testimonial 3"
                fill
                className='object-cover'
              /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}