import React, { Fragment, useRef } from 'react';
import 'swiper/css/navigation';
import ThumbnailSliderComponent from '../ThumbnailSlider/ThumbnailSlider';
import { naturalHerbs } from '@wyn/utils/constants';
import { SwiperSlide } from 'swiper/react';
import SliderCardComponent from './SliderCard';
import { nuturalHerbsSliderConfig } from '@wyn/utils/swiperConfig';
import { Swiper } from 'swiper/types';
import { StyedSwiperWrapper, StyledSwiperNavigation } from './styled';
import Container from '@mui/material/Container';
import { IconButton } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';

const NuturalHerbsComponent = () => {
  let swiperRef = useRef<Swiper | any>(null);

  return (
    <Fragment>
        <Grid container spacing={3}>
          {naturalHerbs.map((item, index) => (
            <Grid item  md={3} xs={6} key={index}>
              <SliderCardComponent {...item} />
            </Grid>
          ))}
        </Grid>
      {/* <Hidden only={['xs']}>
        <StyedSwiperWrapper>
          <Container disableGutters maxWidth="lg">
            <ThumbnailSliderComponent
              sliderProps={{
                ...nuturalHerbsSliderConfig,
                navigation: false,
                onBeforeInit: (swiper: any) => (swiperRef.current = swiper),
              }}
            >
              {naturalHerbs.map((item, index) => (
                <SwiperSlide className="__swipe_slider" key={index}>
                  <SliderCardComponent {...item} />
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
        </StyedSwiperWrapper>
      </Hidden> */}
    </Fragment>
  );
};

export default NuturalHerbsComponent;
