import React from 'react';
import { StyledHomeBanner } from './styled';
import Image from 'next/image';
import { Hidden } from '@mui/material';

interface BannerComponentProps {
  alt: string;
  mobileImgUrl: string;
  desktopImgUrl: string;
}

const BannerComponent = ({
  mobileImgUrl,
  desktopImgUrl,
  alt,
}: BannerComponentProps) => {
  return (
    <StyledHomeBanner>
      <Hidden only={['xs']}>
        <Image
          style={{
            objectFit: 'cover',
          }}
          fill
          alt={alt}
          src={desktopImgUrl}
        />
      </Hidden>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Image
          style={{
            objectFit: 'cover',
          }}
          fill
          alt={alt}
          src={mobileImgUrl}
        />
      </Hidden>
    </StyledHomeBanner>
  );
};

export default BannerComponent;
