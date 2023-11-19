import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsCardComponent from '@wyn/components/Common/TestimonialCard/TestimonialsCard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';

const WomenWellnessComponent = () => {
  return (
    <Box pb={15}>
      <Box mb={15}>
        <SectionHeadingComponent textAlign="center">
          Only women can truly understand
          <br />
          women’s wellness.
        </SectionHeadingComponent>
      </Box>
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

export default WomenWellnessComponent;
