import React from 'react';
import { StyledImageWithLabelCard } from './styled';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

interface ImageWithLabelCardComponentProps {
  imgUrl: string;
  title: string;
  colorCode: string;
  route: string;
}

const ImageWithButtonComponent = ({
  imgUrl,
  title,
  colorCode,
  route
}: ImageWithLabelCardComponentProps) => {
  const router = useRouter();
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
          onClick={() => router.push(route)}
        >
          {title}
        </Button>
      </Box>
    </StyledImageWithLabelCard>
  );
};

export default ImageWithButtonComponent;
