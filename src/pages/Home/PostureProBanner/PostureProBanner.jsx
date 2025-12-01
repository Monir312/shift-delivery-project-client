import React from 'react';

const PostureProBanner = () => {
  return (
    <div className="bg-white text-gray-800 p-8 md:p-16 flex flex-col items-center text-center">
      {/* Graphic Section */}
      <div className="mb-6">
        {/* Replace with actual SVG or image */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-blue-500 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3V3z M7 7h10v10H7V7z" />
        </svg>
      </div>

      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        What our customers are saying
      </h2>

      {/* Description */}
      <p className="text-lg max-w-2xl">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>
    </div>
  );
};

export default PostureProBanner;
