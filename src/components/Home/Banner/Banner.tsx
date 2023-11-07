import BannerComponent from '@wyn/components/Common/Banner/Banner';
import React from 'react';

const HomeBannerComponent = () => {
  return (
    <BannerComponent
      alt="main-banner"
      desktopImgUrl="/images/home_banner_1.svg"
      mobileImgUrl="images/home_banner_mobile_1.svg"
    />
  );
};

export default HomeBannerComponent;
