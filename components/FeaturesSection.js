export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16 text-[#B8E68C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 5.5c1.09 0 2.09.27 3 .73V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.23c.91-.46 1.91-.73 3-.73zM13.5 8a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"/>
        </svg>
      ),
      title: "Animo Walk-and-Earn",
      description: "Transform your daily steps into real, tangible income with our innovative technology that rewards you for staying active."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#B8E68C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
        </svg>
      ),
      title: "Animo Multi-Earnings System",
      description: "Tap into a dynamic and globally connected ecosystem with multiple income streams designed to expand your earning potential."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#B8E68C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      title: "Animo Skill Acquisition",
      description: "Animo Access premium programs and courses designed to equip you with high-demand skills for the future."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#B8E68C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: "Animo Network Real Estate",
      description: "Animo open doors to sustainable real estate opportunities, helping you build long-term, generational wealth."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#B8E68C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "Animo Tech Solutions",
      description: "Leverage cutting-edge technology solutions designed to secure and accelerate your financial freedom."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-[#B8E68C]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Personal Growth",
      description: "Animo Networking Platform is more than an earning platform; it's an ecosystem built to foster personal and financial evolution."
    }
  ];

  return (
    <section className="min-h-screen bg-[#0A0E27] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1f3a] to-[#0f1329] rounded-3xl p-8 border border-[#2a3154] hover:border-[#B8E68C] transition-all duration-300 hover:shadow-lg hover:shadow-[#B8E68C]/20"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-white text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}