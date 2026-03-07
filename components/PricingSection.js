import Link from 'next/link'
import Image from 'next/image'

export default function PricingSection() {
 const plans = {
  title: "Animo 1-Year Plan",
  price: "12,000",
  duration: "One-Time Payment for Full Access",
  features: [
    "Full Access to Stream Africa Platform",
    "Entry into Stream Affiliate Network",
    "Access to All Premium Skills and Resources",
    "Opportunities to generate income",
  ],
};
   
  

  
  return (
     
    <section className="bg-gray-900 py-6 sm:py-8 md:py-12 px-4">
       
      <div className="max-w-6xl mx-auto">
        {/* Pricing Cards */}
   {/* <div className="flex flex-col md:flex-row gap-6 items-center"> */}
   <div className="flex flex-col md:flex-row gap-6 items-stretch">
  
  {/* Left - 1 Year Plan Card */}
  
  <div className="w-full md:w-1/2 border border-[#B8E68C] rounded-xl p-6 sm:p-8">
    
      <Link href="/dashboard">                            
    {/* Price */}
    <div className="text-center mb-3 sm:mb-4">
      <span className="text-[#B8E68C] text-4xl sm:text-5xl md:text-6xl font-bold">
        ₦{plans.price}
      </span>
    </div>

    {/* Duration */}
    <p className="text-gray-300 text-sm sm:text-base text-center mb-6 sm:mb-8">
      {plans.duration}
    </p>

    {/* Features */}
    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
      {plans.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 sm:gap-3">
          <span className="text-gray-300 text-sm sm:text-base">
            {feature}
          </span>
        </li>
      ))}
    </ul>
</Link>
  </div>

  
<div className="w-full md:w-1/2 h-[27rem] relative">
  <Image
    src="/images/slot.jpg"
    alt="Animo Plan"
    fill
    className="object-cover rounded-xl"
  />
</div>

</div>

        {/* Testimonials Section */}
        <div className="mb-6 sm:mt-10">
          <p className='text-[#B8E68C] text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-center font-semibold'>
           Stream Platform Testimonials
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-lg">
              <Image
                src="/images/image15.jpeg"
                alt="Testimonial 1"
                fill
                className='object-cover'
              /> 
            </div>

            <div className="h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-lg">
              <Image
                src="/images/image16.jpeg"
                alt=" Testimonial 2"
                fill
                className='object-cover'
              /> 
            </div>

            <div className="h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1">
              <Image
                src="/images/image17.jpeg"
                alt="Testimonial 3"
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