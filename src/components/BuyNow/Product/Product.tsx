import { Link, TextField, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { APP_COLORS } from '@wyn/styles/colors/colors';
import { countries, states } from '@wyn/utils/constants';
import { useState } from 'react';
import { StyledProduct } from './styled';
import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
interface ProductComponentProps {
  title: string;
  subTitle: string;
  price: number;
  image: string;
}
const ProductComponent = ({
  title,
  subTitle,
  price,
  image,
}: ProductComponentProps) => {
  return (
    <StyledProduct mt={2}>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <ImageView
                src={image}
                alt="product image"
                className="border rounded"
              />
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="caption">{subTitle}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          justifyContent={'center'}
          alignItems={'end'}
          display={'flex'}
          direction={'column'}
        >
          ₹{price}
        </Grid>
      </Grid>
    </StyledProduct>
  );
};

export default ProductComponent;
