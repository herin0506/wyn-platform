import React from 'react';
import { StyledHomeProductsSlider } from './styled';
import ThumbnailSliderComponent from '@wyn/components/Common/ThumbnailSlider/ThumbnailSlider';
import { SwiperSlide } from 'swiper/react';
import ImageWithLabelCardComponent from '@wyn/components/Common/ImageWithButton/ImageWithButton';
import { productCategories } from '@wyn/utils/constants';
import { thumbnailSliderConfig } from '@wyn/utils/swiperConfig';


const ProductsSliderContainer = () => {
  return (
    <StyledHomeProductsSlider>
      <ThumbnailSliderComponent sliderProps={thumbnailSliderConfig}>
        {productCategories.map((category, index) => (
          <SwiperSlide key={index}>
            <ImageWithLabelCardComponent {...category} />
          </SwiperSlide>
        ))}
      </ThumbnailSliderComponent>
    </StyledHomeProductsSlider>
  );
};

export default ProductsSliderContainer;
