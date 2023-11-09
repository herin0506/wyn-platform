import React from 'react';
import Box from '@mui/material/Box';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import { StyledHomeWyningProducts } from './styled';
import ThumbnailSliderComponent from '@wyn/components/Common/ThumbnailSlider/ThumbnailSlider';
import { products } from '@wyn/utils/constants';
import { SwiperSlide } from 'swiper/react';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';

const HomeWynIngProductsContainer = () => {
  return (
    <StyledHomeWyningProducts>
      <SectionHeadingComponent textAlign="center">
        WYN-ing Products
      </SectionHeadingComponent>
      <Box mt={2}>
        <ThumbnailSliderComponent sliderProps={{spaceBetween:50}}>
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCardComponent {...product} />
            </SwiperSlide>
          ))}
        </ThumbnailSliderComponent>
      </Box>
    </StyledHomeWyningProducts>
  );
};

export default HomeWynIngProductsContainer;
