import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperProps } from 'swiper/react';
interface ProductSwiperSliderComponentProps {
  children: React.ReactNode;
  sliderProps?: SwiperProps;
}

const ThumbnailSliderComponent = ({
  children,
  sliderProps,
}: ProductSwiperSliderComponentProps) => {
  return (
    <div className="thumbnail-slider">
      <Swiper {...sliderProps}>{children}</Swiper>
    </div>
  );
};

export default ThumbnailSliderComponent;
