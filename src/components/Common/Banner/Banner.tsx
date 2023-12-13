import React from 'react';
import { StyledHomeBanner } from './styled';
import Image from 'next/image';
import { Box, Hidden, Typography } from '@mui/material';

interface BannerComponentProps {
  alt: string;
  mobileImgUrl: string;
  desktopImgUrl: string;
  contentNode?: React.ReactNode;
}

const BannerComponent = ({
  mobileImgUrl,
  desktopImgUrl,
  alt,
  contentNode,
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
      {contentNode && (
        <Box component="div" className="__content__box">
          {contentNode}
        </Box>
      )}
    </StyledHomeBanner>
  );
};

export default BannerComponent;
