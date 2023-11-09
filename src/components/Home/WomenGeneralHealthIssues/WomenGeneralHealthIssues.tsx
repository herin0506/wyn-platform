import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ImageWithTextComponent from '@wyn/components/Common/ImageWithText/ImageWithText';
import ThumbnailSliderComponent from '@wyn/components/Common/ThumbnailSlider/ThumbnailSlider';
import { womenHealthIssues } from '@wyn/utils/constants';
import { womenHealthSliderConfig } from '@wyn/utils/swiperConfig';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

const WomenGeneralHealthIssuesComponent = () => {
  return (
    <Box pt={10} pb={15}>
      <ThumbnailSliderComponent sliderProps={womenHealthSliderConfig}>
        {womenHealthIssues.map((item, index) => (
          <SwiperSlide key={index}>
            <ImageWithTextComponent
              imgUrl={item?.imgUrl}
              alt={item?.content}
              content={
                <Box mt={1}>
                  <Typography variant="body1">{item?.content}</Typography>
                </Box>
              }
            />
          </SwiperSlide>
        ))}
      </ThumbnailSliderComponent>
    </Box>
  );
};

export default WomenGeneralHealthIssuesComponent;
