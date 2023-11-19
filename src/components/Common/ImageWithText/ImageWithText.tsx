import React, { ReactNode } from 'react';
import { StyledImageWithText } from './styled';
import Box from '@mui/material/Box';
import Image from 'next/image';

interface ImageWithTextComponentProps {
  imgUrl: string;
  alt?: string;
  content: ReactNode;
}

const ImageWithTextComponent = ({
  imgUrl,
  alt,
  content,
}: ImageWithTextComponentProps) => {
  return (
    <StyledImageWithText>
      <Box component="div" className="__image_wrapper">
        <Image
          alt={alt as string}
          fill
          src={imgUrl}
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
      {content}
    </StyledImageWithText>
  );
};

export default ImageWithTextComponent;
