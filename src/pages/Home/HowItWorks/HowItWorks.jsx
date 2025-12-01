import React from 'react';
import iconImg from '../../../assets/bookingIcon.png';

function HowItWorks() {
  const features = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: iconImg 
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: iconImg
    },
    {
      id: 3,
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: iconImg 
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time.",
      icon: iconImg
    }
  ];

  return (
    <section className="py-12 bg-[#eaeced]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
