import React, { useRef } from 'react';
import { StyledHomeProductsSlider, StyledSwiperNavigation } from './styled';
import ThumbnailSliderComponent from '@wyn/components/Common/ThumbnailSlider/ThumbnailSlider';
import { SwiperSlide } from 'swiper/react';
import ImageWithLabelCardComponent from '@wyn/components/Common/ImageWithButton/ImageWithButton';
import { productCategories } from '@wyn/utils/constants';
import { thumbnailSliderConfig } from '@wyn/utils/swiperConfig';
import { Swiper } from 'swiper/types';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Container from '@mui/material/Container';

const ProductsSliderContainer = () => {
  let swiperRef = useRef<Swiper | any>(null);

  return (
    <StyledHomeProductsSlider>
      <Container disableGutters maxWidth="lg">
        <ThumbnailSliderComponent
          sliderProps={{
            ...thumbnailSliderConfig,
            navigation: false,
            onBeforeInit: (swiper: any) => (swiperRef.current = swiper),
          }}
        >
          {productCategories.map((category, index) => (
            <SwiperSlide key={index}>
              <ImageWithLabelCardComponent {...category} />
            </SwiperSlide>
          ))}
        </ThumbnailSliderComponent>
      </Container>

      <StyledSwiperNavigation>
        <IconButton onClick={() => swiperRef.current?.slidePrev()}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton onClick={() => swiperRef.current?.slideNext()}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </StyledSwiperNavigation>
    </StyledHomeProductsSlider>
  );
};

export default ProductsSliderContainer;
