import Box from '@mui/material/Box';
import React from 'react';
import Image from 'next/image';
import { StyledImageWrapperBox } from './styled';
import { Typography } from '@mui/material';

interface SliderCardComponentProps {
  imgUrl: string;
  label: string;
}

const SliderCardComponent = ({ imgUrl, label }: SliderCardComponentProps) => {
  return (
    <StyledImageWrapperBox>
      <Box component="div" className="__image_wrapper">
        <Image
          fill
          objectFit="contained"
          src={imgUrl}
          alt={label}
          blurDataURL={imgUrl}
          placeholder="blur"
        />
      </Box>
      <Box mt={2}>
        <Typography variant="body2" textAlign="center">
          {label}
        </Typography>
      </Box>
    </StyledImageWrapperBox>
  );
};

export default SliderCardComponent;
