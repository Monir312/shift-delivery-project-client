import React from "react";
import serviceImg from '../../../assets/service.png';

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    title: "Fulfillment Solution",
    desc: "We also offer customized service with inventory management support, online order processing, packaging, and other sales support.",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    desc: "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#003C3C] py-16 px-4 md:px-8 lg:px-16 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className= "rounded-2xl p-6 text-center shadow-md transition-all text-secondary duration-300 bg-white hover:bg-primary"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-lime-200 flex items-center justify-center">
                  <span className="text-2xl"><img src={serviceImg} alt="" /></span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
