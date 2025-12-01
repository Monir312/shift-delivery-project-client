import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import Brands from '../Brands/Brands';
import FeaturesSection from '../Features/FeaturesSection';
import CourierBanner from '../CourierBanner/CourierBanner';
import Reviews from '../Reviews/Reviews';
import FAQSection from '../FAQSection/FAQSection';


const reviewsPromise = fetch('/reviews.json')
.then(res=>res.json());


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <FeaturesSection></FeaturesSection>
      <CourierBanner></CourierBanner>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;