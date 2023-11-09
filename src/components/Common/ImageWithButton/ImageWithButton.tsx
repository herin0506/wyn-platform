import React from 'react';
import { StyledImageWithLabelCard } from './styled';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Button from '@mui/material/Button';

interface ImageWithLabelCardComponentProps {
  imgUrl: string;
  title: string;
  colorCode: string;
}

const ImageWithButtonComponent = ({
  imgUrl,
  title,
  colorCode,
}: ImageWithLabelCardComponentProps) => {
  return (
    <StyledImageWithLabelCard>
      <Box component="div" className="__image_wrapper">
        <Image src={imgUrl} alt="category" fill objectFit="cover" />
      </Box>
      <Box mt={2}>
        <Button
          sx={{ borderRadius: 100, backgroundColor: colorCode }}
          fullWidth
          variant="contained"
          size="large"
        >
          {title}
        </Button>
      </Box>
    </StyledImageWithLabelCard>
  );
};

export default ImageWithButtonComponent;
