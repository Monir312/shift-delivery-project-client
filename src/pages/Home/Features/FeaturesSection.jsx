import React from "react";
import trackingImg from "../../../assets/live-tracking.png"; 
import deliveryImg from "../../../assets/safe-delivery.png"; 
import deliveryImg2 from "../../../assets/safe-delivery.png"; 
// replace with actual images for each feature

const features = [
  {
    img: trackingImg,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    img: deliveryImg,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: deliveryImg2,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates or delivery concerns—anytime you need us.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
          >
            {/* Image */}
            <div className="w-full sm:w-1/4 flex justify-center">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-40 h-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left border-l-2 border-[#03464d] pl-10 border-dashed">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 ">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
