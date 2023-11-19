import React from 'react';
import { StyledProductImageComponent } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { Button, Paper, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/authentication.module.css';
import Divider from '@mui/material/Divider';
import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
const Item = () => {
  return <p>This is the first child component.</p>;
};
const ProductImageComponent = () => {
  return (
    <StyledProductImageComponent maxWidth="xl">
      <Box component="div">
        <ImageView src="/images/rectangle.png" alt="Your Image"/>
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={4} md={4} >
            <ImageView src="/images/group1.png" alt="Your Image"/>
          </Grid>
          <Grid item xs={4} md={4}>
            <ImageView src="/images/group1.png" alt="Your Image"/>
          </Grid>
          <Grid item xs={4} md={4}>
            <ImageView src="/images/group1.png" alt="Your Image"/>
          </Grid>
        </Grid>
      </Box>
    </StyledProductImageComponent>
  );
};

export default ProductImageComponent;
