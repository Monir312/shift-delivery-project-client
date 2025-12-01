import React from 'react';
import CourierBannerImg from '../../../assets/be-a-merchant-bg.png'
import locationImg from '../../../assets/location-merchant.png'

const CourierBanner = () => {
  return (
    <div className="bg-teal-900 text-white p-8 md:p-16 relative overflow-hidden">
      {/* Wave-like top design */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-teal-900 to-teal-900 rounded-b-full">
        <img src={CourierBannerImg} alt="" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
        {/* Text Section */}
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Merchant and Customer Satisfaction is Our First Priority
          </h2>
          <p className="mb-6 text-lg">
            We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Become a Merchant
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="flex-shrink-0">
          <div className="w-60 h-40 rounded-lg flex items-center justify-center">
            {/* Replace with actual SVG or image */}
          <img src={locationImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierBanner;
