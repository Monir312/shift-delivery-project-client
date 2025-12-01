import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';
import customerTopImg from '../../../assets/customer-top.png'

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews)

  return (
    <div className='mb-10'>
      <div className='my-10'>
        <img className="mx-auto block mb-4" src={customerTopImg} alt="" />
        <h3 className="text-3xl text-center text-secondary font-bold">What our customers are sayings</h3>
        <p className='text-center mx-auto mt-4 w-10/12 text-shadow-current'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>
         <>
      <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          reviews.map(review => <SwiperSlide key={review.id}>
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
        }
     
      </Swiper>
    </>
    </div>
  );
};

export default Reviews;