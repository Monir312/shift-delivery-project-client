

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'

const Banner = () => {
  return (
    <Carousel
    className='mt-5'
    autoPlay={true}
    infiniteLoop={true}
    >
      <div>
        <img src={bannerImg1} />
      </div>
      <div>
        <img src={bannerImg2}/>
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>




  );
};

export default Banner;







// import React from "react";
// import MonirImg from '../../../assets/profile.jpg'
// import {
//   FaGithub,
//   FaReact,
//   FaNodeJs,
//   FaLeaf,
//   FaEnvelope,
//   FaGlobe,
//   FaCode,
//   FaWhatsapp
// } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiPrisma } from "react-icons/si";

// const Banner = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-between mx-auto w-full py-16 px-6 md:px-20 bg-gradient-to-r from-[hsl(214,49%,81%)] via-[#99b8e1] to-[#97aac3] overflow-hidden">
//   {/* Left Section */}
//   <div className="z-10 flex-1 text-center md:text-left">
//     <div className="inline-block bg-gradient-to-r from-[#83a6d1] to-[#82a4d2] text-shadow-indigo-200 font-bold px-6 py-3 rounded-full shadow-lg mb-6 cursor-pointer hover:scale-105 transition-transform">
//       Let’s Build Something Great!
//     </div>

//     <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">
//       Md Manirul Islam
//     </h1>
//     <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
//       Full Stack Web Developer
//     </h2>

//     {/* Icons */}
//     <div className="flex justify-center md:justify-start flex-wrap gap-5 mb-6 text-4xl text-gray-700">
//       <SiTypescript title="TypeScript" />
//       <FaReact title="React" />
//       <SiNextdotjs title="Next.js" />
//       <FaNodeJs title="Node.js" />
//       <FaLeaf title="MongoDB / Mongoose" />
//       <FaCode className="text-4xl text-gray-800 hover:text-black transition" title="Next.js Project" />
//     </div>

//     <p className="text-gray-600 text-lg mb-6">
//       Building scalable web apps and reliable solutions for complex projects
//     </p>

//     {/* Contact Info - Row */}
//     <div className="flex flex-row flex-nowrap gap-6 justify-center md:justify-start text-gray-700 items-center overflow-x-auto">
//       <div className="flex items-center gap-2 min-w-max">
//         <FaEnvelope className="text-[#7B61FF]" />
//         <span>monirislam8426@gmail.com</span>
//       </div>
//       <div className="flex items-center gap-2 min-w-max">
//         <FaWhatsapp className="text-[#7B61FF] font-bold text-xl" />
//         <span>+880 1738 003 566</span>
//       </div>
//       <div className="flex items-center gap-2 min-w-max">
//         <FaGlobe className="text-[#7B61FF]" />
//         <a
//           href="https://touhidcodes.vercel.app"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:underline"
//         >
//           solvewithmonir.netlify.app
//         </a>
//       </div>
//     </div>
//   </div>

//   {/* Right Section - Image */}
//   <div className="mt-10 md:mt-0 flex justify-center md:justify-end flex-1">
//     <div className="relative">
//       <div className="absolute -top-5 -left-5 w-48 h-48 bg-gradient-to-tr from-[#dbeafe] to-[#dbeafe] rounded-full blur-3xl opacity-50"></div>
//       <img
//         src={MonirImg}
//         alt="Manirul Islam"
//         className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white"
//       />
//     </div>
//   </div>
// </section>

//   );
// };

// export default Banner;
















