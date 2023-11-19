import React from 'react';
import { StyledProductDetailsComponent } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { Button, Paper, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/authentication.module.css';
import Divider from '@mui/material/Divider';
import { APP_COLORS } from '@wyn/styles/colors/colors';

interface ProductDetailsComponentProps {
  category: string;
  rating: number;
  title: string;
  subTitle: string;
  price: number;
}

const ProductDetailsComponent = ({
  category,
  rating,
  title,
  subTitle,
  price,
}: ProductDetailsComponentProps) => {
  return (
    <StyledProductDetailsComponent maxWidth="xl">
      <Grid container justifyContent="space-between">
        <Grid pt={2} item lg={6}>
          <Typography variant="h6" sx={{ color: APP_COLORS.PINK }}>
            {category}
          </Typography>
        </Grid>
        <Grid item lg={6} sx={{ display: 'flex', alignItems: 'end' }}>
          <Typography
            variant="h6"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {rating}/5
            <Rating size="medium" readOnly name="product-rating" value={4} />
          </Typography>
        </Grid>
      </Grid>
      <Typography pt={3} variant="h3" mb={2}>
        {title}
      </Typography>
      <Divider />
      <Typography pt={3} variant="h6" mb={2}>
        {subTitle}  
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h5" mb={4}>
            <b>Rs.{price}</b>
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" size="small">
            Buy now
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" size="small">
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </StyledProductDetailsComponent>
  );
};

export default ProductDetailsComponent;
