import React, { Fragment } from 'react';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import { StyledHomeWyningProducts } from './styled';
import ThumbnailSliderComponent from '@wyn/components/Common/ThumbnailSlider/ThumbnailSlider';
import { products } from '@wyn/utils/constants';
import { SwiperSlide } from 'swiper/react';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';
import { thumbnailSliderConfig } from '@wyn/utils/swiperConfig';
import { Container } from '@mui/material';

const WynIngProductsContainer = () => {
  return (
    <StyledHomeWyningProducts>
      <SectionHeadingComponent textAlign="center">
        WYN-ing Products
      </SectionHeadingComponent>
      <Container disableGutters maxWidth="lg">
        <ThumbnailSliderComponent
          sliderProps={{
            ...thumbnailSliderConfig,
            navigation: true,
            spaceBetween: 50,
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCardComponent product={product} />
            </SwiperSlide>
          ))}
        </ThumbnailSliderComponent>
      </Container>
    </StyledHomeWyningProducts>
  );
};

export default WynIngProductsContainer;
