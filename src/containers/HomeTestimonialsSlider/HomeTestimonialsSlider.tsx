import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsCardComponent from '@wyn/components/Common/TestimonialCard/TestimonialsCard';
import Container  from '@mui/material/Container';
import Box  from '@mui/material/Box';


const HomeTestimonialsSliderContainer = () => {
  return (
    <Box pt={10} pb={15}>
      <Swiper
        spaceBetween={50}
        navigation={true}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="tesimonials-slider"
      >
        <SwiperSlide>
          <Container maxWidth="lg">
            <TestimonialsCardComponent />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth="lg">
            <TestimonialsCardComponent />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth="lg">
            <TestimonialsCardComponent />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth="lg">
            <TestimonialsCardComponent />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth="lg">
            <TestimonialsCardComponent />
          </Container>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HomeTestimonialsSliderContainer;
